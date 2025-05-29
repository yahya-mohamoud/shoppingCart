import { useState } from 'react'
import useShoppingItems from '../hooks/useShoppingItems'
import ItemCard from './ItemCard'
function ShoppingItems() {
const {loading, items} = useShoppingItems()

    if(loading) return <h1>Loading...</h1>

    // console.log(items);
    
   

    const handleAddCartBtn = (id) => {
        
    }
    
    
  return (
    <div className="itemsGrid">
        {items.map((item) => {
           return <ItemCard  item={item} key={item.id}/>
        })}

    </div>
  )
}


export default ShoppingItems