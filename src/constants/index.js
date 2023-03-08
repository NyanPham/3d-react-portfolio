import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    shopify,
    server,
    globe,
    gear,
    firefox,

    // companies
    hella,
    halo,

    // projects
    portfolio,
    weatherApp,
    todoApp,
    pokedex,
    IPASystem,
    google,
    gentleNyan,
    nyanStore,
    ellaLanding,
    ellaTheme,
    bonnitaTheme,
    officialSite,

    // testimonials
    manh,
    duyAnh,
    duyEm,
    hoanh,
    trinh,
    long,
    anh,
    tu,
    khanh,
} from '../assets'

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
]

const services = [
    {
        title: 'Frontend Developer',
        icon: firefox,
    },
    {
        title: 'Backend Developer',
        icon: server,
    },
    {
        title: 'ALM Developer',
        icon: gear,
    },
    {
        title: 'Simultaneous Interpreter',
        icon: globe,
    },
]

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
    {
        name: 'shopify',
        icon: shopify,
    },
]

const experiences = [
    {
        title: 'Frontend Developer',
        company_name: 'Halosoft',
        icon: halo,
        iconBg: '#383E56',
        date: 'February 2022 - February 2023',
        points: [
            'Developing and maintaining Shopify themes with other related technologies.',
            'Collaborating with cross-functional teams including designers, project leaders, technical supporters, and other developers to create high-quality products.',
            'Implementing responsive design and focusing on UI/UX.',
            "Building a new theme with recreating the company's official site.",
        ],
    },
    {
        title: 'JavaScript Developer',
        company_name: 'Hella Vietnam',
        icon: hella,
        iconBg: '#383E56',
        date: 'March 2023 - Current',
        points: [
            'Developing and maintaining web-based ALM toolchain',
            'Implementing functions requested by Manager and Leader.',
            'Ensure the application lifecycle management process.',
        ],
    },
]

const testimonials = [
    {
        testimonial:
            "Nhan has a warm corner in my heart. He's friendly, willing to listen to advice and respects others. At work, responsibility and self-learning skills are his priorities. ",
        name: 'Duc Manh',
        designation: 'Technical Supporter',
        company: 'Halosoft',
        image: manh,
    },
    {
        testimonial:
            "With a sharp logical thinking and a strong foundation, he plans things out clearly before starting any projects. He's also pretty perceptive and open to colleagues' advice.",
        name: 'Duy Hoang',
        designation: 'Project Leader',
        company: 'Halosoft',
        image: duyAnh,
    },
    {
        testimonial:
            'Nhan is a super supportive partner at work and pretty social with us, especially Technical supporters who get stuck at complex bugs.',
        name: 'Duy Nguyen',
        designation: 'Technical Supporter',
        company: 'Halosoft',
        image: duyEm,
    },
    {
        testimonial:
            'He has a strong self-learning manner. Nhan is also detail-oriented and supportive to others.',
        name: 'Hoanh',
        designation: 'HR',
        company: 'Halosoft',
        image: hoanh,
    },
    {
        testimonial:
            "He's got fast problem solving skills and kinda technically flexible at work. He knows how to collaborate and support others. ",
        name: 'Trinh',
        designation: 'Technical Supporter',
        company: 'Halosoft',
        image: trinh,
    },
    {
        testimonial:
            "He works hard and take opportunities to learn new things. With a sharp mind, he proves to be a deep-thinking colleague. In general, he's respective, kind and not dramatic.",
        name: 'Long',
        designation: 'Designer',
        company: 'Halosoft',
        image: long,
    },
    {
        testimonial:
            "His code is at high quality in terms of readibility and problem solving. He's pretty kind, taciturn and supportive to other, especially the Technical Supporters.",
        name: 'Phi Anh',
        designation: 'Project Leader',
        company: 'Halosoft',
        image: anh,
    },
    {
        testimonial:
            "Nhan has a great manner of self-study, and learning from others. Though he's just joined the theme development for a couple of months, he could analyze and maintain products.",
        name: 'Tu Nguyen',
        designation: 'Team Leader',
        company: 'Halosoft',
        image: tu,
    },
    {
        testimonial:
            "He's so gentle, patient and taciturn. That's his best points of being a developer. I hope he can further skyrocket his capabilities.",
        name: 'Khanh',
        designation: 'Customer Service Leader',
        company: 'Halosoft',
        image: khanh,
    },
]

