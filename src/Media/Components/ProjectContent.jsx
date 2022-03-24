import React from "react";
import ProjectText from "./ProjectText.jsx";
import Web3Message from "./Web3Message.jsx";
import Media from "./Media.jsx";
import "../scss/ProjectContent.scss";

export default function ProjectContent(props) {
  const { projectContent, web3Message, mediaSrc } = props;

  return (
    <div className="project-content-container">
      <div className="project-content-container__text">
        <ProjectText
          title={projectContent.title}
          texts={projectContent.texts}
        />
        <Web3Message
          title={web3Message.title}
          defaultText={web3Message.defaultText}
          imageUrl={web3Message.imageUrl}
        />
      </div>
      <div className="project-content-container__media">
        <Media imageUrl={mediaSrc} />
      </div>
    </div>
  );
}
