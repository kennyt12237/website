import React, { useState } from 'react';
import '../scss/ProjectText.scss';

export default function ProjectText(props) {

	const { title, list } = props;
	const [ selected, setSelected ] = useState(0);

	const onPointClicked = (index) => {
		setSelected(index);
	}

	const computeStyles = (index) => {
		let opacity = 1;
		if (selected !== index) {
			opacity = 0.5;
		} 
		
		return {
			opacity : opacity
		}
	}

	return (
		<div className="project-text-container">
			<p className="project-text-container__title"> {title} </p>
			<ul className="project-text-container__list">
			{
				list ? list.map((point, index) => {
					return <li style={computeStyles(index)} onClick={() => onPointClicked(index)} key={index}> {point} </li>
				}) : <div> NONE </div>
			}
			</ul>
		</div>
	)
}