import AddToCartButton from "../../../../components/Add-to-cart-button";
import heroImage1 from '../../../../assets/images/HeroImage1.png';
import './index.css';

const HeroSection = () => {
    return (
        <div className="hero">
            <img src={heroImage1} alt="HeroImage" />
            <div className="hero-text">
                <p className="hero-title">Here at XYZ Hair</p>
                <hr id="line" />
                <p id="description">MATOA Way Kambas comes with a <br /> material form of Canadian Maple
                </p>
                <AddToCartButton />
            </div>
        </div>
    );
}
 
export default HeroSection;
