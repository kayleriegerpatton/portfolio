import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Footer() {
	return (
		<footer>
			<div>
				<FontAwesomeIcon
					icon={faSquareGithub}
					className="footer-icon"
					size="2xl"
				/>
				<FontAwesomeIcon icon={faLinkedin} className="footer-icon" size="2xl" />
				<FontAwesomeIcon icon={faEnvelope} className="footer-icon" size="2xl" />
			</div>
			<p>Built by Kayle Rieger Patton</p>
		</footer>
	);
}
export default Footer;
