import React from "react";
import foodpic from "../foodpic.jpeg";

function Banner() {
  return (
    <div className="container bannerh">
      <div className="row align-items-center">
        <div className="col-md-6 left">
          <h1>
            Welcome to <span className="des">SURUCHI</span>, where freshness
            meets flavor. Discover your next healthy meal today!
          </h1>
          <h4>
            Discover a world of flavors with fast delivery and an easy ordering
            experience. Our app connects you with top restaurants and exclusive
            dishes to satisfy every craving. Enjoy exclusive deals, secure
            payments, and personalized recommendations. Dive into deliciousness
            with SURUCHI today!
          </h4>
        </div>

        <div className="col-md-6 right text-center">
          <img src={foodpic} className="img-fluid foodbanner" alt="Food" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
