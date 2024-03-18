import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ProjectsSection.css';
import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectsSection({ projects }) {
	const [projectsExpanded, setProjectsExpanded] = useState(false);

	const expandProjects = () => {
		setProjectsExpanded(!projectsExpanded);
	};

	return (
		<div id="projects">
			<hr />
			<section id="projects-section">
				<h2 id="projects-heading">Projects</h2>
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
				<button
					type="button"
					className="button"
					onClick={() => expandProjects()}
				>
					{projectsExpanded ? 'Show Less' : 'Show More'}
				</button>
			</section>
		</div>
	);
}

ProjectsSection.propTypes = {
	projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ProjectsSection;
