import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import App from './App';
// TODO mock children so console.error resolves
// jest.mock('./components/Header.jsx', () => () => <div data-tstid="header" />);

describe('App', () => {
	it('should render the header logo link', () => {
		render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);

		// screen.debug();
		const heading = screen.getByRole('link', { name: 'Kayle' });
		expect(heading).toBeInTheDocument();
	});

	// TODO: test failed to render (show 404 page instead)
});
