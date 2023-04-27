import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import BikeList from './components/BikeList'
import App from './App'
import './reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
