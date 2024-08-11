import React, { useContext } from "react";
import { EntireContext } from "./Entirecontext";
import "./CartModal.css"; // Adjust the path to your CSS file if needed

function CartModal() {
  const { cartItems, setCartItems } = useContext(EntireContext);

  const increment = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity += 1;
      return updatedItems;
    });
  };

  const decrement = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (updatedItems[index].quantity > 1) {
        updatedItems[index].quantity -= 1;
      } else {
        updatedItems.splice(index, 1);
      }
      return updatedItems;
    });
  };

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal-container">
        <div className="cart-modal-header">
          <h3>Cart</h3>
        </div>
        <div className="cart-modal-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">Your cart is empty</div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-details">
                  <div className="item-info">
                    <h5>{item.title}</h5>
                    <p>₹{item.price}</p>
                  </div>
                  <div className="item-quantity">
                    <button
                      className="btn btn-primary dec"
                      onClick={() => decrement(index)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-primary inc"
                      onClick={() => increment(index)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="item-total">
                  Total: ₹{item.quantity * item.price}
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-total">
            Total Price: ₹
            {cartItems.reduce(
              (total, item) => total + item.quantity * item.price,
              0
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;
