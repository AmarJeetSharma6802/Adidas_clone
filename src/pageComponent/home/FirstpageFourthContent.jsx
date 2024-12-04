import React, { useState, useEffect } from 'react';

function FirstpageFourthContent() {
  const items2 = [
    {
      src: "https://brand.assets.adidas.com/image/upload/f_gif,fl_lossy,q_auto/men_TC_test_cricket_52d6200883.gif",
      label: "Customize your jersey",
      name: "Support Team India in Style"
    },
    {
      srcVideo: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_400,w_400/fw24_avavav_educate_non_confirmed_hp_tc_d_f484bec222.mp4",
      label: "WINTER WEAR AT MIN. 50% OFF",
      name: "adidas Originals gets Avavavified"
    },
    {
      src: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/sportswear_fw24_fortnite_nam_launch_hp_navigation_card_teaser_dmt_2_4e11d634ad.jpg",
      label: "Victory in Every World You Play ",
      name: "Join the Three-Stripe Squad. "
    },
    {
      srcVideo: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_400,w_400/ss25_wales_bonner_launch_catlp_tc_d_8ac835a9f9.mp4",
      label: "adidas Originals by Wales Bonner",
      name:"A world within a world. Discover the collection."
    },
    {
      src: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/tc_korn_0576af7555.jpg",
      label: "Are you ready?!-",
      name:"KoRn is back for a second chapter. Explore the new collection now. "
    },
    {
      src: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/fw24_sl_72_launch_hp_tc_d_58a47cf235.jpg",
      label: "SL 72",
      name:"A 70s cult classic for Originals everywhere."
    },
    {
      srcVideo: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_400,w_400/football_fw24_predator_belligold_launch_hp_teaser_carousel_animated_d_6c504b16ad.mp4",
      label: "Predator",
      name:"Crafted for goals."
    },
  ];

  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // Default to 3 items

  // Dynamically adjust itemsToShow based on screen width
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

  const totalItems = items2.length;

  const updateCarousel2 = (direction) => {
    if (direction === "prev") {
      setCurrentIndex2((prev) => (prev > 0 ? prev - 1 : totalItems - itemsToShow));
    } else {
      setCurrentIndex2((prev) => (prev < totalItems - itemsToShow ? prev + 1 : 0));
    }
  };

  return (
    <div>
      <div className="fourth-content">
        <div className="img-fouth-content">
          <img
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/fw24_ec_clot_november_collection_tease_confirmed_hp_mh_d_b3dc2502fa.jpg"
            alt=""
            id="men-img"
          />
        </div>
        <div className="fourth-content-buy">
          <div className="november-collection">
            <h3 className="november-collection-h3">
              <span className="collection-h3">CLOT November Collection</span>{" "}
              <span className="collection-h3 h3span"> by Edison Chen</span>
            </h3>
          </div>
          <div className="adidas-orignal-collection">
            <p className="adidas-orignal-collection-para">
              <span className="adidas-orignal-collection-sapn">
                The CLOT November Collection by Edison Chen is a limited-edition{" "}
              </span>
              <span className="adidas-orignal-collection-sapn original-1">
                collaboration that brings together
              </span>
              <span className="adidas-orignal-collection-sapn original-2">
                the best
              </span>
            </p>
          </div>

          <div className="fourth-content-buy-btn">
            <button className="fourth-content-buy-now">Buy now →</button>
          </div>
        </div>
      </div>

      <div className="first-page-caroucel">
        <h1 className="caroucel-top">Black Friday Steals You’ll Love!</h1>
        <div className="carousel">
          <div
            className="carousel-container"
            style={{
              transform: `translateX(-${(currentIndex2 * 105) / itemsToShow}%)`,
              transition: 'transform 0.3s ease',  // smooth transition effect
            }}
          >
            {items2.map((item, index) => (
              <div className="carousel-item" key={index}>
                <a href="">
                  {item.srcVideo ? (
                    <video loop autoPlay muted className="first-page-caroucel-video">
                      <source src={item.srcVideo} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={item.src} alt={item.label} className="carousel-image"/>
                  )}
                </a>
                <p className="caroucel-first-para">{item.label}</p>
                {item.name && <a href="" className="last-caroucel">{item.name}</a>}
              </div>
            ))}
          </div>
          <button className="carousel-btn prev-btn" onClick={() => updateCarousel2("prev")}>
            &larr;
          </button>
          <button className="carousel-btn next-btn" onClick={() => updateCarousel2("next")}>
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstpageFourthContent;
