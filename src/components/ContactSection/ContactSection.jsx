import React from 'react';
import personalLogo from '../../../public/assets/images/personal-logo.png';
import './ContactSection.css';

function ContactSection() {
	return (
		<div id="contact">
			<hr />
			<section id="contact-section">
				<h2 id="contact-heading">CONTACT</h2>
				<div id="contact-text">
					<a href="mailto:kayle.patton22@gmail.com">kayle.patton22@gmail.com</a>
					<br />
					<a
						href="https://www.linkedin.com/in/kaylerieger"
						target="_blank"
						rel="noreferrer"
					>
						@LinkedIn
					</a>
				</div>
				<img
					src={personalLogo}
					alt="Kayle's personal brand graphic, a black and white design reminiscent of chevrons"
					id="contact-img"
				/>
			</section>
		</div>
	);
}
export default ContactSection;
