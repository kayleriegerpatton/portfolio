import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import './ProjectCard.css';

function ProjectCard({
	image,
	altText,
	title,
	desc,
	tech,
	github,
	live,
	year,
}) {
	return (
		<div className="project-card">
			<img src={image} alt={altText} className="project-image" />
			<h3 className="project-title">{title}</h3>
			<p className="project-desc">{desc}</p>
			<p className="project-tech">{tech.join('\xa0 \xa0 ')}</p>
			<div className="project-links">
				{github.length > 0 && (
					<Link
						aria-label={`${title} github link`}
						to={github}
						target="_blank"
						rel="noreferrer"
						className="project-icon"
					>
						<FontAwesomeIcon icon={faSquareGithub} size="2xl" />
					</Link>
				)}
				{live.length > 0 && (
					<Link
						aria-label={`${title} live link`}
						href={live}
						target="_blank"
						rel="noreferrer"
						className="project-icon live-project-icon"
					>
						<FontAwesomeIcon icon={faUpRightFromSquare} size="xl" />
					</Link>
				)}
			</div>
			<p className="project-year">{year}</p>
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
	year: PropTypes.number.isRequired,
};

export default ProjectCard;
