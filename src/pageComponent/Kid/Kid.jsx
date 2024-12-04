import React,{useState} from 'react'
import { useNavigate,Link } from "react-router-dom";
import ShowFillter from "../men/ShowFillter"; 

function Kid() {
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
      <img src={img1} alt={title} className="first"  />
      <Link to={`/SelectedKidsImg/${id}`}>
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
          <span className="men-span">Home </span> / boys/girls
        </button>
      </div>
      <div className="felx-fillter">
        <h1 className="men-h1">Boys/Girls Clothing <span className='reponsive-hide'>for Kids & Teenagers - Ages 8 to 16</span></h1>

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
          id={1}
            img1="https://assets.adidas.com/images/w_600,f_auto,q_auto/648945cc71274f108cc056878aa51a14_9366/Tee_Kids_Black_IW3495_21_model.jpg"
            img2="https://assets.adidas.com/images/w_600,f_auto,q_auto/9b4ff670c2874385907f72feea3b2ca7_9366/Tee_Kids_Black_IW3495_23_hover_model.jpg"
            title="Tee Kids"
            price="₹1,510.00"
            offer="Kids Unisex • Originals"
          />
          <GalleryItem
          id={2}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7ef4d64083a418eb07faf5400fec2d0_9366/future-icons-logo-8-inch-shorts.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c9d9d23685d444b81c7af5400fec99e_9366/future-icons-logo-8-inch-shorts.jpg"
            title="Future Icons Logo 8-Inch Shorts"
            price="₹1,200.00"
            offer="Kids sportswear"
          />
          <GalleryItem
          id={3}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f41e54f29b8247b1ac58172dd00c95f7_9366/future-icons-logo-8-inch-shorts.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8048d9426f4c442cb4404a51d26989d2_9366/future-icons-logo-8-inch-shorts.jpg"
            title="Ekiden Running Tee (Gender Neutral)"
            price="₹1,610.00"
            offer="Running"
          />
          <GalleryItem
          id={4}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bd9292482ba4af287c4af7200c90020_9366/tiro-23-league-shorts.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/03bd18e996704c189cb1af7200c90857_9366/tiro-23-league-shorts.jpg"
            title="Tiro 23 League Shorts"
            price="₹800.00"
            offer="Kid Fottball"
          />
          <GalleryItem
          id={5}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/38a6e7f9a3d145c8baefaf4e00af23ec_9366/arkd3-allover-print-tee.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2268dace6ec14f328435af4e00af2c32_9366/arkd3-allover-print-tee.jpg"
            title="ARKD3 Allover Print Tee"
            price="₹1,200.00"
            offer="Kids Training"
          />
          <GalleryItem
          id={6}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/eecaa72599bf45ca8544716d082f39b8_9366/adidas-adventure-tee.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/594517bdfc7b4f8d873a797037ae8b7e_9366/adidas-adventure-tee.jpg"
            title="adidas Adventure Tee"
            price="₹800.00"
            offer="First time on discount"
          />
          <GalleryItem
          id={7}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/af289d29224c43ce93689c4ed796e7fb_9366/future-icons-allover-print-pants-kids.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f9042e71e3e3412e961439fc9593e738_9366/future-icons-allover-print-pants-kids.jpg"
            title="Future Icons Allover Print Pants Kids"
            price="₹1,920.00"
            offer="Kids Training"
          />
          <GalleryItem
          id={8}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4557cc83660c4d81aa648cf2457cf50d_9366/adidas-adventure-pants.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/70b351d7bd5a49cf94669e9315cb3016_9366/adidas-adventure-pants.jpg"
            title="adidas Adventure Pants"
            price="₹1,840.00"
            offer="Kid Lifestyle"
          />
          <GalleryItem
          id={9}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e47c8dc2f2ed4557a511af8c00a0f258_9366/football-inspired-predator-jersey.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a2d2da1abbfa44978317af8c00a0f9a2_9366/football-inspired-predator-jersey.jpg"
            title="Football-Inspired Predator Jersey"
            price="₹1,200.00"
            offer="Kid trainning"
          />
          <GalleryItem
          id={10}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c1398685f4f48508886c52ddb0df950_9366/future-icons-allover-print-hooded-sweatshirt-kids.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/77a09a6b260e40a99fa8048241fdd743_9366/future-icons-allover-print-hooded-sweatshirt-kids.jpg"
            title="Future Icons Allover Print Hooded Sweatshirt Kids"
            price="₹2,120.00"
            offer="Kid trainning"
          />
          <GalleryItem
          id={11}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/354da55c74dd4022952daf5600b2ea07_9366/arkd3-allover-print-tee.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/636870bcdbe2459cbe0daf5600b2f2e8_9366/arkd3-allover-print-tee.jpg"
            title="LOUNGE TEE"
            price="₹1,200.00"
            offer="Kid Training"
          />
         
          <GalleryItem
          id={12}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2dd721ef95624bfe91f957241b7030d7_9366/brand-love-allover-print-full-zip-hoodie-kids.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/748e9b3bef8c472abab0ae7532144a39_9366/brand-love-allover-print-full-zip-hoodie-kids.jpg"
            title="Brand Love Allover Print Full-Zip Hoodie Kids"
            price="₹1,600.00"
            offer="Selling fast"
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d1ac3dec2634a1e931aaf5601183b42_9366/essentials-small-logo-chelsea-shorts.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d8cc06879da408dbd6baf560118415b_9366/essentials-small-logo-chelsea-shorts.jpg"
            title="Essentials Small Logo Chelsea Shorts"
            price="₹740.00"
              offer="Kid Training"
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3f8c8c8a01414fe9b643fd7112cf4f33_9366/graphic-tee-kids.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/844100ac633e444e8fa3f1833a2105a6_9366/graphic-tee-kids.jpg"
            title="Graphic Tee Kids"
            price="1,655.00"
            offer="First time on discount"
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/aaece4b92feb4c8bb5b0faf177098b72_9366/manchester-united-24-25-home-jersey-kids.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e3b1e1d20454494fb92009c2f35e1fbe_9366/manchester-united-24-25-home-jersey-kids.jpg"
            title="Manchester United 24/25 Home Jersey Kids"
            price="₹3,129.00"
            offer="Kid Football"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/48b55f6112cc452d82d943e95d9586d0_9366/juventus-24-25-away-jersey-kids.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/692337842f23451ea5d2fe3b39a31450_9366/juventus-24-25-away-jersey-kids.jpg"
            title="Juventus 24/25 Away Jersey Kids"
            price="₹3,999.00"
            ooffer="Kid Football"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e6268dfb97241169337aa6cf4614eb8_9366/tiro-tee-kids.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d411b78e247e4418bdde50a5fba7591a_9366/tiro-tee-kids.jpg"
            title="FTiro Tee Kids"
            price="₹2,499.00"
            offer="Kids sportswear"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b898a9d1de84407181523c540fd2cecc_9366/adibreak-pants-kids.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff3fe1e355164293af58db60c991530b_9366/adibreak-pants-kids.jpg"
            title="Tank Dress"
            price="₹1,840.00"
            offer="Online Exclusive"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5610a42f5bb04d9fab8025036ad4aa50_9366/manchester-united-24-25-away-jersey-kids.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5758849db3474b47854f447b94f86a32_9366/manchester-united-24-25-away-jersey-kids.jpg"
            title="Manchester United 24/25 Away Jersey Kids"
            price="₹3,499.00"
            offer="Kids Football"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b89db5ce8f4a4bbca2a08fff6cecbd94_9366/adidas-x-disney-fantasia-vrct-jacket.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/1009198b1dc64434959d0b0277ba57b7_9366/adidas-x-disney-fantasia-vrct-jacket.jpg"
            title="adidas x Disney Fantasia VRCT Jacket"
            price="₹8,599.00"
            offer="Kids Lifestyle"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d1ac3dec2634a1e931aaf5601183b42_9366/essentials-small-logo-chelsea-shorts.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d8cc06879da408dbd6baf560118415b_9366/essentials-small-logo-chelsea-shorts.jpg"
            title="Essentials Small Logo Chelsea Shorts"
            price="₹720.00"
            offer="Kids sportswear"
          />
        </div>
      </div>
    </div>

    {/* Show Filter Component */}
    {showFilter && <ShowFillter toggleFilter={toggleFilter} />}
  </div>
  )
}

export default Kid