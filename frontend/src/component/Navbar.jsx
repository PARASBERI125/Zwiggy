import React, { useContext } from "react";
import grocerystore from "../grocery-store.png";
import Login from "./Login";
import CartModal from "./CartModal";
import { EntireContext } from "./Entirecontext";

function Navbar() {
  const {
    setSearchTerm,
    cartItems,
    openModal,
    isadded,
    t,
    handleOutsideClick,
    handleCartLinkClick,
    handleButtonClick,
    cartModalOpen,
  } = useContext(EntireContext);

  return (
    <div className="super">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            <h3>suruchi</h3>
          </a>

          <form className="d-flex ms-auto searcheng" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
          </form>

          <div className="cartlog ms-3" style={{ position: "relative" }}>
            <a
              className="cartlink"
              href="#"
              onClick={handleCartLinkClick}
              style={{
                textDecoration: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <img src={grocerystore} width={23} alt="Cart" />
              {isadded && cartItems.length > 0 && (
                <div className="countshow"></div>
              )}
            </a>
            {cartModalOpen && <CartModal />}
            <button
              type="button"
              className="btn btn-primary custom-login-button"
              onClick={handleButtonClick}
            >
              <h2>{t}</h2>
            </button>
          </div>
        </div>
      </nav>

      {openModal && (
        <div
          className="modal-overlay"
          onClick={handleOutsideClick}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <Login />
        </div>
      )}
    </div>
  );
}

export default Navbar;
