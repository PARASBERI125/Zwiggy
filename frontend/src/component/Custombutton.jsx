import React from "react";

function Custombutton({ count, increment, decrement }) {
  return (
    <div>
      <div className="butt">
        <button type="button" class="btn btn-primary">
          Add to cart
        </button>
        <div className="butt1">
          <button type="button" class="btn btn-primary" onClick={decrement}>
            <h1>-</h1>
          </button>
          <h2>{count}</h2>
          <button type="button" class="btn btn-primary" onClick={increment}>
            <h1>+</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Custombutton;
