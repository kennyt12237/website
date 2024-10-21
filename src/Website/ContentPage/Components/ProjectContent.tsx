import React from "react";
import ProjectText from "./ProjectText";
import ProjectForm from "./BlockchainInteraction/ProjectForm";
import Media from "./Media";
import "../scss/ProjectContent.scss";

interface Props {
  title: string;
  texts: Array<string>;
  mediaSrc: string;
  projectNumber: number;
}
export default function ProjectContent({
  title,
  texts,
  mediaSrc,
  projectNumber,
}: Props): JSX.Element {
  return (
    <div className="project-content-container">
      <div className="project-content-container__text">
        <ProjectText title={title} texts={texts} />
        <ProjectForm
          title="Upvote and Write Message (optional)"
          defaultText="Write a Message"
          imageUrl={process.env.PUBLIC_URL + "/hand-thumbs-up-fill.svg"}
          projectNumber={projectNumber}
        />
      </div>
      <div className="project-content-container__media">
        <Media imageUrl={mediaSrc} />
      </div>
    </div>
  );
}
