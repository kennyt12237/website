import React from 'react';
import './App.scss';
import ProjectDisplayer from './MediaModule/ProjectDisplayer';
import { projects } from './MediaModule/DummyProject/dummyProjectsOne';

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
				Connect Wallet
			</div>
			<div className="info">
				<div className="info__contact">
					<div className="info__contact__header">
						<img className="info__contact__header--round" src="/logo192.png" alt="Kenny Tang"/>
						<div className="info__contact__header--name"> Kenny Tang </div>
					</div>
					<div className="info__contact__personal-links"> 
						<div className="info__contact__personal-links--blockchain-info"> 
							{/* image and address */}
							<p>HEHE</p>
						</div>
						<div className="info__contact__personal-links--links">
							<a href="https://www.twitter.com"> Twitter </a>
							<p></p>
						</div>
					</div>
				</div>
			</div>
			<ProjectDisplayer  projects={projects} />
		</div>
	</div>
  );
}

export default App;
