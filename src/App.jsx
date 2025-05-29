import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import useShoppingItems from './hooks/useShoppingItems'
import { Outlet } from 'react-router-dom'
function App() {
 const { items} = useShoppingItems()
  
  return (
    <div className="mainApp">
      <Header />
      <Outlet items={items} />
    </div>
  )
}

export default App
