import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './TestimonialsSection.css';
import testimonials from '../../data/testimonials';

function TestimonialsSection() {
	return (
		<div id="testimonials">
			<hr />
			<section id="testimonials-section">
				<h2 className="section-heading">Testimonials</h2>
				<h3 className="section-subheading">
					Discover what my peers have to say about my contributions as a
					software engineer:
				</h3>
				<div className="testimonial-container">
					{testimonials.map((testimonial) => (
						<TestimonialCard
							key={testimonial.id}
							fullName={testimonial.fullName}
							text={testimonial.text}
							role={testimonial.role}
							company={testimonial.company}
						/>
					))}
				</div>
			</section>
		</div>
	);
}

export default TestimonialsSection;
