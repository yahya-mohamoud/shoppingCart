import './App.css'
import Header from './components/Header'
import useShoppingItems from './hooks/useShoppingItems'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function App() {
 const { items} = useShoppingItems()
 const [itemToCart, setItemToCart] = useState([])
  
  return (
    <div className="mainApp">
      <Header itemToCart={itemToCart}/>
      <Outlet context={{itemToCart, items, setItemToCart}}  />
    </div>
  )
}

export default App
