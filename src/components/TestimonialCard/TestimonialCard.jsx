import React from 'react';
import PropTypes from 'prop-types';
import './TestimonialCard.css';

function TestimonialCard({ fullName, text, roleName, company }) {
	return (
		<div className="testimonial-card">
			<p className="testimonial-text">
				<span className="quote-emphasis">&quot;</span>
				{text}
				<span className="quote-emphasis">&quot;</span>
			</p>
			<p className="testimonial-name">{fullName}</p>
			<p className="testimonial-role">
				{roleName}, {company}
			</p>
		</div>
	);
}

TestimonialCard.propTypes = {
	fullName: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	roleName: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
};

export default TestimonialCard;
