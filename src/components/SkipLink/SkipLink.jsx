import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './SkipLink.css';
import scrollWithOffset from '../../helpers/scrollWithOffset';

function SkipLink() {
	return (
		<HashLink
			to="#about"
			smooth
			className="skip-link"
			scroll={(element) => scrollWithOffset(element)}
		>
			Skip to Content
		</HashLink>
	);
}

export default SkipLink;
