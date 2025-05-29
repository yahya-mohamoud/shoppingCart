import { Link } from "react-router-dom"


function Home() {
  return (
    <div>Home
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'shop'}>Shop</Link>
        </li>
    </div>
  )
}

export default Home