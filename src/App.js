import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import HomeContent from './HomePage/Components/HomeContent';
import ProjectContentList from './Media/Components/ProjectContentList';
import Header from './HomePage/Components/Header'
import { projects } from './Media/DummyData/dummyTextOne';
import LoginRoute from './ClientRoute/LoginRoute';
import ErrorPage from './ErrorPage';
import { isVisible } from '@testing-library/user-event/dist/utils';
import NotificationAlert from './HomePage/Components/NotificationAlert';

function App() {


  return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route index element={<HomeContent />} />
					<Route element={<LoginRoute />} >
						<Route path='/projects' element={<ProjectContentList projects={projects}/>}/>
					</Route>
					<Route path='/error' element={<ErrorPage errMsg={"Connect to metamask"}/>}/>
				</Route>
			</Routes>
		</Router>
  	);
}

function Layout() {
	return (
		<div className='background'>
			<Header />
			<NotificationAlert timer={3000}>
			</NotificationAlert>
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default App;
