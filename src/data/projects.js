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
import cosmosCLI from '../images/project-visuals/cosmosCLI2.png';
import cys631Solution from '../images/project-visuals/cys-631Solution.png';
import personalBrandBoard from '../images/project-visuals/personal-brand-board.png';
import githubLogin from '../images/project-visuals/github-comparison.jpeg';

const projects = [
	{
		id: 18,
		title: 'GitHub-style Accessible Login',
		technologies: ['TypeScript', 'Material UI', 'WCAG', 'Accessibility'],
		description: `Replicated GitHub's login page design while implementing accessibility enhancements and refining UI through minor adjustments, demonstrating proficiency in frontend development and attention to detail.`,
		imageSrc: githubLogin,
		altText: '',
		githubUrl: 'https://github.com/kayleriegerpatton/typescript-login',
		deployedUrl:
			'https://typescript-login-kayleriegerpattons-projects.vercel.app/',
		year: 2024,
		archived: false,
	},
	{
		id: 15,
		title: 'Deployment Platform CLI Rewrite',
		technologies: ['OpenAPI', 'Commander.js', 'JavaScript', 'Sinon.js'],
		description:
			'Collaborated with the BBC deployment platform team to overhaul its CLI. The rewrite achieved full API feature parity—a 500% increase in low-level commands—and produced robust generated reference documentation. Began work on high-level commands to streamline processes and decommission redundant tooling.',
		imageSrc: cosmosCLI,
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
		imageSrc: metrikComparison,
		altText: 'Before and after side-by-side comparison of Metrik dashboard',
		githubUrl: '',
		deployedUrl: '',
		year: 2023,
		archived: false,
	},
	{
		id: 16,
		title: 'Custom WordPress Styling',
		technologies: ['CSS', 'HTML', 'Divi Builder', 'WordPress'],
		description:
			'Collaborated with UX/UI Designer on client project to enhance WordPress website aesthetics and functionality with custom CSS using the Divi Theme & Builder tool.',
		imageSrc: cys631Solution,
		altText: `The 631 Solution website's "Get Started" page and form.`,
		githubUrl: '',
		deployedUrl: 'https://631solution.org/',
		year: 2024,
		archived: false,
	},
	{
		id: 17,
		title: 'Personal Branding Suite',
		technologies: ['Graphic Design', 'Canva'],
		description:
			'Crafted a cohesive suite of personal branding materials, including CV, cover letter, business cards, LinkedIn banner, and website, showcasing my professional identity and design skills with consistency and flair.',
		imageSrc: personalBrandBoard,
		altText:
			'Brand board with various print and digital materials arranged, including cover letter and CV, LinkedIn banner, business cards, color palette, and mobile phone displaying portfolio site.',
		githubUrl: '',
		deployedUrl: '',
		year: 2024,
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
		imageSrc: stockscape,
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
		imageSrc: unified,
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
		imageSrc: soundArtSmart,
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
		imageSrc: techTalk,
		altText: 'Lavender and orange webpage with list of blogs',
		githubUrl: 'https://github.com/kayleriegerpatton/tech-blog-cms',
		deployedUrl: '',
		year: 2022,
		archived: false,
	},
	{
		id: 9,
		title: 'E-Commerce Back-End',
		technologies: [
			'Express.js',
			'JavaScript',
			'Node.js',
			'MySQL',
			'Postman',
			'Moment.js',
		],
		description:
			'Manage retail categories, products, and tags with this Express server and MySQL database containing 4 tables and 15 basic endpoints.',
		imageSrc: ecommerceBackend,
		altText: 'code run-through and data interaction demo gif',
		githubUrl: 'https://github.com/kayleriegerpatton/ecommerce-back-end',
		deployedUrl: '',
		year: 2022,
		archived: false,
	},
	{
		id: 8,
		title: 'Weather Dashboard',
		technologies: ['CSS', 'HTML', 'JavaScript', 'jQuery', 'web APIs'],
		description:
			'Search by city to display the current weather and a 5-day forecast, including the color-coded UV index and corresponding weather icons. Recently-searched cities are saved in local storage and displayed in the sidebar.',
		imageSrc: weatherDashboard,
		altText:
			'Weather dashboard with search box, and current and 5-day forecast weather',
		githubUrl: 'https://github.com/kayleriegerpatton/weather-dashboard',
		deployedUrl: 'https://kayleriegerpatton.github.io/weather-dashboard/',
		year: 2021,
		archived: false,
	},
	{
		id: 7,
		title: 'Note Taker',
		technologies: ['CSS', 'HTML', 'Express.js', 'JavaScript', 'REST API'],
		description:
			'A simple note-taking application with an Express.js back-end to serve note data from a JSON file.',
		imageSrc: noteTaker,
		altText:
			'Webpage with note title and contents, and list of other note titles on left-hand side',
		githubUrl: 'https://github.com/kayleriegerpatton/note-taker/',
		deployedUrl: '',
		year: 2022,
		archived: true,
	},
	{
		id: 6,
		title: 'Employee Management System',
		technologies: ['Inquirer.js', 'Node.js', 'MySQL', 'Sequelize'],
		description:
			'A command line app that prompts users with questions about employees, roles, and departments in order to interact with a MySQL database. Features input validation, data protection, and colorized console feedback.',
		imageSrc: employeeManagement,
		altText: 'command line run-through of coded question prompts',
		githubUrl: 'https://github.com/kayleriegerpatton/employee-tracker',
		deployedUrl: '',
		year: 2021,
		archived: true,
	},
	{
		id: 5,
		title: 'Random Password Generator',
		technologies: ['CSS', 'HTML', 'JavaScript'],
		description:
			'Generate strong random passwords with this simple application. Users enter password criteria, including length and character type, and are output a secure random password.',
		imageSrc: passwordGenerator,
		altText:
			'Webpage titled Password Generator with box containing string of random text characters',
		githubUrl:
			'https://github.com/kayleriegerpatton/employee-random-password-generator',
		deployedUrl:
			'https://kayleriegerpatton.github.io/employee-random-password-generator/',
		year: 2021,
		archived: true,
	},
	{
		id: 4,
		title: 'Day Planner',
		technologies: ['CSS', 'HTML', 'JavaScript', 'jQuery'],
		description:
			'A daily planner web app that stores events in color-coded time blocks indicating past, current, and future event statuses.',
		imageSrc: dayPlanner,
		altText: 'Daily planner webpage with color-coded business hour time blocks',
		githubUrl: 'https://github.com/kayleriegerpatton/work-day-planner',
		deployedUrl: 'https://kayleriegerpatton.github.io/work-day-planner/',
		year: 2021,
		archived: true,
	},
	{
		id: 3,
		title: 'README Generator',
		technologies: ['CSS', 'HTML', 'Node.js', 'Inquirer.js'],
		description:
			'A Node.js app that takes user input via the inquirer package and returns a formatted markdown README file.',
		imageSrc: readmeGenerator,
		altText:
			'command line run-through of coded question prompts and the resulting markdown file',
		githubUrl: 'https://github.com/kayleriegerpatton/readme-generator',
		deployedUrl: '',
		year: 2021,
		archived: true,
	},
	{
		id: 2,
		title: 'JavaScript Code Quiz',
		technologies: ['CSS', 'HTML', 'JavaScript', 'jQuery'],
		description:
			'A timed, multiple choice JavaScript fundamentals quiz. Saves the top scores in local storage.',
		imageSrc: javascriptCodeQuiz,
		altText: 'Quiz question webpage with question and purple answer buttons',
		githubUrl: 'https://github.com/kayleriegerpatton/javascript-code-quiz',
		deployedUrl: 'https://kayleriegerpatton.github.io/javascript-code-quiz/',
		year: 2021,
		archived: true,
	},
	{
		id: 1,
		title: 'Team Profile Generator',
		technologies: ['CSS', 'HTML', 'Node.js', 'Inquirer.js'],
		description:
			'A Node.js app that takes user input via the inquirer.js package and returns a styled HTML page with individual member info cards.',
		imageSrc: teamProfileGenerator,
		altText:
			'command line run-through of coded question prompts and resulting webpage',
		githubUrl: 'https://github.com/kayleriegerpatton/team-profile-generator',
		deployedUrl: '',
		year: 2021,
		archived: true,
	},
];

export default projects;
