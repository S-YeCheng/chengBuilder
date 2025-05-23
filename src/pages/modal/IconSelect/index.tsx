import { Modal } from "antd";
import IconList from './iconMap.json'
import { ComponentType, useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComList } from "../../../store/comSlice";
import './index.css'
import { getComById } from "../../../utils/nodeUtils";


interface IconItem {
  type:string,
  component:React.ReactElement
}

export default function IconSelect(props:any) {

  // const getComById = (comId: any, comList: any) => {
  //   let treeList = [...comList]
  //   for (let i = 0; i < treeList.length; i++) {
  //     if (treeList[i].comId === comId) {
  //       return treeList[i]
  //     }
  //     else if (treeList[i]?.childList?.length > 0) {
  //       treeList.push(...treeList[i].childList)
  //     }
  //   }
  // }

  const comReducer = useSelector((state:any)=>state.comReducer)
  const dispatch = useDispatch()

  const comList = JSON.parse(JSON.stringify(comReducer.comList))
  const selectCom = comReducer.selectCom // 选中的组件id
  // const selectComNode =comList.find((item:any)=>item.comId === selectCom)
  const selectComNode = getComById(selectCom,comList)

  const {isModalOpen, setIsModalOpen} = props
  const [iconComponents, setIconComponent] = useState<IconItem[]>([])
  const [selectedIcon, setSelectedIcon] = useState<string>('')

  useEffect(()=>{
    const loadIcon = async () => {
      const iconsModule = await import('@ant-design/icons')
      const icons = Object.fromEntries(
        Object.entries(iconsModule).filter(([key]) => {
        return key.endsWith("Outlined") || key.endsWith("Filled") || key.endsWith("TwoTone")
      })
    )as { [key: string]: ComponentType<any> }
    
    const loadComponents : IconItem[] = []

    for (const item of IconList) {
      loadComponents.push({
        type: item,
        component: React.createElement(icons[item],{key:item})
      })
    }
    
    setIconComponent(loadComponents)
  }
  if(isModalOpen){
    loadIcon()
  }
  },[isModalOpen])
  const handleCancel = () => {
      setIsModalOpen(false)
    }
  const handleOk = () => {
    selectComNode.type = selectedIcon
    dispatch(setComList(comList))
    setIsModalOpen(false)
    setSelectedIcon('')
  }
  const onClick = (type:string) => {
    setSelectedIcon(type)
  }



  return (  
    <div>
      <Modal open={isModalOpen} onCancel={handleCancel} onOk={handleOk}>
            <div className="iconList">
             {iconComponents.map((item:IconItem)=>{
              return (
                <div className={ selectedIcon === item.type ? 'activeIcon' : 'iconItem'} key={item.type} onClick={()=>{
                  onClick(item.type)
                }}>
                  {item.component}
                </div>
              )
             })}
            </div>
      </Modal>
    </div>
  )
}

