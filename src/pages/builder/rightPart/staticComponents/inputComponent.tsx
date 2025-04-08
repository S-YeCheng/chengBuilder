import { Input,Switch,Select } from "antd"

export default function InputComponent(props:any) {
  const {onChange,type,defaultValue,options,selectComNode,value} = props
  
  const getComponent = () => {
  switch(type){
    case 'input':
      return <Input value={selectComNode[value] || defaultValue} style={{width:'120px'}} defaultValue={defaultValue} onChange={onChange} />
    case 'switch':
      return <Switch checked={selectComNode[value] || defaultValue} onChange={onChange} />
    case 'select':
      return <Select style={{width:'100px'}} options={options} value={selectComNode[value] || defaultValue} onChange={onChange} />
   
  }
}
  return (
    <>
    {getComponent()}
    </>
  )
}
