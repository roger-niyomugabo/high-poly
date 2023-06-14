import BestSellers from "./Best-seller";
import Products from "./Products";
import RecentNews from "./Recent-news";
import './index.css';
import productsImage2 from '../../../../assets/images/productsImage2.png';

const MainSection = () => {
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
                        <Products />
                        <Products />
                    </div>
                </div>
            </div>
            <div className="test-adjust">
                <div className="tests">
                    <div className="left">
                        <Products />
                    </div>
                    <div className="right">
                        <Products productsImage2={productsImage2} AddToCart={'AddToCartButton'} styles={'color-change'} />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MainSection;
