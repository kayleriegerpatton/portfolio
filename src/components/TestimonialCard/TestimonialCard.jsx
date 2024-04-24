import React from 'react';
import PropTypes from 'prop-types';
import './TestimonialCard.css';

function TestimonialCard({ fullName, text, role, company }) {
	return (
		<div className="testimonial-card">
			<p className="testimonial-text">
				<span className="quote-emphasis">&quot;</span>
				{text}
				<span className="quote-emphasis">&quot;</span>
			</p>
			<p className="testimonial-name">{fullName}</p>
			<p className="testimonial-role">
				{role}, {company}
			</p>
		</div>
	);
}

TestimonialCard.propTypes = {
	fullName: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
};

export default TestimonialCard;
