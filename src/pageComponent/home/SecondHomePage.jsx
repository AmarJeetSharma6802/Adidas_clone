import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../reducer/CartProvider";

function SecondHomePage() {
  const [barActive, setBarActive] = useState(false);
  const { state } = useContext(CartContext);

  const togglebars = () => {
    setBarActive(true); 
  };

  const closeNav = () => {
    setBarActive(false);
  };

  const handleNavLinkClick = () => {
    closeNav(); // Close the navbar when a link is clicked
  };

  return (
    <div>
      {/* Hamburger Menu Bar */}
      <div className="bars">
        <div className="bars-div">
          <a href="#" className="bars-a hamburger" onClick={togglebars}>
            <i className="fa-solid fa-bars"></i>
          </a>
          <a href="#" className="bars-a">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
        <div className="bars-logo">
          <Link to="/">
            <svg className="bars-svg" viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
                fill="black"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="bars-bag">
          <a href="#" className="bars-a"><i className="fa-regular fa-user"></i></a>
          <Link to="/cart" className="bars-a">
            <i className="fa fa-shopping-bag"></i>
            {state.cartCount > 0 && (
              <span className="cart-count">{state.cartCount}</span>
            )}
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className={`nav ${barActive ? 'active' : ''}`}>
        <button className="nav-close" onClick={closeNav}>close</button>
        <div className="nav-flex">
          <div className="logo">
            <Link to="/">
              <svg
                id="svg"
                viewBox="100 100 50 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
                  fill="black"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="center-nav">
            <ul className="nav-ul">
              <li className="nav-li"><Link to="/men" onClick={handleNavLinkClick}>Men</Link></li>
              <li className="nav-li"><Link to="/women" onClick={handleNavLinkClick}>Women</Link></li>
              <li className="nav-li"><Link to="/kid" onClick={handleNavLinkClick}>Kids</Link></li>
              <li className="nav-li"><Link to="/sports" onClick={handleNavLinkClick}>Sports</Link></li>
              <li className="nav-li"><a href="#" onClick={handleNavLinkClick}>Lifestyle</a></li>
              <li className="nav-li"><a href="#" onClick={handleNavLinkClick}>Outlet</a></li>
              {/* <li className="nav-li"><a href="#" onClick={handleNavLinkClick} className="blackFriday">Black <span id="black-span">Friday</span> Sale</a></li> */}
            </ul>
          </div>

          {/* Left Navigation and Search */}
          <div className="top-left-nav">
            <div className="last-nav">
              <ul className="left-nav-ul">
                <li className="left-nav-li"><a href="#" onClick={handleNavLinkClick} className="leftnav-a">Help</a></li>
                <li className="left-nav-li"><a href="#" onClick={handleNavLinkClick} className="leftnav-a">Orders and Returns</a></li>
                <li className="left-nav-li"><a href="#" onClick={handleNavLinkClick} className="leftnav-a">Sign Up</a></li>
                <li className="left-nav-li"><a href="#" onClick={handleNavLinkClick} className="leftnav-a">Log In</a></li>
              </ul>
            </div>
            <div className="last-nav-search">
              <input type="search" placeholder="Search" className="search-input" />
              <a href="#" onClick={handleNavLinkClick} className="top-font-a"><i className="fa-regular fa-user"></i></a>
              <a href="#" onClick={handleNavLinkClick} className="top-font-a"><i className="fa-regular fa-heart"></i></a>
              <Link to="/cart" onClick={handleNavLinkClick} className="top-font-a">
                <i className="fa fa-shopping-bag"></i>
                {state.cartCount > 0 && (
                  <span className="cart-count">{state.cartCount}</span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHomePage;
