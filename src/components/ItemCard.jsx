import { useState } from "react";

function ItemCard({item}) {
  const [itemToCart, setItemToCart] = useState([])

     const handleTitle = (title) => {
         if (title.length > 25)
            return title.slice(0, 22).padEnd(25, ".");

        return title;
    }
    const addcart = (item) => {
      console.log(item);
    
    }
        
    
  return (
   
           <div className='item' key={item.id}>
                    <img className='itemImg' src={item.image} alt={item.id} />
                    <h2>{handleTitle(item.title)}</h2>
                    <h2>${item.price}</h2>
                    <CounterBtn />
                    <button className='cartBtn' onClick={() => addcart(item)}>Add to Cart</button>
                   </div>
  )
}

const CounterBtn = () => {
const [itemCount, setItemCount] = useState(0)

        const handleMinusCart = () => {
           if(itemCount > 0) setItemCount(itemCount - 1)
        }
        const handleAddCart = () => {
            setItemCount(itemCount + 1)
        }
        return (
             <div className="counter">
                    <button className='counterBtn minus' onClick={handleMinusCart}>-</button>
                    <h3>{itemCount}</h3>
                    <button className='counterBtn plus' onClick={handleAddCart}>+</button>
                    </div>
        )
        
    }

export default ItemCard