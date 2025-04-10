import { Rate as AntdRate } from 'antd';

export default function Rate(props:any) {
  const {count,disabled,allowHalf,allowClear} = props;
  return <AntdRate count={count} disabled={disabled} allowHalf={allowHalf} allowClear={allowClear}   />;
}

