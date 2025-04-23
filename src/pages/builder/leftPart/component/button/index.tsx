import { Button  as AntdButton} from 'antd'
export default function Button(props:any) {
  const {caption,size,shape,danger,ghost,comStyle={}} = props
  return (
    <div >
      <AntdButton style={{...comStyle}} size={size} shape={shape}  danger={danger} ghost={ghost}>
        {caption || '按钮'}</AntdButton>
    </div>  
  ) 
}
