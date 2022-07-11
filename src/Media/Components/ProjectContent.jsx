import React from "react";
import ProjectText from "./ProjectText.jsx";
import WriteAndUpvoteWeb3 from "./WriteAndUpvoteWeb3.jsx";
import Media from "./Media.jsx";
import "../scss/ProjectContent.scss";

export default function ProjectContent(props) {
  const { projectContent, mediaSrc, projectNumber } = props;

  return (
    <div className="project-content-container">
      <div className="project-content-container__text">
        <ProjectText
          title={projectContent.title}
          texts={projectContent.texts}
        />
        {/* <WriteAndUpvoteWeb3
          title="Upvote and Write Message (optional)"
          defaultText="Wrtie a Message"
          imageUrl="./hand-thumbs-up-fill.svg"
          projectNumber={projectNumber}
        /> */}
      </div>
      <div className="project-content-container__media">
        <Media imageUrl={mediaSrc} />
      </div>
    </div>
  );
}
