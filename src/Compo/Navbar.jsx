
import React from 'react'
import { Link, NavLink } from 'react-router'
import { useCart } from 'react-use-cart'
import ThemeToggle from '../Theme/ThemeToggle.jsx'



function Navbar() {

  const {addItem , totalUniqueItems} = useCart()

  return (
<div>
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <NavLink className="navbar-brand" to="/">
        Coffee<small>Blend</small>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
             About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu" className="nav-link">
          MENU
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link">
             Products
            </NavLink>
          </li>

   <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="room.html"
              id="dropdown04"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shop
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <Link className="dropdown-item" to="/products">
                Shop
              </Link>
              <Link to="/singleproduct/4"  className="dropdown-item">Single Product</Link>
              <Link className="dropdown-item" to="/cart">
                Cart
              </Link>
            </div>
          </li>

                    <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
             Contact us
            </NavLink>
          </li>


   <li className="nav-item cart">
            <Link to="/cart" className="nav-link">
              <span className="icon icon-shopping_cart"/> 
              <span className="bag d-flex justify-content-center align-items-center">
                <small>{totalUniqueItems}</small>
              </span>
            </Link>
          </li>


<li className="nav-item d-flex align-items-center ml-lg-2">
  <ThemeToggle/>
</li>



          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <span className="oi oi-account-login"></span>
            </Link>
          </li>
       


        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Navbar