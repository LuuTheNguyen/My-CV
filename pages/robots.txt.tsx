import { NextPage } from 'next'

const getRobots = () => `User-agent: *
Disallow: /_next/static/
`

const Sitemap: NextPage = () => {
    return null
}

Sitemap.getInitialProps = async ({ res }) => {
    if (res) {
        res.setHeader('Content-Type', 'text/plain')
        res.write(getRobots())
        res.end()
    }
    return { res }
}

export default Sitemap
