import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Footer() {
	return (
		<footer>
			<div>
				<a
					aria-label="Kayle's GitHub"
					href="https://github.com/kayleriegerpatton"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon
						icon={faSquareGithub}
						className="footer-icon"
						size="2xl"
					/>
				</a>
				<a
					aria-label="Kayle's LinkedIn"
					href="https://linkedin.com/in/kaylerieger"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon
						icon={faLinkedin}
						className="footer-icon"
						size="2xl"
					/>
				</a>
				<a aria-label="email Kayle" href="mailto:kayle.patton22@gmail.com">
					<FontAwesomeIcon
						icon={faEnvelope}
						className="footer-icon"
						size="2xl"
					/>
				</a>
			</div>
			<p>Built by Kayle Rieger Patton</p>
		</footer>
	);
}
export default Footer;
