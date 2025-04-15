import { Form as AntdForm } from 'antd'
import { getComById } from '../../../../../utils/nodeUtils'
import { useSelector } from 'react-redux'
export default function Form(props:any) {
  const {children,disabled,labelAlign,size,colon} = props
  const comList = useSelector((state:any)=>state.comReducer.comList)
  return (
  <div>
    <AntdForm 
    style={{width:'400px',height:'400px',border:'1px solid #ccc'}}
    disabled={disabled}
    labelAlign={labelAlign}
    size={size}
    colon={colon}
    

    >
      {
        children && children.map((item:any)=>{
          return <AntdForm.Item label={getComById(item.key,comList)?.label}>
            {item}
          </AntdForm.Item>
        })
      }
    </AntdForm>
  </div>
  )
}

