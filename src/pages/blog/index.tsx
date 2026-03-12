import { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { ApiErrorResponse } from '@/pkg/api/response';
import { BlogstrapsApi } from '@/repositories/blogstraps-api';
import { DefaultLayout } from '@/components/layouts/general.layout';
import { EmbedPosts } from '@/repositories/blogstraps-api/entity';
import Head from 'next/head';
import LogoGajiku from '@/assets/logo-wide.png';
import { blogstrapsDefaultCSS } from '@/components/layouts/default.css';
import parse from 'html-react-parser';

const BlogPage: NextPage<{ posts: EmbedPosts }> = (param) => {
  const [current_url, set_current_url] = useState('');

  useEffect(() => {
    set_current_url(document.URL ?? '');
    const style = document.createElement('style');
    style.innerText = param.posts.style;
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>{'Gajiku - Blog'}</title>
        <meta name="description" content={'Gajiku - Blog'} />
        <meta property="og:site_name" content={'gajiku'} />
        {current_url !== '' && <meta property="og:url" content={document.URL} />}
        <meta property="og:title" content={'Gajiku - Blog'} />
        <meta property="og:description" content={'Gajiku resources: Press Released, Product Update, Educations'} />
        <meta property="og:type" content={'website'} />
        <meta property="og:image" content={LogoGajiku.src} />
        <style>{blogstrapsDefaultCSS}</style>
      </Head>
      <DefaultLayout>
        <div className="p-8 container mx-auto">
          <div className="mb-12">
            <h1 className="text-primary text-center text-4xl font-extrabold">Blog</h1>
            <p className="text-center mt-2">Press Released, Product Update, Educations</p>
          </div>
          {parse(param.posts.html)}
        </div>
      </DefaultLayout>
    </>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<{ posts: EmbedPosts }> = async (context) => {
  try {
    const keyword = context.query.keyword?.toString() ?? '';
    const page = Number(context.query.page?.toString()) ?? 1;
    const resp = await BlogstrapsApi.GetEmbedPosts(keyword, '', page);
    return { props: { posts: resp.data } };
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
