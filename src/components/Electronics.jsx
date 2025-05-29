import useShoppingItems from '../hooks/useShoppingItems'
import ItemCard from './ItemCard'
import '../App.css'
function Electronics() {
    const {items} = useShoppingItems()    

  return (
    <div className='itemsGrid'>
       {items && items.map((item) => {
        return (item.category === "electronics")  && 
       <ItemCard item={item} key={item.id}/>
      })}
    </div>
  )
}

export default Electronics