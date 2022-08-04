import React from "react";
import "../scss/Media.scss";

interface Props {
  imageUrl: string;
}
export default function Media({ imageUrl }: Props): JSX.Element {
  return (
    <div className="media-container">
      <img className="media-container__image" src={imageUrl} alt="media" />
    </div>
  );
}
