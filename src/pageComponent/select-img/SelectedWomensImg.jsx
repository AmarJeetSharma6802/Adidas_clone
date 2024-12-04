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
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/3757395694ec49f7bd53fbcef39640ee_9366/WTR_DESIGNED_4_TRAINING_SHORTS_Black_IV8172_25_model.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/30283966b7474c62b47dbdb396ab1221_9366/WTR_DESIGNED_4_TRAINING_SHORTS_Black_IV8172_23_hover_model.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1f55c574e09c4eb181427eb17b0dd641_9366/WTR_DESIGNED_4_TRAINING_SHORTS_Black_IV8172_21_model.jpg',
        img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/1f4f3c9bdd484739a94ea6f7765cf848_9366/WTR_DESIGNED_4_TRAINING_SHORTS_Black_IV8172_22_model.jpg",
        size: [7, 8, 9, 10],
      },
      {
        id: '3',
        title: 'Allover Zebra Animal Print Essentials Tee',
        price: '₹1,610.00',
        offer: 'Women • Originals',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a35f68fb7ede4fcbafd7e12503cebca7_9366/Allover_Zebra_Animal_Print_Essentials_Tee_Grey_II5869_21_model.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/3c85c610644d4ed09b5169b6eb4fc65d_9366/Allover_Zebra_Animal_Print_Essentials_Tee_Grey_II5869_23_hover_model.jpg',
        img3:"https://assets.adidas.com/images/w_600,f_auto,q_auto/ec6c4ab7ed68448e8be7428669b61b5f_9366/Allover_Zebra_Animal_Print_Essentials_Tee_Grey_II5869_25_model.jpg",
        img4:"https://assets.adidas.com/images/w_600,f_auto,q_auto/bed046d4fdbd4b02a9fb116946d2ce56_9366/Allover_Zebra_Animal_Print_Essentials_Tee_Grey_II5869_01_laydown.jpg",
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
      {
        id: "7",
        title: 'Adizero Running Tee',
        price: '₹1,200.00',
        offer: 'Women sportswear',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/545db989cd4e4a95bf04afa8008c0425_9366/City_Escape_Loose-Fit_Tee_White_HU0239_21_model.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/e6b849cea7754080a174afa8008c0e15_9366/City_Escape_Loose-Fit_Tee_White_HU0239_23_hover_model.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/7a7e5d9953a944cf8291afa8008c17aa_9366/City_Escape_Loose-Fit_Tee_White_HU0239_25_model.jpg',
        img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/9fda234f00f8426c8228afa8008c43c7_9366/City_Escape_Loose-Fit_Tee_White_HU0239_01_laydown.jpg",
        size: [7, 8, 9, 10],
      },
      {
        id: "8",
        title: 'Adicolor 3-Stripes Camisole',
        price: '₹1,440.00',
        offer: 'Women • Originals',
        img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f048d9d929f45e2874e19d1ef402c9b_9366/adicolor-3-stripes-camisole.jpg',
        img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0aeed36fe0e4b68a99fc853fb372b6e_9366/adicolor-3-stripes-camisole.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/854bc57b0f4841a9a49cce34af1b1ad2_9366/Adicolor_3-Stripes_Camisole_Green_IN8370_25_model.jpg',
        img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/d7c67597aa39469c89f6a74f7d621353_9366/Adicolor_3-Stripes_Camisole_Green_IN8370_01_laydown.jpg",
        size: [7, 8, 9, 10],
      },
      {
        id: "9",
        title: 'NY Tee',
        price: '₹1,600.00',
        offer: 'Women • Originals',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/925088d62c37448c85a790ec07590cc3_9366/NY_Tee_Brown_IR5276_21_model.jpg',
        img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f2191999d74e46a9a964ab2d3caa9c1d_9366/ny-tee.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b3f36f8f619242e4b0df3a74e4edc6d2_9366/NY_Tee_Brown_IR5276_25_model.jpg',
        img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/0bc5f8f214914a88a2311599cc2c22d4_9366/NY_Tee_Brown_IR5276_01_laydown.jpg",
        size: [7, 8, 9, 10],
      },
      {
        id: "10",
        title: 'Graphic Tee',
        price: '₹2,400.00',
        offer: 'Women • Originals',
        img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/faf94da1d0114e54b66daf7f0122aba5_9366/graphic-tee.jpg',
        img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b71b90cf9d614d3083baaf7f0122b9f8_9366/graphic-tee.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/0784a21d4ef44c75b6f7af7f0122c75b_9366/Graphic_Tee_Pink_IC6046_25_model.jpg',
        img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/696870fdff274c7fa9f8af7f0123120a_9366/Graphic_Tee_Pink_IC6046_01_laydown.jpg",
        size: [7, 8, 9, 10],
      },
      {
        id: "11",
        title: 'SS CHANGE TEE',
        price: '₹800.00',
        offer: 'Women • Originals',
        img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5ad431822724421a861926091777a938_9366/SS_CHANGE_TEE_White_IT0219_21_model.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/19aa9e81682f4cd7a795da238070cad2_9366/SS_CHANGE_TEE_White_IT0219_22_model.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/22742c80792b4bbbb2ae39fae4702259_9366/SS_CHANGE_TEE_White_IT0219_23_hover_model.jpg',
        img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/46fa83466d994f93978406846d30605b_9366/SS_CHANGE_TEE_White_IT0219_25_model.jpg",
        size: [7, 8, 9, 10],
      },
      {
        id: "12",
        title: 'Graphics Regular Tee',
        price: '₹1,200.00',
        offer: 'Women • Originals',
        img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/fcb65f792080486ea75639a11033ec15_9366/graphics-regular-tee.jpg',
        img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3989f98284114f81bec35964873253e7_9366/graphics-regular-tee.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/167643d612444a2b97b85e91024b8384_9366/Graphics_Regular_Tee_Black_IK0496_25_model.jpg',
        img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/cfa0706525e84d4fa108115e8b3afee4_9366/Graphics_Regular_Tee_Black_IK0496_01_laydown.jpg",
        size: [7, 8, 9, 10],
      },
      {
        id: "13",
        title: 'Premium Essentials Tee',
        price: '₹1,600.00',
        offer: 'Women lifestyle',
        img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3991ba7136be49b4bd70f278fd139477_9366/premium-essentials-tee.jpg',
        img2: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/e8a2ba3dd2fc4f949b6f7776bb87f910_9366/Premium_Essentials_Tee_Grey_IK5765_23_hover_model.jpg',
        img3: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/c41c16b8aa77462eb16c8a4610ba677b_9366/Premium_Essentials_Tee_Grey_IK5765_25_model.jpg',
        img4: "https://assets.adidas.com/images/w_600,f_auto,q_auto/7c42794194fe423c9ff50ebb1d3f04d2_9366/Premium_Essentials_Tee_Grey_IK5765_01_laydown.jpg",
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