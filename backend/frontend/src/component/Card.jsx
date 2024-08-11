import React, { useContext } from "react";
import Custombutton from "./Custombutton"; // Importing the Custombutton component
import { EntireContext } from "./Entirecontext";

function Card() {
  const { dish, searchTerm } = useContext(EntireContext);
  const filteredDishes = dish.filter((cardd) =>
    cardd.title.toLowerCase().includes(searchTerm)
  );
  const isFiltered = searchTerm.trim().length > 0;
  return (
    <div className="container cardh">
      <div className="row">
        {filteredDishes.map((cardd) => (
          <div
            className={`col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4 ${
              isFiltered ? "filtered-card" : ""
            }`}
            key={cardd._id}
          >
            <div className="card h-100">
              <img
                src={cardd.imageSrc}
                className="card-img-top img-fluid"
                alt={cardd.title}
              />
              <div className="card-body d-flex flex-column">
                <div className="c">
                  <h5 className="card-title">{cardd.title}</h5>
                  <h4 className="card-title1">₹{cardd.price}</h4>
                </div>
                <a className="mt-auto">
                  <Custombutton item={cardd} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
