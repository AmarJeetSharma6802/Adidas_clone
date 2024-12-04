import React,{useState} from 'react'
import { useNavigate,Link } from "react-router-dom";
import ShowFillter from "../men/ShowFillter"; 

function Sports() {
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
        <Link to={`/selectimage/${id}`}>
          <img src={img2} alt={title} className="second" />
        </Link>
        <div className="details">
          <p className="title">{title}</p>
          <p className="price">{price}</p>
          <p className="offer">{offer}</p>
        </div>
      </div>
    );
  
    const toggleFilter = () => {
      setShowFilter((prev) => !prev);
    };
  return (
    <div>
    <div className="women">
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
          <span className="men-span">Home </span> / Sports
        </button>
      </div>
      <div className="felx-fillter">
        <h1 className="men-h1">Running clothing & Shoes</h1>

        <div className="fillterbtn">
          <button className="fillter-i" onClick={toggleFilter}>
            Filter & Sort <i className="fa-solid fa-sliders"></i>
          </button>
        </div>
      </div>

      <div className="men-image">
        <div className="gallery">
          {/* Simple GalleryItems with props passed directly */}
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/15feb24721aa4f398a72af9b00e64369_9366/dailyrun-7-8-leggings.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/85abd650f3854fa5bd41af9b00e64b2c_9366/dailyrun-7-8-leggings.jpg"
            title="AEROREADY 3-Stripes Woven Shorts"
            price="₹1,510.00"
            offer="Boys/Girls sportswear"
            id={1}
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/69b3a57defa048aa91d929db9324fd1d_9366/ultimate-jacket.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a612c9108c3a4c069af331e704892fdd_9366/ultimate-jacket.jpg"
            title="Future Icons Logo 8-Inch Shorts"
            price="₹1,200.00"
            offer="men sportswear"
            id="2"
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f429b8e52b8b40a4b45a476c247fe34f_9366/adizero-running-tank-top.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/539c2f3957164370b5e80b1be919621f_9366/adizero-running-tank-top.jpg"
            title="Adizero Running Tank Top"
            price="₹1,840.00"
            offer="Women Running"
              id="3"
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4441bb8d64934161b02dc385d2404686_9366/adizero-lite-short-leggings.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a62edf4a835b41a4b49e16e28890abb5_9366/adizero-lite-short-leggings.jpg"
            title="Adizero Lite Short Leggings"
            price="₹2,240.00"
            offer="Women Running"
            id="4"
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f93ba5c8aff3482980d8af9e00fc02b1_9366/protect-at-day-x-city-running-heat.rdy-shorts.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4aed6e56ba9941419188af9e00fc0ba1_9366/protect-at-day-x-city-running-heat.rdy-shorts.jpg"
            title="Protect at Day X-City Running HEAT.RDY Shorts"
            price="₹2,200.00"
              offer="Women Running"
              id="5"
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f52596ab43be453ab399af7e01125800_9366/adidas-by-stella-mccartney-truepace-running-leggings.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a642fe7985420d9e37af7e01126db5_9366/adidas-by-stella-mccartney-truepace-running-leggings.jpg"
            title="adidas by Stella McCartney TruePace Running Leggings"
            price="₹3,839.00"
            offer="Women adidas_by_stella_mccartney"
            id={6}
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb8a179c1fea4fb3b48af46bc390dd48_9366/adizero-control-running-short-leggings.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/67fddfd41e384a2caddcffbae5a21c08_9366/adizero-control-running-short-leggings.jpg"
            title="Adizero Control Running Short Leggings"
            price="₹4,400.00"
            offer="Women Running"
            id={7}
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/79f8740835f94e7b9f7860c1b95924d8_9366/run-it-shorts.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/654c998363264d0fb06d7a31fc6f14eb_9366/run-it-shorts.jpg"
            title="Run It Shorts"
            price="₹1,840.00"
            offer="Men running"
            id={8}
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7fd7d35fbd0a4a2699475de0bc413d4d_9366/brand-love-tee.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f930c7953c2c47b9afd78519ff10c668_9366/brand-love-tee.jpg"
            title="FBrand Love Tee"
            price="₹1,200.00"
            offer="Men Running"
            id={9}
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8271eef9e1d44116837c2a9b3c07be1d_9366/astoundrun-shoes.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a395a4c377ce4638ad1b84d4cf2e6c6b_9366/astoundrun-shoes.jpg"
            title="ASTOUNDRUN SHOES"
            price="₹1,720.00"
            offer="Men Running"
            id={10}
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/eef4930830d54c96a356ae8101677b5e_9366/galaxy-6-shoes.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2eba0f3640b14e7b9dc3ae81016644cf_9366/galaxy-6-shoes.jpg"
            title="Galaxy 6 Shoes"
            price="₹2,700.00"
              offer="Men Running"
              id={11}
          />
         
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad9d160ec89e41c0ab5dae1900caffac_9366/running-adi-classic-sneakers.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/21e4c3fc5f9543b0ab2cae1900cafe50_9366/running-adi-classic-sneakers.jpg"
            title="RUNNING ADI CLASSIC SNEAKERS"
            price="₹1,400.00"
             offer="Men Running"
             id={12}
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d4bf0a1f519c4b30abce1f73b9c5d1ea_9366/jauntza-shoes.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/66db97a6ea0345aabe5948dd049424d3_9366/jauntza-shoes.jpg"
            title="JAUNTZA SHOES"
            price="₹1,440.00"
            offer="Men Running"
            id={13}
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/268d561c255d4f45b2d6f63d873cd079_9366/amalgo-shoes.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/85a360f7cff94431931c00df18edd3a8_9366/amalgo-shoes.jpg"
            title="AMALGO SHOES"
            price="1,840.00"
            offer="Men Running"
            id={14}
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/51fc10d5c9414f4289c8598ebb90f9da_9366/jauntza-shoes.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc704e52bb9d4c84b8fadfab3f9e5018_9366/jauntza-shoes.jpg"
            title="JAUNTZA SHOES"
            price="₹1,489.00"
             offer="Men Running"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/35eb196ff0e94a8da0d99e0810a81d7a_9366/rayrun-shoes.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6bf1184b22d24c059390805394995ff1_9366/rayrun-shoes.jpg"
            title="RAYRUN SHOES"
            price="₹1,899.00"
            offer="Men Running"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/1664e17f9cde4ea48e51aede0080c743_9366/adi-ease-shoes.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/20828c9e4d69409ea4f3aede0080cbba_9366/adi-ease-shoes.jpg"
            title="ADI EASE SHOES"
            price="₹1,499.00"
           offer="Men Running"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/efa63b08968649edb35db4ba0c982578_9366/adi-osparna-shoes.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/09232ba4b551400f843fece62f490123_9366/adi-osparna-shoes.jpg"
            title="ADI OPSARNA SHOES"
            price="₹2,120.00"
            offer="Men Running"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a0fe59ae076349babdc11a586be62e7d_9366/running-primeweave-short-leggings.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2c65f7cee2d04f68bd8ca0524669a5da_9366/running-primeweave-short-leggings.jpg"
            title="Running Primeweave Shorts leggings"
            price="₹3,440.00"
            offer="Men Running"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/125e515bf34c4ead9d638dae6d6caa95_9366/adizero-promo-running-singlet.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/11301b04d20c4074baaa96f098ecfa53_9366/adizero-promo-running-singlet.jpg"
            title="aAdizero Promo Running Singlet"
            price="₹2,599.00"
            offer="Men Running"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a22295ffb0634434a4502ff27eb008b9_9366/own-the-run-tee.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b198c53abe3a4ffcb6c8f35ad5bacd13_9366/own-the-run-tee.jpg"
            title="OWN THE RUN TEE  "
            price="₹999.00"
            offer="Men Running"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a450b257171498b93f44a2a14d42b4b_9366/break-the-norm-shorts.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/417c3fc9e74b4ce7b82f1cc1c3cc03de_9366/break-the-norm-shorts.jpg"
            title="Own The Run 3-Stripes Shorts"
            price="₹1,600.00"
            offer="Men Running"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/94fcc1d53d7243508ab930835a5c60e9_9366/run-it-shorts.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/55e6228a9e2644a986f5275012c3ba22_9366/run-it-shorts.jpg"
            title="Break The Norm Shorts"
            price="₹1,199.00"
            offer="Men Running"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4fc33ba102c24cb4b6ad7001b9626a1c_9366/own-the-run-tee.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/11d3b6caf711424ead4d71a8a9806749_9366/own-the-run-tee.jpg"
            title="OWN THE RUN TEE  "
            price="₹999.00"
            offer="Men Running"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/0f539a52bd4a474b83fe3128edfa672a_9366/adizero-half-zip-running-vest.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/961458873ab946978ead5dd1da8aa8ff_9366/adizero-half-zip-running-vest.jpg"
            title="Adizero Half-Zip Running Vest"
            price="₹2,799.00"
            offer="women Running"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/40bce8d13c854cc0b446b6c6128d1501_9366/road-to-records-booty-shorts.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/525fbebd2ede48f598d764f460f35a0e_9366/road-to-records-booty-shorts.jpg"
            title="Road to Records Booty Shorts"
            price="₹3,499.00"
            offer="women Running"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f2f04815999b4b94bc60af6200c5c33c_9366/medium-support-running-pocket-bra.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf1f3abf66f1452b892faf6200c5d50e_9366/medium-support-running-pocket-bra.jpg"
            title="Medium-Support Running Pocket Bra"
            price="₹2,499.00"
            offer="Women Gym & Training"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/1376d828f5ec4c9aba234bceff68a13e_9366/predator-accuracy.4-flexible-ground-boots.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/26f9ef043c0c48029f9dce2c9761ccd5_9366/predator-accuracy.4-flexible-ground-boots.jpg"
            title="Predator Accuracy.4 Flexible Ground Boots"
            price="₹1,599.00"
            offer="Kids fooball"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e02cf0ee0e9e40bebc20ae14007a2c07_9366/x-speedflow.3-firm-ground-boots.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/04d0067d7fcb4daf8d72ae13010d0191_9366/x-speedflow.3-firm-ground-boots.jpg"
            title="X Crazyfast Messi Club Flexible Ground Boots"
            price="₹2,599.00"
            offer="Kids fooball"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/db64cbb63d8c45f1a731ad7b00b41bda_9366/copa-sense.4-flexible-ground-boots.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/db64cbb63d8c45f1a731ad7b00b41bda_9366/copa-sense.4-flexible-ground-boots.jpg"
            title="Copa Sense.4 Flexible Ground Boots"
            price="₹2,499.00"
            offer="Kids fooball"
          />
        </div>
      </div>
    </div>

    {/* Show Filter Component */}
    {showFilter && <ShowFillter toggleFilter={toggleFilter} />}
  </div>
  )
}

export default Sports