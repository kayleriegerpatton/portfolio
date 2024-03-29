import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import SkipLink from './components/SkipLink/SkipLink';
import Home from './pages/Home';

function App() {
	const mobile = useMediaQuery({ query: '(max-width: 575px' });
	return (
		<div className="app">
			{!mobile && <SkipLink />}
			<Header />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
			<Footer />
		</div>
	);
}

function Layout() {
	return (
		<>
			{/* <Outlet> renders active child routes, so think of it as a placeholder for the child routes defined above. */}
			<Outlet />
		</>
	);
}

export default App;
