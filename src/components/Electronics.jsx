import ItemCard from './ItemCard'
import '../App.css'
import { useOutletContext } from 'react-router-dom'

function Electronics() {
  const { items, setItemToCart } = useOutletContext()
  return (
    <div className='itemsGrid'>
       {items && items.map((item) => {
        return (item.category === "electronics")  && 
       <ItemCard item={item} key={item.id} setItemToCart={setItemToCart}/>
      })}
    </div>
  )
}

export default Electronics