
import { Radio as AntdRadio } from 'antd';

export default function Radio(props:any) {
  const {caption,disabled} = props;
  return  <AntdRadio disabled={disabled}>{caption || '单选'}</AntdRadio>
    
    
  
}

