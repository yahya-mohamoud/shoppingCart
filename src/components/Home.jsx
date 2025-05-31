import { Link } from "react-router-dom"


function Home() {
  return (
    <div className="home">
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