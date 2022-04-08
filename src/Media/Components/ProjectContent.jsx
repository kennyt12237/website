import React, { useEffect, useState } from "react";
import ProjectText from "./ProjectText.jsx";
import WriteAndUpvoteWeb3 from "./WriteAndUpvoteWeb3.jsx";
import Media from "./Media.jsx";
import "../scss/ProjectContent.scss";

export default function ProjectContent(props) {
  const { projectContent, projectNumber } = props;
  const [contentNumber, setContentNumber] = useState(0);

  const changeContentNumber = (number) => {
    setContentNumber(number);
  };

  const getStyles = (index) => {
    if (contentNumber === index) {
      return {
        backgroundColor: "white",
      };
    }
  };

  useEffect(() => {
    setContentNumber(0);
  }, [projectNumber]);
  return (
    <div className="project-content-container">
      <div className="project-content-container__content">
        <div className="project-content-container__content__text">
          <ProjectText
            title={projectContent.title}
            text={projectContent.contents[contentNumber].text}
          />
          <WriteAndUpvoteWeb3
            title="Upvote and Write Message (optional)"
            defaultText="Wrtie a Message"
            imageUrl="./hand-thumbs-up-fill.svg"
            projectNumber={projectNumber}
          />
        </div>
        <div className="project-content-container__content__media">
          <Media imageUrl={projectContent.contents[contentNumber].image} />
        </div>
      </div>
      <div className="project-content-container__navigate">
        {projectContent.contents.map((value, index) => {
          return (
            <div
              className="project-content-container__navigate__item"
              style={getStyles(index)}
              onClick={() => changeContentNumber(index)}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
