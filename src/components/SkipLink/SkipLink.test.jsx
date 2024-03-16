import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import SkipLink from './SkipLink';

describe('SkipLink', () => {
	it('should not render on screens <576px', async () => {
		render(
			<BrowserRouter>
				<SkipLink />
			</BrowserRouter>
		);

		// TODO: resize window & fix test!
		// render, assert, resize, re-assert

		screen.debug();
		expect(
			screen.queryByRole('link', { name: 'Skip to Content' })
		).not.toBeInTheDocument();

		// await expect(window.innerWidth).toBe(575);
	});
});
