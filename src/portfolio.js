/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
    animated: true, // set to false to use static SVG
};

const greeting = {
    /* Your Summary And Greeting Section */
    username: 'Frankie Tse',
    title: "Hi, My name is Frankie and I'm a ",
    role: ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
    subTitle: emoji(
        'A passionate Software Engineer aiming to be a competent developer with Angular / ReactJS / TypeScript and some other cool libraries and frameworks.'
    ),
    resumeLink:
        'https://drive.google.com/file/d/18Of97gns_cdJmLaST-3u-G-H9ou_Mxce/view?usp=sharing',
    displayGreeting: true, // Set false to hide this section, defaults to true
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
    display: true, // Set true to display this section, defaults to false
};

// Your Skills Section

const skillsSection = {
    title: 'What I know',
    subTitle: 'A SOFTWARE ENGINEER WHO WANTS TO LEARN EVERY NEW TECH',
    skills: [
        emoji('⚡ Software engineer working hard to learn ReactJS and AngularJS'),
        emoji('⚡ Developed a Tkinter GUI app with Python'),
        emoji('⚡ Eager to learn new technology and programming langauges'),
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
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
        // {
        //     skillName: 'TypeScript',
        //     fontAwesomeClassname: 'fab fa-ts', do not have this icon yet
        // },
        {
            skillName: 'reactjs',
            fontAwesomeClassname: 'fab fa-react',
        },
        {
            skillName: 'angularjs',
            fontAwesomeClassname: 'fab fa-angular',
        },
        {
            skillName: 'nodejs',
            fontAwesomeClassname: 'fab fa-node',
        },
        {
            skillName: 'python',
            fontAwesomeClassname: 'fab fa-python',
        },
        {
            skillName: 'java',
            fontAwesomeClassname: 'fab fa-java',
        },
        {
            skillName: 'git',
            fontAwesomeClassname: 'fab fa-git-alt',
        },
        {
            skillName: 'c++',
            fontAwesomeClassname: 'fab fa-cuttlefish',
        },
        {
            skillName: 'npm',
            fontAwesomeClassname: 'fab fa-npm',
        },
        {
            skillName: 'unity',
            fontAwesomeClassname: 'fab fa-unity',
        },
        {
            skillName: 'sql-database',
            fontAwesomeClassname: 'fas fa-database',
        },
        // {
        //     skillName: 'mongodb',
        //     fontAwesomeClassname: 'fab fa-mongodb', do not have this icon yet
        // },
        {
            skillName: 'aws',
            fontAwesomeClassname: 'fab fa-aws',
        },
        {
            skillName: 'docker',
            fontAwesomeClassname: 'fab fa-docker',
        },
    ],
    display: true, // Set false to hide this section, defaults to true
};

// Your education background

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
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
            schoolName: 'Hong Kong Institute of Vocational Education',
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
            progressPercentage: '60%', //Insert relative proficiency in percentage
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
    displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Your top 3 work experiences

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: 'Software Engineer',
            company: 'New iMedia',
            companylogo: require('./assets/images/newimediaLogo.png'),
            date: 'Apr 2021 – Present',
            desc: 'Develop websites',
            descBullets: [
                'Improve the performance for digital marketing by developing a platform which can view ads reports from an account',
            ],
        },
        {
            role: 'Software Engineer',
            company: 'Robot Data',
            companylogo: require('./assets/images/robotdataLogo.png'),
            date: 'Jan 2021 – Apr 2021',
            desc: "Develop software and satisfy clients' needs",
            descBullets: [
                'Created a script to web-scrap all images from a website, and scan copyright logos by OCR',
                'Helped a client to develop a web to upload photos of underground tracks and detect cracks',
            ],
        },
        {
            role: 'Analyst Programmer',
            company: 'IBM',
            companylogo: require('./assets/images/ibmLogo.png'),
            date: 'Nov 2019 – Jun 2020',
            desc: 'Develop software and support target clients',
            descBullets: [
                'Increased efficiency by developing a shell script for deploying WSDL files on a device called DataPower (CPA project)',
                'Achieved user satisfaction by supporting clients from DBS bank and implementing a regression test on UAT for frontend development (DBS project)',
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
    display: true, // Set false to hide this section, defaults to true
};

// Some Big Projects You have worked with your company

const bigProjects = {
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
    display: false, // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
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
    display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
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
    display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
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
    display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji('Podcast 🎙️'),
    subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

    // Please Provide with Your Podcast embeded Link
    podcast: [''],
    display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji('Contact Me ☎️'),
    subtitle: 'Discuss a job opportunity or just want to say hi? My Inbox is open for all.',
    number: '+852-87654321',
    email_address: 'abc123@gmail.com',
};

//Twitter Section

const twitterDetails = {
    userName: '', //Replace "twitter" with your twitter username without @
    display: false, // Set true to display this section, defaults to false
};
export {
    illustration,
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
