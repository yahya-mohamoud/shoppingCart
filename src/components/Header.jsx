import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"

function Header({ itemToCart }) {
    const totalItems = itemToCart.reduce((sum, item) => sum + item.count, 0)

    const handleCartElmnt = () => {

    }

    return (
        <div className="container">
            <div className="hero">
                <h1>Shoppie</h1>
                <div className="sideNavLinks">
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? "active" : ''}>Home</NavLink></li>
                    <li><NavLink to={'/shop'} className={({ isActive }) => isActive ? "active" : ''}>Shop</NavLink></li>
                    <div className="cart-icon-container">
                       <NavLink  to={''}><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                        {totalItems > 0 && (
                            <span className="cart-count-badge">{totalItems}</span>
                        )}
                    </div>
                </div>

            </div>
            <div className="categoriesList">
                <h2>Categories</h2>
                <ul>
                    <li>
                        <NavLink to='/all' className={({ isActive }) => isActive ? "active" : ''}>All Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/mens' className={({ isActive }) => isActive ? "active" : ''}>Men's Clothing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/womens" className={({ isActive }) => isActive ? "active" : ''}>Women's Clothing</NavLink>
                    </li>
                    <li>
                        <NavLink to="jewelery" className={({ isActive }) => isActive ? "active" : ''}>Jewelery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/electronics" className={({ isActive }) => isActive ? "active" : ''}>Electronics</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header