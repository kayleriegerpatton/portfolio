import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUpRightFromSquare,
	faBars,
	faX,
} from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

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

	// ref mobile menu so clickAway closes it
	const ref = useRef(null);
	useClickAway(ref, () => setMenuOpen(false));

	const mobile = useMediaQuery({ query: '(max-width: 575px' });

	return (
		<header>
			<HashLink id="logo" to="#hero" smooth>
				Kayle
			</HashLink>
			<div ref={ref}>
				{mobile && (
					<button
						type="button"
						name="menu"
						className="menu"
						onClick={() => {
							setMenuOpen(!menuOpen);
						}}
					>
						<span className="hidden">Menu</span>
						<FontAwesomeIcon
							icon={faBars}
							className={menuOpen ? 'hidden' : ''}
							size="2x"
						/>
						<FontAwesomeIcon icon={faX} className="hidden" size="2x" />
					</button>
				)}

				<nav className={menuOpen ? 'open' : ''}>
					<HashLink
						to="#about-section"
						smooth
						scroll={(element) => scrollWithOffset(element)}
						onClick={() => setMenuOpen(false)}
					>
						About
					</HashLink>
					<HashLink
						to="#projects-section"
						smooth
						scroll={(element) => scrollWithOffset(element)}
						onClick={() => setMenuOpen(false)}
					>
						Projects
					</HashLink>
					<HashLink
						to="#contact-section"
						smooth
						scroll={(element) => scrollWithOffset(element)}
						onClick={() => setMenuOpen(false)}
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
			</div>
		</header>
	);
}

export default Header;
