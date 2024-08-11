// src/components/Home.js

import React from "react";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Card from "./component/Card";
import Footer from "./component/Footer";
import { Contextprovider } from "./component/Entirecontext";
function Home() {
  return (
    <Contextprovider>
      <div>
        <Navbar />
        <Banner />

        <div className="container mt-5 pt-4">
          <Card />
        </div>
        <Footer />
      </div>
    </Contextprovider>
  );
}

export default Home;
