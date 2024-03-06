import teamProfileGenerator from '../images/project-visuals/teamProfileGeneratorGif.gif';
import javascriptCodeQuiz from '../images/project-visuals/javaScriptCodeQuiz.png';
import readmeGenerator from '../images/project-visuals/readmeGenerator.gif';
import dayPlanner from '../images/project-visuals/dayPlanner.png';
import passwordGenerator from '../images/project-visuals/passwordGenerator.png';
import employeeManagement from '../images/project-visuals/employeeManagement.gif';
import noteTaker from '../images/project-visuals/noteTaker.png';
import weatherDashboard from '../images/project-visuals/weatherDashboard.png';
import ecommerceBackend from '../images/project-visuals/ecommerceBackEnd.gif';
import techTalk from '../images/project-visuals/techTalk.png';
import soundArtSmart from '../images/project-visuals/soundArtSmart.png';
import unified from '../images/project-visuals/unified.png';
import stockscape from '../images/project-visuals/stockscape.gif';
import metrikComparison from '../images/project-visuals/metrikRedesign.png';

const projects = [
	{
		id: 1,
		title: 'Team Profile Generator',
		technologies: ['CSS', 'HTML', 'Node.js'],
		description:
			'Node.js app taking user input via the inquirer package and returning a styled HTML page with individual member cards.',
		imageSrc: teamProfileGenerator,
		altText:
			'command line run-through of coded question prompts and resulting webpage',
		githubUrl: 'https://github.com/kayleriegerpatton/team-profile-generator',
		deployedUrl: '',
		year: '',
	},
	{
		id: 2,
		title: 'JavaScript Code Quiz',
		technologies: ['CSS', 'HTML', 'JavaScript', 'jQuery'],
		description: 'A timed, multiple choice JavaScript fundamentals quiz.',
		imageSrc: javascriptCodeQuiz,
		altText: 'Quiz question webpage with question and purple answer buttons',
		githubUrl: 'https://github.com/kayleriegerpatton/javascript-code-quiz',
		deployedUrl: 'https://kayleriegerpatton.github.io/javascript-code-quiz/',
		year: '',
	},
	{
		id: 3,
		title: 'README Generator',
		technologies: ['CSS', 'HTML', 'Node.js'],
		description:
			'Node.js app taking user input via the inquirer package and returning a formatted markdown README file.',
		imageSrc: readmeGenerator,
		altText:
			'command line run-through of coded question prompts and resulting markdown file',
		githubUrl: 'https://github.com/kayleriegerpatton/readme-generator',
		deployedUrl: '',
		year: '',
	},
	{
		id: 4,
		title: 'Day Planner',
		technologies: ['CSS', 'HTML', 'JavaScript', 'jQuery'],
		description:
			'A daily planner that stores events in color-coded time blocks.',
		imageSrc: dayPlanner,
		altText: 'Daily planner webpage with color-coded business hour time blocks',
		githubUrl: 'https://github.com/kayleriegerpatton/work-day-planner',
		deployedUrl: 'https://kayleriegerpatton.github.io/work-day-planner/',
		year: '',
	},
	{
		id: 5,
		title: 'Random Password Generator',
		technologies: ['CSS', 'HTML', 'JavaScript'],
		description:
			'Generate strong random passwords with this simple application.',
		imageSrc: passwordGenerator,
		altText:
			'Webpage titled Password Generator with box containing string of random text characters',
		githubUrl:
			'https://github.com/kayleriegerpatton/employee-random-password-generator',
		deployedUrl:
			'https://kayleriegerpatton.github.io/employee-random-password-generator/',
		year: '',
	},
	{
		id: 6,
		title: 'Employee Management System',
		technologies: ['Inquirer.js', 'Node.js', 'MySQL', 'Sequelize'],
		description:
			'Command line app prompts user questions about employees, roles and departments to interact with MySQL database.',
		imageSrc: employeeManagement,
		altText: 'command line run-through of coded question prompts',
		githubUrl: 'https://github.com/kayleriegerpatton/employee-tracker',
		deployedUrl: '',
		year: '',
	},
	{
		id: 7,
		title: 'Note Taker',
		technologies: ['CSS', 'HTML', 'Express.js', 'JavaScript'],
		description:
			'Note-taking app using an Express.js back-end to save and retrieve note data from a JSON file.',
		imageSrc: noteTaker,
		altText:
			'Webpage with note title and contents, and list of other note titles on left-hand side',
		githubUrl: 'https://github.com/kayleriegerpatton/note-taker/',
		deployedUrl: '',
		year: '',
	},
	{
		id: 8,
		title: 'Weather Dashboard',
		technologies: ['CSS', 'HTML', 'JavaScript', 'jQuery', 'web APIs'],
		description:
			'Search by city to display the current weather and 5-day forecast.',
		imageSrc: weatherDashboard,
		altText:
			'Weather dashboard with search box, and current and 5-day forecast weather',
		githubUrl: 'https://github.com/kayleriegerpatton/weather-dashboard',
		deployedUrl: 'https://kayleriegerpatton.github.io/weather-dashboard/',
		year: '',
	},
	{
		id: 9,
		title: 'E-Commerce Back-End',
		technologies: ['Express.js', 'JavaScript', 'Node.js', 'MySQL'],
		description:
			'Manage category, product, and tags data with an Express server and MySQL database.',
		imageSrc: ecommerceBackend,
		altText: 'code run-through and data interaction demo gif',
		githubUrl: 'https://github.com/kayleriegerpatton/ecommerce-back-end',
		deployedUrl: '',
		year: '',
	},
	{
		id: 10,
		title: 'Tech Talk',
		technologies: [
			'Bootstrap CSS',
			'Handlebars.js',
			'JavaScript',
			'MySQL',
			'REST API',
		],
		description:
			'A full-stack, CMS-style micro blog site featuring user-authentication, MVC structure, and Handlebars.js templating.',
		imageSrc: techTalk,
		altText: 'Lavender and orange webpage with list of blogs',
		githubUrl: 'https://github.com/kayleriegerpatton/tech-blog-cms',
		deployedUrl: '',
		year: '',
	},
	{
		id: 11,
		title: 'Sound Art Smart',
		technologies: ['CSS', 'HTML', 'JavaScript', `web APIs`],
		description:
			'A visual questionnaire to discover artworks based on your interests.',
		imageSrc: soundArtSmart,
		altText: 'Webpage with artist quote and intro text',
		githubUrl: 'https://github.com/kayleriegerpatton/sound-art-smart',
		deployedUrl: 'https://kayleriegerpatton.github.io/sound-art-smart/',
		year: '',
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
			'A full-stack student services site featuring user-authentication, subscription polling, and AWS image uploading.',
		imageSrc: unified,
		altText: 'Unified landing page',
		githubUrl: 'https://github.com/kayleriegerpatton/unified-client',
		deployedUrl: '',
		year: '',
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
			"Gamified investing application testing users' skills as they build portfolios and compete for highest year-end earnings.",
		imageSrc: stockscape,
		altText: 'Website run-through including pie chart animation gif',
		githubUrl: 'https://github.com/kayleriegerpatton/stockscape',
		deployedUrl: '',
	},
	{
		id: 14,
		title: 'A11y Audit & Refactor',
		technologies: ['React', 'Recharts', 'WCAG', 'WebAIM Contrast Checker'],
		description: `Conducted an informal accessibility audit of the BBC's internal Metrik website. Redesigned the site for an improved user experience including compliance with WCAG AA guidelines, robust Help page, and clearer content hierarchy.`,
		imageSrc: metrikComparison,
		altText: '',
		githubUrl: '',
		deployedUrl: '',
	},
	{
		id: 15,
		title: '',
		technologies: [],
		description: '',
		imageSrc: '',
		altText: '',
		githubUrl: '',
		deployedUrl: '',
	},
	{
		id: 16,
		title: '',
		technologies: [],
		description: '',
		imageSrc: '',
		altText: '',
		githubUrl: '',
		deployedUrl: '',
	},
];

export default projects;
