import React from 'react';
import './Hero.css';

function Hero() {
	return (
		<div id="hero">
			{/* semantic h1 is visually hidden, but available to screen readers */}
			<h1 className="hidden">
				I&apos;m a Software Engineer and accessibility advocate
			</h1>
			<p id="hero-text-1">I&apos;m a</p>
			<p className="hero-emphasis" id="hero-emphasis-1">
				Software
			</p>
			<p className="hero-emphasis" id="hero-emphasis-2">
				Engineer
			</p>
			<p id="hero-text-2">and accessibility advocate</p>
		</div>
	);
}

export default Hero;
