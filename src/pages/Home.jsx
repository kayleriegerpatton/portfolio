import React from 'react';

import AboutSection from '../components/AboutSection/AboutSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Hero from '../components/Hero/Hero';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import projects from '../data/projects';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';

function Home() {
	const unarchivedProjects = projects.filter(
		(project) => project.archived === false
	);

	return (
		<main>
			<Hero />
			<AboutSection />
			<ProjectsSection projects={unarchivedProjects} />
			<TestimonialsSection />
			<ContactSection />
		</main>
	);
}

export default Home;
