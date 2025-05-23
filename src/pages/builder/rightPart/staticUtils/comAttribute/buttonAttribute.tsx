import { ComAttribute } from "../../attributeMap";
const buttonAttribute:ComAttribute[] = [
  {
    name: '设置按钮文字',
    value: 'caption',
    type: 'input',
  },
  {
    name: '设置危险按钮',
    value: 'danger',
    type: 'switch',
  },
  {
    name:'设置幽灵按钮',
    value: 'ghost',
    type: 'switch',
  },
  {
    name:'设置按钮大小',
    value: 'size',
    type: 'select',
    options: [
      {
        value: 'default',
        
      },
      {
        value: 'small',
        
      },
      {
        value: 'large',
        
      },
      
    ],
    defaultValue: 'default',
  },
  {
    name:'设置按钮形状',
    value: 'shape',
    type: 'select',
    options: [
      {
        value: 'default',
        
      },
      {
        value: 'circle',
      },
      {
        value: 'round',
        
      },
    ],
    defaultValue: 'default',
  }
]
export default buttonAttribute