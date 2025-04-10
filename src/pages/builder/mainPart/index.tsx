import './index.css'
import React, { useRef, useState } from 'react'
import * as component from '../leftPart/component'
// import store from '../../../store'
// import { subscribeHook } from '../../../store/subscribe'
import { useDispatch, useSelector } from 'react-redux'
import { setComList, setDragCom, setSelectCom } from '../../../store/comSlice'


export default function MainCom() {

  interface ComJson {
    comType :string,
    style?:any,
    comId:string,
  }

  const comReducer = useSelector((state:any)=>state.comReducer)
  const dispatch = useDispatch()

  // const [comList, setComList] = useState<ComJson[]>([])
  const comList = JSON.parse(JSON.stringify(comReducer?.comList|| []))
  const [dragId, setDragId] = useState<string>('')
  const [selectId, setSelectId] = useState<string>('')


  const nowCom = comReducer.dragCom
  // subscribeHook()


  const distance = useRef<Distance>({
    startX:void 0,
    startY:void 0,
    endX:void 0,
    endY:void 0,
  })
  
  const onDrop = (e:any)=>{
    distance.current.endX = e.clientX
    distance.current.endY = e.clientY
    let style:any
    let comId=`comId_${Date.now()}`
    if(dragId){
      const dragCom = comList.find((com:ComJson)=>com.comId == dragId)
      console.log(dragCom);
      
      dragCom.style = {
        ...dragCom.style,
        left: parseInt(dragCom.style.left) + (e.clientX - (distance.current.startX || 0)) + 'px',
        top: parseInt(dragCom.style.top) + (e.clientY - (distance.current.startY || 0)) + 'px',
      }
      setDragId('')
      dispatch(setDragCom(dragId))
    }else{
      style = {
        position: 'absolute',
        left: distance.current.endX + 'px',
        top: distance.current.endY + 'px',
      }
      const comNode = {
        comType:nowCom,style,comId
      }
      comList.push(comNode)
      // window.renderCom = comNode
      // window.comList = comList
      // window.setComList = setComList
      setSelectId(comId)
      dispatch(setSelectCom(comId))
    }
    dispatch(setComList(comList))
  }
  const onDragOver = (e: React.DragEvent<HTMLDivElement>)=>{
    e.preventDefault()
  }
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>)=>{
    e.preventDefault()
  }

  const onDragStart = (com:ComJson)=>{
    return (e:any)=>{
      // setComList([...comList,com])
      // window.nowCom = "renderCom"
      setDragId(com?.comId)
      distance.current.startX = e.clientX
      distance.current.startY = e.clientY
     
    }
  }
  const selectCom = (com:any)=>{
    setSelectId(com.comId)
    dispatch(setSelectCom(com.comId))
    // window.renderCom = com
    // window.comList = comList
    // window.setComList = setComList
  }
  

  return (
    <div onDrop={onDrop} onDragOver={onDragOver} onDragEnter={onDragEnter}  className='mainCom'>
      {
        comList.map((com:ComJson)=>{
          const Com = component[com.comType as keyof typeof component];
          return (<div key={com.comId} onClick={()=>selectCom(com)}  draggable onDragStart={onDragStart(com)} > 

            <div className={com.comId == selectId ? 'selectCom' : ''} style={com.style}>
            
              <Com {...com}/>
            </div>     
          </div>)
        })
      }
    </div>
  )
}
