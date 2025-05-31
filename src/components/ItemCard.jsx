import {useState } from "react";

function ItemCard({ item, itemToCart, setItemToCart}) {
  const [quantity, setQuantity] = useState(1)


  const handleTitle = (title) => {
    if (title.length > 25)
      return title.slice(0, 22).padEnd(25, ".");

    return title;
  }
  const addcart = (item, quantity) => {
    setItemToCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id)
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + quantity }
            : cartItem
          );
      } else {
        return [...prev, { ...item, count: quantity}];
      }

      
    });
      
      setQuantity(1)
  }

  return (

    <div className='item' key={item.id}>
      <img className='itemImg' src={item.image} alt={item.id} />
      <h2>{handleTitle(item.title)}</h2>
      <h2>${Math.floor(item.price * quantity) + '.99'}</h2>
      <CounterBtn quantity={quantity} setQuantity={setQuantity}/>
      <button className='cartBtn' onClick={() => addcart(item, quantity)}>Add to Cart</button>
    </div>
  )
}

 const CounterBtn = ({ quantity, setQuantity}) => {

  const handleMinusCart = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }
  const handleAddCart = () => {
    setQuantity(quantity + 1)
  }
  return (
    <div className="counter">
      <button className='counterBtn minus' onClick={handleMinusCart}>-</button>
      <h3>{quantity}</h3>
      <button className='counterBtn plus' onClick={handleAddCart}>+</button>
    </div>
  )

}

export default ItemCard