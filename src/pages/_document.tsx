import { Head, Html, Main, NextScript } from 'next/document';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: 'white',
  width: 'device-width',
  initialScale: 1,
};

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Gajiku" />
        <meta name="publisher" content="Sampradaa Pte Ltd" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
