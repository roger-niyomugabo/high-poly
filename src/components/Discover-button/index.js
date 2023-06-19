import "./index.css";

const DiscoverButton = ({ styles, fontWeightChange }) => {
  const btn4 = styles ? "btn4" : "";
  const btn3 = fontWeightChange ? "btn3" : "btn";
  return <button className={`${btn3} ${btn4} btn`}>Discover</button>;
};

export default DiscoverButton;
