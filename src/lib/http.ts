import { ApiErrorResponse } from '@/pkg/api/response';
import { GetServerSidePropsResult } from 'next';

export async function request<T>(fn: Function): Promise<GetServerSidePropsResult<T>> {
  try {
    let res = await fn();

    return { props: res };
  } catch (error) {
    if (error as ApiErrorResponse) {
      const err = error as ApiErrorResponse;
      console.error('API Error:', err);

      if (err.http_status === 404) {
        return { notFound: true };
      } else if (err.http_status >= 400 && err.http_status < 500) {
        return { notFound: true };
      }
    } else {
      console.error('Unknown error:', error);
    }
  }

  return { notFound: true };
}
