import React, { useState } from 'react';

import './ProjectsSection.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../../data/projects';
import scrollWithOffset from '../../helpers/scrollWithOffset';

function ProjectsSection() {
	const [projectsExpanded, setProjectsExpanded] = useState(false);

	const expandProjects = () => {
		setProjectsExpanded(!projectsExpanded);
		// if projects are being expanded, don't scroll up
		if (projectsExpanded === true) {
			const element = document.getElementById('projects');
			scrollWithOffset(element);
		}
	};

	return (
		<div id="projects">
			<hr />
			<section id="projects-section">
				<h2 id="projects-heading">PROJECTS</h2>
				<div id="projects-container">
					{/* Featured Projects */}
					{!projectsExpanded &&
						projects
							.slice(0, 3)
							.map((project) => (
								<ProjectCard
									key={project.id}
									image={project.imageSrc}
									altText={project.altText}
									title={project.title}
									desc={project.description}
									tech={project.technologies}
									github={project.githubUrl}
									live={project.deployedUrl}
									year={project.year}
								/>
							))}
					{/* Other Projects */}
					{projectsExpanded &&
						projects.map((project) => (
							<ProjectCard
								key={project.id}
								image={project.imageSrc}
								altText={project.altText}
								title={project.title}
								desc={project.description}
								tech={project.technologies}
								github={project.githubUrl}
								live={project.deployedUrl}
								year={project.year}
							/>
						))}
				</div>
				<button type="button" onClick={() => expandProjects()}>
					{projectsExpanded ? 'Show Less' : 'Show More'}
				</button>
			</section>
		</div>
	);
}
export default ProjectsSection;
