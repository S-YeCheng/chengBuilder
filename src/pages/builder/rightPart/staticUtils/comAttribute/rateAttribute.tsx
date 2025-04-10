import { ComAttribute } from "../../attributeMap";


const rateAttribute:ComAttribute[] = [
  {
    name: '设置星星数量',
    value: 'count',
    type: 'number',
    defaultValue: 5,
  },
  {
    name: '设置是否允许半选',
    value: 'allowHalf',
    type: 'switch',
  },
  {
    name: '设置是否允许清除',
    value: 'allowClear',
    type: 'switch',
  },
  
  {
    name: '设置是否禁用',
    value: 'disabled',
    type: 'switch',
  },
  
  
    
];
export default rateAttribute;
