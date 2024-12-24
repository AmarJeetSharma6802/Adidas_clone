import React, { useRef } from 'react';
import "./men.css";
import { useNavigate } from "react-router-dom";


function ShowFillter({ toggleFilter }) {
  const filterDropdown = useRef(null);
  const filtershow = useRef(null);
  const productShow = useRef(null);

  const toggleDropdown = () => {
    filterDropdown.current.classList.toggle('show');
  };
  const toggleDropdown2 = () => {
    filtershow.current.classList.toggle('show');
  };
  const fillterProduct = () => {
    productShow.current.classList.toggle('show');
  };

    const navigate = useNavigate();
  
  const menpage =()=>{
    // window.location.href = "/men";
    navigate("/men");
  }
  const womenpage =()=>{
    // window.location.href = "/women";
    navigate("/women");
  }

  return (
    <div>
      <div className="overlay-fillter">
        <div className="fillter">
          <div className="topFillter">
            <p className="fillter-top">Filter & Sort</p>
            <button className="fillter-close" onClick={toggleFilter}>
              Close
            </button>
          </div>
          <div className="price-details">
            <div className="price-flex">
              <h4>Sort buy</h4>
              <button className="down-arrow" onClick={toggleDropdown}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <ul className="price-details-ul" ref={filterDropdown}>
              <li><a href="#">PRICE (LOW - HIGH)</a></li>
              <li><a href="#">NEWEST</a></li>
              <li><a href="#">TOP SELLERS</a></li>
              <li><a href="#">PRICE (HIGH - LOW)</a></li>
            </ul>
          </div>

          <div className="Divisions">
            <div className="price-flex">
              <h4>Division</h4>
              <button className="down-arrow"  onClick={toggleDropdown2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <ul className="divisons-ul" ref={filtershow}>
              <li className="divisions-li" onClick={menpage}>
                <input type="checkbox" id="checkbox" /> <span className="divisions-li">Mens</span>
              </li>
              <li className="divisions-li" onClick={womenpage} >
                <input type="checkbox" id="checkbox" /> <span className="divisions-li">Women</span>
              </li>
            </ul>
          </div>

          <div className="Producttype">
              <div className="price-flex">
                <h4>Product Type</h4>
                <button className="down-arrow" onClick={fillterProduct}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              <ul className="product-ul" ref={productShow}>
                <li className="product-li" ><a href="">T-shirts</a></li>
                <li className="product-li"><a href="">Tops</a></li>
                <li className="product-li"><a href="">Hoodies</a></li>
                <li className="product-li"><a href="">Pants</a></li>
              </ul>
            </div>

          <div className="price">
            <div className="price-flex">
              <h4>Price</h4>
              <button className="down-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <div className="range">
              <div className="range-slider">
                <input type="range" min="1000" max="10000" step="500" />
                <p>₹1000 - ₹10000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowFillter;
