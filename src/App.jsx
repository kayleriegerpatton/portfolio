import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from './components/ContactSection/ContactSection';

function App() {
	return (
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
	);
}
export default App;
