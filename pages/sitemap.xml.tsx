import moment from 'moment'
import { NextPage } from 'next'

const getSitemap = () => `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nguyenluu.ml/</loc>
    <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`

const Sitemap: NextPage = () => {
    return null
}

Sitemap.getInitialProps = async ({ res }) => {
    if (res) {
        res.setHeader('Content-Type', 'text/xml')
        res.write(getSitemap())
        res.end()
    }
    return { res }
}

export default Sitemap
