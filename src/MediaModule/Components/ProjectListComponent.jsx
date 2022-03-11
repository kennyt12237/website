import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
import ProjectComponent from './ProjectComponent';

export default function ProjectListComponent(props) {

	const { projectList } = props;
	const [ navIndex, setNavIndex ] = useState(0);

	const computeStyle = (index) => {
		const style = {
			color: 'blue'
		}
		if (index === navIndex) {
			style["color"] = 'black';
		}

		return style;
	}
	return (
		<div className="projectList-container">
			{
				projectList && <ProjectComponent title={projectList[navIndex]} list={projectList[navIndex]} srcs={projectList[navIndex]} />
			}
		<div>
			<ul>
			{ projectList.length && projectList.map((index) => {
				return <li style={computeStyle(index)} onClick={setNavIndex(index)} key={index}></li>
			})}
			</ul>
		</div>
		</div>
	)
}