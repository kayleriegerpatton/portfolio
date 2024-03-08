const scrollWithOffset = (el) => {
	const headerOffset = document.getElementById('header').offsetHeight;

	const elementPosition = el.getBoundingClientRect().top;

	const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

	window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
};

export default scrollWithOffset;
