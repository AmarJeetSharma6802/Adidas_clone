import React, { useState, useEffect  } from "react";
import "./home.css"; // Ensure this contains the necessary styles
import FirstpageFourthContent from './FirstpageFourthContent';
import HomePageFivthpage from './HomePageFivthPage';
import { Link } from "react-router-dom";

function ThirdHome() {
  const items = [
    {
      id:1,
      src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/681a3c8857f64fe1a6d460d1cee082bf_faec/adidas_Basketball_Hoodie_Green_IN4242_HM1.jpg",
      label: "adidas Basketball Hoodie",
    },
    {
      id:2,
      src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/59460fb0bd584daa88fe9a383d088a9b_9366/Z.N.E._Hoodie_White_JF2454_21_model.jpg",
      label: "Z.N.E. HoodieF",
    },
    {
      id:3,
      src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/dcad06efe67044e799bcd07bbfb779ad_9366/Own_the_Run_Vest_Blue_IW0025_21_model.jpg",
      label: "Own the Run Vest",
    },
    {
      id:4,
      src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/9aefec2b65d043c584fffc3ae9ff385e_9366/India_Cricket_Anthem_Jacket_Women_Blue_JJ1159_21_model.jpg",
      label: "India Cricket Anthem Jacket Women",
    },
    {
      id:5,     
      src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/7ca49cc851a746aab5a26e5ab76b7667_9366/City_Escape_Utility_Vest_Black_IN3701_21_model.jpg",
      label: "City Escape Utility Vest",
    },
    {
      id:6,
      src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3ed9df62bec34b8b833a264a0fc2a689_9366/Sportswear_Fleece_Colorblock_Track_Suit_Blue_IX1278_21_model.jpg",
      label: "Sportswear Fleece Colorblock Track Suit",
    },
  ];

  const items1 = [
    {
      id:7,
      src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_00_standard.jpg",
      offer: "-30%",
      price: "5,400.50",
      label: "Superstar Shoes",
    },
    {
      id:8,
      src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/798672e3a6d24f5284b49ee12a9efa34_9366/Dame_8_EXTPLY_Shoes_Green_IF8148_01_standard.jpg",
      offer: "-20%",
      price: "6,299.50",
      label: "Dame 8 EXTPLY Shoes",
    },
    {
      id:9,
      src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/dd974c64e29f4b3aa61b2069133093e5_9366/NMD_R1_V2_Shoes_Yellow_IE2250_01_standard.jpg",
      offer: "-55%",
      price: "5 199.50",
      label: "NMD_R1 V2 Shoes",
    },
    {
      id:10,
      src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/11e1c6fbdb96497b92252eaf10d2fc14_9366/Adistar_Cushion_Shoes_White_IG6924_01_standard.jpg",
      offer: "-30%",
      price: "13,999.0",
      label: "Adistar Cushion Shoes",
    },
    {
      id:11,
      src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/76752172861843209f02aef900fd6858_9366/NMD_R1_Shoes_White_HQ4451_01_standard.jpg",
      offer: "-20%",
      price: "6 299.50",
      label: "NMD_R1 Shoes",
    },
    {
      id:12,
      src: "https://assets.adidas.com/images/w_600,f_auto,q_auto/04c768e54ae4492792cbadf000b5ab1a_9366/OZWEEGO_Shoes_Beige_GY6177_01_standard.jpg",
      offer: "-30%",
      price: "12,999.50",
      label: "OZWEEGO Shoes",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);  // Default to 3 items per carousel

  // Adjust the number of items to show based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(1);  // On small screens, show 1 item per slide
      } else if (window.innerWidth <= 1024) {
        setItemsToShow(2);  // On medium screens, show 2 items per slide
      } else {
        setItemsToShow(3);  // On larger screens, show 3 items per slide
      }
    };

    updateItemsToShow();  // Set items initially
    window.addEventListener("resize", updateItemsToShow); // Update on window resize

    return () => {
      window.removeEventListener("resize", updateItemsToShow); // Cleanup
    };
  }, []);

  const updateCarousel = (direction, setIndex, totalItems) => {
    if (direction === "prev") {
      setIndex((prev) => (prev > 0 ? prev - 1 : totalItems - itemsToShow));
    } else {
      setIndex((prev) => (prev < totalItems - itemsToShow ? prev + 1 : 0));
    }
  };

  return (
    <div>
      <div className="main-back-img">
        <div className="upto">
          <p className="upto-para Extra">UPTO 60% + EXTRA 20% OFF</p>
          <p className="upto-para first-page-buy">Buy More! Save More!</p>
          <div className="first-page-shop">
            <a href="#" className="shop-btn">Shop Now</a>
            <a href="#" className="shop-btn">Shop Women</a>
            <a href="#" className="shop-btn">Shop Men</a>
          </div>
        </div>
      </div>

      <div className="first-page-content">
        <h1 className="caroucel-top">Black Friday Steals You’ll Love!</h1>
        <div className="carousel">
          <div
            className="carousel-container"
            style={{
              transform: `translateX(-${(currentIndex * 75) / itemsToShow}%)`,
            }}
          >
            {items.map((item, index ,) => (
              <div className="carousel-item" key={index}>
                <Link to={`selectedHomeImg/${item.id}`}>
                  <img src={item.src} alt={item.label} />
                </Link>
                <p className="caroucel-first-para">{item.label}</p>
              </div>
            ))}
          </div>
          <button className="carousel-btn prev-btn" onClick={() => updateCarousel("prev", setCurrentIndex, items.length)}>
            &larr;
          </button>
          <button className="carousel-btn next-btn" onClick={() => updateCarousel("next", setCurrentIndex, items.length)}>
            &rarr;
          </button>
        </div>

        <h1 className="caroucel-top2">Biggest Deals on Your Must-Have Categories!</h1>
        <div className="carousel">
          <div
            className="carousel-container grid-container"
            style={{
              transform: `translateX(-${(currentIndex1 * 105) / itemsToShow}%)`,
            }}
          >
            {items1.map((item, index) => (
              <div className="carousel-item item2" key={index}>
                <Link to={`selectedHomeImg/${item.id}`}>
                  <img src={item.src} alt={item.label} />
                </Link>
                <div className="offer-first-page">
                  <p className="offer">{item.offer}</p>
                  <p className="price">{item.price}</p>
                </div>
                <p className="caroucel-first-para">{item.label}</p>
              </div>
            ))}
          </div>
          <button className="carousel-btn prev-btn btn-hide" onClick={() => updateCarousel("prev", setCurrentIndex1, items1.length)}>
            &larr;
          </button>
          <button className="carousel-btn next-btn btn-hide" onClick={() => updateCarousel("next", setCurrentIndex1, items1.length)}>
            &rarr;
          </button>
        </div>
      </div>

      <FirstpageFourthContent />
      <HomePageFivthpage />
    </div>
  );
}

export default ThirdHome;
