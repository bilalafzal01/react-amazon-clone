import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1412442235"
          title="The Lean Startup: How Constant Innovation Creates Nations"
          price={11.96}
          rating={5}
          image="https://miro.medium.com/max/500/1*4R0MwXEm0VDNim785Q9uIg.jpeg"
        />
        <Product
          id="1123442212335"
          title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
          price={409.97}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="14345443435"
          title="NUBWO Gaming headsets PS4 N7 Stereo Xbox one Headset Wired PC Gaming Headphones with Noise Canceling Mic , Over Ear Gaming Headphones for PC/MAC/PS4/Xbox one"
          price={42.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/515l36vqKBL._AC_UY218_.jpg"
        />
        <Product
          id="91412443242235"
          title="LG 27GL83A-B 27 Inch Ultragear QHD IPS 1ms NVIDIA G-SYNC Compatible Gaming Monitor, Black"
          price={11.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51mWqH9fy5L._AC_US160_.jpg"
        />
        <Product
          id="1124412442235"
          title="AmazonBasics Fast Drying, Extra Absorbent, Terry Cotton Washcloths, White - Pack of 24"
          price={15.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61KuY1k5A+L._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="141252442235"
          title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
          price={279.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51wpN1SESrL._AC_US160_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
