import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import './App.css';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from './components/ContactSection/ContactSection';
import SkipLink from './components/SkipLink/SkipLink';

function App() {
	return (
		<BrowserRouter>
			<SkipLink />
			<div className="app">
				<Header />
				<main>
					<Hero />
					<AboutSection />
					<ProjectsSection />
					<ContactSection />
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
export default App;
