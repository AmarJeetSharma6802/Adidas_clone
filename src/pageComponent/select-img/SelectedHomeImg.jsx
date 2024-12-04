import React, { useContext,useState } from "react";
import { useParams, useNavigate, } from "react-router-dom";
import { CartContext } from "../reducer/CartProvider";
import '../men/men.css'
import './Selected.css'

function SelectedHomeImg() {
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
        title: 'adidas Basketball Hoodie',
        price: '₹8,999.00',
        offer: 'Hoodies',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/681a3c8857f64fe1a6d460d1cee082bf_faec/adidas_Basketball_Hoodie_Green_IN4242_HM1.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a8bb5b984a4341968afea71c60d3cd00_faec/adidas_Basketball_Hoodie_Green_IN4242_HM3_hover.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/384d4f1417604980a0d8a0fb9e18319d_faec/adidas_Basketball_Hoodie_Green_IN4242_HM4.jpg',
        img4: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a6481e7983a24982bf8beb67eaacb41e_faec/adidas_Basketball_Hoodie_Green_IN4242_HM5.jpg',
        
        size: [7, 8, 9, 10],
      },
      {
        id: '2',
        title: 'Z.N.E. Hoodie',
        price: '₹9,999.00',
        offer: 'Men • Sportswear',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/59460fb0bd584daa88fe9a383d088a9b_9366/Z.N.E._Hoodie_White_JF2454_21_model.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d5e5482f1d824c2bb8fb44a80ca9d425_9366/Z.N.E._Hoodie_White_JF2454_23_hover_model.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a5cd597879704dada5d019baecc10269_9366/Z.N.E._Hoodie_White_JF2454_25_model.jpg',
        img4: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/2144f887262d4d7bb77d90f4346e082b_9366/Z.N.E._Hoodie_White_JF2454_01_laydown.jpg',
        
        size: [7, 8, 9, 10],
      },
      {
        id: '3',
        title: 'Own the Run Vest',
        price: '₹4,999.00',
        offer: 'Men • Sportswear',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/dcad06efe67044e799bcd07bbfb779ad_9366/Own_the_Run_Vest_Blue_IW0025_21_model.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/809b0186527048028f55fb707c195a21_9366/Own_the_Run_Vest_Blue_IW0025_23_hover_model.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/961eca5b7e244c9f960578cb1c4b5653_9366/Own_the_Run_Vest_Blue_IW0025_25_model.jpg',
        img4: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b5de0f635586435ab9be3654af2b7f50_9366/Own_the_Run_Vest_Blue_IW0025_01_laydown.jpg',
        
        size: [7, 8, 9, 10],
      },
      {
        id: '4',
        title: 'India Cricket Anthem Jacket Women',
        price: '₹4,799.50',
        offer: 'Women • Cricket',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9aefec2b65d043c584fffc3ae9ff385e_9366/India_Cricket_Anthem_Jacket_Women_Blue_JJ1159_21_model.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/51b978633b744151ba336eb20985f434_9366/India_Cricket_Anthem_Jacket_Women_Blue_JJ1159_22_model.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a8eaed992b2840509614234aa01e6170_9366/India_Cricket_Anthem_Jacket_Women_Blue_JJ1159_23_hover_model.jpg',
        img4: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ee5c1a1984704beebc9a364fd0034e4a_9366/India_Cricket_Anthem_Jacket_Women_Blue_JJ1159_25_model.jpg',
        
        size: [7, 8, 9, 10],
      },
      {
        id: '5',
        title: 'City Escape Utility Vest',
        price: '₹4,799.50',
        offer: 'Sportswear',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/7ca49cc851a746aab5a26e5ab76b7667_9366/City_Escape_Utility_Vest_Black_IN3701_21_model.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d986a3780022420aaae8d2c8588cb008_9366/City_Escape_Utility_Vest_Black_IN3701_23_hover_model.jpg',
        img3: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9989f24277074f63bed3ef4c20796b94_9366/City_Escape_Utility_Vest_Black_IN3701_25_model.jpg',
        img4: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4c2c09f459664063bc4953527c778992_9366/City_Escape_Utility_Vest_Black_IN3701_01_laydown.jpg',
        size: [7, 8, 9, 10],
      },
      {
        id: '6',
        title: 'Sportswear Fleece Colorblock Track Suit',
        price: '₹8,999.50',
        offer: 'Men • Sportswear',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/3ed9df62bec34b8b833a264a0fc2a689_9366/Sportswear_Fleece_Colorblock_Track_Suit_Blue_IX1278_21_model.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d5db1eb54c734d9f86bc421a8d731114_9366/Sportswear_Fleece_Colorblock_Track_Suit_Blue_IX1278_23_hover_model.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/65ce21b3db1e46739bf7c693da193301_9366/Sportswear_Fleece_Colorblock_Track_Suit_Blue_IX1278_25_model.jpg',
        img4: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/cd447b12b8514d4d89bc1c4a262f69b1_9366/Sportswear_Fleece_Colorblock_Track_Suit_Blue_IX1278_01_laydown.jpg',
        
        size: [7, 8, 9, 10],
      },
      {
        id: '7',
        title: 'Superstar Shoes',
        price: '₹5,400.50',
        offer: '-30%',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_00_standard.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ff0654f4089f4413baa7aae700d2a08c_9366/Superstar_Shoes_Black_EG4959_02_standard_hover.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9aa935080d1849a1829daae700d2aba1_9366/Superstar_Shoes_Black_EG4959_03_standard.jpg',
        img4: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/7c365af056f34e6bacf4aae700d2b7fe_9366/Superstar_Shoes_Black_EG4959_04_standard.jpg',
        
        size: [7, 8, 9, 10],
      },
      {
        id: '8',
        title: 'Superstar Shoes',
        price: '₹6,299.50',
        offer: '-20%',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/798672e3a6d24f5284b49ee12a9efa34_9366/Dame_8_EXTPLY_Shoes_Green_IF8148_01_standard.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/c086bfbbd82944c38e4a27a779d313c1_9366/Dame_8_EXTPLY_Shoes_Green_IF8148_02_standard_hover.jpg',
        img3: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3dfd9d9710004e2792826b0cf62eea78_9366/Dame_8_EXTPLY_Shoes_Green_IF8148_03_standard.jpg',
        img4: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/824c4c9954764fd094887a4d10b85ba1_9366/Dame_8_EXTPLY_Shoes_Green_IF8148_04_standard.jpg',
        size: [7, 8, 9, 10],
      },
      {
        id: '9',
        title: 'NMD_R1 V2 Shoes',
        price: '₹6,750.00',
        offer: '-20% Men • Originals',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/dd974c64e29f4b3aa61b2069133093e5_9366/NMD_R1_V2_Shoes_Yellow_IE2250_01_standard.jpg',
        img2: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e91a4bbceae45afa14c254a88f1a7ac_9366/NMD_R1_V2_Shoes_Yellow_IE2250_02_standard_hover.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/38f5e7d1141447c18deb43fbf93079a2_9366/NMD_R1_V2_Shoes_Yellow_IE2250_03_standard.jpg',
        img4: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ca7886d613594f2d9f4c8bc3aee1ff30_9366/NMD_R1_V2_Shoes_Yellow_IE2250_04_standard.jpg',
        size: [7, 8, 9, 10],
      },
      {
        id: '10',
        title: 'Adistar Cushion Shoess',
        price: '₹13,999.00',
        offer: '-30% Men • Originals',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/11e1c6fbdb96497b92252eaf10d2fc14_9366/Adistar_Cushion_Shoes_White_IG6924_01_standard.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/0f0e6f4f09374929a4064b9b0d428ad0_9366/Adistar_Cushion_Shoes_White_IG6924_012_hover_standard.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/59efd217ffdd4030995b76b00b73eac7_9366/Adistar_Cushion_Shoes_White_IG6924_02_standard.jpg',
        img4: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e94852cde33245578d3f6bc010bcfd8a_9366/Adistar_Cushion_Shoes_White_IG6924_03_standard.jpg',
        size: [7, 8, 9, 10],
      },
      {
        id: '11',
        title: 'NMD_R1 Shoes',
        price: '₹13,999.00',
        offer: '-10% Men • Originals',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/76752172861843209f02aef900fd6858_9366/NMD_R1_Shoes_White_HQ4451_01_standard.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1c3d884f0e0043408142aef900fd8116_9366/NMD_R1_Shoes_White_HQ4451_02_standard_hover.jpg',
        img3: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c271388c25ab49658ceaaef900fd8d1b_9366/NMD_R1_Shoes_White_HQ4451_03_standard.jpg',
        img4: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/256d930ec0ce4579aed3aef900fd99ca_9366/NMD_R1_Shoes_White_HQ4451_04_standard.jpg',
        size: [7, 8, 9, 10],
      },
      {
        id: '12',
        title: 'OZWEEGO Shoes',
        price: '₹12,999.00',
        offer: '-30% Women • Originals',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/04c768e54ae4492792cbadf000b5ab1a_9366/OZWEEGO_Shoes_Beige_GY6177_01_standard.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1b91aa818e3f4d76bd2cadf000b5bb6b_9366/OZWEEGO_Shoes_Beige_GY6177_02_standard_hover_hover.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/eab09b8c138f49adbaefadf000b5c386_9366/OZWEEGO_Shoes_Beige_GY6177_03_standard.jpg',
        img4: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/056d979ca63f4995b614adf000ba7135_9366/OZWEEGO_Shoes_Beige_GY6177_04_standard.jpg',
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
          <p className="offer1"><strong>Product type & offer:</strong> {item.offer}</p>
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
  
  export default SelectedHomeImg