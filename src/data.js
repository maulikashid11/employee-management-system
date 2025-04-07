const users = [
    {
        id: 1,
        name: 'mauli',
        email: 'mauli@emp.com',
        password: '123',
        tasksNumber: { newTask: 1, completedTask: 2, failedTask: 1, pendingTask: 1 },
        tasks: [
            { title: 'complete this project', description: 'You should complete this project before 9pm', status: 'completed' },
            { title: 'make presentation', description: 'You should make presentation before 9pm', status: 'new' },
            { title: 'make excel sheet', description: 'You should make excel sheet', status: 'failed' },
            { title: 'make navbar', description: 'complete navbar of website', status: 'pending' },
        ]
    },
    {
        id: 2,
        name: 'arjun',
        email: 'arjun@emp.com',
        password: '123',
        tasksNumber: { newTask: 2, completedTask: 1, failedTask: 0, pendingTask: 1 },
        tasks: [
            { title: 'fix bugs', description: 'resolve critical bugs', status: 'completed' },
            { title: 'create login page', description: 'login form with validation', status: 'new' },
            { title: 'prepare report', description: 'monthly progress report', status: 'new' },
            { title: 'update profile section', description: 'add edit feature', status: 'pending' }
        ]
    },
    {
        id: 3,
        name: 'neha',
        email: 'neha@emp.com',
        password: '123',
        tasksNumber: { newTask: 0, completedTask: 3, failedTask: 0, pendingTask: 1 },
        tasks: [
            { title: 'code review', description: 'review teammate code', status: 'completed' },
            { title: 'team meeting', description: 'weekly sync-up', status: 'completed' },
            { title: 'add logout feature', description: 'implement logout button', status: 'completed' },
            { title: 'test endpoints', description: 'verify API status codes', status: 'pending' }
        ]
    },
    {
        id: 4,
        name: 'ravi',
        email: 'ravi@emp.com',
        password: '123',
        tasksNumber: { newTask: 1, completedTask: 1, failedTask: 1, pendingTask: 1 },
        tasks: [
            { title: 'refactor auth module', description: 'clean up redundant code', status: 'new' },
            { title: 'fix navbar bug', description: 'dropdown not working', status: 'completed' },
            { title: 'setup docker', description: 'add docker for backend', status: 'failed' },
            { title: 'integrate mailer', description: 'send welcome email', status: 'pending' }
        ]
    },
    {
        id: 5,
        name: 'kavita',
        email: 'kavita@emp.com',
        password: '123',
        tasksNumber: { newTask: 1, completedTask: 2, failedTask: 0, pendingTask: 1 },
        tasks: [
            { title: 'update landing page', description: 'refresh UI', status: 'completed' },
            { title: 'optimize images', description: 'reduce image sizes', status: 'completed' },
            { title: 'write unit tests', description: 'cover all functions', status: 'new' },
            { title: 'setup CI/CD', description: 'auto-deploy to vercel', status: 'pending' }
        ]
    },
    {
        id: 6,
        name: 'vishal',
        email: 'vishal@emp.com',
        password: '123',
        tasksNumber: { newTask: 2, completedTask: 1, failedTask: 1, pendingTask: 0 },
        tasks: [
            { title: 'deploy app', description: 'move to production', status: 'completed' },
            { title: 'design footer', description: 'match brand colors', status: 'new' },
            { title: 'handle error states', description: '404, 500 pages', status: 'failed' },
            { title: 'update terms page', description: 'legal updates', status: 'new' }
        ]
    },
    {
        id: 7,
        name: 'anita',
        email: 'anita@emp.com',
        password: '123',
        tasksNumber: { newTask: 1, completedTask: 3, failedTask: 0, pendingTask: 0 },
        tasks: [
            { title: 'fix contact form', description: 'send email on submit', status: 'completed' },
            { title: 'add search', description: 'implement fuzzy search', status: 'completed' },
            { title: 'dark mode toggle', description: 'light/dark UI switch', status: 'completed' },
            { title: 'new banner design', description: 'for summer sale', status: 'new' }
        ]
    },
    {
        id: 8,
        name: 'rohit',
        email: 'rohit@emp.com',
        password: '123',
        tasksNumber: { newTask: 0, completedTask: 1, failedTask: 2, pendingTask: 1 },
        tasks: [
            { title: 'fix build errors', description: 'webpack config issue', status: 'failed' },
            { title: 'implement stripe', description: 'payment gateway', status: 'failed' },
            { title: 'code cleanup', description: 'remove console logs', status: 'completed' },
            { title: 'add icons', description: 'to sidebar menu', status: 'pending' }
        ]
    },
    {
        id: 9,
        name: 'divya',
        email: 'divya@emp.com',
        password: '123',
        tasksNumber: { newTask: 1, completedTask: 1, failedTask: 1, pendingTask: 1 },
        tasks: [
            { title: 'create dashboard', description: 'admin metrics view', status: 'new' },
            { title: 'fix login redirect', description: 'navigate to /home', status: 'completed' },
            { title: 'connect to MongoDB', description: 'setup mongoose', status: 'failed' },
            { title: 'design FAQ section', description: 'accordion style', status: 'pending' }
        ]
    },
    {
        id: 10,
        name: 'aman',
        email: 'aman@emp.com',
        password: '123',
        tasksNumber: { newTask: 2, completedTask: 1, failedTask: 0, pendingTask: 1 },
        tasks: [
            { title: 'create blog layout', description: 'minimalistic look', status: 'new' },
            { title: 'API testing', description: 'postman tests', status: 'new' },
            { title: 'fix CSS bugs', description: 'alignment issues', status: 'completed' },
            { title: 'add animation', description: 'smooth scroll', status: 'pending' }
        ]
    },
    {
        id: 11,
        name: 'sneha',
        email: 'sneha@emp.com',
        password: '123',
        tasksNumber: { newTask: 1, completedTask: 2, failedTask: 1, pendingTask: 0 },
        tasks: [
            { title: 'refactor routes', description: 'simplify route handlers', status: 'new' },
            { title: 'add footer links', description: 'contact and privacy policy', status: 'completed' },
            { title: 'test payment flow', description: 'simulate real transactions', status: 'failed' },
            { title: 'fix layout', description: 'responsive design', status: 'completed' }
        ]
    },
    {
        id: 12,
        name: 'raj',
        email: 'raj@emp.com',
        password: '123',
        tasksNumber: { newTask: 0, completedTask: 2, failedTask: 0, pendingTask: 2 },
        tasks: [
            { title: 'add analytics', description: 'google tag manager setup', status: 'completed' },
            { title: 'create sitemap', description: 'for SEO', status: 'completed' },
            { title: 'setup auth guards', description: 'protect routes', status: 'pending' },
            { title: 'implement forgot password', description: 'reset email logic', status: 'pending' }
        ]
    },
    {
        id: 13,
        name: 'isha',
        email: 'isha@emp.com',
        password: '123',
        tasksNumber: { newTask: 2, completedTask: 1, failedTask: 1, pendingTask: 0 },
        tasks: [
            { title: 'add filters', description: 'price & category filters', status: 'new' },
            { title: 'fix checkout bug', description: 'payment not redirecting', status: 'failed' },
            { title: 'update cart UI', description: 'compact view', status: 'completed' },
            { title: 'setup redux', description: 'for state management', status: 'new' }
        ]
    },
    {
        id: 14,
        name: 'kartik',
        email: 'kartik@emp.com',
        password: '123',
        tasksNumber: { newTask: 1, completedTask: 3, failedTask: 0, pendingTask: 0 },
        tasks: [
            { title: 'write blog', description: 'on performance optimization', status: 'completed' },
            { title: 'optimize queries', description: 'DB response time', status: 'completed' },
            { title: 'remove unused imports', description: 'code cleanup', status: 'completed' },
            { title: 'draft changelog', description: 'for next release', status: 'new' }
        ]
    },
    {
        id: 15,
        name: 'meena',
        email: 'meena@emp.com',
        password: '123',
        tasksNumber: { newTask: 0, completedTask: 2, failedTask: 1, pendingTask: 1 },
        tasks: [
            { title: 'build FAQ page', description: 'common questions', status: 'completed' },
            { title: 'optimize bundle size', description: 'tree shaking', status: 'completed' },
            { title: 'update environment', description: 'dotenv configs', status: 'failed' },
            { title: 'debug carousel', description: 'not sliding on click', status: 'pending' }
        ]
    },
    {
        id: 16,
        name: 'tanya',
        email: 'tanya@emp.com',
        password: '123',
        tasksNumber: { newTask: 1, completedTask: 1, failedTask: 1, pendingTask: 1 },
        tasks: [
            { title: 'design 404 page', description: 'funny error art', status: 'new' },
            { title: 'check mobile view', description: 'test breakpoints', status: 'completed' },
            { title: 'remove deprecated API', description: 'migrate to new version', status: 'failed' },
            { title: 'add breadcrumbs', description: 'navigation path', status: 'pending' }
        ]
    },
    {
        id: 17,
        name: 'sahil',
        email: 'sahil@emp.com',
        password: '123',
        tasksNumber: { newTask: 2, completedTask: 2, failedTask: 0, pendingTask: 0 },
        tasks: [
            { title: 'configure nginx', description: 'reverse proxy setup', status: 'completed' },
            { title: 'update README', description: 'add deployment steps', status: 'completed' },
            { title: 'write migration script', description: 'DB version update', status: 'new' },
            { title: 'test upload feature', description: 'file size limit check', status: 'new' }
        ]
    },
    {
        id: 18,
        name: 'tanvi',
        email: 'tanvi@emp.com',
        password: '123',
        tasksNumber: { newTask: 0, completedTask: 3, failedTask: 0, pendingTask: 1 },
        tasks: [
            { title: 'audit accessibility', description: 'ARIA roles and contrast', status: 'completed' },
            { title: 'remove jQuery', description: 'replace with vanilla JS', status: 'completed' },
            { title: 'add i18n support', description: 'translation ready', status: 'completed' },
            { title: 'fix spacing issues', description: 'consistent padding', status: 'pending' }
        ]
    },
    {
        id: 19,
        name: 'deepak',
        email: 'deepak@emp.com',
        password: '123',
        tasksNumber: { newTask: 1, completedTask: 1, failedTask: 1, pendingTask: 1 },
        tasks: [
            { title: 'setup logging', description: 'error logs with Winston', status: 'completed' },
            { title: 'refactor services', description: 'modular design', status: 'new' },
            { title: 'remove bugs', description: 'app crashing on refresh', status: 'failed' },
            { title: 'update test cases', description: 'Jest coverage', status: 'pending' }
        ]
    },
    {
        id: 20,
        name: 'nikita',
        email: 'nikita@emp.com',
        password: '123',
        tasksNumber: { newTask: 2, completedTask: 1, failedTask: 0, pendingTask: 1 },
        tasks: [
            { title: 'setup email verification', description: 'send OTP via mail', status: 'new' },
            { title: 'revamp profile page', description: 'new layout and design', status: 'new' },
            { title: 'improve performance', description: 'lazy load assets', status: 'completed' },
            { title: 'fix alignment', description: 'header center aligned', status: 'pending' }
        ]
    }
];

const admin = {
    id: 21,
    name: 'Admin',
    email: 'admin@emp.com',
    password: '1234'
}