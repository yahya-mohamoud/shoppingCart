import useShoppingItems from '../hooks/useShoppingItems'
import ItemCard from './ItemCard'
import '../App.css'
function Mens() {
    const {items} = useShoppingItems()    

  return (
    <div className='itemsGrid'>
       {items && items.map((item) => {
        return (item.category === "men's clothing")  && 
       <ItemCard item={item} key={item.id}/>
      })}
    </div>
  )
}

export default Mens