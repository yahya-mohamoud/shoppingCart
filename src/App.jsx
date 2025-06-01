import './App.css'
import Header from './components/Header'
import useShoppingItems from './hooks/useShoppingItems'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function App() {
 const { items} = useShoppingItems()
 const [itemToCart, setItemToCart] = useState([])
  
  const handleAdd = (item) => {
    const updated = itemToCart.map((i) =>
      i.id === item.id ? { ...i, count: i.count + 1 } : i
    )
    setItemToCart(updated)
  }

  const handleMinus = (item) => {
    const updated = itemToCart.map((i) =>
      i.id === item.id && i.count > 1 ? { ...i, count: i.count - 1 } : i
    )
    setItemToCart(updated)
  }

  const handleDeleteBtn = (item) => {
    const updated = itemToCart.filter((i) => i.id !== item.id)
    setItemToCart(updated)
  }

  return (
    <div className="mainApp">
      <Header itemToCart={itemToCart}/>
      <Outlet 
      context={{
        itemToCart,
        items,
        setItemToCart,
        handleDeleteBtn,
        handleMinus,
        handleAdd
        }}  
        />
    </div>
  )
}

export default App
