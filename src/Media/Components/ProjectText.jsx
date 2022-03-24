import React from "react";
import "../scss/ProjectText.scss";

export default function ProjectText(props) {
  const { title, texts } = props;

  return (
    <div className="project-text-container">
      <p className="project-text-container__title"> {title} </p>
      <p className="project-text-container__text"> {texts} </p>
    </div>
  );
}
