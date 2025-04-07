import { Button  as AntdButton} from 'antd'
export default function Button(props:any) {
  const {caption} = props
  return (
    <div >
      <AntdButton>{caption || '按钮'}</AntdButton>
    </div>  
  ) 
}
