const achieveData = [
    { counts: 2, label: '+', content: 'Years Experience' },
    { counts: 9, content: 'Complete Projects' },
]

const serviceData = [
    {
        time: 'April 2017 - February 2018',
        project: 'Saddlier Connect',
        responsibilities:
            'Using HTML, Javascript and CSS to bring concert to life, Implementing design on mobile websites, Fixing bugs and testing for usability',
        tech: 'JQuery',
        description: 'A leading e-learning platform in US',
        company: 'Ban Vien Company',
        companyHref: 'https://banvien.com/',
    },
    // {
    //     time: 'February 2018 - January 2020',
    //     project: 'Perform military service',
    // },
    {
        time: 'May 2020 - September 2020',
        project: 'Running365',
        responsibilities: 'Fixing bugs and testing for usability',
        tech: 'Material UI, Redux, Redux Saga, Jira, Git Kraken, Slack',
        description: 'Website manage group and challenge of jogging, sync data with Strava',
        company: 'Intelin Company',
        companyHref: 'https://www.intelin.vn/',
    },
    {
        time: 'August 2020 - June 2020',
        project: 'TikTik',
        responsibilities:
            'Fixing bugs and testing for usability, Bring concepts to life, Implementing design on mobile websites, Developing and maintaining the user interface, Managing software workflow',
        tech: 'Material UI, Redux, Redux Saga, Jira, Git Kraken, Slack',
        description: 'Website manage store and cards discount of store, with many package service',
        company: 'Intelin Company',
        companyHref: 'https://www.intelin.vn/',
    },
    {
        time: 'July 2020 - February 2020',
        project: 'IHP',
        responsibilities:
            'Fixing bugs and testing for usability, Bring concepts to life, Implementing design on mobile websites, Managing software workflow',
        tech: 'Material UI, Redux, Redux Saga, Jira, Git Kraken, Slack',
        description:
            'Website manage blood donation of user, statistical account register, create and notice for user about schedule of donate',
        company: 'Intelin Company',
        companyHref: 'https://www.intelin.vn/',
    },
    {
        time: 'October 2020 - December 2021',
        project: 'NamA',
        responsibilities: 'Fixing bugs and testing for usability, Bring concepts to life',
        tech: 'Material UI, Redux, Redux Saga, React Core UI, Jira, Git Kraken, Slack',
        description: 'Website manage infomation of user for Nam A Bank',
        company: 'Intelin Company',
        companyHref: 'https://www.intelin.vn/',
    },
    {
        time: 'February 2020 - April 2021',
        project: 'Payment',
        responsibilities: 'Fixing bugs and testing for usability, Bring concepts to life',
        tech: 'React Core UI, AngularJs, BEM, Jira, Git Kraken, Slack',
        description: 'Website manage a payment online of user',
        company: 'Intelin Company',
        companyHref: 'https://www.intelin.vn/',
    },
    {
        time: 'April 2021 - June 2021',
        project: 'iPortal',
        responsibilities: 'Fixing bugs and testing for usability, Managing software workflow',
        tech: 'React Core UI, Jira, Git Kraken, Slack',
        description: 'Website for create template web online',
        company: 'Intelin Company',
        companyHref: 'https://www.intelin.vn/',
    },
    {
        time: 'March 2021 - April 2021',
        project: 'Web builder for real estate agency',
        responsibilities: 'Fixing bugs and testing for usability',
        tech: 'Material UI, Trello, Git Kraken',
        description:
            'A system support real estate agency to build their own website. Based on Next.JS and ReactJS we delivered a handy system support user to manage their estate as well as content with built-in themes',
        companyHref: '',
    },
    {
        time: 'April 2020 - july 2021',
        project: 'Meiji',
        responsibilities:
            'Bring concepts to life, Developing and maintaining the user interface, Managing software workflow.',
        tech: 'React Core UI, AngularJs, BEM, Jira, Git Kraken, Slack',
        description: 'Website manage a infomation of mom and baby',
        company: 'Intelin Company',
        companyHref: 'https://www.intelin.vn/',
    },
]

const languageData = [
    {
        name: 'English',
        skills: [
            { label: 'Reading', percent: 50 },
            { label: 'Writting', percent: 40 },
            { label: 'Speaking', percent: 40 },
            { label: 'Listening', percent: 50 },
        ],
    },
]

const contactData = [
    { label: 'Phone', content: '+84829549118', type: 'phone' },
    { label: 'Skype', content: 'nguyenluu121094', type: 'skype' },
    { label: 'Email', content: 'nin.luu94@gmail.com', type: 'mail' },
]

const libData = [
    { label: 'Boostrap' },
    { label: 'SCSS' },
    { label: 'Webpack' },
    { label: 'Git knowledge' },
    { label: 'Nextjs' },
    { label: 'Reactjs/ React Native' },
]

const aboutData = [
    { label: 'Residence', content: 'Viet Nam' },
    { label: 'City', content: 'Ho Chi Minh City' },
    { label: 'Age', content: 781894800000 },
]

const skillData = [
    { label: 'HTML', percent: 80 },
    { label: 'CSS', percent: 70 },
    { label: 'JS', percent: 70 },
    { label: 'TS', percent: 60 },
]

const educationsData = {
    graduated: '2013 - 2017',
    university: 'University Ho Chi Minh City - University of Science',
    majors: 'Information Technology',
}

export const data = {
    achieves: achieveData,
    services: serviceData,
    languages: languageData,
    contacts: contactData,
    libs: libData,
    abouts: aboutData,
    skills: skillData,
    educations: educationsData,
}

export const contentData = {
    achieve: data.achieves,
    service: data.services,
    education: data.educations,
}

export const headData = {
    languages: data.languages,
    contacts: data.contacts,
    libs: data.libs,
    abouts: data.abouts,
    skills: data.skills,
}

export const summaryData =
    'I build web interfaces with more then 2 years of experience with latest technology such as React, Sass, TypeScript, NextJS. Specialize in using React to build web applications.'
