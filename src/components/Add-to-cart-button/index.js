import "./index.css";

const AddToCartButton = ({ styles, fontWeightChange, buttonSize }) => {
  // The className (btn2 class) inherits all the CSS properties from the btn class and adds new ones
  const className = styles ? "btn2" : "btn1";
  const fontWeightClass = fontWeightChange ? "fontWeightClass" : "";
  const buttonSizeClass = buttonSize ? "buttonSizeClass" : "";

  return (
    <button
      className={`${className} ${fontWeightClass} ${buttonSizeClass} btn1`}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
