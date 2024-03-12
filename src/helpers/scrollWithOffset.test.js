import scrollWithOffset from './scrollWithOffset';

window.scrollTo = jest.fn();

describe('scrollWithOffset', () => {
	it('scrolls to the correct element position with offset', () => {
		// Arrange
		// header for offset
		const header = document.createElement('div');
		header.id = 'header';
		header.style.height = '170px';
		document.body.appendChild(header);

		const targetElement = document.createElement('div');
		targetElement.getBoundingClientRect = jest.fn(() => ({ top: 230 }));

		// Act
		scrollWithOffset(targetElement);

		// Assert
		const expectedOffset = 400 + window.pageYOffset - 170;
		expect(window.scrollTo).toHaveBeenCalledWith({
			top: expectedOffset,
			behavior: 'smooth',
		});

		document.body.removeChild(header);
	});
});
