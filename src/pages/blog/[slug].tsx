import { Blog, First } from '@/repositories/blog-api';
import { GetServerSideProps, NextPage } from 'next';
import { format, parseISO } from 'date-fns';
import { DefaultLayout } from '@/components/layouts/general.layout';
import Head from 'next/head';
import Iframe from 'react-iframe';
import Link from 'next/link';
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
          <div className="breadcrumbs text-sm mb-4">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>{post.title}</li>
            </ul>
          </div>

          <article>
            <div className="flex flex-col gap-3 mb-3">
              <h2 className="text-4xl font-extrabold">{post.title}</h2>
              <div className="text-gray-500 text-sm">
                {post.subtitle && <p className="leading-5 mb-2">{post.subtitle}</p>}
                <footer>{format(parseISO(post.createdAt), 'MMM do, yyyy')}</footer>
              </div>
              <hr />
            </div>
            <div className="article" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {post.form && (
            <section>
              <Iframe url={post.form} width="100%" height="100%" className="h-full" scrolling="no" frameBorder={0} />
            </section>
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
