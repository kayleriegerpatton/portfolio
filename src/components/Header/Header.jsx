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

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	// ref mobile menu so clickAway closes it
	const ref = useRef(null);
	useClickAway(ref, () => setMenuOpen(false));

	const mobile = useMediaQuery({ query: '(max-width: 575px' });

	const scrollWithOffset = (el) =>
		window.scrollTo({
			// nonfunctional if using scrollY instead of pageYOffset
			top: el.getBoundingClientRect().top + window.pageYOffset - 170,
			behavior: 'smooth',
		});

	return (
		<header>
			<HashLink id="logo" to="#top" smooth>
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
						<FontAwesomeIcon
							icon={faX}
							className={menuOpen ? '' : 'hidden'}
							size="2x"
						/>
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
						to="https://docs.google.com/document/u/0/d/e/2PACX-1vQEW_fcC4ZmCJPRgPFb_m8kXRKV2qhg1GaxyuiLxWuvzompKxgBpRqwRpmHr6NfEAdbXCxUG0WjyYq5/pub?pli=1"
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
