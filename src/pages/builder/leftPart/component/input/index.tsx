import { Input as AntdInput } from 'antd'

export default function Input(props:any) {
  const {addonBefore,addonAfter,allowClear,defaultValue,disabled} = props
  return (
    <div >
      <AntdInput placeholder='请输入内容'addonBefore={addonBefore} addonAfter={addonAfter} allowClear={allowClear} defaultValue={defaultValue} disabled={disabled}/>
    </div>  
  ) 
}
