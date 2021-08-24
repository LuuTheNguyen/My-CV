import { Layout } from "@components/Layout/Layout"
import { StyledMain, StyledContainer } from '@containers/Home/styles'

import { Info } from '@components/Info/Info/Info'
import { Menu } from '@components/Menu/Menu'

export const HomePage: React.FC = () => {
    
    const achieveData = [
        { label: '2 +', content: 'Years Experience' },
        { label: '9', content: 'Complete Projects' }
    ]
    const serviceData = [
        {
            time: 'April 2017 - February 2018',
            project: 'Saddlier Connect',
            responsibilities: 'Frontend Developer',
            tech: 'JQuery',
            description: 'A leading e-learning platform in US, my responsibility was to ensure the front-office match the template and content',
            company: 'Ban Vien Company',
        },
        {
            time: 'February 2018 - January 2020',
            project: 'Perform military service',
        },
        {
            time: 'May 2020 - June 2021',
            project: 'TikTik',
            responsibilities: 'Frontend Developer',
            tech: 'BEM, Material UI, React Core UI, Jira, Git Kraken, Slack',
            description: 'Website manage store and cards discount of store, with many package service, my responsibility was to ensure the front-office match the template and content, make sure correct flow and functional of web',
            company: 'Intelin Company',
        },
        {
            time: 'March 2021 - April 2021',
            project: 'Web builder for real estate agency',
            responsibilities: 'Frontend Developer',
            tech: 'Material UI, React Core UI, Trello, Git Kraken',
            description: 'A system support real estate agency to build their own website. Based on Next.JS and ReactJS we delivered a handy system support user to manage their estate as well as content with built-in themes. My responsibility is to create and maintenance the built-in theme, ensure pixel-to-pixel match with Figma design',
        }
    ]

    const languageData = [{label: 'Viet Nam', percent:100}, {label:'City', percent:50}]
    const contactData = [{label: 'Phone', content:'(+84)829549118'}, {label:'Skype', content:'nguyenluu121094'}]
    const libData = [{label: 'Boostrap'}, {label:'SCSS'}, {label:'Webpack'}, {label:'Git knowledge'}, {label:'Nextjs'}, {label:'Reactjs/ React Native'}]
    const aboutData = [{label: 'Residence', content:'Viet Nam'}, {label:'City', content:'Ho Chi Minh'}, {label:'Age', content:'27'}]
    const skillData = [{label: 'HTML', percent:80}, {label:'CSS', percent:70}, {label:'JS', percent:70}, {label:'TS', percent:60}]

    const data={        
        achieves: achieveData,
        services: serviceData,
        languages: languageData,
        contacts: contactData,
        libs: libData,
        abouts: aboutData,
        skills: skillData
    }

    return <Layout name="Home">
        <StyledContainer>
            <StyledMain className="container">
                <div className="row">
                    <Info {...data} />
                    <Menu />
                </div>
            </StyledMain>
        
        </StyledContainer>
    </Layout>
}