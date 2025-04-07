import './index.css'
import React, { useRef, useState } from 'react'
import * as component from '../leftPart/component'



export default function MainCom() {

  interface ComJson {
    comType :string,
    style?:any,
    comId:string,
  }

  const [comList, setComList] = useState<ComJson[]>([])
  const [dragCom, setDragCom] = useState<ComJson | null>(null)
  const [selectId, setSelectId] = useState<string>('')
  
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
    if(window.nowCom == 'renderCom' && dragCom && dragCom.style){
      
      dragCom.style = {
        ...dragCom.style,
        left: parseInt(dragCom.style.left) + (e.clientX - (distance.current.startX || 0)) + 'px',
        top: parseInt(dragCom.style.top) + (e.clientY - (distance.current.startY || 0)) + 'px',
      }
    }else{
      style = {
        position: 'absolute',
        left: distance.current.endX + 'px',
        top: distance.current.endY + 'px',
      }
      comList.push({comType:window.nowCom,style,comId})
      setSelectId(comId)
    }
    setComList([...comList])
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
      window.nowCom = "renderCom"
      setDragCom(com)
      distance.current.startX = e.clientX
      distance.current.startY = e.clientY
     
    }
  }
  const selectCom = (com:ComJson)=>{
    setSelectId(com.comId)

    window.renderCom = com
    window.comList = comList
    window.setComList = setComList
  }
  

  return (
    <div onDrop={onDrop} onDragOver={onDragOver} onDragEnter={onDragEnter}  className='mainCom'>
      {
        comList.map(com=>{
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
