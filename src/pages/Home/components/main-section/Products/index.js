import "./index.css";
import DiscoverButton from "../../../../../components/Discover-button";
import bestSellerImage4 from "../../../../../assets/images/bestsellerImage4.png";

const Products = ({ AddToCart, onImageChange, bgColorChange }) => {
  return (
    <div className={`${bgColorChange} products`}>
      <div className="images">
        {onImageChange ? (
          <img src={onImageChange} alt="" />
        ) : (
          <img src={bestSellerImage4} alt="" />
        )}
      </div>
      <div className="products-content">
        <div className="content">
          <p>Way Kambas Mini Maple</p>
          <p>20% off</p>
          <p>Rp 1.500.000</p>
          <p>Rp 1.264.000</p>
          {AddToCart ? AddToCart : <DiscoverButton />}
        </div>
      </div>
    </div>
  );
};

export default Products;
