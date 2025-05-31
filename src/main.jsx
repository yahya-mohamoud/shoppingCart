import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ShoppingItems from './components/ShoppingItems.jsx'
import Home from './components/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Mens from './components/Mens.jsx'
import Women from './components/Womens.jsx'
import Jewelery from './components/Jewelery.jsx'
import Electronics from './components/Electronics.jsx'
import CartPage from './components/CartPage.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,

    children: [
      {
        path: '/shop',
        element: <ShoppingItems />,
        errorElement: <ErrorPage />,

      }, 
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
          path: '*',
          element: <ErrorPage />
      },
      {
          path: '/all',
          element: <ShoppingItems />
      },
      {
        path: '/mens',
        element: <Mens />
      },
       {
        path: '/womens',
        element: <Women />
      }, 
      {
        path: '/jewelery',
        element: <Jewelery />
      }, 
      {
        path: '/electronics',
        element: <Electronics />
      }, 
      {
        path: '/cartPage',
        element: <CartPage />
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
