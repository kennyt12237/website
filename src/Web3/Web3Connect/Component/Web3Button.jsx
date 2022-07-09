import React from "react";

export default function CustomButton(props) {
  const { imageSrc, text, onCustomButtonClick } = props;

  return (
    <div onClick={onCustomButtonClick}>
      <img src={imageSrc} alt="Provider Name" />
      <div> {text} </div>
    </div>
  );
}
