import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import './Header.css';

const scrollWithOffset = (element) => {
	element.scrollIntoView({ behavior: 'smooth', block: 'start' });
	// window.scrollTo(500, 0);
	// const yOffset = -800;
	// const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
	// window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header>
			<HashLink id="logo" to="#hero" smooth>
				Kayle
			</HashLink>
			{/* <Nav />
			 */}
			<div
				className="menu"
				onClick={() => {
					setMenuOpen(!menuOpen);
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav className={menuOpen ? 'open' : ''}>
				<HashLink
					to="#about-section"
					smooth
					scroll={(element) => scrollWithOffset(element)}
				>
					About
				</HashLink>
				<HashLink
					to="#projects-section"
					smooth
					scroll={(element) => scrollWithOffset(element)}
				>
					Projects
				</HashLink>
				<HashLink
					to="#contact-section"
					smooth
					scroll={(element) => scrollWithOffset(element)}
				>
					Contact
				</HashLink>
				<Link
					to="https://www.canva.com/design/DAE4Ifi_4Ok/WT7Oh8YsOt_JQm9Z-R28dw/view?utm_content=DAE4Ifi_4Ok&utm_campaign=designshare&utm_medium=link&utm_source=editor"
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
		</header>
	);
}

export default Header;
