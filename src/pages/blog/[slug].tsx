import { DefaultLayout } from "@/components/layouts/general.layout";
import Script from "next/script";
import { GetServerSideProps, NextPage } from "next";

const BlogPostPage: NextPage<{slug: string}> = (param) => {
  return <DefaultLayout>
    <Script src="https://blogstraps.com/embed/blogstraps.min.js"></Script>
    <div id="bs-blog" data-key="77e2305512f2135b125e9d5050f6d966" data-post={param.slug}></div>    
  </DefaultLayout>
}

export default BlogPostPage
     

export const getServerSideProps: GetServerSideProps<{slug: string}> = async (context) => {
  const slug = context.params?.slug?.toString() ?? ""
  return {
    props: { slug }, 
  }
}
