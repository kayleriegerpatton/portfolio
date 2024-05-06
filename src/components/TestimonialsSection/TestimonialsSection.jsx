import React from 'react';
import './TestimonialsSection.css';
import Carousel from '../Carousel/Carousel';

function TestimonialsSection() {
	return (
		<div id="testimonials">
			<hr />
			<section id="testimonials-section">
				<h2 className="section-heading">Testimonials</h2>
				<h3 className="section-subheading">
					Read what my peers have to say about my contributions as a software
					engineer:
				</h3>
				<div className="testimonial-container">
					<Carousel />
				</div>
			</section>
		</div>
	);
}

export default TestimonialsSection;
