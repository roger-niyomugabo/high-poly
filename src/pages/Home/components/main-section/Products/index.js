import './index.css';
import DiscoverButton from '../../../../../components/Discover-button';
import AddToCartButton from '../../../../../components/Add-to-cart-button';
import bestSellerImage4 from '../../../../../assets/images/bestsellerImage4.png';

const Products = ({ productsImage2, AddToCart, styles }) => {
    // The className (products2 class) inherits all the CSS properties from the products class and adds new ones
    const className = styles ? 'products2' : 'products';

    return (
        <div className={`${className} products`}>
            <div className="images">
                { productsImage2 ? 
                    <img src={productsImage2} alt="" /> : <img src={bestSellerImage4} alt="" /> }
            </div>
            <div className="products-content">
                <div className="content">
                    <p>Way Kambas Mini <br /> Maple</p>
                    <p>20% off</p>
                    <p>Rp 1.500.000</p>
                    <p>Rp 1.264.000</p>
                    { AddToCart ?  <AddToCartButton styles={'color-change'} /> : <DiscoverButton /> }
                </div>
            </div>
        </div>
    );
}

export default Products;
