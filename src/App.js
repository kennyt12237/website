import React from 'react';
import './App.scss';
import HomeContent from './HomePage/Components/HomeContent';
import MetamaskButton from './HomePage/Components/MetamaskButton';
import ProjectContentList from './Media/Components/ProjectContentList';
import { projects } from './Media/DummyData/dummyTextOne';
import MetamaskHOC from './Web3/HigherOrderComponents/MetamaskHOC';

function App() {
  return (
	<div className='background'>
		<div className='root-container'>
			<div className='logo-container'>
				{/* Image logo here */}
				<div className='logo-container__logo'> </div>
				<div className='logo-container__name'> </div>
			</div>
			<MetamaskHOC>
				<MetamaskButton />
			</MetamaskHOC>
		</div>
		<ProjectContentList projects={projects}/>
	</div>
  );
}

export default App;
