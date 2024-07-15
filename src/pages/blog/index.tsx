import { DefaultLayout } from "@/components/layouts/general.layout";
import Script from "next/script";

export default function BlogPage() {
  return <DefaultLayout>
    <Script src="https://blogstraps.com/embed/blogstraps.min.js"></Script>
    <div className="py-8">
      <h1 className="text-primary text-center text-4xl font-extrabold">Blog</h1>
      <p className="text-center mt-2">Press Released, Product Update, Educations</p>
      {/* <div className="mt-[-2rem] text-white" /> */}

      <div id="bs-blog" data-key="77e2305512f2135b125e9d5050f6d966"></div> 
    </div>
  </DefaultLayout>
}
     