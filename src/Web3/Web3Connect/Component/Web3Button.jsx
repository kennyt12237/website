import React from "react";
import './scss/Web3Button.scss';
export default function CustomButton(props) {
  const { imageSrc, text, onCustomButtonClick } = props;

  return (
    <div className="button-container"  onClick={onCustomButtonClick}>
      <img className="button-container--image-size" src={imageSrc} alt="Provider Name" />
      <div className="button-container--text-color"> {text} </div>
    </div>
  );
}
