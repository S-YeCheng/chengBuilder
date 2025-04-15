import { ComAttribute } from "../../attributeMap";

const formAttribute:ComAttribute[] = [
  {
    name: '设置表单内组件禁用',
    value: 'disabled',
    type: 'switch',
  },
 
  {
    name: '文本对齐方式',
    value: 'labelAlign',
    type: 'select',
    options: [{
      value: 'left',
      label: '左对齐',
    },{
      value: 'right',
      label: '右对齐',
    },{
      value: 'center',
      label: '居中对齐',
    }],
    defaultValue: 'left',
  },
  {
    name: '设置字段组件的尺寸',
    value: 'size',
    type: 'select',
    options: [{
      value: 'small',
      label: '小',
    },{
      value: 'medium',
      label: '中',
    }],
    defaultValue: 'medium',
  },
  {
    name: '标题显示冒号',
    value: 'colon',
    type: 'switch',
  },
 
  
  
]

export default formAttribute
