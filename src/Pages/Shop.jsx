import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offers/Offer";
import NewCollections from "../Components/NewCollections/NewCollections";
import Newsletter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offer/>
      <NewCollections/>
      <Newsletter/>
    
    </div>
  );
};

export default Shop;
