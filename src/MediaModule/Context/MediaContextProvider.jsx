import React, { useState, createContext } from 'react';

const MediaContext = createContext();

export default function MediaContextProvider(props) {

	const { srcs, children } = props;
	const [ media , setMedia ] = useState(srcs);

	return (
		
		<MediaContext.Provider value={[media, setMedia]}>
			{ children }
		</MediaContext.Provider>
	)
}

export {
	MediaContext,
	MediaContextProvider
}