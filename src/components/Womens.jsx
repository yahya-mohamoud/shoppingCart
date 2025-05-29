import useShoppingItems from '../hooks/useShoppingItems'
import ItemCard from './ItemCard'
import '../App.css'
function Women() {
    const {items} = useShoppingItems()    

  return (
    <div className='itemsGrid'>
       {items && items.map((item) => {
        return (item.category === "women's clothing")  && 
       <ItemCard item={item} key={item.id}/>
      })}
    </div>
  )
}

export default Women