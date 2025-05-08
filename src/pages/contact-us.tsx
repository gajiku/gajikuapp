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
        <meta name="twitter:title" content="Gajiku - Kontak Kami" />
      </Head>
      <Script src="https://tally.so/widgets/embed.js"></Script>

      <section className="py-16 lg:px-32 md:px-16 px-4 text-center mx-auto max-w-4xl">
        <h1 className="text-primary text-center text-4xl mb-2 font-extrabold">Kontak Kami</h1>
        <p className="text-xl mb-8 ">
          Bantu karyawan Anda untuk mendapatkan kesehatan finansialdan meningkatkan performa dan retensi karyawan.
        </p>
        {/* Form */}
        <Iframe
          url="https://tally.so/embed/meE2je?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="100%"
          className="h-full"
          scrolling="no"
          frameBorder={0}
        />
      </section>
    </DefaultLayout>
  );
}
