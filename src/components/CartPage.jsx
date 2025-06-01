import { useOutletContext, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';

function CartPage() {
  const { itemToCart, setItemToCart } = useOutletContext()
  const [orderedItem, setOrderedItem] = useState([]);
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    setOrderedItem(itemToCart || []);
  }, [itemToCart])

  let Total = 0;
  for (let i = 0; i <= orderedItem.length - 1; i++) {
    Total += (orderedItem[i].price * orderedItem[i].count);
  }


  const handleAdd = (item) => {
    const updated = orderedItem.map((i) => {
      if (i.id === item.id) {
        return { ...i, count: i.count + 1 };
      }
      return i;
    });
    setOrderedItem(updated);
  };

  const handleMinus = (item) => {

    const updated = orderedItem.map((i) => {
      if (i.id === item.id && i.count > 1) {
        return { ...i, count: i.count - 1 }
      }
      return i
    })
    setOrderedItem(updated)
  }

  const handleDeleteBtn = (index) => {
    const updated = itemToCart.filter(item => item.id !== index.id)
    setItemToCart(updated)
    setOrderedItem(updated)
  }

  const handleOrder = () => {
    setLoading(true)

    setTimeout(() => {
      setItemToCart([])
      setLoading(false)
      setShowAlert(true)

      setTimeout(() => {
        setShowAlert(false)
      }, 2000);

    }, 1000);
  }

  if (itemToCart.length === 0 && !loading && !showAlert) {
    return (
      <div className="emptyCart">
        <h1>You Cart is empty!</h1>
        <p>Add some products before checkout</p>
        <NavLink to={'/shop'}>
          <h2 className='showNow'>Shop Now!</h2>
        </NavLink>
      </div>
    )
  }

  return (
    <div className='cartPage'>
      {showAlert && (
        <div className="alert">
          <h1>Thank you for your purchase!</h1>
        </div>
      )}

      {loading ? (
        <div className="spinner">
          <div className="div"></div>
          <h2>Order on the way...</h2>
        </div>
      ) :
        (
          <>
            {orderedItem && orderedItem.map((singleItem) => {
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
                    <button className="deleteBtn" onClick={() => { handleDeleteBtn(singleItem) }}>Delete</button>
                  </div>
                </div>
              )
            })}
            
            {itemToCart && !loading && !showAlert && (
            <div className="wrapper">
              <h2>Total Price: ${Math.floor(Total) + '.99'}</h2>
              <button className="order" onClick={handleOrder}>Place an order</button>
            </div>            
            )}
          </>
        )}
    </div>
  )
}

export default CartPage