import {useState, useEffect} from 'react'

function useShoppingItems() {
    const [items, setItems] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      try {
        const fetchItems = async () => {
          const response = await fetch('https://fakestoreapi.com/products', {mode: 'cors'})
          if(!response.ok) {
            throw new error('server Error')
          }
          
          const shoppingData = await response.json()
          setItems(shoppingData)
        }
        fetchItems()
      } catch (error) {
        setError('error' + error)
      } finally {
        setLoading(false)
      }
    
    }, [])
  
    return { loading, error, items}
    }

export default useShoppingItems