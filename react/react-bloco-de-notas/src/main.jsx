import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BlocContextProvider from './Context/BlocContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlocContextProvider>
      <App />
    </BlocContextProvider>
  </React.StrictMode>,
)
