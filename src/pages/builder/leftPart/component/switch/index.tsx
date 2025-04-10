import { Switch as AntdSwitch } from 'antd';

export default function Switch(props:any) {
  const {disabled,checkedChildren,uncheckedChildren,size} = props;
  return <AntdSwitch  disabled={disabled}  checkedChildren={checkedChildren} unCheckedChildren={uncheckedChildren} size={size} />;
} 
