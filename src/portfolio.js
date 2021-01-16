/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from 'react-easy-emoji';

const greeting = {
    /* Your Summary And Greeting Section */
    username: 'Frankie Tse',
    title: "Hi, My name is Frankie and I'm a ",
    role: ['Software Engineer', 'Frontend Developer', 'Backend Developer'],
    subTitle: emoji(
        'A passionate Software Engineer aiming to be a competent developer with JavaScript / ReactJS / Python and some other cool libraries and frameworks.'
    ),
    resumeLink:
        'https://drive.google.com/file/d/18Of97gns_cdJmLaST-3u-G-H9ou_Mxce/view?usp=sharing',
};

// Your Social Media Link

const socialMediaLinks = {
    github: 'https://github.com/franchottse',
    linkedin: 'https://www.linkedin.com/in/frankie-tse/',
    gmail: 'tsezg523@gmail.com',
    gitlab: '',
    facebook: '',
    medium: '',
    stackoverflow: 'https://stackoverflow.com/users/13474348/frankie',
    // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
    title: 'What I know',
    subTitle: 'A SOFTWARE ENGINEER WHO WANTS TO LEARN EVERY NEW TECH',
    skills: [
        emoji('⚡ Self-taught Software Engineer working hard to learn Python and ReactJS'),
        emoji('⚡ Develop a Tkinter GUI app with Python'),
        emoji('⚡ Eager to learn new technology and programming langauges'),
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: 'python',
            fontAwesomeClassname: 'fab fa-python',
        },
        {
            skillName: 'c++',
            fontAwesomeClassname: 'fab fa-cuttlefish',
        },
        {
            skillName: 'java',
            fontAwesomeClassname: 'fab fa-java',
        },
        {
            skillName: 'html-5',
            fontAwesomeClassname: 'fab fa-html5',
        },
        {
            skillName: 'css3',
            fontAwesomeClassname: 'fab fa-css3-alt',
        },
        {
            skillName: 'JavaScript',
            fontAwesomeClassname: 'fab fa-js',
        },
        {
            skillName: 'reactjs',
            fontAwesomeClassname: 'fab fa-react',
        },
        {
            skillName: 'npm',
            fontAwesomeClassname: 'fab fa-npm',
        },
        {
            skillName: 'git',
            fontAwesomeClassname: 'fab fa-git',
        },
        {
            skillName: 'unity',
            fontAwesomeClassname: 'fab fa-unity',
        },
        {
            skillName: 'sql-database',
            fontAwesomeClassname: 'fas fa-database',
        },
    ],
};

// Your education background

const educationInfo = {
    viewEducation: true, // Set it to true to see education section
    schools: [
        {
            schoolName: 'Hong Kong University of Science and Technology',
            logo: require('./assets/images/hkustLogo.png'),
            subHeader: 'Bachelor of Engineering in Computer Engineering',
            duration: 'September 2016 - November 2019',
            desc: 'Studied basic knowledge of both software and hardware',
            descBullets: [
                'Received bachelor of engineering in Computer Engineering',
                'Finished a final year project, which is a 2D top-down game, with Unity and C#',
            ],
        },
        {
            schoolName: 'Hong Kong Institude of Vocational Education',
            logo: require('./assets/images/iveLogo.png'),
            subHeader: 'Higher Diploma in Telecommunications and Networking',
            duration: 'September 2014 - June 2016',
            desc: 'Studied basic knowledge of both telecommunication and networking',
            descBullets: [
                'Received higher diploma in Telecommunications & Networking',
                'With Distinction',
            ],
        },
    ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: 'Frontend', //Insert stack or technology you have experience in
            progressPercentage: '50%', //Insert relative proficiency in percentage
        },
        {
            Stack: 'Backend',
            progressPercentage: '70%',
        },
        {
            Stack: 'Programming',
            progressPercentage: '65%',
        },
    ],
};

// Your top 3 work experiences

const workExperiences = {
    viewExperiences: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: 'Software Engineer',
            company: 'Robot Data Company Limited',
            companylogo: require('./assets/images/robotdataLogo.png'),
            date: 'January 2021 – Present',
            desc: "Develop software and satisfy clients' needs.",
            descBullets: [
                'Developed a script to web-scrap all images from a website, and scan copyright logos by OCR.',
            ],
        },
        {
            role: 'Analyst Programmer/Developer',
            company: 'IBM',
            companylogo: require('./assets/images/ibmLogo.png'),
            date: 'Nov 2019 – June 2020',
            desc: 'Develop software and support target clients.',
            descBullets: [
                'Increased efficiency by developing a shell script for deploying WSDL files on a device called DataPower (CPA project)',
                'Achieved user satisfaction by supporting clients from DBS bank and implementing a regression test on UAT for frontend development (DBS project)',
            ],
        },
        {
            role: 'Network Engineer Intern',
            company: 'Telelink',
            companylogo: require('./assets/images/telelinkLogo.png'),
            date: 'Dec 2014 – Mar 2015',
            desc: 'Provide services to target clients.',
            descBullets: [
                'Provided assistance to network users regarding troubleshooting and procedures',
                'Assisted technicians with the installation of wires at home',
                'Assisted technicians with the setup of routers',
                'Assisted with the evaluation and selection of network hardware and software',
            ],
        },
    ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: 'franchottse', // Change to your github username to view your profile in Contact Section.
    showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
    viewProjects: false, //Set it to true to show Big Projects Section
    title: 'Big Projects',
    subtitle: '',
    projects: [
        {
            image: '',
            link: '',
        },
        {
            image: '',
            link: '',
        },
    ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
    viewAchievements: false, //Set it to true to show Achievements Section
    title: emoji('Achievements And Certifications 🏆 '),
    subtitle: 'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

    achievementsCards: [
        {
            title: '',
            subtitle: '',
            image: '',
            footerLink: [
                {
                    name: '',
                    url: '',
                },
                {
                    name: '',
                    url: '',
                },
                {
                    name: '',
                    url: '',
                },
            ],
        },
        {
            title: '',
            subtitle: '',
            image: '',
            footerLink: [
                {
                    name: '',
                    url: '',
                },
            ],
        },

        {
            title: '',
            subtitle: '',
            image: '',
            footerLink: [
                { name: '', url: '' },
                {
                    name: '',
                    url: '',
                },
            ],
        },
    ],
};

// Blogs Section

const blogSection = {
    viewBlogs: false, //Set it to true to show Blogs Section
    title: 'Blogs',
    subtitle:
        'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

    blogs: [
        {
            url: '',
            title: '',
            description: '',
        },
        {
            url: '',
            title: '',
            description: '',
        },
    ],
};

// Talks Sections

const talkSection = {
    viewTalks: false, //Set it to true to show Talks Section
    title: 'TALKS',
    subtitle: emoji('I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'),

    talks: [
        {
            title: '',
            subtitle: '',
            slides_url: '',
            event_url: '',
        },
    ],
};

// Podcast Section

const podcastSection = {
    viewPodcast: false, //Set it to true to show Podcast Section
    title: emoji('Podcast 🎙️'),
    subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

    // Please Provide with Your Podcast embeded Link
    podcast: [''],
};

const contactInfo = {
    title: emoji('Contact Me ☎️'),
    subtitle: 'Discuss a job opportunity or just want to say hi? My Inbox is open for all.',
    number: '+852-64987754',
    email_address: 'tsezg523@gmail.com',
};

//Twitter Section

const twitterDetails = {
    userName: '', //Replace "twitter" with your twitter username without @
};
export {
    greeting,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
};
