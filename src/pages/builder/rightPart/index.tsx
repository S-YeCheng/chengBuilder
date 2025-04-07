import  { useState } from 'react';
import { Tabs } from 'antd';
import type {TabsProps } from 'antd';
import './index.css';
import {attributeMap} from './staticUtils/attributeMap'
import InputComponent from './staticComponents/inputComponent'





export default function RightCom  () {

  const [update,setUpdate] = useState({})
  const onChange = (key: string) => {
  console.log(key);
  setUpdate({a:123})
};

const getProperty = () => {
  const comType = window.renderCom?.comType
  const attributeList = attributeMap[comType] || []
  return (
    <>
      {
        attributeList.map((item:any,index:number)=>{
          return (
          <div key={index} className='propertyBox'>
            <label className='propertyLabel'>{item.name}：</label>
            <div className='inputBox'>
              <InputComponent {...item} onChange={changeProperty(item.value)}/>
            </div> 
          </div>
          )
        })
      }
    </>
  )
}

const changeProperty = (value:string) => {
  return (e:any) => {
    let attribute = e
    if(typeof e === 'object'){
      attribute = e.target.value }
    window.renderCom[value] = attribute
    window.setComList([...window.comList])
  }
}


const items: TabsProps['items'] = [
  {
    key: '1',
    label: <div style={{fontSize: '18px', width: '100px', textAlign: 'center'}}>属性</div>,
    children: getProperty(),
  },
  {
    key: '2',
    label: <div style={{fontSize: '18px', width: '100px', textAlign: 'center'}}>样式</div>,
    children: 'Content of Tab Pane 2',
  },

];

return (
  <Tabs className='rightCom' defaultActiveKey="1" items={items} onChange={onChange} />
)

}

// const RightCom: React.FC = () => <Tabs className='rightCom' defaultActiveKey="1" items={items} onChange={onChange} />;

// export default RightCom;