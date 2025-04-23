import { Input,Switch,Select, InputNumber, Button, ColorPicker } from "antd"
import * as modalObj from "../../../modal"
import { useState } from "react"

export default function InputComponent(props:any) {
  const {onChange,type,defaultValue,options,selectComNode,value,name,modalType='IconSelect' } = props
  // console.log(modalObj[modalType as keyof typeof modalObj]);
  const ModalComponent = modalObj[modalType as keyof typeof modalObj] 
    
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    
    setIsModalOpen(true)
  }
  
  const getComponent = () => {
  switch(type){
    case 'input':
      return <Input value={selectComNode[value] || defaultValue} style={{width:'120px'}} defaultValue={defaultValue} onChange={onChange} />
    case 'switch':
      return <Switch checked={selectComNode[value] || defaultValue} onChange={onChange} />
    case 'select':
      return <Select style={{width:'100px'}} options={options} value={selectComNode[value]|| selectComNode?.comStyle?.[value] || defaultValue} onChange={onChange} />
    case 'color':
      return <ColorPicker value={selectComNode?.comStyle?.[value] || "#FFFFFF"} defaultValue={defaultValue} showText style={{width:'120px'}} onChange={onChange} />
    case 'number':
      return <InputNumber value={selectComNode[value] ||parseInt(selectComNode?.comStyle?.[value]) || defaultValue} style={{width:'120px'}} defaultValue={defaultValue} onChange={onChange} />
    case 'modal':
      return <Button  style={{width:'120px'}} onClick={showModal}>{name}</Button>
   
  }
}
  return (
    <div>
      {getComponent()}
      <ModalComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}  value={value}></ModalComponent>
    </div>
  )
}
