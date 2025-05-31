import ItemCard from './ItemCard'
import '../App.css'
import { useOutletContext } from 'react-router-dom'
function Jewelery() {
    const {items, setItemToCart} = useOutletContext()    

  return (
    <div className='itemsGrid'>
       {items && items.map((item) => {
        return (item.category === "jewelery")  && 
       <ItemCard item={item} key={item.id} setItemToCart={setItemToCart}/>
      })}
    </div>
  )
}

export default Jewelery