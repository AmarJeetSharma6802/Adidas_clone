import React, { useRef, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import ShowFillter from "./ShowFillter";  // Import the ShowFillter component
import "./men.css";

function Men() {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);  

  const back = () => {
    navigate(-1);
  };
  const backHome = () => {
    navigate("/");
  };

  const GalleryItem = ({ img1, img2, title, price, offer,id }) => (
    <div className="img-container">
      <img src={img1} alt={title} className="first" />
      <Link to={`/SelectedmenImg/${id}`}>
          <img src={img2} alt={title} className="second" />
        </Link>
      <div className="details">
        <p className="title">{title}</p>
        <p className="price">{price}</p>
        <p className="offer">{offer}</p>
      </div>
    </div>
  );

  // Function to toggle the visibility of the filter
  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <div>
      <div className="korn">
        <div className="backpage">
          <button onClick={back} className="back">
            <svg
              className="gl-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M10 19l-7-7 7-7"
                stroke="currentColor"
                fill="white"
                strokeWidth="2"
              />
            </svg>
            Back
          </button>

          <button className="backhome" onClick={backHome}>
            <span className="men-span">Home </span> / Korn
          </button>
        </div>
        <div className="felx-fillter">
          <h1 className="men-h1">Korn</h1>

          <div className="fillterbtn">
            <button className="fillter-i" onClick={toggleFilter}>
             <span className="hide-small-screen">Filter & Sort</span>  <i className="fa-solid fa-sliders"></i>
            </button>
          </div>
        </div>

        <div className="men-image">
          <div className="gallery">
            {/* Simple GalleryItems with props passed directly */}
            <GalleryItem
              img1="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/07d28345cd4b4e6fb485872bbbdbad4b_9366/korn-hoodie.jpg"
              img2="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/d20a990d23d84719bc81202d52e27d91_9366/korn-hoodie.jpg"
              title="Korn Hoodie"
              price="₹11,999.00"
              offer="New"
              id={1}
            />
            <GalleryItem
            id={2}
              img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e05d60bdbf244c15ae9101ad828db867_9366/korn-track-pants.jpg"
              img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/87bb42d3246f4749a11ff4ce9c4ef31c_9366/korn-track-pants.jpg"
              title="Korn Track Pants"
              price="₹10,999.00"
              offer="New"
            />
            <GalleryItem
            id={3}
              img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b5301195f3d4049adb7fe88b781f7e5_9366/korn-track-top.jpg"
              img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e5689880353248f0b91c092282fbc520_9366/korn-track-top.jpg"
              title="Korn Track Top"
              price="₹14,999.00"
              offer="New"
            />
            <GalleryItem
            id={4}
              img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c11d3839e64145c594114b9882f8f7e9_9366/korn-long-sleeve-tee.jpg"
              img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/609409be57734e7bae58af104394d0eb_9366/korn-long-sleeve-tee.jpg"
              title="Korn Long Sleeve Tee"
              price="₹6,999.00"
              offer="New"
            />
            <GalleryItem
            id={5}
              img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/309987af6d1c4813b3c18ff66ed89783_9366/korn-overshirt.jpg"
              img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ef38b718adf40979fe47b5ef60592ab_9366/korn-overshirt.jpg"
              title="Korn Overshirt"
              price="₹9,999.00"
              offer="New"
            />
            <GalleryItem
            id={6}
              img1="https://assets.adidas.com/images/w_600,f_auto,q_auto/91200835c35c44269b27af5c01002e6f_9366/Essentials_Single_Jersey_Linear_Embroidered_Logo_Tee_Blue_IC9275_21_model.jpg"
              img2="https://assets.adidas.com/images/w_600,f_auto,q_auto/dbcb452126b6468cb4e0af5c01003a5e_9366/Essentials_Single_Jersey_Linear_Embroidered_Logo_Tee_Blue_IC9275_23_hover_model.jpg"
              title="Korn Overshirt"
              price="₹999.00"
              offer="New"
            />
            <GalleryItem
            id={7}
              img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8dd5d11c963f4d5e8d43452f69682e14_9366/adicolor-outline-trefoil-tee.jpg"
              img2="https://assets.adidas.com/images/w_600,f_auto,q_auto/62c3e46b1db147179e4462a12d5e2a65_9366/Adicolor_Outline_Trefoil_Tee_Black_IU2347_23_hover_model.jpg"
              title="Adicolor Outline Trefoil Tee"
              price="₹1,600.00"
              offer="Men • Sportswear"
            />
          </div>
        </div>
      </div>

      {/* Show Filter Component */}
      {showFilter && <ShowFillter toggleFilter={toggleFilter} />}
    </div>
  );
}

export default Men;
