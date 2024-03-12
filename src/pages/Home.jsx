import React from 'react';

import AboutSection from '../components/AboutSection/AboutSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Hero from '../components/Hero/Hero';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';

function Home() {
	return (
		<main>
			<Hero />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}

export default Home;
