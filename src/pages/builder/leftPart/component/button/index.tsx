import { Button  as AntdButton} from 'antd'
export default function Button(props:any) {
  const {style} = props
  return (
    <div style={style}>
      <AntdButton>按钮</AntdButton>
    </div>  
  ) 
}
