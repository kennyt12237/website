import React from "react";
import "../scss/ProjectText.scss";

export default function ProjectText(props) {
  const { title, text } = props;

  return (
    <div className="project-text-container">
      <div className="project-text-container__title"> {title} </div>
      <div className="project-text-container__text">{text}</div>
    </div>
  );
}
