import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import HomeContent from './HomePage/Components/HomeContent';
import ProjectContentList from './Media/Components/ProjectContentList';
import Header from './HomePage/Components/Header'
import { projects } from './Media/DummyData/dummyTextOne';
import ProtectedRoute from './ClientRoute/ProtectedRoute';
import WithWalletContextProvider from './Web3/HigherOrderComponents/WithWalletContextProvider';

function App() {
  return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route index element={<HomeContent />} />
					<Route path='/projects' element={
						<WithWalletContextProvider>
							<ProtectedRoute redirectTo="/">
								<ProjectContentList projects={projects} />
							</ProtectedRoute>
						</WithWalletContextProvider>} />
					</Route>
			</Routes>
		</Router>
  	);
}

function Layout() {
	return (
		<div className='background'>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default App;
