import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          draggable="false"
          ondragstart="return false;"
          className="home__image unselectable"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="background banner"
        />

        <div className="home__row">
          <Product
            id={1234}
            title="Gaming Headset for PS4 PC Xbox One PS5"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={1234}
            title="ProForm Weight Dumbbells"
            price={87.99}
            image="https://m.media-amazon.com/images/I/810T7+jbPTL._AC_SL1500_.jpg"
            rating={4}
          />
          {/* Product */}
        </div>

        <div className="home__row">
          <Product
            id={1234}
            title="MANSCAPED® Electric Groin Hair Trimmer, The Lawn Mower™ 3.0, Replaceable Ceramic Blade Heads, Waterproof Wet / Dry Clippers, Standing Recharge Dock, Ultimate Male Hygiene Razor"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61BJVOWR0hS._SL1500_.jpg"
            rating={5}
          />
          <Product
            id={1234}
            title="SAMSUNG 32&rdquo; M80B 4K UHD HDR Smart Computer Monitor Screen with Streaming TV, SlimFit Camera Included, Wireless Remote PC Access, Alexa Built-In, LS32BM805UNXGO, White"
            price={249.99}
            image="https://m.media-amazon.com/images/I/619GhhC0bIL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id={1234}
            title="Amoretu Women Summer Tunic Dress V Neck Casual Loose Flowy Swing Shift Dresses"
            price={32.99}
            image="https://m.media-amazon.com/images/I/71Baq7E2tML._AC_UY550_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={1234}
            title="SAMSUNG Galaxy S23 Cell Phone + $50 Amazon Gift Card Bundle, Factory Unlocked Android Smartphone, 256GB Storage, 50MP Camera, Night Mode, Long Battery Life, US Version, 2023, Phantom Black"
            price={1379.99}
            image="https://m.media-amazon.com/images/I/51kZj9VrkgL._AC_SL1000_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
