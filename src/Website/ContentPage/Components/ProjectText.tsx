import React from "react";
import "../scss/ProjectText.scss";

interface Props {
  title: string;
  texts: Array<string>;
  
}
export default function ProjectText({ title, texts }: Props): JSX.Element {
  return (
    <div className="project-text-container">
      <div className="project-text-container__title"> {title} </div>
      <div className="project-text-container__text">
        {texts &&
          texts.map((text, index) => {
            return (
              <p className="project-text-container__text__point" key={index}>
                {text}
              </p>
            );
          })}
      </div>
    </div>
  );
}
