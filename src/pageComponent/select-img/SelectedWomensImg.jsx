import React, { useContext,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../reducer/CartProvider";
import '../men/men.css'
import './Selected.css'

function SelectedWomensImg() {
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
        title: 'Sleeveless Bodysuit',
        price: '₹1,610.00',
        offer: 'Women originals',
        img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2e8c4096cad54782bc66f879b3a2168c_9366/sleeveless-bodysuit.jpg',
        img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/149a3d1316e8477d9ead7753f6f4cdb2_9366/sleeveless-bodysuit.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a7257742a14b46d5825de8b9e703528f_9366/Sleeveless_Bodysuit_Black_IT9712_25_model.jpg',
        img4: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ef2fee9cf4314bb5bc01490dbde2a1bf_9366/Sleeveless_Bodysuit_Black_IT9712_01_laydown.jpg',
        
        size: [7, 8, 9, 10],
      },
      {
        id: "2",
        title: 'SS CHANGE TEE',
        price: '₹700.00',
        offer: 'Women Training',
        img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/76fa924d73834953b9d14715a7aadcd2_9366/ss-change-tee.jpg',
        img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7b17f8dd5624c81b17cfa2e111e58db_9366/ss-change-tee.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/80534cc2f27c4b38a756c1e80ff460da_9366/TRAINING_ESSENTIALS_CREWNECK_TEE_Grey_IY5226_21_model.jpg',
        img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/929e89c0b35d44f2b1c5754270c25a5d_9366/TRAINING_ESSENTIALS_CREWNECK_TEE_Grey_IY5226_22_model.jpg",
        size: [7, 8, 9, 10],
      },
      {
        id: '3',
        title: 'Ekiden Running Tee (Gender Neutral)',
        price: '₹1,610.00',
        offer: 'Running',
        img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/910321a36d304009ab76ca6f95e26780_9366/ekiden-running-tee-gender-neutral.jpg',
        img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/249a1a18302443c1890094cdd4867c61_9366/ekiden-running-tee-gender-neutral.jpg',
        // img3:"https://assets.adidas.com/images/w_600,f_auto,q_auto/44844ed652dd4081bacd804726f3ca59_9366/Korn_Track_Top_Black_JG1341_23_hover_model.jpg",
        // img4:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f489e392ffe74248b676b16686117c40_9366/Korn_Track_Top_Black_JG1341_25_model.jpg",
        size: [7, 8, 9, 10],
        
      },
      {
        id: "4",
        title: 'Essentials Rib Tee',
        price: '₹1,200.00',
        offer: 'First time on discount',
        img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b91acc9332a246e2950d03f9f92c4d15_9366/essentials-rib-tee.jpg',
        img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a2eb960d71b479e9d198fbd541f0a30_9366/essentials-rib-tee.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5afe984be1e14a9a9f66c16c7bdd0788_9366/Essentials_Rib_Tee_Black_II8057_25_model.jpg',
        img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/a48d8e0314bf40578ef390fda812fa17_9366/Essentials_Rib_Tee_Black_II8057_01_laydown.jpg",
        size: [7, 8, 9, 10],
      },
      {
        id: "5",
        title: 'Tiro Summer Tube Top With Detachable Straps',
        price: '₹1,200.00',
        offer: 'Women sportswear',
        img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d33d12046fd94e44ad980ce4e4f57ed8_9366/tiro-summer-tube-top-with-detachable-straps.jpg',
        img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/64148f300326476792f515b73934dc1a_9366/tiro-summer-tube-top-with-detachable-straps.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ac405f563cb0431d8022bfdc7eb545f5_9366/Tiro_Summer_Tube_Top_With_Detachable_Straps_Black_IQ4821_25_model.jpg',
        img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/04340df7f8654abcbc629f7806042682_9366/Tiro_Summer_Tube_Top_With_Detachable_Straps_Black_IQ4821_01_laydown.jpg",
        size: [7, 8, 9, 10],
      },
      {
        id: "6",
        title: 'adidas Originals x KSENIASCHNAIDER Graphic Tee',
        price: '₹2,000.00',
        offer: 'Women sportswear',
        img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/1c90a7d70f1a4b06824f94cdf31c583d_9366/adidas-originals-x-kseniaschnaider-graphic-tee.jpg',
        img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/efee0f31c698410195a1ef8f69fe46c4_9366/adidas-originals-x-kseniaschnaider-graphic-tee.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/def6eac3406d4829a24829f664972076_9366/adidas_Originals_x_KSENIASCHNAIDER_Graphic_Tee_White_IM3814_25_model.jpg',
        img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/1706ae469e3f4f1fb480c174c36c20dd_9366/adidas_Originals_x_KSENIASCHNAIDER_Graphic_Tee_White_IM3814_01_laydown.jpg",
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
          
        <img src={item.img1} alt={`${item.title} image 1`} />
        </div>
        <div className="selected-img">
        <img src={item.img2} alt={`${item.title} image 2`} />
        </div>
        <div className="selected-img">
        <img src={item.img3} alt={`${item.title} image 3`} />
        </div>
        <div className="selected-img">
        <img src={item.img4} alt={`${item.title} image 3`} />
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
  )
}

export default SelectedWomensImg