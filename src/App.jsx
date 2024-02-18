import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from './components/ContactSection/ContactSection';

// TODO: change window location to hash
function locationHashChanged() {
	const hashId = window.location.hash;
	console.log(`Change window location to: ${hashId}`);

	// ! cant get elementById with react
	// const element = document.getElementById(hashId);
	// console.log(element);
	// element.scrollIntoView({
	// 	behavior: 'smooth',
	// 	block: 'start',
	// 	inline: 'nearest',
	// });
}

window.onhashchange = locationHashChanged;

function App() {
	return (
		<div id="site-wrapper">
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
