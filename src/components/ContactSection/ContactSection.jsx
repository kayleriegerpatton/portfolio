import React from 'react';
import personalLogo from '../../public/assets/images/personal-logo.png';
import './ContactSection.css';

function ContactSection() {
	return (
		<div>
			<hr />
			<section id="contact-section">
				<h2 id="contact-heading">CONTACT</h2>
				<div id="contact-text">
					<p>kayle.patton22@gmail.com</p>
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
				/>
			</section>
		</div>
	);
}
export default ContactSection;
