import { ApiSuccessResponse } from '@/pkg/api/response';

const host = 'https://api.gajiku.dev/blog';

export interface BasicBlog {
  slug: string;
  picture: string;
  url: string;
  title: string;
  preview: string;
}

export const Find = async (): Promise<ApiSuccessResponse<{ blogs: BasicBlog[] }>> => {
  const r = await fetch(`${host}/`);
  if (r.status >= 400) {
    throw r;
  }

  return await r.json();
};

export interface Blog {
  slug: string;
  picture: string;
  url: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export const First = async (slug: string): Promise<ApiSuccessResponse<Blog>> => {
  const r = await fetch(`${host}/detail/${slug}`);
  if (r.status >= 400) {
    throw r;
  }

  return await r.json();
};
