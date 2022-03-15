import React, { useState, createContext } from 'react';

const ProjectTextContext = createContext();

function ProjectTextContextProvider(props) {

	const { children } = props;
	const [ selectedText, setSelectedText ] = useState(0);

	return (
		<ProjectTextContext.Provider value={[selectedText, setSelectedText]}>
			{ children }
		</ProjectTextContext.Provider>
	)
}

export {
	ProjectTextContext,
	ProjectTextContextProvider
}