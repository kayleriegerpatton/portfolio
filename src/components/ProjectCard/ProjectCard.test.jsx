import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
	const renderProjectCard = () => {
		render(
			<BrowserRouter>
				<ProjectCard
					image="default.png"
					altText="test alt text"
					title="Test"
					desc="Test description"
					tech={['React', 'Jest']}
					github="github.com"
					live=""
					year={2024}
				/>
			</BrowserRouter>
		);
	};

	it('should render with the passed props', () => {
		renderProjectCard();

		expect(
			screen.getByRole('img', { name: 'test alt text' })
		).toBeInTheDocument();
		expect(screen.getByAltText('test alt text')).toBeInTheDocument();
		expect(screen.getByText('Test description')).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: 'Test github link' })
		).toBeInTheDocument();

		expect(
			screen.queryByRole('link', { name: 'Test live link' })
		).not.toBeInTheDocument();
	});
});
