import React, { useState } from 'react';
import ProjectContent from './ProjectContent';
import '../scss/ProjectContentList.scss'

export default function ProjectContentList(props) {

	const { projects } = props;
	const [ projectNum, setProjectNum ] = useState(0);

	const setProjectNumber = (projectNum) => {
		setProjectNum(projectNum)
	}
	
	return (
		<div className='project-list-container'>
			<ProjectContent projectContent={projects[projectNum].projectContent} web3Message={projects[projectNum].web3Message} mediaSrc={projects[projectNum].mediaSrc}/>
			<div className='project-list-container__navigation'>
				<div className='project-list-container__navigation__previous'>
					Previous
				</div>
				<div className='project-list-container__navigation__next'>
					Next
				</div>
			</div>
		</div>
	)
}