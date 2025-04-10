import { Checkbox as AntdCheckbox } from 'antd';

export default function Checkbox(props:any) {
  const { disabled, caption} = props
  console.log(props);
  return <div>
    <AntdCheckbox 
      disabled={disabled}
    >
      {caption || '多选'}
    </AntdCheckbox>
  </div>;
}

