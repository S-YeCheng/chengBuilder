import { ComAttribute } from "../../attributeMap";

const iconAttribute:ComAttribute[] = [
  {
    name: '图标旋转角度',
    value: 'rotate',
    type: 'number',
    defaultValue: 0,
  },
  {
    name: '图标是否旋转',
    value: 'spin',
    type: 'switch',
  },
  {
    name: '图标选择',
    value: 'type',
    type: 'modal',
    modalType: 'IconSelect',
  }
  
]

export default iconAttribute