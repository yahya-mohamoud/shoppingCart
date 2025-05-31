import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react';

function CartPage() {
  const { itemToCart } = useOutletContext()
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate()
  if(itemToCart.length === 0) {
    navigate('/')
  }

  useEffect(() => {
    setCartItems(itemToCart || []);
  }, [itemToCart])

  const handleAdd = (item) => {
    
  const updated = cartItems.map((i) => {
    if (i.id === item.id) {
      return { ...i, count: i.count + 1 };
    }
    return i;
  });
  setCartItems(updated);
};

  const handleMinus = (item) => {
    
    const updated = cartItems.map((i) => {
      if(i.id === item.id && i.count > 1){
        return{ ...i, count: i.count - 1}
      }
      return i
    })
    setCartItems(updated)
  }


  return (
    <div className='cartPage'>
      {cartItems && cartItems.map((singleItem) => {
        return (
          <div className="displayItems" key={singleItem.id}>
            <img src={singleItem.image} alt={singleItem.category} />
            <div className="oneItem">
              <h2>{singleItem.title}</h2>
              <h2>${Math.floor(singleItem.price * singleItem.count) + ".99"}</h2>
              <div className='item-count'>
                <button onClick={() => handleMinus(singleItem)}>-</button>
                <span>{singleItem.count}</span>
                <button onClick={() => handleAdd(singleItem)}>+</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default CartPage