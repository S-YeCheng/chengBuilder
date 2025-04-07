import { Button  as AntdButton} from 'antd'
export default function Button(props:any) {
  const {caption,size,shape,danger,ghost} = props
  return (
    <div >
      <AntdButton size={size} shape={shape}  danger={danger} ghost={ghost}>
        {caption || '按钮'}</AntdButton>
    </div>  
  ) 
}
