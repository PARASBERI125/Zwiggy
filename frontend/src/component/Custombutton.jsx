import React, { useContext } from "react";
import { EntireContext } from "./Entirecontext";
import toast from "react-hot-toast";

function Custombutton({ item }) {
  const { setisadded, setCartItems } = useContext(EntireContext);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem._id === item._id
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });

    setisadded(true);
    // Reset isadded after 1 second
  };

  const handleClick = () => {
    addItemToCart(item);
    toast.success("Added to cart");
  };

  return (
    <button
      type="button"
      className="btn btn-primary butt1"
      onClick={handleClick}
    >
      <h2>Add to cart</h2>
    </button>
  );
}

export default Custombutton;
