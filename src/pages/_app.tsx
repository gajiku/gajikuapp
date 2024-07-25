import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans } from 'next/font/google'
import ReactGA from 'react-ga';

const notosans = Noto_Sans({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  ReactGA.initialize('G-F3EKX400B0');
  return <main className={notosans.className}>
    <Component {...pageProps} />
  </main>;
}
