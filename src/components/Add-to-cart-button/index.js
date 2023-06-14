import './index.css';

const AddToCartButton = ({ styles }) => {
    // The className (btn2 class) inherits all the CSS properties from the btn class and adds new ones
    const className = styles ? 'btn2' : 'btn1';
    return (
        <button className={`${className} btn1`}>
            Add to cart
        </button>
    );
}
 
export default AddToCartButton;
