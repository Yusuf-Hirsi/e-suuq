import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ProductList from './Components/ProductsList'
import {Provider} from 'react-redux'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './Components/redux/store/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
const  StorePersist = persistStore (store)
ReactDOM.createRoot(document.getElementById('root')).render(
<PersistGate persistor={ StorePersist} >
  <Provider store ={store}>
     
    <BrowserRouter>
    <App/>
    </BrowserRouter>
 
   
  </Provider>

  </PersistGate>
  

)