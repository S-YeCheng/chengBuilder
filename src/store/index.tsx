// 全局状态管理
import {configureStore} from '@reduxjs/toolkit'
import { comReducer } from './comSlice'

const store = configureStore({
    reducer: {
        comReducer
    }
})

export default store
