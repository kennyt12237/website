import React from 'react';
import './App.scss';

function App() {
  return (
		<div className="root-container">
			<div className="info">
				<div className="info__contact">
					<div className="info__contact__header">
						<img className="info__contact__header--round" src="/logo192.png" alt="Kenny Tang"/>
						<div className="info__contact__header--welcome"> Welcome! </div>
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

			
			<div className="project-container">
				<div className="project-container__content">
					<div className="project-container__content__line">
					
					</div>
					
					<div className="project-container__content__body">
						<div className="project-container__content__body__summary"> 
							Project
							<ul>
								<li>Point One</li>
								<li>Point Two</li>
								<li>Point Three</li>
								<li>Point Four</li>
							</ul>
						</div>
						<div className="project-container__content__body__media">
							<div>MEDIA</div>
							
						</div>
					</div>

					<div className="project-container__content__line">
					
					</div>
				</div>
			</div>
	</div>
	
  );
}

export default App;
