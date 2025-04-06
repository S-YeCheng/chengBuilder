import './index.css'
import React, { useState } from 'react'
import * as component from '../leftPart/component'


export default function MainCom() {

  interface ComJson {
    comType :string,
    style?:any,
  }

  const [comList, setComList] = useState<ComJson[]>([])
  const onDrop = (e)=>{
    const endLeft = e.clientX
    const endTop = e.clientY
    const style = {
      position: 'absolute',
      left: endLeft + 'px',
      top: endTop + 'px',
      
      
    }
    setComList([...comList,{comType:window.nowCom,style}])
  }
  const onDragOver = (e: React.DragEvent<HTMLDivElement>)=>{
    e.preventDefault()
  }
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>)=>{
    e.preventDefault()
  }
  
  return (
    <div onDrop={onDrop} onDragOver={onDragOver} onDragEnter={onDragEnter}  className='mainCom'>
      {
        comList.map((com,index)=>{
          const Com = component[com.comType as keyof typeof component];
          return <Com style={com.style} key={index}/>
        })
      }
    </div>
  )
}
