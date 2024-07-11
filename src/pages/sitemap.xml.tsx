import { GetServerSideProps, NextPage } from 'next'

type PageProps = {}

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>https://gajikuapp.com</loc></url>
      <url><loc>https://gajikuapp.com/earned-wage-access</loc></url>
      <url><loc>https://gajikuapp.com/about</loc></url>
   </urlset>
 `;
}

const SitemapPage: NextPage<PageProps> = (props) => {
    return <></>
}
export default SitemapPage

export const getServerSideProps: GetServerSideProps = async (context) => {
    const sitemap = generateSiteMap();

    context.res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    context.res.write(sitemap);
    context.res.end();

  return {
    props: {},
  };

}

  