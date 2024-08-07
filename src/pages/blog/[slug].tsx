import { DefaultLayout } from "@/components/layouts/general.layout";
import Script from "next/script";
import { GetServerSideProps, NextPage } from "next";
import Iframe from "react-iframe";

const BlogPostPage: NextPage<{slug: string}> = (param) => {
  return <DefaultLayout>
    <Script src="https://blogstraps.com/embed/blogstraps.min.js"></Script>
    <Script src="https://tally.so/widgets/embed.js"></Script>
    <div id="bs-blog" data-key="77e2305512f2135b125e9d5050f6d966" data-post={param.slug}></div>    

    {/* Form */}
    {
    param.slug === "download-template-perhitungan-gajiku-excel" &&
    <section className="py-16 lg:px-32 md:px-16 px-4 text-center mx-auto max-w-4xl" id="download-form">
      <h2 className="text-2xl mb-4 text-center font-semibold">Download Template Excel Perhitungan Gaji Karyawan</h2>
      <Iframe 
        url="https://tally.so/embed/w7oNpP?hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="100%"
        height="100%"
        className="h-full"
        scrolling="no"
        frameBorder={0}
      />
    </section>
    }
  </DefaultLayout>
}

export default BlogPostPage
     

export const getServerSideProps: GetServerSideProps<{slug: string}> = async (context) => {
  const slug = context.params?.slug?.toString() ?? ""
  return {
    props: { slug }, 
  }
}
