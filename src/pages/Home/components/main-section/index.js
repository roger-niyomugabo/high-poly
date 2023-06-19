import { useState, useEffect } from "react";
import "./index.css";
import BestSellers from "./Best-seller";
import Products from "./Products";
import RecentNews from "./Recent-news";
import bestSellerImage4 from "../../../../assets/images/bestsellerImage4.png";
import productsImage2 from "../../../../assets/images/productsImage2.png";
import AddToCartButton from "../../../../components/Add-to-cart-button";
import DiscoverButton from "../../../../components/Discover-button";

const MainSection = () => {
  const [imageChange, setImangeChange] = useState(productsImage2);
  const [buttonChange, setButtonChange] = useState(<AddToCartButton />);
  // The className (products2 class) inherits all the CSS properties from the products class and adds new ones
  const className = "products2";

  useEffect(() => {
    const handleImageChange = () => {
      if (window.innerWidth <= 375 || window.innerWidth <= 415) {
        setImangeChange(bestSellerImage4);
      } else {
        setImangeChange(productsImage2);
      }
    };

    const handleButtonChange = () => {
      if (window.innerWidth <= 375 || window.innerWidth <= 415) {
        setButtonChange(<DiscoverButton styles={true} />);
      } else {
        setButtonChange(<AddToCartButton styles={true} />);
      }
    };

    handleImageChange();
    handleButtonChange();
    window.addEventListener("resize", handleImageChange, handleButtonChange);

    return () => {
      window.removeEventListener("resize", handleImageChange);
    };
  }, []);

  return (
    <div className="main-section">
      <RecentNews />
      <BestSellers />
      <div className="background">
        <div className="content-wrapper">
          <div className="header">
            <hr id="line" />
            <p>Our products</p>
          </div>
          <div className="grid-container">
            <Products />
            <Products />
            <div className="product3">
              <Products />
            </div>
            <div className="product4">
              <Products />
            </div>
          </div>
        </div>
      </div>
      <div className="test-adjust">
        <div className="tests">
          <div className="left">
            <Products />
          </div>
          <div className="right">
            <Products
              onImageChange={imageChange}
              AddToCart={buttonChange}
              bgColorChange={className}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
