import React from 'react';
import './ProjectsSection.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../../data/projects';

function ProjectsSection() {
	return (
		<div>
			<hr />
			<section id="projects-section">
				<h2 id="projects-heading">PROJECTS</h2>
				<div id="projects-container">
					{projects.reverse().map((project) => (
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
			</section>
		</div>
	);
}
export default ProjectsSection;
