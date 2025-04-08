import {createSlice} from '@reduxjs/toolkit'

const comSlice = createSlice({
  name:'com',
  initialState:{
    comList:[],
    dragCom:void 0,
    selectCom:void 0
  },
  reducers:{
    setComList:(state,action)=>{
      state.comList = action.payload
    },
    setDragCom:(state,action)=>{
      state.dragCom = action.payload
    },
    setSelectCom:(state,action)=>{
      state.selectCom = action.payload
    }
  }
})


export const {setComList,setDragCom,setSelectCom} = comSlice.actions
export const {reducer:comReducer} = comSlice
