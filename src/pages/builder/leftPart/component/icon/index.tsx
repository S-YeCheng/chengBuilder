import  { useState , useEffect,ComponentType } from 'react'


// interface IconItem {
//   type:string,
//   component:React.ReactElement
// }
export default function Icon(props:any) {
  const {rotate,spin,type='RiseOutlined'} = props
  const [IconComponent,setIconComponent] = useState<ComponentType<any>| null>(null)
  
  useEffect(()=>{
    const loadIcon = async () => {
      const iconsModule  = await import("@ant-design/icons")
      const icons = Object.fromEntries(
        Object.entries(iconsModule).filter(([key])=>{
          return key.endsWith('Outlined') || key.endsWith('Filled') || key.endsWith('TwoTone') 
        })
      )as {[key:string]:ComponentType<any>}
      const component = icons[type]
      setIconComponent(component)
      console.log(component);
      
    }
    loadIcon()
  },[type])
  return (
    <div>
      {IconComponent && <IconComponent  rotate={rotate} spin={spin}/>}
    </div>
  )
}
