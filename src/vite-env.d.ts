/// <reference types="vite/client" />


export declare global {
  interface Window {
    nowCom:string,
    
  }
  interface Distance { 
    startX:number | void,
    startY:number | void,
    endX:number | void,
    endY:number | void,
  }
}