import React from 'react'
import ReactDOM from 'react-dom/client'
import Authprovider from './Providers/authProvider'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
       <RouterProvider router={router}></RouterProvider>
    </Authprovider>
    
  </React.StrictMode>,
)
