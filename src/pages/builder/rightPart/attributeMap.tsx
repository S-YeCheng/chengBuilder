import buttonAttribute from "./staticUtils/comAttribute/buttonAttribute"
import checkboxAttribute from "./staticUtils/comAttribute/checkboxAttribute"
import formAttribute from "./staticUtils/comAttribute/formAttribute"
import iconAttribute from "./staticUtils/comAttribute/iconAttribute"
import inputAttribute from "./staticUtils/comAttribute/inputAttribute"
import radioAttribute from "./staticUtils/comAttribute/radioAttribute"
import rateAttribute from "./staticUtils/comAttribute/rateAttribute"
import switchAttribute from "./staticUtils/comAttribute/switchAttribute"

// 属性映射
interface AttributeMap {
  [key: string]: ComAttribute[]
}

export interface ComAttribute {
  name: string
  type: string
  value: any
  options?: Array<any>
  defaultValue?: string | number
  modalType?: string
}



const attributeMap:AttributeMap = {
  Button: buttonAttribute,
  Input: inputAttribute,
  Icon: iconAttribute,
  Checkbox: checkboxAttribute,
  Radio: radioAttribute,
  Rate: rateAttribute,
  Switch: switchAttribute,
  Form: formAttribute
}

export  {
  attributeMap
}
