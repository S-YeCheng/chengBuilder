import { Collapse, Tabs } from 'antd';
import type { TabsProps,CollapseProps } from 'antd';
import './index.css';
import * as component from './component';
import { componentIconMap, componentTextMap } from './staticUtils/iconLists';
import { setDragCom } from '../../../store/comSlice';
import { useDispatch } from 'react-redux';


export default function LeftCom(){
const dispatch = useDispatch()
const onDragStart = (name: any) => {
  return ()=>{
    dispatch(setDragCom(name))  
  }

}

const renderComponent = (comList:any) => { 
  const list = Object.keys(component).filter(name => comList.includes(name))
  return <div className='componentList'>
    {
      list.map((name:any) => {
        const Icon = componentIconMap[name as keyof typeof componentIconMap];
        const text = componentTextMap[name as keyof typeof componentTextMap];
        return <div key={name} className='componentItem'>
          <div onDragStart={onDragStart(name)} draggable={true} style={{display: 'inline-block'}}><Icon style={{marginRight: '10px'}}/><span>{text}</span></div>
          
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
    label: '其他组件',
    children: renderComponent([])
  }
];

return <Collapse items={items} bordered={false} defaultActiveKey={['1']}/>
}


const items: TabsProps['items'] = [
  {
    key: 'component',
    label: <div style={{fontSize: '18px', width: '100%', textAlign: 'center'}}>组件</div>,
    children: renderCollapse(),
  },
  {
    key: 'data',
    label: <div style={{fontSize: '18px', width: '100%', textAlign: 'center'}}>数据</div>,
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: <div style={{fontSize: '18px', width: '100%', textAlign: 'center'}}>样式</div>,
    children: 'Content of Tab Pane 3',
  },
];

 return <Tabs className='leftCom' defaultActiveKey="1" items={items} />;

}
