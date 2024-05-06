// eslint no-use-before-define: 0
window.matchMedia =
	window.matchMedia ||
	function () {
		return {
			matches: false,
			addListener() {},
			removeListener() {},
		};
	};
