import React from "react";
import "../scss/ProjectText.scss";

export default function ProjectText(props) {
  const { title, texts } = props;

  return (
    <div className="project-text-container">
      <div className="project-text-container__title"> {title} </div>
      <div className="project-text-container__text">
      {texts && texts.map((text, index) => {
          return <p className="project-text-container__text__point" key={index}> {text} </p>
      }) }
      </div>
    </div>
  );
}
