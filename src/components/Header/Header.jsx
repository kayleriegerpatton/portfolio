import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUpRightFromSquare,
	faBars,
	faX,
} from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

import './Header.css';

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	// ref mobile menu so clickAway closes it
	const ref = useRef(null);
	useClickAway(ref, () => setMenuOpen(false));

	const mobile = useMediaQuery({ query: '(max-width: 575px' });

	return (
		<header id="header">
			<a id="logo" href="#top">
				Kayle
			</a>
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
					<a href="#about" onClick={() => setMenuOpen(false)}>
						About
					</a>
					<a href="#projects" onClick={() => setMenuOpen(false)}>
						Projects
					</a>
					<a href="#contact" onClick={() => setMenuOpen(false)}>
						Contact
					</a>
					<a
						href="https://docs.google.com/document/u/0/d/e/2PACX-1vQEW_fcC4ZmCJPRgPFb_m8kXRKV2qhg1GaxyuiLxWuvzompKxgBpRqwRpmHr6NfEAdbXCxUG0WjyYq5/pub?pli=1"
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
			</div>
		</header>
	);
}

export default Header;
