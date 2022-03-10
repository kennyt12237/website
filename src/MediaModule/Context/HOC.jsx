import React from 'react';
import ProjectContextProvider from './ProjectContextProvider';
import ProjectComponent from '../Components/ProjectComponent';
export default function HOC(props) {

	const { title, list, srcs } = props;

	return (
		<ProjectContextProvider list={list} srcs={srcs}>
			<ProjectComponent title={title} list={list} srcs={srcs} />
		</ProjectContextProvider>

	)
}