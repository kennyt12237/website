import React from 'react';
import { ProjectTextContextProvider } from './ProjectTextContextProvider';
import { MediaContextProvider } from './MediaContextProvider';

export default function ProjectContextProvider(props) {

	const { srcs, children } = props;

	return (
		<ProjectTextContextProvider>
			<MediaContextProvider srcs={srcs}>
				{ children }
			</MediaContextProvider>
		</ProjectTextContextProvider>
	)
}