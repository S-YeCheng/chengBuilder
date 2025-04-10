import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import '@ant-design/v5-patch-for-react-19';  // 必须放在其他 Ant Design 导入之前[3](@ref)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>,
)
