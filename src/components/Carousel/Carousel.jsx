import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import testimonials from '../../data/testimonials';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Carousel.css';

function Carousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		// adaptiveHeight: true,
	};
	return (
		<Slider {...settings}>
			{testimonials.map((testimonial) => (
				<TestimonialCard
					key={testimonial.id}
					fullName={testimonial.fullName}
					text={testimonial.text}
					roleName={testimonial.role}
					company={testimonial.company}
				/>
			))}
		</Slider>
	);
}

export default Carousel;
