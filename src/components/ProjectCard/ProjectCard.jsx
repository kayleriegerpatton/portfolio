import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import personalLogo from '../../../public/assets/images/personal-logo.png';
import './ProjectCard.css';

function ProjectCard({ image, altText, title, desc, tech, github, live }) {
	return (
		<div className="project-card">
			<img src={personalLogo} alt={altText} className="project-image" />
			<h3 className="project-title">{title}</h3>
			<p className="project-desc">{desc}</p>
			<p className="project-tech">{tech.join(' ')}</p>
			<a
				aria-label={`${title}-github`}
				href={github}
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon
					icon={faSquareGithub}
					className="project-icon"
					size="2xl"
				/>
			</a>
			<a
				aria-label={`${title}-live`}
				href={live}
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon
					icon={faUpRightFromSquare}
					className="project-icon"
					size="xl"
				/>
			</a>
		</div>
	);
}
ProjectCard.propTypes = {
	image: PropTypes.string.isRequired,
	altText: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	tech: PropTypes.arrayOf(PropTypes.string).isRequired,
	github: PropTypes.string.isRequired,
	live: PropTypes.string.isRequired,
};

export default ProjectCard;
