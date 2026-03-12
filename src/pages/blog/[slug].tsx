import { Blog, First } from '@/repositories/blog-api';
import { GetServerSideProps, NextPage } from 'next';
import { format, parseISO } from 'date-fns';
import { Breadcrumbs } from 'react-daisyui';
import { DefaultLayout } from '@/components/layouts/general.layout';
import Head from 'next/head';
import Iframe from 'react-iframe';
import Script from 'next/script';
import { request } from '@/lib/http';

const PostPage: NextPage<{ post: Blog }> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Gajiku - {post.title}</title>
        <meta name="description" content={post.description} />
        <meta property="og:site_name" content="Gajiku" />
        <meta property="og:title" content={`Gajiku - ${post.title}`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        {post.picture && <meta property="og:image" content={post.picture} />}
      </Head>
      <Script src="https://tally.so/widgets/embed.js"></Script>

      <DefaultLayout>
        <div className="p-8 max-w-3xl mx-auto">
          <Breadcrumbs>
            <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href="/blog">Blog</Breadcrumbs.Item>
            <Breadcrumbs.Item>{post.title}</Breadcrumbs.Item>
          </Breadcrumbs>

          <article>
            <div className="flex flex-col gap-3 mb-3">
              <h2 className="text-4xl font-extrabold">{post.title}</h2>
              <small>{format(parseISO(post.createdAt), 'MMM do, yyyy')}</small>
              <hr />
            </div>
            <div className="article" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Form */}
          {post.slug === 'download-template-perhitungan-gajiku-excel' ? (
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
          ) : post.slug === 'template-slip-gaji-excel-free-download' ? (
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
          ) : post.slug === 'download-rumus-perhitungan-kalkulator-pph-21-exc' ? (
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
          ) : post.slug === 'download-absensi-karyawan-format-excel-gratis' ? (
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
        </div>
      </DefaultLayout>
    </>
  );
};

export default PostPage;

interface ServerSideProps {
  post: Blog;
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context) => {
  const slug = context.params?.slug?.toString() ?? '';
  const res = request<ServerSideProps>(async () => {
    const res = await First(slug);

    return { post: res.data };
  });

  return res;
};
