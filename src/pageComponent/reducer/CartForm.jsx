import React, { useContext } from 'react';
import { CartContext } from './CartProvider'; 
import './cart.css';

function CartForm() {
  const { state } = useContext(CartContext); 
  const totalPrice = state.cart.reduce((total, item) => total + parseFloat(item.price.replace('₹', '').replace(',', '')), 0);
  const itemCount = state.cart.reduce((count, item) => count + item.count, 0);

  return (
    <div className="packedCart">
      <div className="flexform">
        <div className="realForm">
          <h1 className="Shipping">SHIPPING ADDRESS</h1>
          <form action="">
            <div className="flex-input">
              <input type="text" placeholder="Full name" className="half-width" />
              <input type="text" placeholder="Lastname" className="half-width" />
            </div>
            <input type="text" placeholder="Street address *" id="full-width" />
            <input type="text" placeholder="Land mark **" id="full-width" />
            <div className="flex-input">
              <input type="text" placeholder="Additional info *" className="half-width" />
              <input type="text" placeholder="City *" className="half-width" />
              <select name="" id="select" className="half-width">
                <option value="">STATE *</option>
                <option value="">Delhi</option>
                <option value="">Bihar</option>
                <option value="">Haryana</option>
                <option value="">Chhattisgarh</option>
                <option value="">Andhra Pradesh</option>
                <option value="">Arunachal Pradesh</option>
                <option value="">Jammu and Kashmir</option>
                <option value="">Madhya Pradesh</option>
                <option value="">Nagaland</option>
                <option value="">UP</option>
                <option value="">Mumbai</option>
              </select>
              <input type="number" placeholder="Pin code *" className="half-width" />
            </div>
          </form>

          <div className="delivered-day">
            <h1 className='information'>CONTACT INFORMATION</h1>
            <p className='information-para'>We'll use these details to keep you informed about your delivery.</p>
            <form action="" className="top-sapce">
              <div className="flex-input">
                <input type="email" placeholder="Email" className="half-width" />
                <input type="text" placeholder="Phone number" className="half-width" />
              </div>
            </form>
          </div>
        </div>

        {/* Show cart details here */}
        <div className="itemEdit">
          {state.cart.length > 0 && (
            <>
              <div>
                <p className="total-item">
                  <strong>Total Items:</strong> {itemCount}
                </p>
                <p className="TotalPrice">
                  <strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}
                </p>
              </div>

              {/* Display cart item images and quantity */}
          <div className="item-center">

              {state.cart.map((item) => (
                
                <div key={item.id} className="cart-item-details">
                  <div className='last-item-img'>
                  <img src={item.img1} alt={item.title} className="cart-item-image-packed" />
                  </div>
                  <div className='last-packed-details'>
                  <p>{item.title}</p>
                  <p>Quantity: {item.count}</p>
                  <p>Price: {item.price}</p>
                  </div>
                </div>
                
              ))}
              </div>
            </>
          )}
          </div>
        </div>

      </div>
    
  );
}

export default CartForm;
