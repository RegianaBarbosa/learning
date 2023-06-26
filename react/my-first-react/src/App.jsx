import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from './TodoList'

//React.StrictMode >> redenriza os componentes duas vezes para ter certeza que está funcionando. Debugger: mostra erros na page
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
)
