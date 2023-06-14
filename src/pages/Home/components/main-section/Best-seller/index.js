import { Link } from 'react-router-dom';
import './index.css';
import AddToCartButton from '../../../../../components/Add-to-cart-button';
import bestSellerImage1 from '../../../../../assets/images/bestsellerImage1.png';
import bestSellerImage2 from '../../../../../assets/images/bestsellerImage2.png';
import bestSellerImage3 from '../../../../../assets/images/bestsellerImage3.png';
import bestSellerImage4 from '../../../../../assets/images/bestsellerImage4.png';

const BestSellers = () => {
    return (
        <div className="main-container">
            <div className="first-container">
                <div className="header">
                    <hr id="line"/>
                    <p>BestSeller</p>
                </div>
                <div className="container">
                    <div className="best-seller">
                        <div className="seller-content">
                            <div className="content-container">
                                <div className='content'>
                                    <p>Luxurious <span>Eyewear</span></p>
                                    <p>See the beauty of exotic world <br /> with the luxurious glasses</p>
                                    <Link to={''}>Discover Now</Link>
                                    <AddToCartButton />
                                </div>
                            </div>
                            <div className="image">
                                <img src={bestSellerImage1} alt="bestSellerImage" />
                            </div>
                        </div>
                    </div>
                    <div className="best-seller">
                        <div className="seller-content">
                            <div className="content-container">
                                <div className='content'>
                                    <p>Luxurious <span>Eyewear</span></p>
                                    <p>See the beauty of exotic world <br /> with the luxurious glasses</p>
                                    <Link to={''}>Discover Now</Link>
                                    <AddToCartButton />
                                </div>
                            </div>
                            <div className="image">
                                <img src={bestSellerImage2} alt="bestSellerImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-container">
                <div className="header">
                    <hr id="line"/>
                    <p>BestSeller</p>
                </div>
                <div className="container">
                    <div className="best-seller">
                        <div className="seller-content">
                            <div className="content-container">
                                <div className='content'>
                                    <p>Luxurious <span>Eyewear</span></p>
                                    <p>See the beauty of exotic world <br /> with the luxurious glasses</p>
                                    <Link to={''}>Discover Now</Link>
                                    <AddToCartButton />
                                </div>
                            </div>
                            <div className="image">
                                <img src={bestSellerImage3} alt="bestSellerImage" />
                            </div>
                        </div>
                    </div>
                    <div className="best-seller">
                        <div className="seller-content">
                            <div className="content-container">
                                <div className='content'>
                                    <p>Luxurious <span>Eyewear</span></p>
                                    <p>See the beauty of exotic world <br /> with the luxurious glasses</p>
                                    <Link to={''}>Discover Now</Link>
                                    <AddToCartButton />
                                </div>
                            </div>
                            <div className="image">
                                <img src={bestSellerImage4} alt="bestSellerImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BestSellers;
