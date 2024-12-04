import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../reducer/CartProvider";
import '../men/men.css';
import './Selected.css';

function SelectedKidsImg() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  
  const [selectedSize, setSelectedSize] = useState(null);

  const back = () => {
    navigate(-1);
  };

  const backHome = () => {
    navigate("/");
  };

  const items = [
    {
      id: '1',
      title: 'Tee Kids',
      price: '₹1,499.00',
      offer: 'Kids Unisex • Originals',
      img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/648945cc71274f108cc056878aa51a14_9366/Tee_Kids_Black_IW3495_21_model.jpg',
      img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9b4ff670c2874385907f72feea3b2ca7_9366/Tee_Kids_Black_IW3495_23_hover_model.jpg',
      img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/0494630120604fc4b0603bc355adf47a_9366/Tee_Kids_Black_IW3495_01_laydown.jpg',
      img4: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/8d2d48be3073415c8df1d909aabd3a0d_9366/Tee_Kids_Black_IW3495_41_detail.jpg',
      
      size: [7, 8, 9, 10],
    },
    {
      id: "2",
      title: 'Future Icons Logo 8-Inch Shorts',
      price: '₹1,200.00',
      offer: 'Kids Unisex • Sportswear',
      img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/e7ef4d64083a418eb07faf5400fec2d0_9366/Future_Icons_Logo_8-Inch_Shorts_Black_HR6306_21_model.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c9d9d23685d444b81c7af5400fec99e_9366/future-icons-logo-8-inch-shorts.jpg',
      img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/2213224ad232411395adaef600c41979_9366/Future_Icons_Logo_8-Inch_Shorts_Black_HR6306_41_detail.jpg',
      img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/a82f1e2cf62c405eb103aef600c40b6b_9366/Future_Icons_Logo_8-Inch_Shorts_Black_HR6306_01_laydown.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: "3",
      title: 'Future Icons Logo 8-Inch Shorts',
      price: '₹1,600.00',
      offer: 'Kids Unisex • Sportswear',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f41e54f29b8247b1ac58172dd00c95f7_9366/future-icons-logo-8-inch-shorts.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8048d9426f4c442cb4404a51d26989d2_9366/future-icons-logo-8-inch-shorts.jpg',
      img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/f9e8c9a293b9474182d156d28eca73fb_9366/Future_Icons_Logo_8-Inch_Shorts_Green_IM0066_43_detail.jpg',
      img4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8cc54edd0324558b41e0eeaf9e90248_9366/Future_Icons_Logo_8-Inch_Shorts_Green_IM0066_01_laydown.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: "4",
      title: 'Tiro 23 League Shorts',
      price: '₹800.00',
      offer: 'Kids Unisex • Sportswear',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bd9292482ba4af287c4af7200c90020_9366/tiro-23-league-shorts.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/03bd18e996704c189cb1af7200c90857_9366/tiro-23-league-shorts.jpg',
      img3: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fde29ecab8684bcb8dd4aef500bcbb69_9366/Tiro_23_League_Shorts_Red_IB8092_01_laydown.jpg',
      img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/47734c0d1b664abb80b1aef500bcc4b5_9366/Tiro_23_League_Shorts_Red_IB8092_02_laydown.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: "5",
      title: 'ARKD3 Allover Print Tee',
      price: '₹1,200.00',
      offer: 'Kids Unisex • Sportswear',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/38a6e7f9a3d145c8baefaf4e00af23ec_9366/arkd3-allover-print-tee.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2268dace6ec14f328435af4e00af2c32_9366/arkd3-allover-print-tee.jpg',
      img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/dd5e82bcbf0f4535a50eaef900ae083f_9366/ARKD3_Allover_Print_Tee_Blue_HR6407_01_laydown.jpg',
      img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/194fd1d5b5084ce4948daef900ae0e94_9366/ARKD3_Allover_Print_Tee_Blue_HR6407_02_laydown.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: "6",
      title: 'adidas Adventure Tee',
      price: '₹800.00',
      offer: 'Kids Unisex • Sportswear',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/eecaa72599bf45ca8544716d082f39b8_9366/adidas-adventure-tee.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/594517bdfc7b4f8d873a797037ae8b7e_9366/adidas-adventure-tee.jpg',
      img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ef2eb688311142868281afc400282127_9366/adidas_Adventure_Tee_White_II0929_01_laydown.jpg',
      img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/96be5fe54f4741419058afc40028331d_9366/adidas_Adventure_Tee_White_II0929_42_detail.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: "7",
      title: 'Future Icons Allover Print Pants Kids',
      price: '₹1,920.00',
      offer: 'Kids Unisex • Sportswear',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/af289d29224c43ce93689c4ed796e7fb_9366/future-icons-allover-print-pants-kids.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f9042e71e3e3412e961439fc9593e738_9366/future-icons-allover-print-pants-kids.jpg',
      img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/2ba232dbc13e4e599cdeafc400606597_9366/Future_Icons_Allover_Print_Pants_Kids_Grey_IB4037_01_laydown.jpg',
      img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/c43222726db74797a3c9afc400606b99_9366/Future_Icons_Allover_Print_Pants_Kids_Grey_IB4037_02_laydown.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: "8",
      title: 'adidas Adventure Pants',
      price: '₹1,920.00',
      offer: 'Kids Unisex • Sportswear',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4557cc83660c4d81aa648cf2457cf50d_9366/adidas-adventure-pants.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/70b351d7bd5a49cf94669e9315cb3016_9366/adidas-adventure-pants.jpg',
      img3: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/58d82b6da29e48d397afafc4006deecc_9366/adidas_Adventure_Pants_Beige_II0941_01_laydown.jpg',
      img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/31473d5c66284cbf98daafc4006df48e_9366/adidas_Adventure_Pants_Beige_II0941_02_laydown.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: "9",
      title: 'Football-Inspired Predator Jersey',
      price: '₹1,200.00',
      offer: 'Kids Unisex • Sportswear',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e47c8dc2f2ed4557a511af8c00a0f258_9366/football-inspired-predator-jersey.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a2d2da1abbfa44978317af8c00a0f9a2_9366/football-inspired-predator-jersey.jpg',
      img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4998d49c61654ac49f83af50010c50f0_9366/Football-Inspired_Predator_Jersey_Blue_IC9998_01_laydown.jpg',
      img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/f07b57c96bce499bbac9af50010c58e9_9366/Football-Inspired_Predator_Jersey_Blue_IC9998_02_laydown.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: "10",
      title: 'Future Icons Allover Print Hooded Sweatshirt Kids',
      price: '₹2,120.00',
      offer: 'Kid trainning',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c1398685f4f48508886c52ddb0df950_9366/future-icons-allover-print-hooded-sweatshirt-kids.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/77a09a6b260e40a99fa8048241fdd743_9366/future-icons-allover-print-hooded-sweatshirt-kids.jpg',
      img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/c7e1fff2dd924f628157bcac9506ee64_9366/Future_Icons_Allover_Print_Hooded_Sweatshirt_Kids_Turquoise_IL4958_01_laydown.jpg',
      img4: "https://assets.adidas.com/images/c_crop,f_auto,fl_lossy,g_north,h_840,q_auto,y_40/c7e1fff2dd924f628157bcac9506ee64_9366/Future_Icons_Allover_Print_Hooded_Sweatshirt_Kids_Turquoise_IL4958_01_laydown.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: "11",
      title: 'LOUNGE TEE',
      price: '₹1,200.00',
      offer: 'Kid trainning',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/354da55c74dd4022952daf5600b2ea07_9366/arkd3-allover-print-tee.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/636870bcdbe2459cbe0daf5600b2f2e8_9366/arkd3-allover-print-tee.jpg',
      img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b55adb454d744be59b99af0301351058_9366/ARKD3_Allover_Print_Tee_Green_IC8673_01_laydown.jpg',
      img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/516e63cd08d74e9883b7af0301351c40_9366/ARKD3_Allover_Print_Tee_Green_IC8673_02_laydown.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: "12",
      title: 'Brand Love Allover Print Full-Zip Hoodie Kids',
      price: '₹16200.00',
      offer: 'Selling fast',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2dd721ef95624bfe91f957241b7030d7_9366/brand-love-allover-print-full-zip-hoodie-kids.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/748e9b3bef8c472abab0ae7532144a39_9366/brand-love-allover-print-full-zip-hoodie-kids.jpg',
      img3: 'https://assets.adidas.com/images/c_crop,f_auto,fl_lossy,g_north,h_840,q_auto,y_40/cf6e7a22667946669cd7afc3010f8099_9366/Brand_Love_Allover_Print_Full-Zip_Hoodie_Kids_Green_IA1556_01_laydown.jpg',
      img4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf6e7a22667946669cd7afc3010f8099_9366/Brand_Love_Allover_Print_Full-Zip_Hoodie_Kids_Green_IA1556_01_laydown.jpg",
      size: [7, 8, 9, 10],
    },
]

  const item = items.find((item) => item.id === id);

  if (!item) {
    navigate("/sports");
    return null;
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const addToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    
    const itemWithSize = { ...item, selectedSize };
    dispatch({ type: "ADD_TO_CART", payload: itemWithSize });
    alert(`${item.title} added to cart!`);
    navigate("/cart");
  };

  return (
    <div className="select">
      <div className="backpage selected-backpage">
        <button onClick={back} className="back">
          <svg className="gl-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M10 19l-7-7 7-7" stroke="currentColor" fill="white" strokeWidth="2" />
          </svg>
          Back
        </button>

        <button className="backhome" onClick={backHome}>
          <span className="men-span">Home </span> / Sports
        </button>
      </div>

      {/* Item Details */}
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
            <p className="size1"><strong>Available Sizes:</strong></p>
            <div className="size-options">
              {item.size.map((size) => (
                <button
                  key={size}
                  className={`size-option ${selectedSize === size ? "selected" : ""}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
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

export default SelectedKidsImg;
