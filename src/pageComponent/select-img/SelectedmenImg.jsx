import React, { useContext,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../reducer/CartProvider";
import '../men/men.css'
import './Selected.css'

function SelectedmenImg() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);

  const back = () => {
    navigate(-1);
  };
  const backHome = () => {
    navigate("/");
  };
 
  const items = [
    {
      id: '1',
      title: 'Korn Hoodi',
      price: '₹11,999.00',
      offer: 'Hoodi Originals',
      img1: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/07d28345cd4b4e6fb485872bbbdbad4b_9366/korn-hoodie.jpg',
      img2: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/d20a990d23d84719bc81202d52e27d91_9366/korn-hoodie.jpg',
      img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/c1723e8c58294650b52f04d95bbc2d84_9366/Korn_Hoodie_Black_JG1337_25_model.jpg',
      img4: 'https://assets.adidas.com/images/c_crop,f_auto,fl_lossy,g_north,h_840,q_auto,y_40/h_840/d6fd0d025f9047d583d056294972409a_9366/Korn_Hoodie_Black_JG1337_01_laydown.jpg',
      
      size: [7, 8, 9, 10],
    },
    {
      id: "2",
      title: 'Korn Track Pants',
      price: '₹10,999.00',
      offer: 'Track Pants',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e05d60bdbf244c15ae9101ad828db867_9366/korn-track-pants.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/87bb42d3246f4749a11ff4ce9c4ef31c_9366/korn-track-pants.jpg',
      img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/bae3e2cdc191426ab63101acc1cb6b6a_9366/Korn_Track_Pants_Black_JG1340_25_model.jpg',
      img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/1b2e236d30554d038e5714308b2181f0_9366/Korn_Track_Pants_Black_JG1340_41_detail.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: '3',
      title: 'Korn Track Top',
      price: '₹14,999.00',
      offer: 'Track Top',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b5301195f3d4049adb7fe88b781f7e5_9366/korn-track-top.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e5689880353248f0b91c092282fbc520_9366/korn-track-top.jpg',
      img3:"https://assets.adidas.com/images/w_600,f_auto,q_auto/44844ed652dd4081bacd804726f3ca59_9366/Korn_Track_Top_Black_JG1341_23_hover_model.jpg",
      img4:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f489e392ffe74248b676b16686117c40_9366/Korn_Track_Top_Black_JG1341_25_model.jpg",
      size: [7, 8, 9, 10],
      
    },
    {
      id: '4',
      title: 'Korn Long Sleeve Tee',
      price: '₹6,999.00',
      offer: 'Overshirts',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c11d3839e64145c594114b9882f8f7e9_9366/korn-long-sleeve-tee.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/609409be57734e7bae58af104394d0eb_9366/korn-long-sleeve-tee.jpg',
      img3:"https://assets.adidas.com/images/w_600,f_auto,q_auto/e0f7b7724f684afeb5276a36a7df3c44_9366/Korn_Long_Sleeve_Tee_Black_JG1338_25_model.jpg",
      img4:"https://assets.adidas.com/images/w_600,f_auto,q_auto/21b8dcbf04274af8862ccff4306e74b5_9366/Korn_Long_Sleeve_Tee_Black_JG1338_01_laydown.jpg",
      size: [7, 8, 9, 10],
      
    },
    {
      id: '5',
      title: 'Korn Overshirt',
      price: '₹9,999.00',
      offer: 'Overshirts',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/309987af6d1c4813b3c18ff66ed89783_9366/korn-overshirt.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ef38b718adf40979fe47b5ef60592ab_9366/korn-overshirt.jpg',
      img3:"https://assets.adidas.com/images/w_600,f_auto,q_auto/5aea863fcad34c69bbdd7778618149b3_9366/Korn_Overshirt_Multicolor_JG1334_25_model.jpg",
      img4:"https://assets.adidas.com/images/w_600,f_auto,q_auto/0a48125d20df43c891feaf54055d4495_9366/Korn_Overshirt_Multicolor_JG1334_01_laydown.jpg",
      size: [7, 8, 9, 10],
      
    },
  ]
  const item = items.find((item) => item.id === id);

  if (!item) {
    navigate("/sports");
    return null;
  }

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    alert(`${item.title} added to cart!`);
    navigate("/cart")
  };

  return (
    <div className="select">
      <div className="backpage selected-backpage">
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
          <span className="men-span">Home </span> / Sports
        </button>
        </div>
      {/* Back and navigation buttons */}
      <div className="item-details">
        <div className="image-gallery">
          
          <div className="selected-img">
            
          <img src={item.img1} alt={`${item.title} image 1`} id="equal-height" />
          </div>
          <div className="selected-img">
          <img src={item.img2} alt={`${item.title} image 2`}id="equal-height" />
          </div>
          <div className="selected-img">
          <img src={item.img3} alt={`${item.title} image 3`} id="equal-height"/>
          </div>
          <div className="selected-img">
          <img src={item.img4} alt={`${item.title} image 3`}id="equal-height" />
          </div>

        </div>
        <div className="details1">
          <div className="selected-details">
        <h3 className="title1">{item.title}</h3>
          <p className="price1"><strong>Price:</strong> {item.price}</p>
          <p className="offer1"><strong>Product type:</strong> {item.offer}</p>
          <p className="size1"><strong>Available Sizes:</strong> {item.size.join(", ")}</p>
          <button onClick={addToCart} className="add_to_cart">Add to cart</button>
          <div className="product-details">
              <p id="easyRetrun"><span className="box-delvery top-easy"><img src="https://t4.ftcdn.net/jpg/03/01/25/15/360_F_301251552_DYri3quxXyp75hgaDVab5PSzgpHvPaUS.jpg" alt="" id="return" /></span>
                Free Delivery, Free Returns </p>
              <p id="easyRetrun">
                <span className="box-delvery"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKmxnFJe_1lQeP-W_Cj0lV5X_SQr9lH6j_AR5ZsIQ_mZelwSEksPzDEZFmi2W63cs1Uw&usqp=CAU" alt="" id="return" /></span>
              Delivery: Delhi, Gurgaon: 1-2 Days,br Metro cities:2-3 days ,Others: 3-5 days</p>
              <p id="easyRetrun">
                <span className="box-delvery top-easy"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3FAIahW-ATdtmTRh_eQAUl-aj-VoEKpETA&s" alt="" id="return" /></span>
                Secure transactions with hassle free 14 days Exchange and Returns</p>
             
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
    export default SelectedmenImg