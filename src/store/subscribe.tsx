import store from "."
import { useEffect, useState } from "react"

function subscribeHook(){
  const [update,setUpdate] = useState({})
  useEffect(()=>{
    store.subscribe(()=>{
      setUpdate({...update})
    })
  },[])
  
}
export {
  subscribeHook
}