import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { PageSuccess } from './pages/PageSuccess.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'page-success',
    element: <PageSuccess />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider
    router={router}
  />

)
