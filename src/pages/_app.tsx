import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans } from 'next/font/google'

const notosans = Noto_Sans({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={notosans.className}>
    <Component {...pageProps} />
  </main>;
}
