import React from "react";
import samosa from "./samosa.jpeg";
import Pavbhaji from "./Pavbhaji.jpeg";
import masaladosa from "./masaladosa.jpeg";
import idlimeduvada from "./idlimeduvada.jpeg";
import paneermakhni from "./paneermakhni.jpeg";
import cholebhature from "./cholebhature.jpeg";
import biryani from "./biryani.jpeg";
import vegthali from "./vegthali.jpeg";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Card from "./component/Card";
import Footer from "./component/Footer";

function Home() {
  const cardData = [
    {
      imageSrc: samosa,
      title: "Samosa",
      buttonText: "Add to cart",
      price: 15,
    },
    {
      imageSrc: Pavbhaji,
      title: "Pav Bhaji",
      buttonText: "Add to cart",
      price: 80,
    },
    {
      imageSrc: masaladosa,
      title: "Masala Dosa",
      buttonText: "Add to cart",
      price: 50,
    },
    {
      imageSrc: idlimeduvada,
      title: "Idli Wada",
      buttonText: "Add to cart",
      price: 40,
    },
    {
      imageSrc: paneermakhni,
      title: "Paneer Makhni",
      buttonText: "Add to cart",
      price: 150,
    },
    {
      imageSrc: cholebhature,
      title: "Chole Bhature",
      buttonText: "Add to cart",
      price: 100,
    },
    {
      imageSrc: biryani,
      title: "Veg Biryani",
      buttonText: "Add to cart",
      price: 140,
    },
    {
      imageSrc: vegthali,
      title: "Veg Thali",
      buttonText: "Add to cart",
      price: 160,
    },
  ];
  return (
    <div>
      <Navbar />
      <Banner />

      <div className="container mt-5 pt-4">
        <Card cardData={cardData} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
