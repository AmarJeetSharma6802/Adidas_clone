import React, { useContext,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../reducer/CartProvider";
import '../men/men.css'
import './Selected.css'

function SelectImage() {
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
      title: 'AEROREADY 3-Stripes Woven Shorts',
      price: '₹1,510.00',
      offer: 'Boys/Girls sportswear',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/15feb24721aa4f398a72af9b00e64369_9366/dailyrun-7-8-leggings.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/85abd650f3854fa5bd41af9b00e64b2c_9366/dailyrun-7-8-leggings.jpg',
      img3: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/221b3fb3d4ac4f708f3971061fd6f7d6_9366/Ultimate_Jacket_Green_HY1423_HM4.jpg',
      img4: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/221b3fb3d4ac4f708f3971061fd6f7d6_9366/Ultimate_Jacket_Green_HY1423_HM4.jpg',
      
      size: [7, 8, 9, 10],
    },
    {
      id: '2',
      title: 'Future Icons Logo 8-Inch Shorts',
      price: '₹1,200.00',
      offer: 'Lightweight, breathable',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/69b3a57defa048aa91d929db9324fd1d_9366/ultimate-jacket.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a612c9108c3a4c069af331e704892fdd_9366/ultimate-jacket.jpg',
      img3: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/221b3fb3d4ac4f708f3971061fd6f7d6_9366/Ultimate_Jacket_Green_HY1423_HM4.jpg',
      img4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e2284c63c20b4d50a5bc0a01f5192961_9366/Ultimate_Jacket_Green_HY1423_HM5.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: '3',
      title: 'Adizero Running Tank Top',
      price: '₹1,840.00',
      offer: 'Women Running',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f429b8e52b8b40a4b45a476c247fe34f_9366/adizero-running-tank-top.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/539c2f3957164370b5e80b1be919621f_9366/adizero-running-tank-top.jpg',
      img3:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1aa4c9e24cc1498b8d9b0ac53398b445_9366/Adizero_Running_Tank_Top_Orange_IQ4925_25_model.jpg",
      img4:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/66a8ec4af88e4cf58478786e3d158a3b_9366/Adizero_Running_Tank_Top_Orange_IQ4925_01_laydown.jpg",
      size: [7, 8, 9, 10],
      
    },
    {
      id: '4',
      title: 'Adizero Lite Short Leggings',
      price: '₹2,240.00',
      offer: 'Women Running',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4441bb8d64934161b02dc385d2404686_9366/adizero-lite-short-leggings.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a62edf4a835b41a4b49e16e28890abb5_9366/adizero-lite-short-leggings.jpg',
      img3:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ef717d794ca41c69e0aa7e62e712145_9366/Adizero_Lite_Short_Leggings_Black_IU1634_HM4.jpg",
      img4:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9e7f84ad1644c69abb62d024fa957bd_9366/Adizero_Lite_Short_Leggings_Black_IU1634_HM5.jpg",
      size: [7, 8, 9, 10],
      
    },
    {
      id: '5',
      title:"Protect at Day X-City Running HEAT.RDY Shorts",
      price: '₹2,200.00',
      offer: 'Women Running',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f93ba5c8aff3482980d8af9e00fc02b1_9366/protect-at-day-x-city-running-heat.rdy-shorts.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4aed6e56ba9941419188af9e00fc0ba1_9366/protect-at-day-x-city-running-heat.rdy-shorts.jpg',
      img3:"https://assets.adidas.com/images/w_600,f_auto,q_auto/c18223ce8e584155b2ffaf9e00fc1498_9366/Protect_at_Day_X-City_Running_HEAT.RDY_Shorts_Orange_IC8270_25_model.jpg",
      img4:"https://assets.adidas.com/images/w_600,f_auto,q_auto/dc30f068f5ac45f5aef9af9e00fc49d0_9366/Protect_at_Day_X-City_Running_HEAT.RDY_Shorts_Orange_IC8270_01_laydown.jpg",
      size: [7, 8, 9, 10],
      
    },
    {
      id: '6',
      title:"adidas by Stella McCartney TruePace Running Leggings",
      price: '₹3,839.00',
      offer: 'Women adidas_by_stella_mccartney',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f52596ab43be453ab399af7e01125800_9366/adidas-by-stella-mccartney-truepace-running-leggings.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a642fe7985420d9e37af7e01126db5_9366/adidas-by-stella-mccartney-truepace-running-leggings.jpg',
      img3:"https://assets.adidas.com/images/w_600,f_auto,q_auto/e82ff85467e84458a2d3df30f9fef3a1_9366/Own_the_Run_Full-Length_Leggings_Black_IS9906_23_hover_model.jpg",
      img4:"https://assets.adidas.com/images/w_600,f_auto,q_auto/06fff0cf514242989be3ed115e679ef2_9366/Own_the_Run_Full-Length_Leggings_Black_IS9906_21_model.jpg",
      size: [7, 8, 9, 10],
      
    },
    {
      id: '7',
      title:"Adizero Control Running Short Leggings",
      price: '₹4,400.00',
      offer: 'Women Running',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb8a179c1fea4fb3b48af46bc390dd48_9366/adizero-control-running-short-leggings.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/67fddfd41e384a2caddcffbae5a21c08_9366/adizero-control-running-short-leggings.jpg',
      img3:"https://assets.adidas.com/images/w_600,f_auto,q_auto/e46811f1fa144a2b9d1d9a9761831833_9366/Adizero_Control_Running_Short_Leggings_Blue_IM4162_01_laydown.jpg",
      img4:"https://assets.adidas.com/images/w_600,f_auto,q_auto/8b917074a35c43eb911814803c49c4b7_9366/Adizero_Control_Running_Short_Leggings_Blue_IM4162_25_model.jpg",
      size: [7, 8, 9, 10],
      
    },
    {
      id: '8',
      title:"Run It Shorts",
      price: '₹1,840.00',
      offer: 'Men running',
      img1: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9d07b59d1aa54594a6f53bae52faa0b7_9366/Run_It_Shorts_Black_HZ4510_25_model.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/79f8740835f94e7b9f7860c1b95924d8_9366/run-it-shorts.jpg',
      img3:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/654c998363264d0fb06d7a31fc6f14eb_9366/run-it-shorts.jpg",
      img4:"https://assets.adidas.com/images/w_600,f_auto,q_auto/7a9ac4b5cf8649fc9f69f49ea229694a_9366/Run_It_Shorts_Black_HZ4510_01_laydown.jpg",
      size: [7, 8, 9, 10],
      
    },
    {
      id: '9',
      title:"FBrand Love Tee",
      price: '₹1,200.00',
      offer: 'Men running',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7fd7d35fbd0a4a2699475de0bc413d4d_9366/brand-love-tee.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f930c7953c2c47b9afd78519ff10c668_9366/brand-love-tee.jpg',
      
      size: [7, 8, 9, 10],
      
    },
    {
      id: '10',
      title:"ASTOUNDRUN SHOES",
      price: '₹1,720.00',
      offer: 'Men running',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8271eef9e1d44116837c2a9b3c07be1d_9366/astoundrun-shoes.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a395a4c377ce4638ad1b84d4cf2e6c6b_9366/astoundrun-shoes.jpg',
      img3:"https://assets.adidas.com/images/w_600,f_auto,q_auto/93145a66d35d41859353bf0c4fcffc55_9366/ASTOUNDRUN_SHOES_Grey_IU6246_03_standard.jpg",
      img4:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/927db81453014e6cbc6924cc6a10285d_9366/ASTOUNDRUN_SHOES_Grey_IU6246_04_standard.jpg",
      
      size: [7, 8, 9, 10],
      
    },
    {
      id: '11',
      title:"Galaxy 6 Shoes",
      price: '₹2,700.00',
      offer: 'Men running',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/eef4930830d54c96a356ae8101677b5e_9366/galaxy-6-shoes.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2eba0f3640b14e7b9dc3ae81016644cf_9366/galaxy-6-shoes.jpg',
      img3:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bcee6d26e9734d118900ae8101673bab_9366/Galaxy_6_Shoes_Black_GW4138_04_standard.jpg",
      img4:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bcee6d26e9734d118900ae8101673bab_9366/Galaxy_6_Shoes_Black_GW4138_04_standard.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: '12',
      title:"RUNNING ADI CLASSIC SNEAKERS",
      price: '₹1,400.00.00',
      offer: 'Men running',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad9d160ec89e41c0ab5dae1900caffac_9366/running-adi-classic-sneakers.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/21e4c3fc5f9543b0ab2cae1900cafe50_9366/running-adi-classic-sneakers.jpg',
      img3:"https://assets.adidas.com/images/w_600,f_auto,q_auto/479e6f1eb48141fe9831ae1900cb029a_9366/RUNNING_ADI_CLASSIC_SNEAKERS_Grey_EY2913_03_standard.jpg",
      img4:"https://assets.adidas.com/images/w_600,f_auto,q_auto/10372306f7714b1eb6c3ae1900cb05b9_9366/RUNNING_ADI_CLASSIC_SNEAKERS_Grey_EY2913_04_standard.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: '13',
      title:"JAUNTZA SHOES",
      price: '₹1,400.00.00',
      offer: 'Men running',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d4bf0a1f519c4b30abce1f73b9c5d1ea_9366/jauntza-shoes.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/66db97a6ea0345aabe5948dd049424d3_9366/jauntza-shoes.jpg',
      img3:"https://assets.adidas.com/images/w_600,f_auto,q_auto/b11cbac52988411dba72e1a99627060b_9366/JAUNTZA_SHOES_Blue_IQ9800_03_standard.jpg",
      img4:"https://assets.adidas.com/images/w_600,f_auto,q_auto/8cf3e410300d4c7aaae4b45aecc4af9b_9366/JAUNTZA_SHOES_Blue_IQ9800_04_standard.jpg",
      size: [7, 8, 9, 10],
    },
    {
      id: '14',
      title:"AMALGO SHOES",
      price: '₹1,840.00.00',
      offer: 'Men running',
      img1: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/268d561c255d4f45b2d6f63d873cd079_9366/amalgo-shoes.jpg',
      img2: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/85a360f7cff94431931c00df18edd3a8_9366/amalgo-shoes.jpg',
      img3:"https://assets.adidas.com/images/w_600,f_auto,q_auto/07fc19cc8f6847f59b6c8f5954e5cd00_9366/AMALGO_SHOES_Black_IU6241_03_standard.jpg",
      img4:"https://assets.adidas.com/images/w_600,f_auto,q_auto/420a4c3863e148e797a98f4ec57e7c78_9366/AMALGO_SHOES_Black_IU6241_04_standard.jpg",
      size: [7, 8, 9, 10],
    },

    
  ];

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
  );
}

export default SelectImage;
