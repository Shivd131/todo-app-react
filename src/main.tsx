import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { persistor, store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { AuroraBackground } from './components/ui/aurora-background';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>{/* persistor to store data in the  local storage */}
      <AuroraBackground className='bg-[#000000]'>
        <App />
      </AuroraBackground>
    </PersistGate>
  </Provider>,
)
