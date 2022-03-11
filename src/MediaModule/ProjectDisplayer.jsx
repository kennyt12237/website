import React, { useState } from 'react';
import ProjectContextProvider from './Context/ProjectContextProvider';
import ProjectComponent from './Components/ProjectComponent';
import './ProjectDisplayer.scss';

export default function ProjectDisplayer(props) {

	const { projects } = props;
	const [ navInd, setNavInd ] = useState(0);

	const computeStyle = (index) => {
		const style = {
			backgroundColor: 'grey'
		}
		if (index === navInd) {
			style["backgroundColor"] = 'black';
		}

		return style;
	}

	const handleEllipseClicked = (index) => {
		setNavInd(index);
	}

	return (
		<ProjectContextProvider srcs={projects[navInd].srcs}>
			<div className='project-list-container'>
				<ProjectComponent title={projects[navInd].title} list={projects[navInd].list} srcs={projects[navInd].srcs} />
				<div className='project-list-container__navigation'>
						{ projects.length && projects.map((value,index) => {
							return <div className="project-list-container__navigation__button" style={computeStyle(index)} onClick={() => handleEllipseClicked(index)} key={index}></div>
						})}
				</div>
			</div>
		</ProjectContextProvider>
	)
}