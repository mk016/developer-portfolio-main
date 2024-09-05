import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Modern background snippets',
        description: " Collection of modern, background snippets  Ready-to-use, simply copy and paste into your next project. All snippets crafted with Tailwind CSS and Vanilla CSS for easy integration..",
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'FoodDash',
        description: 'Foodash" is a beautifully designed food website featuring an intuitive UI, a detailed menu, and a seamless cart system. It also includes user-friendly login and signup pages for a smooth and personalized experience',
        tools: ['React','tailwindcss','Redux','React-Router','Firebase'],
        role: 'Frontend Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'BookGenAI',
        description: 'a platform allowing users to generate books by providing a prompt, book title, language, word length, and other parameters. Integrated ChatGPT and Gemini APIs for AI-powered content generation in multiple languages. Implemented input handling, word length control, and multilingual support for dynamic book creation. Designed an intuitive user interface for seamless book generation, including download options for the final output',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'JavaScript', 'MongoDB', 'Gemini API', 'OpenAI API'],
        code: '',
        role: 'Full Stack Developer', 
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },