import React,{useState} from 'react'
import { useNavigate,Link } from "react-router-dom";
import ShowFillter from "../men/ShowFillter";  // Import the ShowFillter component
import "./women.css"
function Women() {

  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);  // Local state to manage filter visibility

  // const filterDropdown = useRef(null);
  // const filtershow = useRef(null);
  // const pruductShow = useRef(null);

  const back = () => {
    navigate(-1);
  };
  const backHome = () => {
    navigate("/");
  };

  const GalleryItem = ({ img1, img2, title, price, offer,id }) => (
    <div className="img-container">
      <img src={img1} alt={title} className="first" />
      <Link to={`/SelectedWomensImg/${id}`}>
          <img src={img2} alt={title} className="second" />
        </Link>
      <div className="details">
        <p className="title">{title}</p>
        <p className="price">{price}</p>
        <p className="offer">{offer}</p>
      </div>
    </div>
  );

  // Function to toggle the visibility of the filter
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
          <span className="men-span">Home </span> / women
        </button>
      </div>
      <div className="felx-fillter">
        <h1 className="women-h1">Women's T-Shirts</h1>

        <div className="fillterbtn">
          <button className="fillter-i" onClick={toggleFilter}>
          <span className="hide-small-screen">Filter & Sort</span><i className="fa-solid fa-sliders"></i>
          </button>
        </div>
      </div>

      <div className="men-image">
        <div className="gallery">
          {/* Simple GalleryItems with props passed directly */}
          <GalleryItem
          id={1}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2e8c4096cad54782bc66f879b3a2168c_9366/sleeveless-bodysuit.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/149a3d1316e8477d9ead7753f6f4cdb2_9366/sleeveless-bodysuit.jpg"
            title="Sleeveless Bodysuit"
            price="₹1,610.00"
            offer="Women originals"
          />
          <GalleryItem
          id={2}
            img1="https://assets.adidas.com/images/w_600,f_auto,q_auto/3757395694ec49f7bd53fbcef39640ee_9366/WTR_DESIGNED_4_TRAINING_SHORTS_Black_IV8172_25_model.jpg"
            img2="https://assets.adidas.com/images/w_600,f_auto,q_auto/30283966b7474c62b47dbdb396ab1221_9366/WTR_DESIGNED_4_TRAINING_SHORTS_Black_IV8172_23_hover_model.jpg"
            title="SS CHANGE TEE"
            price="₹700.00"
            offer="Women Training"
          />
          <GalleryItem
          id={3}
            img1="https://assets.adidas.com/images/w_600,f_auto,q_auto/a35f68fb7ede4fcbafd7e12503cebca7_9366/Allover_Zebra_Animal_Print_Essentials_Tee_Grey_II5869_21_model.jpg"
            img2="https://assets.adidas.com/images/w_600,f_auto,q_auto/3c85c610644d4ed09b5169b6eb4fc65d_9366/Allover_Zebra_Animal_Print_Essentials_Tee_Grey_II5869_23_hover_model.jpg"
            title="Allover Zebra Animal Print Essentials Tee"
            price="₹1,610.00"
            offer="Women • Originals"
          />
          <GalleryItem
          id={4}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b91acc9332a246e2950d03f9f92c4d15_9366/essentials-rib-tee.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a2eb960d71b479e9d198fbd541f0a30_9366/essentials-rib-tee.jpg"
            title="Essentials Rib Tee"
            price="₹1,200.00"
            offer="First time on discount"
          />
          <GalleryItem
          id={5}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d33d12046fd94e44ad980ce4e4f57ed8_9366/tiro-summer-tube-top-with-detachable-straps.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/64148f300326476792f515b73934dc1a_9366/tiro-summer-tube-top-with-detachable-straps.jpg"
            title="Tiro Summer Tube Top With Detachable Straps"
            price="₹1,200.00"
            offer="Women sportswear"
          />
          <GalleryItem
          id={6}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/1c90a7d70f1a4b06824f94cdf31c583d_9366/adidas-originals-x-kseniaschnaider-graphic-tee.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/efee0f31c698410195a1ef8f69fe46c4_9366/adidas-originals-x-kseniaschnaider-graphic-tee.jpg"
            title="adidas Originals x KSENIASCHNAIDER Graphic Tee"
            price="₹2,000.00"
            offer="First time on discount"
          />
          <GalleryItem
          id={7}
            img1="https://assets.adidas.com/images/w_600,f_auto,q_auto/545db989cd4e4a95bf04afa8008c0425_9366/City_Escape_Loose-Fit_Tee_White_HU0239_21_model.jpg"
            img2="https://assets.adidas.com/images/w_600,f_auto,q_auto/e6b849cea7754080a174afa8008c0e15_9366/City_Escape_Loose-Fit_Tee_White_HU0239_23_hover_model.jpg"
            title="Adizero Running Tee"
            price="₹1,200.00"
            offer="Women Running Tee"
          />
          <GalleryItem
          id={8}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f048d9d929f45e2874e19d1ef402c9b_9366/adicolor-3-stripes-camisole.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0aeed36fe0e4b68a99fc853fb372b6e_9366/adicolor-3-stripes-camisole.jpg"
            title="Adicolor 3-Stripes Camisole"
            price="₹1,440.00"
            offer="Women • Originals"
          />
          <GalleryItem
          id={9}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/925088d62c37448c85a790ec07590cc3_9366/ny-tee.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f2191999d74e46a9a964ab2d3caa9c1d_9366/ny-tee.jpg"
            title="NY Tee"
            price="₹1,600.00"
            offer="Women lifestyle"
          />
          <GalleryItem
          id={10}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/faf94da1d0114e54b66daf7f0122aba5_9366/graphic-tee.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b71b90cf9d614d3083baaf7f0122b9f8_9366/graphic-tee.jpg"
            title="Graphic Tee"
            price="₹2,400.00"
              offer="Women lifestyle"
          />
          <GalleryItem
          id={11}
            img1="https://assets.adidas.com/images/w_600,f_auto,q_auto/5ad431822724421a861926091777a938_9366/SS_CHANGE_TEE_White_IT0219_21_model.jpg"
            img2="https://assets.adidas.com/images/w_600,f_auto,q_auto/19aa9e81682f4cd7a795da238070cad2_9366/SS_CHANGE_TEE_White_IT0219_22_model.jpg"
            title="SS CHANGE TEE"
            price="₹800.00"
            offer="Women Training"
          />
          <GalleryItem
          id={12}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/fcb65f792080486ea75639a11033ec15_9366/graphics-regular-tee.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3989f98284114f81bec35964873253e7_9366/graphics-regular-tee.jpg"
            title="Graphics Regular Tee"
            price="₹1,200.00"
        offer="Women lifestyle"
          />
          <GalleryItem
          id={13}
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3991ba7136be49b4bd70f278fd139477_9366/premium-essentials-tee.jpg"
            img2="https://assets.adidas.com/images/w_600,f_auto,q_auto/e8a2ba3dd2fc4f949b6f7776bb87f910_9366/Premium_Essentials_Tee_Grey_IK5765_23_hover_model.jpg"
            title="Premium Essentials Tee"
            price="₹1,600.00"
            offer="Women lifestyle"
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/303b5fa4f24349839ae50f716e74bb35_9366/trefoil-monogram-tee.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3928949d448e44fb8662de9d4f6839b1_9366/trefoil-monogram-tee.jpg"
            title="Trefoil Monogram Tee"
            price="₹1,440.00"
             offer="Women lifestyle"
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/1273c64516ef413cb11daf8500e0265d_9366/adidas-x-marimekko-run-icons-3-stripes-summer-dress.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a4e8dbb261448179216af8500e02e13_9366/adidas-x-marimekko-run-icons-3-stripes-summer-dress.jpg"
            title="adidas x Marimekko Run Icons 3-Stripes Summer Dress"
            price="1,855.00"
            offer="Women Running"
          />
          <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8634510bf1ce48d0b303af9e0134b797_9366/adidas-originals-x-moomin-tee-dress.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cbe2811f76a842e8b2ddaf9e0134bf78_9366/adidas-originals-x-moomin-tee-dress.jpg"
            title="adidas Originals x Moomin Tee Dress"
            price="₹1,999.00"
            offer="Women originals"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/0f209d252ee049f58980d1fe0f0ca46b_9366/3-stripes-mini-dress.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/755c91868e194fab8785fd1b141ae305_9366/3-stripes-mini-dress.jpg"
            title="3-Stripes Mini Dress"
            price="₹2,000.00"
            offer="Women originals"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/12f2098752884391a2bf5b35c14e93fc_9366/adilenium-tight-cut-dress.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b59b1fae3ed3404b9d35a6e3237bb7ee_9366/adilenium-tight-cut-dress.jpg"
            title="Adilenium Tight Cut Dress"
            price="₹3,200.00"
            offer="Women Lifestyle"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3620eff71f0841fb9a4d153909e64ee1_9366/tank-dress.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9f24acbef99c4e478a79b33420878a8a_9366/tank-dress.jpg"
            title="Tank Dress"
            price="₹1,840.00"
            offer="Online Exclusive"
          />
           <GalleryItem
            img1="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bcd975be99d841ba8ac02711d59798c6_9366/floral-graphic-single-jersey-dress.jpg"
            img2="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/0c1b919841994974a531e98f5cc63489_9366/floral-graphic-single-jersey-dress.jpg"
            title="Floral Graphic Single Jersey Dress"
            price="₹1,840.00"
            offer="Women Training"
          />
        </div>
      </div>
    </div>

    {/* Show Filter Component */}
    {showFilter && <ShowFillter toggleFilter={toggleFilter} />}
  </div>
  )
}

export default Women