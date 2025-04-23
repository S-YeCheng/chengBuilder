import './index.css'
import  { useRef, useState } from 'react'
import * as component from '../leftPart/component'
import { useDispatch, useSelector } from 'react-redux'
import { setComList, setDragCom, setSelectCom } from '../../../store/comSlice'
import { getComById } from '../../../utils/nodeUtils'
import { componentTextMap } from '../leftPart/staticUtils/iconLists'
import { includesList, onLeftDropContainer, onMainPartDropContainer } from './staticUtil'

let num = 1

export interface ComJson {
  comType: string;
  comId: string;
  style?: any;
  childList?: ComJson[];
}

export default function MainCom() {

  const comReducer = useSelector((state:any)=>state.comReducer)
  const dispatch = useDispatch()
  const comList = JSON.parse(JSON.stringify(comReducer?.comList|| []))
  const [dragId, setDragId] = useState<string>('')
  const [selectId, setSelectId] = useState<string>('')
  const nowCom = comReducer.dragCom
  const distance = useRef<Distance>({
    startX:void 0,
    startY:void 0,
    endX:void 0,
    endY:void 0,
  })
  
  const onDropContainer = (com: ComJson)=> {
    return (e:any) => {
      const dragCom = getComById(dragId,comList)
      if(includesList.hasOwnProperty(com.comType)){
        if(dragCom && dragCom !== com){
          onMainPartDropContainer(comList,dragCom,com,e)
          dispatch(setComList(comList))
          setDragId('')
          return
        }
        else if(dragCom){
          return
        }
        onLeftDropContainer(com,nowCom,e)
        dispatch(setComList(comList))
      }
    }
  }
  
  const onDrop = (e:any) => {
    distance.current.endX = e.clientX
    distance.current.endY = e.clientY
    let style:any
    let comId=`comId_${Date.now()}`
    if(dragId){
      const dragCom = getComById(dragId,comList)
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
        comType:nowCom,style,comId,caption:componentTextMap[nowCom] + num++
      }
      comList.push(comNode)
      setSelectId(comId)
      dispatch(setSelectCom(comId))
    }
    dispatch(setComList(comList))
  }

  const onDragOver= (e:any) => {
    e.preventDefault()
  }

  const onDragEnter= (e:any) => {
    e.preventDefault()
  }

  const onDragStart = (com: ComJson) => {
    return (e:any) => {
      setDragId(com?.comId)
      distance.current.startX = e.clientX
      distance.current.startY = e.clientY
    }
  }

  const selectCom = (com: ComJson,e:any) => {
    
      setSelectId(com.comId)
      dispatch(setSelectCom(com.comId))
      e.stopPropagation()
    
  }


  const getComponent = (com:ComJson)=>{
    const Com = component[com.comType as keyof typeof component];
    return (
    <div key={com.comId} onDrop={onDropContainer(com)} onClick={(e)=>selectCom(com,e)} >
    <div draggable onDragStart={onDragStart(com)} className={com.comId == selectId ? 'selectCom' : ''} style={com.style}>

    <Com {...com}>
    {
      com.childList && com.childList.map((child:ComJson)=>{
        return getComponent(child)
      })
    }
    </Com>
    </div>
    </div>)
  }
  

  return (
    <div 
      onDrop={onDrop} 
      onDragOver={onDragOver} 
      onDragEnter={onDragEnter}  
      className='mainCom'
    >
      {comList.map((com: ComJson) => getComponent(com))}
    </div>
  
  )
}
