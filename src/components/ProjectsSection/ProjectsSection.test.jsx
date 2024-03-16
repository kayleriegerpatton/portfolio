import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import ProjectsSection from './ProjectsSection';

const projectCardsData = [
	{
		id: 15,
		title: 'Deployment Platform CLI Rewrite',
		technologies: ['OpenAPI', 'Commander.js', 'JavaScript', 'Sinon.js'],
		description:
			'Collaborated with the BBC deployment platform team to overhaul its CLI. The rewrite achieved full API feature parity—a 500% increase in low-level commands—and produced robust generated reference documentation. Began work on high-level commands to streamline processes and decommission redundant tooling.',
		imageSrc: 'cosmosCLI',
		altText:
			'Snippet of CLI documentation including command usage, arguments, options, and JSON example',
		githubUrl: '',
		deployedUrl: '',
		year: 2024,
		archived: false,
	},

	{
		id: 14,
		title: 'Accessibility Audit & Refactor',
		technologies: ['React', 'WCAG', 'WebAIM Contrast Checker', 'Recharts'],
		description: `Conducted an informal accessibility audit of the BBC's internal deployment metrics dashboard. Redesigned the site for an improved user experience including compliance with WCAG AA guidelines, robust Help page, and clearer content hierarchy.`,
		imageSrc: 'metrikComparison',
		altText: 'Before and after side-by-side comparison of Metrik dashboard',
		githubUrl: '',
		deployedUrl: '',
		year: 2023,
		archived: false,
	},
	{
		id: 13,
		title: 'Stockscape',
		technologies: [
			'Chart.js',
			'Express.js',
			'Handlebars.js',
			'JavaScript',
			'MySQL',
			'REST API',
		],
		description:
			"A gamified investing application that tests users' skills as they build portfolios and compete for the highest year-end earnings.",
		imageSrc: 'stockscape',
		altText: 'Website run-through gif including pie chart animation',
		githubUrl: 'https://github.com/kayleriegerpatton/stockscape',
		deployedUrl: '',
		year: 2022,
		archived: false,
	},
	{
		id: 12,
		title: 'Unified',
		technologies: [
			'React',
			'AWS S3',
			'Apollo Client',
			'JavaScript',
			'MongoDB',
			'GraphQL',
		],
		description:
			'A full-stack student services and social media website where users can search for and save jobs, buy/sell secondhand items, and interact via posts and comments. Features user-authentication, subscription polling, and AWS S3 image uploading.',
		imageSrc: 'unified',
		altText: 'Unified landing page',
		githubUrl: 'https://github.com/kayleriegerpatton/unified-client',
		deployedUrl: '',
		year: 2022,
		archived: false,
	},
	{
		id: 11,
		title: 'Sound Art Smart',
		technologies: ['Bulma CSS', 'HTML', 'JavaScript', `web APIs`],
		description:
			'Web app that guides users through image-based selections in order to present a random assortment of artworks matching their interests. Users can learn more by viewing the artwork info pages, save their favorite artworks, and even arrange their own gallery page with draggable content.',
		imageSrc: 'soundArtSmart',
		altText: 'Webpage with artist quote and intro text',
		githubUrl: 'https://github.com/kayleriegerpatton/sound-art-smart',
		deployedUrl: 'https://kayleriegerpatton.github.io/sound-art-smart/',
		year: 2021,
		archived: false,
	},
	{
		id: 10,
		title: 'Tech Talk',
		technologies: [
			'Bootstrap',
			'Handlebars.js',
			'JavaScript',
			'MySQL',
			'REST API',
		],
		description: `A full-stack, CMS-style micro blog site featuring user-authentication, MVC structure, and Handlebars.js templating. From their dashboard, logged-in users can view, edit, and delete their published blogs and write new ones. Logged-in users may also view and comment on others' blogs and return to edit or delete their comments.`,
		imageSrc: 'techTalk',
		altText: 'Lavender and orange webpage with list of blogs',
		githubUrl: 'https://github.com/kayleriegerpatton/tech-blog-cms',
		deployedUrl: '',
		year: 2022,
		archived: false,
	},
];

describe('ProjectsSection', () => {
	const renderProjects = () => {
		render(
			<MemoryRouter>
				<ProjectsSection projects={projectCardsData} />
			</MemoryRouter>
		);
	};

	it('should render 3 featured projects on load', () => {
		renderProjects();
		// screen.debug();
		expect(screen.queryAllByRole('img')).toHaveLength(3);
	});

	it('should render additional projects after Show More button is clicked', async () => {
		renderProjects();
		const user = userEvent.setup();

		await user.click(screen.getByRole('button', { name: 'Show More' }));
		// screen.debug();

		expect(screen.queryAllByRole('img')).toHaveLength(6);
	});

	// TODO: test for receiving bad data object
});
