import React from 'react';
import '../scss/ProjectText.scss';

export default function ProjectText(props) {

	const { title, list, state : [selectedText, setSelectedText] } = props;

	const onPointClicked = (index) => {
		setSelectedText(index);
	}

	const computeStyles = (index) => {
		let opacity = 1;
		if (selectedText !== index) {
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