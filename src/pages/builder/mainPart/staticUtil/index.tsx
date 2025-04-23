import { message } from 'antd'
import {ComJson} from '..'
import { componentTextMap } from '../../leftPart/staticUtils/iconLists'
const includesList:{[key:string]:string[]}={
  Form:['Input','Checkbox','Radio','Switch','Rate']
}

const onMainPartDropContainer = (comList:ComJson[],dragCom:ComJson,com:ComJson,e:any)=>{
  if(!includesList[com.comType].includes(dragCom?.comType)){
    e.stopPropagation()
    message.error(`组件不支持拖入${com.comType}`)
    return
  }else{
    const index = comList.findIndex((com:ComJson)=>com.comId == dragCom.comId)
    if(index!=-1){
      comList.splice(index,1)
    }
  }
    if(!com.childList){
      com.childList = []
   }
   delete dragCom.style
   com.childList.push(dragCom)
   e.stopPropagation()
  }

  let num = 1
const onLeftDropContainer = (com:ComJson,nowCom:any,e:any)=>{
  if(!includesList[com.comType].includes(nowCom)){
    e.stopPropagation()
    message.error(`组件不支持拖入${com.comType}`)
    return
  }else{
    let comId = `comId_${Date.now()}`
    const comNode = {
      comType:nowCom,comId,caption:componentTextMap[nowCom] + num++
    }
    if (!com.childList) {
      com.childList = []
    }
    com.childList.push(comNode)
    e.stopPropagation()
  }
} 



export {
  includesList,
  onMainPartDropContainer,
  onLeftDropContainer
}