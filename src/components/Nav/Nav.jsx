import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Nav.css';

function Nav() {
	return (
		<nav>
			<HashLink to="#about-section">About</HashLink>
			<HashLink to="#projects-section">Projects</HashLink>
			<HashLink to="#contact-section">Contact</HashLink>
			<Link
				href="https://www.canva.com/design/DAE4Ifi_4Ok/WT7Oh8YsOt_JQm9Z-R28dw/view?utm_content=DAE4Ifi_4Ok&utm_campaign=designshare&utm_medium=link&utm_source=editor"
				target="_blank"
				rel="noreferrer"
			>
				CV
				<FontAwesomeIcon
					icon={faUpRightFromSquare}
					className="nav-icon"
					size="sm"
				/>
			</Link>
		</nav>
	);
}
export default Nav;
