import { Category, EmbedPost, EmbedPosts, SitemapUrl } from './entity';
import { ApiSuccessResponse } from '@/pkg/api/response';

const host = process.env.NEXT_PUBLIC_API_HOST || 'https://api.blogstraps.com';

const GetEmbedPosts = (
  keyword: string,
  category: string,
  page: number,
  size?: number,
): Promise<ApiSuccessResponse<EmbedPosts>> => {
  var api_params: string[] = [];
  if (category && category !== '') {
    api_params.push('category=' + category);
  }
  if (keyword !== '') {
    api_params.push('keyword=' + keyword);
  }
  if (page > 0) {
    api_params.push('page=' + page.toString());
  }
  if (size && size > 0) {
    api_params.push('size=' + size.toString());
  }

  return fetch(host + `/v1/embed/posts?${api_params.join('&')}`, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_API_KEY ?? '',
    },
  }).then((r) => {
    if (r.status >= 400) {
      throw r;
    }
    return r.json();
  });
};

const GetEmbedPost = (slug: string): Promise<ApiSuccessResponse<EmbedPost>> => {
  return fetch(host + `/v1/embed/post?slug=${slug}`, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_API_KEY ?? '',
    },
  }).then((r) => {
    if (r.status >= 400) {
      throw r;
    }
    return r.json();
  });
};

const GetCategories = (): Promise<ApiSuccessResponse<{ categories: Category[] }>> => {
  return fetch(host + `/v1/blog/category`, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_API_KEY ?? '',
    },
  }).then((r) => {
    if (r.status >= 400) {
      throw r;
    }
    return r.json();
  });
};

const GetSitemap = (): Promise<ApiSuccessResponse<{ url: SitemapUrl[] }>> => {
  return fetch(host + `/v1/blog/sitemap`, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_API_KEY ?? '',
    },
  }).then((r) => {
    if (r.status >= 400) {
      throw r;
    }
    return r.json();
  });
};

export const BlogstrapsApi = {
  GetEmbedPosts,
  GetEmbedPost,
  GetCategories,
  GetSitemap,
};
