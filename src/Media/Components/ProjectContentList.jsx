import React, { useState } from "react";
import ProjectContent from "./ProjectContent";
import "../scss/ProjectContentList.scss";

export default function ProjectContentList(props) {
  const { projects } = props;
  const [projectNum, setProjectNum] = useState(0);

  const isPreviousDisabled = () => {
    return projectNum === 0;
  };

  const isNextDisabled = () => {
    return projectNum === projects.length - 1;
  };

  return (
    <div className="project-list-container">
      <ProjectContent 
        projectContent={projects[projectNum]}
        projectNumber={projectNum}
      />
      <div className="project-list-container__navigation">
        <div
          className={`project-list-container__navigation__previous ${
            isPreviousDisabled() && "project-list-container__navigation--hide"
          } `}
          onClick={() => setProjectNum(projectNum - 1)}
        >
          Previous
        </div>
        <div
          className={`project-list-container__navigation__next ${
            isNextDisabled() && "project-list-container__navigation--hide"
          } `}
          onClick={() => setProjectNum(projectNum + 1)}
        >
          Next
        </div>
      </div>
    </div>
  );
}
