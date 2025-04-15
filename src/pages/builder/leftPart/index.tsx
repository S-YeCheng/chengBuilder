import { Collapse, Dropdown, Tabs } from 'antd';
import type { TabsProps,CollapseProps } from 'antd';
import './index.css';
import * as component from './component';
import { componentIconMap, componentTextMap } from './staticUtils/iconLists';
import { setDragCom } from '../../../store/comSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
import { Tree } from 'antd';
import EditJson from './../../modal/EditJson/index';
export default function LeftCom(){
const comReducer = useSelector((state:any)=>state.comReducer)
const comList = JSON.parse(JSON.stringify(comReducer.comList))
const dispatch = useDispatch()

const [showJson,setShowJson] = useState(false)
const [jsonComId,setJsonComId] = useState('')

const dropItems = [
  {
    label:'查看Json',
    key:'showJson'
  }
]

// 拖拽开始事件
const onDragStart = (name: any) => {
  return ()=>{
    dispatch(setDragCom(name))  
  }

}

const menuOnclick = (comId:string) =>{
  return (menuItem:any)=>{
    if(menuItem.key === 'showJson'){
      setShowJson(true)
      setJsonComId(comId)
    }
  }
}
// 数据渲染
const renderTreeList = () => {
  const toTreeData=(arr:Array<any>) => {
    return arr.map(item => {
      const node:any={
        title : (<div> 
          <Dropdown menu= {{items:dropItems,onClick:menuOnclick(item.comId)}} 
        trigger={['contextMenu']}>
          <span>{item.caption}</span>
          </Dropdown> </div>),
        key : item.comId
      }
      if(item?.childList){
        node.children = toTreeData(item.childList)
      }
      return node;
    })
  }
  const treeData = [
    {
      title: '组件协议',
      key: '0',
      children: toTreeData(comList)
  
    }
  ]
  return(
    <Tree 
    className='tree'
    showLine={true}
    treeData={treeData}
    />
  )
  
  }
// 组件展示
const renderComponent = (comList:any) => { 
  const list = Object.keys(component).filter(name => comList.includes(name))
  return <div className='componentList'>
    {
      list.map((name:any) => {
        const Icon = componentIconMap[name as keyof typeof componentIconMap];
        const text = componentTextMap[name as keyof typeof componentTextMap];
        return <div key={name} className='componentItem'>
          <div onDragStart={onDragStart(name)} draggable={true} ><Icon style={{marginRight: '10px'}}/><span>{text}</span></div>
          
        </div>
      })
    }
            
      </div>         
 
};

// 定义组件分组
const renderCollapse = () => {
  const items:CollapseProps['items'] = [
  {
    key: '1',
    label: '通用组件',
    children: renderComponent(['Button', 'Icon'])
  },
   {
    key: '2', 
    label: '数据录入组件',
    children: renderComponent(['Input', 'CheckBox', 'Radio', 'Switch', 'Rate'])
  },
  {
    key: '3',
    label: '容器组件',
    children: renderComponent(['Form'])
  },
   {
    key: '4',
    label: '其他组件',
    children: renderComponent([])
  }
];

return <Collapse items={items} bordered={false} defaultActiveKey={['1']}/>
}




const items: TabsProps['items'] = [
  {
    key: 'component',
    label: <div style={{fontSize: '18px', width: '100px', textAlign: 'center'}}>组件</div>,
    children: renderCollapse(),
  },
  {
    key: 'json',
    label: <div style={{fontSize: '18px', width: '100px', textAlign: 'center'}}>数据</div>,
    children: renderTreeList(),
  },
  
];



 return (<div className='leftCom'><Tabs  defaultActiveKey="1" items={items} />
 <EditJson jsonComId={jsonComId} showJson={showJson} setShowJson={setShowJson}></EditJson></div>);

}
