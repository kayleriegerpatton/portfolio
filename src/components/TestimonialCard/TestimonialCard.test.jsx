import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import TestimonialCard from './TestimonialCard';

describe('TestimonialCard', () => {
	const renderTestimonialCard = () => {
		render(
			<MemoryRouter>
				<TestimonialCard
					fullName="jane doe"
					text="test"
					role="software engineer"
					company="cool company"
				/>
			</MemoryRouter>
		);
	};

	it('should render with the passed props', () => {
		renderTestimonialCard();

		expect(screen.getByText('jane doe')).toBeInTheDocument();
		expect(
			screen.getByText('software engineer, cool company')
		).toBeInTheDocument();
	});
});
