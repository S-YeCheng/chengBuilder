import { ComAttribute } from "../../attributeMap";

const switchAttribute:ComAttribute[] = [

  {
    name: '设置标题',
    value: 'caption',
    type: 'input',
  },
  {
    name: '设置选中时',
    value: 'checkedChildren',
    type: 'input',
  },
  {
    name: '设置未选中时',
    value: 'uncheckedChildren',
    type: 'input',
  },
  {
    name: '设置是否禁用',
    value: 'disabled',
    type: 'switch',
  },
  {
    name: '设置开关大小',
    value: 'size',
    type: 'select',
    defaultValue: 'default',
    options: [
      {
        value: 'default',
        label: '默认',
      },
      {
        value: 'small',
        label: '小',
      },
      {
        value: 'large',
        label: '大',
      },
    ],
  },
  
  
  
];
export default switchAttribute;
