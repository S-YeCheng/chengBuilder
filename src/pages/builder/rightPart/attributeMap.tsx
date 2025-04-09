import buttonAttribute from "./staticUtils/comAttribute/buttonAttribute"
import iconAttribute from "./staticUtils/comAttribute/iconAttribute"
import inputAttribute from "./staticUtils/comAttribute/inputAttribute"

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
  Icon: iconAttribute
}

export  {
  attributeMap
}
