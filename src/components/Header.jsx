import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
import image from '../assets/image.png'

function Header({ itemToCart }) {
    return (
        <div className="container">
            <div className="hero">
                <div className="hero logo">
                <img src={image} alt=""  style={{width: "40px", height: '40px', borderRadius: '14px'}}/>
                <h1><NavLink to='/'>
                Shoppie</NavLink></h1>
                </div>
                <div className="sideNavLinks">
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? "active" : ''}>Home</NavLink></li>
                    <li><NavLink to={'/shop'} className={({ isActive }) => isActive ? "active" : ''}>Shop</NavLink></li>
                    <div className="cart-icon-container">
                       <NavLink  to={'/cartPage'}><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                        {itemToCart.length > 0 && (
                            <span className="cart-count-badge">{itemToCart.length}</span>
                        )}
                    </div>
                </div>

            </div>
            <div className="categoriesList">
                <ul>
                    <li>
                        <NavLink to='/allProducts' className={({ isActive }) => isActive ? "active" : ''}>All Products</NavLink>
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