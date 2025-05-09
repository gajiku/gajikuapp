import { Html, Head, Main, NextScript } from 'next/document';
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
