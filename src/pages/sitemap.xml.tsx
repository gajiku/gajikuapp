import { GetServerSideProps, NextPage } from 'next';

type PageProps = {};

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>https://gajikuapp.com</loc></url>
      <url><loc>https://gajikuapp.com/earned-wage-access</loc></url>
      <url><loc>https://gajikuapp.com/absensi-karyawan</loc></url>
      <url><loc>https://gajikuapp.com/penggajian</loc></url>
      <url><loc>https://gajikuapp.com/sistem-reimburse</loc></url>
      <url><loc>https://gajikuapp.com/pinjaman-usaha</loc></url>
      <url><loc>https://gajikuapp.com/pinjaman-karyawan</loc></url>
      <url><loc>https://gajikuapp.com/produk-digital</loc></url>
      <url><loc>https://gajikuapp.com/monitor-produksi</loc></url>
   </urlset>
 `;
}

const SitemapPage: NextPage<PageProps> = () => {
  return <></>;
};

export default SitemapPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sitemap = generateSiteMap();

  context.res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  context.res.write(sitemap);
  context.res.end();

  return {
    props: {},
  };
};
