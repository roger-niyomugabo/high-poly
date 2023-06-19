import './index.css';
import AddToCartButton from "../../../../components/Add-to-cart-button";
import heroImage1 from '../../../../assets/images/HeroImage1.png';

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="heroImage">
                <img src={heroImage1} alt="HeroImage" />
            </div>
            <div className="hero-text">
                <p className="hero-title">Here at XYZ <span>Hair</span></p>
                <hr id="line" />
                <p id="description">MATOA Way Kambas Maple comes with a <br /> material form of Canadian Maple
                </p>
                <AddToCartButton fontWeightChange={true} />
            </div>
        </div>
    );
}
 
export default HeroSection;
