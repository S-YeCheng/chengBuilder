import { Input as AntdInput } from 'antd'

export default function Input(props:any) {
  const {caption} = props
  return (
    <div >
      <AntdInput placeholder='请输入内容' value={caption}/>
    </div>  
  ) 
}
