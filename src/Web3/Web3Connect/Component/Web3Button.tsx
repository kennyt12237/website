import React from "react";
import "./scss/Web3Button.scss";

interface Props {
  imageSrc: string;
  text: string;
  onCustomButtonClick: (provider: any) => any;
}
export default function CustomButton({
  imageSrc,
  text,
  onCustomButtonClick,
}: Props): JSX.Element {
  return (
    <div className="button-container" onClick={onCustomButtonClick}>
      <img
        className="button-container--image-size"
        src={imageSrc}
        alt="Provider Name"
      />
      <div className="button-container--text-color"> {text} </div>
    </div>
  );
}
