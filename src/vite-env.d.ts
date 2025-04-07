/// <reference types="vite/client" />


export declare global {
  interface Window {
    nowCom:string,
    renderCom:any
    comList:any[]
    setComList:any
  }
  interface Distance { 
    startX:number | void,
    startY:number | void,
    endX:number | void,
    endY:number | void,
  }
}