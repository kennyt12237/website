import React, { useEffect, useContext } from 'react';
import ProjectText from './ProjectText.jsx';
import Media from './Media.jsx';
import  { ProjectTextContext } from '../Context/ProjectTextContextProvider';
import { MediaContext } from '../Context/MediaContextProvider';

export default function ProjectComponent(props) {

	const { title, list, srcs} = props;
	const [ selectedText, setSelectedText ] = useContext(ProjectTextContext);
	const [ media, setMedia ] = useContext(MediaContext);

	// useEffect(() => {
	// 	if (media) {
			
	// 	}
	// },[media])

	return (
		<div className='project-container'>
			<ProjectText title={title} list={list}/>
			<Media srcs={srcs}/>
		</div>
	)
}