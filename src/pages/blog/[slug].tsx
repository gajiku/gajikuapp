import { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { ApiErrorResponse } from '@/pkg/api/response';
import { BlogstrapsApi } from '@/repositories/blogstraps-api';
import { Breadcrumbs } from 'react-daisyui';
import { DefaultLayout } from '@/components/layouts/general.layout';
import { EmbedPost } from '@/repositories/blogstraps-api/entity';
import Head from 'next/head';
import Iframe from 'react-iframe';
import Script from 'next/script';
import { blogstrapsDefaultCSS } from '@/components/layouts/default.css';
import parse from 'html-react-parser';

const PostPage: NextPage<{ post: EmbedPost }> = (param) => {
  const [current_url, set_current_url] = useState('');

  useEffect(() => {
    set_current_url(document.URL ?? '');
    const style = document.createElement('style');
    style.innerText = param.post.style;
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>{param.post.title}</title>
        <meta name="description" content={param.post.seo_title} />
        <meta property="og:site_name" content={'gajiku'} />
        {current_url !== '' && <meta property="og:url" content={document.URL} />}
        <meta property="og:title" content={param.post.seo_title} />
        <meta property="og:description" content={param.post.seo_desc} />
        <meta property="og:type" content={'article'} />
        {param.post.main_image !== '' && <meta property="og:image" content={param.post.main_image} />}
        <meta name="twitter:card" content={'summary_large_image'} />
        <meta name="twitter:title" content={param.post.seo_title} />
        <meta name="twitter:description" content={param.post.seo_desc} />
        {param.post.main_image !== '' && <meta name="twitter:image" content={param.post.main_image} />}
        <style>{blogstrapsDefaultCSS}</style>
      </Head>
      <Script src="https://tally.so/widgets/embed.js"></Script>
      <DefaultLayout className="py-8">
        <Breadcrumbs className="mx-auto max-w-3xl">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item>{param.post.title}</Breadcrumbs.Item>
        </Breadcrumbs>
        <div>{parse(param.post.html.replaceAll('__currentUrl__', current_url))}</div>

        {/* Form */}
        {param.post.slug === 'download-template-perhitungan-gajiku-excel' ? (
          <section className="py-16 lg:px-32 md:px-16 px-4 text-center mx-auto max-w-4xl" id="download-form">
            <h2 className="text-2xl mb-4 text-center font-semibold">
              Download Template Excel Perhitungan Gaji Karyawan
            </h2>
            <Iframe
              url="https://tally.so/embed/w7oNpP?hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="100%"
              className="h-full"
              scrolling="no"
              frameBorder={0}
            />
          </section>
        ) : param.post.slug === 'template-slip-gaji-excel-free-download' ? (
          <section className="py-16 lg:px-32 md:px-16 px-4 text-center mx-auto max-w-4xl" id="download-form">
            <h2 className="text-2xl mb-4 text-center font-semibold">Download Template Slip Gaji Excel</h2>
            <Iframe
              url="https://tally.so/embed/w2LePe?hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="100%"
              className="h-full"
              scrolling="no"
              frameBorder={0}
            />
          </section>
        ) : param.post.slug === 'download-rumus-perhitungan-kalkulator-pph-21-exc' ? (
          <section className="py-16 lg:px-32 md:px-16 px-4 text-center mx-auto max-w-4xl" id="download-form">
            <h2 className="text-2xl mb-4 text-center font-semibold">
              Download Rumus Perhitungan Kalkulator PPH 21 Excel
            </h2>
            <Iframe
              url="https://tally.so/embed/meL6Rl?hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="100%"
              className="h-full"
              scrolling="no"
              frameBorder={0}
            />
          </section>
        ) : param.post.slug === 'download-absensi-karyawan-format-excel-gratis' ? (
          <section className="py-16 lg:px-32 md:px-16 px-4 text-center mx-auto max-w-4xl" id="download-form">
            <h2 className="text-2xl mb-4 text-center font-semibold">Download Absensi Karyawan Format Excel</h2>
            <Iframe
              url="https://tally.so/embed/w7o4X9?hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="100%"
              className="h-full"
              scrolling="no"
              frameBorder={0}
            />
          </section>
        ) : (
          <></>
        )}
      </DefaultLayout>
    </>
  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps<{ post: EmbedPost }> = async (context) => {
  try {
    const post_slug = context.params?.slug?.toString() ?? '';

    const resp = await BlogstrapsApi.GetEmbedPost(post_slug);
    return { props: { post: resp.data } };
  } catch (error) {
    if (error as ApiErrorResponse) {
      const api_err = error as ApiErrorResponse;
      if (api_err.http_status === 404) {
        return { notFound: true };
      } else if (api_err.http_status >= 400 && api_err.http_status < 500) {
        return {
          redirect: {
            permanent: true,
            destination: '/500',
          },
          props: {},
        };
      }
    } else {
      console.log('Unknown error:', error);
    }
  }
  return { notFound: true };
};
