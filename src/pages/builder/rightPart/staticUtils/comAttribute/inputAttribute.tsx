import { ComAttribute } from "../../attributeMap";
const inputAttribute:ComAttribute[] = [
  {
    name: '设置前置标签',
    value: 'addonBefore',
    type: 'input',
  },
  {
    name: '设置后置标签',
    value: 'addonAfter',
    type: 'input',
  },
  {
    name:'显示清除图标',
    value: 'allowClear',
    type: 'switch',
  },
  {
    name:'默认值',
    value: 'defaultValue',
    type: 'input', 
  },
  {
    name:'是否禁用',
    value: 'disabled',
    type: 'switch',
     
  },
  {
    name: '标签',
    value: 'label',
    type: 'input',
  },

]
export default inputAttribute