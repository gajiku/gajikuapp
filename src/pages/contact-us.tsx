import { DefaultLayout } from '@/components/layouts/general.layout';
import Head from 'next/head';
import Iframe from 'react-iframe';
import Script from 'next/script';

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Kontak Kami</title>
        <meta
          name="description"
          content="Gajiku memberikan akses gaji didepan untuk membantuk meningkatkan retensi dan performa karyawan Anda."
        />
      </Head>
      <Script src="https://tally.so/widgets/embed.js"></Script>

      <section className="container text-center py-8">
        <h1 className="text-primary text-4xl mb-12 font-extrabold">Kontak Kami</h1>
        <p className="mb-8">
          Bantu karyawan Anda untuk mendapatkan kesehatan finansial dan meningkatkan performa dan retensi karyawan.
        </p>
        <div className="max-w-xl mx-auto">
          <Iframe
            url="https://tally.so/embed/meE2je?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="100%"
            className="h-full"
            scrolling="no"
            frameBorder={0}
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
