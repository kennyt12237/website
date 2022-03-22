import React from 'react';
import './ErrorPage.scss';

export default function ErrorPage(props) {

	const { errMsg } = props;

	return (
		<div className='error-page'>
			<div className='error-page--title'> Error </div>
			<div className='error-page--msg'> { errMsg } </div>
		</div>
	)
}