import React from 'react';
import { ProjectTextContextProvider } from './ProjectTextContextProvider';
import { MediaContextProvider } from './MediaContextProvider';

export default function ProjectContextProvider(props) {

	const { children } = props;

	return (
		<ProjectTextContextProvider>
			<MediaContextProvider>
				{ children }
			</MediaContextProvider>
		</ProjectTextContextProvider>
	)
}