const scrollWithOffset = (el) => {
	const headerHeightOffset = document.getElementById('header').offsetHeight;

	const elementPosition = el.getBoundingClientRect().top;

	const offsetPosition =
		elementPosition + window.pageYOffset - headerHeightOffset;

	window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
};

export default scrollWithOffset;
