import { BasicBlog, Find } from '@/repositories/blog-api';
import { GetServerSideProps, NextPage } from 'next';
import { DefaultLayout } from '@/components/layouts/general.layout';
import Head from 'next/head';
import Link from 'next/link';
import LogoGajiku from '@/assets/logo-wide.png';
import { request } from '@/lib/http';

interface PageProps {
  posts: BasicBlog[];
}

const BlogPage: NextPage<PageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Gajiku - Blog</title>
        <meta name="description" content="Gajiku resources: Press Released, Product Update, Educations" />
        <meta property="og:site_name" content="Gajiku" />
        <meta property="og:title" content="Gajiku - Blog" />
        <meta property="og:description" content="Gajiku resources: Press Released, Product Update, Educations" />
        <meta property="og:image" content={LogoGajiku.src} />
      </Head>
      <DefaultLayout>
        <div className="p-8 container mx-auto">
          <div className="mb-12">
            <h1 className="text-primary text-center text-4xl font-extrabold mb-2">Blog</h1>
            <p className="text-center">Press Released, Product Update, Educations</p>
          </div>

          <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {posts.map((p, n) => {
              return (
                <li key={n}>
                  <Link href={`/blog/${p.slug}`} className="card card-compact overflow-hidden rounded-3xl h-full">
                    <img alt={p.title} src={p.picture} loading="lazy" />
                    <div className="card-body rounded-b-3xl border-l border-b border-r">
                      <h3 className="font-bold text-lg leading-6 hover:text-primary">{p.title}</h3>
                      <p className="text-sm">{p.preview}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </DefaultLayout>
    </>
  );
};

export default BlogPage;

interface ServerSideProps {
  posts: BasicBlog[];
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async () => {
  const res = request<ServerSideProps>(async () => {
    const res = await Find();

    return { posts: res.data.blogs };
  });

  return res;
};
