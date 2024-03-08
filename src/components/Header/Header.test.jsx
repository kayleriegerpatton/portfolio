import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import App from '../../App';

describe('Nav link scrolling', () => {
	beforeEach(() => {
		window.scrollTo = jest.fn();
	});

	const mockSection = ({ id, topDistance }) => {
		const section = document.createElement('section');
		section.setAttribute('id', id);
		section.getBoundingClientRect = jest.fn(() => ({ top: topDistance }));
		document.body.appendChild(section);
	};

	it('should scroll the page to the element with the given id', async () => {
		// Arrange
		const id = 'projects-section';
		const topDistance = 400;
		const offset = 170;

		mockSection({ id, topDistance });
		render(<App />);
		// Act
		await userEvent.click(screen.getByRole('link', { name: 'Projects' }));
		// Assert
		expect(window.scrollTo).toHaveBeenCalledWith({
			behavior: 'smooth',
			top: topDistance - offset,
		});
	});
});
