import React, { useState } from "react";
import grocerystore from "../grocery-store.png"; // Ensure this path is correct
import Login from "./Login";

function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  const handleOutsideClick = (event) => {
    // Close the modal if clicked outside of it
    if (event.target.classList.contains("modal-overlay")) {
      setOpenModal(false);
    }
  };

  return (
    <div className="super">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand bhak" href="/">
            <img
              src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
              className="d-inline-block align-text-top logo"
              alt="Zwiggy Logo"
            />
            <h3>zwiggy</h3>
          </a>

          <form className="d-flex ms-auto searcheng" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <div className="cartlog ms-3">
            <a className="cartlink" href="#">
              <img src={grocerystore} width={23} alt="Cart" />
            </a>
            <button
              type="button"
              className="btn btn-outline-dark custom-login-button"
              onClick={() => setOpenModal(!openModal)}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Modal Container */}
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
