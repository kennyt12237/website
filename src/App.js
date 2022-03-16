import React from 'react';
import './App.scss';
import HomeContent from './HomePage/Components/HomeContent';
import ProjectContent from './Media/Components/ProjectContent';
import { data } from './Media/DummyData/dummyTextOne';

function App() {
  return (
	<div className='background'>
		<div className='root-container'>
			<div className='logo-container'>
				{/* Image logo here */}
				<div className='logo-container__logo'> </div>
				<div className='logo-container__name'> </div>
			</div>
			<div className='wallet-container' >
				<img className="wallet-container__image" src="metamask.png" alt="Metamask Logo" />
				<p>Connect Wallet </p>
			</div>
		</div>
		<ProjectContent projectContent={data.projectContent} web3Message={data.web3Message} mediaSrc={data.mediaSrc}/>
	</div>
  );
}

export default App;
