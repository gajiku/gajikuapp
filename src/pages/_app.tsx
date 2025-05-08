import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const notosans = Noto_Sans({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notosans.className}>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-F3EKX400B0" />
    </main>
  );
}
