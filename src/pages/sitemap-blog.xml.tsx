import { GetServerSideProps, NextPage } from 'next'

const SitemapPage: NextPage<void> = (props) => <></>

export default SitemapPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      statusCode: 301,
      destination: "https://blogstraps.com/sitemap/embed/77e2305512f2135b125e9d5050f6d966.xml",
    },
    props:{},
  };
}