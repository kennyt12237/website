import React from 'react';
import './App.scss';
import Media from './MediaModule/Components/Media';
import ProjectText from './MediaModule/Components/ProjectText';

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
				<div className="project-container__summary"> 
					<ProjectText title="Project" list={["Point One", "Point Two", "Point Three", "Point Four"]}/>
				</div>
				<div className="project-container__media">
					<Media srcs={["leaf.png","cabin.png", "trees.png","walkway.png"]}/>
				</div>
			</div>
	</div>
	
  );
}

export default App;