const projects = [
    {
        name: 'Nyan Store v2.0',
        description: 'A MERN stack feature-rich e-commerce site',
        tags: [
            {
                name: 'reactjs',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwindcss',
                color: 'blue-text-gradient',
            },
            {
                name: 'nodejs',
                color: 'green-text-gradient',
            },
            {
                name: 'reduxjs',
                color: 'pink-text-gradient',
            },
            {
                name: 'expressjs',
                color: 'yellow-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
        ],
        image: nyanStore,
        source_code_link: 'https://github.com/NyanPham/Nyan-Store',
        demo_code_link: 'https://elaborate-chimera-ea1e59.netlify.app/',
        tier: 'personal',
    },
    {
        name: 'GentleNyan Store',
        description: 'A serverless e-commerce (React & Firebase)',
        tags: [
            {
                name: 'reactjs',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwindcss',
                color: 'blue-text-gradient',
            },
            {
                name: 'firebase',
                color: 'yellow-text-gradient',
            },
        ],
        image: gentleNyan,
        source_code_link: 'https://github.com/NyanPham/gentlenyanstore-client',
        demo_code_link: 'https://kind-jepsen-d6f299.netlify.app/',
        tier: 'personal',
    },
    {
        name: 'Portfolio v1.0',
        description: 'The first version of my portfolio',
        tags: [
            {
                name: 'html',
                color: 'pink-text-gradient',
            },
            {
                name: 'css',
                color: 'blue-text-gradient',
            },
            {
                name: 'javascript',
                color: 'yellow-text-gradient',
            },
        ],
        image: portfolio,
        source_code_link: 'https://github.com/NyanPham/portfolio',
        demo_code_link: 'https://elated-beaver-fdddc3.netlify.app/',
        tier: 'personal',
    },
    {
        name: 'Weather Forecast',
        description: 'Forecast the weather of Ho Chi Minh city',
        tags: [
            {
                name: 'javascript',
                color: 'yellow-text-gradient',
            },
            {
                name: 'weather api',
                color: 'green-text-gradient',
            },
        ],
        image: weatherApp,
        source_code_link: 'https://github.com/NyanPham/weather-app-js',
        demo_code_link: 'https://keen-lewin-897206.netlify.app/',
        tier: 'personal',
    },
    {
        name: 'Todo App',
        description: 'Simple tasks management app with local storage',
        tags: [
            {
                name: 'html',
                color: 'pink-text-gradient',
            },
            {
                name: 'css',
                color: 'blue-text-gradient',
            },
            {
                name: 'javascript',
                color: 'yellow-text-gradient',
            },
        ],
        image: todoApp,
        source_code_link: 'https://github.com/NyanPham/todo-app-react',
        demo_code_link: 'https://awesome-perlman-08271d.netlify.app/',
        tier: 'personal',
    },
    {
        name: 'PokeDex',
        description: 'A pokemon info finder for poke-geeks',
        tags: [
            {
                name: 'reactjs',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwindcss',
                color: 'blue-text-gradient',
            },
            {
                name: 'pokemon api',
                color: 'green-text-gradient',
            },
        ],
        image: pokedex,
        source_code_link: 'https://github.com/NyanPham/pokedex-v2',
        demo_code_link: 'https://amazing-minsky-880311.netlify.app/',
        tier: 'personal',
    },
    {
        name: 'IPA System',
        description: 'A tool for English pronunciation teaching',
        tags: [
            {
                name: 'reactjs',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwindcss',
                color: 'blue-text-gradient',
            },
            {
                name: 'firebase',
                color: 'yellow-text-gradient',
            },
        ],
        image: IPASystem,
        source_code_link: 'https://github.com/NyanPham/nyan-ipa',
        demo_code_link: 'https://spectacular-genie-a86de2.netlify.app/',
        tier: 'personal',
    },
    {
        name: 'Google Search',
        description: 'A search engine built with NextJS',
        tags: [
            {
                name: 'nextjs',
                color: 'pink-text-gradient',
            },
            {
                name: 'tailwindcss',
                color: 'blue-text-gradient',
            },
            {
                name: 'google api',
                color: 'yellow-text-gradient',
            },
        ],
        image: google,
        source_code_link: 'https://github.com/NyanPham/Google-Clone',
        demo_code_link: 'https://google-clone-nyanpham.vercel.app/',
        tier: 'personal',
    },
    {
        name: 'Ella landing',
        description: 'Landing page the the Ella 6.0 version release',
        tags: [
            {
                name: 'html',
                color: 'pink-text-gradient',
            },
            {
                name: 'css',
                color: 'blue-text-gradient',
            },
            {
                name: 'javascript',
                color: 'yellow-text-gradient',
            },
            {
                name: 'wowjs',
                color: 'green-text-gradient',
            },
        ],
        image: ellaLanding,
        source_code_link: '',
        demo_code_link:
            'http://preview.themeforest.net/item/ella-responsive-shopify-template/full_screen_preview/9691007?_ga=2.12288116.1187748243.1676454690-93991776.1667878375',
        tier: 'professional',
    },
    {
        name: 'Ella',
        description: 'The best seller on Shopify Envato market',
        tags: [
            {
                name: 'html',
                color: 'pink-text-gradient',
            },
            {
                name: 'css',
                color: 'blue-text-gradient',
            },
            {
                name: 'javascript',
                color: 'yellow-text-gradient',
            },
            {
                name: 'shopify',
                color: 'green-text-gradient',
            },
        ],
        image: ellaTheme,
        source_code_link: '',
        demo_code_link:
            'https://new-ella-demo-11.myshopify.com//?fts=0&preview_theme_id=124314583091',
        tier: 'professional',
    },
    {
        name: 'Bonnita',
        description: 'The next generation theme for cosmetics',
        tags: [
            {
                name: 'html',
                color: 'pink-text-gradient',
            },
            {
                name: 'css',
                color: 'blue-text-gradient',
            },
            {
                name: 'javascript',
                color: 'yellow-text-gradient',
            },
            {
                name: 'shopify',
                color: 'green-text-gradient',
            },
        ],
        image: bonnitaTheme,
        source_code_link: '',
        demo_code_link: 'https://bonnita-theme.myshopify.com/',
        tier: 'professional',
    },
    {
        name: "Halosoft's new official site",
        description: 'The recreation of the company official site',
        tags: [
            {
                name: 'html',
                color: 'pink-text-gradient',
            },
            {
                name: 'css',
                color: 'blue-text-gradient',
            },
            {
                name: 'javascript',
                color: 'yellow-text-gradient',
            },
            {
                name: 'shopify',
                color: 'green-text-gradient',
            },
        ],
        image: officialSite,
        source_code_link: '',
        demo_code_link: 'https://halo-themes.myshopify.com/',
        tier: 'professional',
    },
]

export { services, technologies, experiences, testimonials, projects }
