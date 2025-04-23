// import  { useState } from 'react';
import { Tabs } from 'antd';
import type {TabsProps } from 'antd';
import './index.css';
import {attributeMap} from './attributeMap'
import InputComponent from './staticComponents/inputComponent'
// import store from '../../../store'
// import { subscribeHook } from '../../../store/subscribe';
import {setComList } from '../../../store/comSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getComById } from '../../../utils/nodeUtils';
import { styleMap } from './staticUtils/styleMap';





export default function RightCom  () {


const comReducer = useSelector((state:any)=>state.comReducer)
const dispatch = useDispatch()

const comList  = JSON.parse(JSON.stringify(comReducer.comList)) || []
const selectCom = comReducer.selectCom
const selectComNode = getComById(selectCom,comList)

// console.log(selectComNode);

// subscribeHook()

const getProperty = () => {
  const comType = selectComNode?.comType

  const attributeList = attributeMap[comType] || []
  return (
    <>
      {
        attributeList.map((item:any,index:number)=>{
          return (
          <div key={index} className='propertyBox'>
            <label className='propertyLabel'>{item.name}:</label>
            <div className='inputBox'>
              <InputComponent selectComNode={selectComNode} {...item} onChange={changeProperty(item.value)}/>
            </div> 
          </div>
          )
        })
      }
    </>
  )
}

const getStyle = () => {
  const comType = selectComNode?.comType
  const styleList = styleMap[comType] || []
  return (
    <>
      {
        styleList.map((item:any,index:number)=>{
          return (
          <div key={index} className='propertyBox'>
            <label className='propertyLabel'>{item.name}:</label>
            <div className='inputBox'>
              <InputComponent selectComNode={selectComNode} {...item} onChange={changeStyle(item.value)}/>
            </div> 
          </div>
          )
        })
      }
    </>
  )
}

const changeStyle = (value:string) => {
  return (e:any) => {
    let style = e
    
      if (typeof e === 'object') {
        if (['color', 'backgroundColor'].includes(value)) {
          style = e?.toHexString()
        }else {
          style = e?.target?.value
        }
      }
    

    if (['width', 'height'].includes(value)) {
      style+='px'
    }
    if (!selectComNode.comStyle) {
      selectComNode.comStyle = {}
    }else{
    selectComNode.comStyle[value] = style
    }
    // window.setComList([...window.comList])
    dispatch(setComList(comList))
  }
}

const changeProperty = (value:string) => {
  return (e:any) => {
    let attribute = typeof e === 'object' ? e.target.value : e
    // if(typeof e === 'object'){
    //   attribute = e.target.value }
    // window.renderCom[value] = attribute
    selectComNode[value] = attribute
    // window.setComList([...window.comList])
    dispatch(setComList(comList))
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
    children: getStyle(),
  },

];

return (
  <Tabs className='rightCom' defaultActiveKey="1" items={items}  />
)

}
