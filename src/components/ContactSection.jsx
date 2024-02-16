import React from 'react';
import './ContactSection.css';

function ContactSection() {
	return (
		<div>
			<hr />
			<section id="contact-section">
				<h2 id="contact-heading">CONTACT</h2>
				<div>
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
					src="../../public/images/personal-logo.png"
					alt="black and white chevron graphic"
				/>
			</section>
		</div>
	);
}
export default ContactSection;
