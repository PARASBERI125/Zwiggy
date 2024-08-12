import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export const EntireContext = createContext();
export const Contextprovider = ({ children }) => {
  const [isadded, setisadded] = useState(false);
  const [counts, setCounts] = useState([]);
  const [t, sett] = useState("Login");
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //fetching all the dishes
  const [dish, setdish] = useState([]);
  useEffect(() => {
    const getdish = async () => {
      try {
        const res = await axios.get("/dish");
        console.log(res.data);
        setdish(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getdish();
  }, []);
  useEffect(() => {
    setCounts(dish.map(() => 0)); // Initialize counts for each dish
  }, [dish]);
  //dishes fetched successfully

  //cart and login modals
  const [openModal, setOpenModal] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      setOpenModal(false);
    }
  };

  const handleCartLinkClick = (event) => {
    event.preventDefault();
    if (t === "Login") {
      setOpenModal(true);
      toast.error("Please login to continue");
    } else {
      setCartModalOpen(!cartModalOpen);
    }
  };

  const handleOutsideCartClick = (event) => {
    if (
      !event.target.closest(".cart-modal-container") && // Updated class name
      !event.target.closest(".cartlink")
    ) {
      setCartModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideCartClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideCartClick);
  }, []);

  const handleButtonClick = () => {
    if (t === "Login") {
      setOpenModal(true);
    } else {
      sett("Login");
    }
  };
  //cart and login modal over

  return (
    <EntireContext.Provider
      value={{
        //functions
        handleOutsideCartClick,
        searchTerm,
        setSearchTerm,
        setisadded,
        dish,
        isadded,
        t,
        sett,
        cartItems,
        setCartItems,
        handleCartLinkClick,
        cartModalOpen,
        setCartModalOpen,
        handleButtonClick,
        handleOutsideClick,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </EntireContext.Provider>
  );
};
