import React from 'react';
import '../scss/Media.scss';

export default function Media(props) {

	const { imageUrl } = props;

	return (
		<div className='media-container'>
			<img className='media-container__image' src={imageUrl} alt="media"/>
		</div>
	)
}