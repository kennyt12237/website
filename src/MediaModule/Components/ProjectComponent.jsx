import React, { useRef, useEffect, useContext } from 'react';
import ProjectText from './ProjectText.jsx';
import Media from './Media.jsx';
import  { ProjectTextContext } from '../Context/ProjectTextContextProvider';
import { MediaContext } from '../Context/MediaContextProvider';
import useIntersection from '../Helper/useIntersection.jsx';
import '../scss/ProjectComponent.scss';

export default function ProjectComponent(props) {

	const { title, list, srcs} = props;
	const [ selectedText, setSelectedText ] = useContext(ProjectTextContext);
	const [ media, setMedia ] = useContext(MediaContext);
	const mediaComponentRef = useRef(); 
	const inViewpoint = useIntersection(mediaComponentRef, '0px', '1.0');

	useEffect(() => {
		if (media) {
			for (let i = 0; i < srcs.length; i++) {
				if (media[0] === srcs[i]) {
					setSelectedText(i);
					break;
				}
			}
		}
	},[media, setSelectedText, srcs])

	return (
		<div className='project-container'>
			<ProjectText title={title} list={list} state={[selectedText, setSelectedText]}/>
			<Media innerRef={mediaComponentRef} srcs={srcs} inViewpoint={inViewpoint} state={[ media, setMedia]}/>
		</div>
	)
}