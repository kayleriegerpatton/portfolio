import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

function Nav() {
	return (
		<nav>
			<a href="#about">About</a>
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
			<a
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
			</a>
		</nav>
	);
}
export default Nav;
