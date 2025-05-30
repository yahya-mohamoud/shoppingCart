import { useOutletContext } from 'react-router-dom'
import useShoppingItems from '../hooks/useShoppingItems'
import ItemCard from './ItemCard'

function ShoppingItems() {
  const {items, setItemToCart, itemToCart} = useOutletContext()

    // if(loading) return <h1 className='loading'>Loading...</h1>
  return (
    <div className="itemsGrid">
        {items.map((item) => {
           return <ItemCard
                  item={item}
                  key={item.id}
                  itemToCart={itemToCart}
                  setItemToCart={setItemToCart}
                  />
        })}

    </div>
  )
}


export default ShoppingItems