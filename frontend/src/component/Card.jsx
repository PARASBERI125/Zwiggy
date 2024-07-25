import React, { useState } from "react";
import Custombutton from "./Custombutton"; // Importing the Custombutton component

function Card({ cardData }) {
  // Initialize the counts state, setting each count to 0 initially
  const [counts, setCounts] = useState(cardData.map(() => 0));

  // Function to handle increment of count for a specific card
  const handleIncrement = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts]; // Copying the previous counts
      newCounts[index] = newCounts[index] + 1; // Increment the count at the specified index
      return newCounts; // Returning the new counts array
    });
  };

  // Function to handle decrement of count for a specific card
  const handleDecrement = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts]; // Copying the previous counts
      newCounts[index] = Math.max(0, newCounts[index] - 1); // Decrement the count, ensuring it doesn't go below 0
      return newCounts; // Returning the new counts array
    });
  };

  return (
    <div className="container cardh">
      <div className="row">
        {/* Map over each item in cardData */}
        {cardData.map((cardd, index) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" // Grid column classes
            key={index} // Key for each card element
          >
            <div className="card h-100">
              <img
                src={cardd.imageSrc} // Image source from cardData
                className="card-img-top img-fluid" // Image styling classes
                alt={cardd.title} // Alternative text for image
              />
              <div className="card-body d-flex flex-column">
                {" "}
                {/* Flex column to position elements */}
                <div className="c">
                  <h5 className="card-title">{cardd.title}</h5>{" "}
                  {/* Card title */}
                  <h4 className="card-title1">₹{cardd.price}</h4>{" "}
                  {/* Fixed price */}
                </div>
                <a className="mt-auto">
                  {/* Render Custombutton and pass count and handlers */}
                  <Custombutton
                    count={counts[index]} // Current count for the card
                    increment={() => handleIncrement(index)} // Increment handler
                    decrement={() => handleDecrement(index)} // Decrement handler
                  />
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
