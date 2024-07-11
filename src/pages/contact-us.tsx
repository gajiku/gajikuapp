import { DefaultLayout } from "@/components/layouts/general.layout";
import { HiOutlineCheck } from "react-icons/hi";
import { Link } from "react-daisyui";
import PlaceholderEwa  from "@/assets/ewa/placeholder-ewa.svg";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return <DefaultLayout>
    <Head>
      <title>Gajiku - Kontak Kami</title>
      <meta name="description" content="Gajiku memberikan akses gaji didepan untuk membantuk meningkatkan retensi dan performa karyawan Anda." />
      <meta name="twitter:title" content="Gajiku - Kontak Kami" />
      <meta name="description" content="Gajiku memberikan akses gaji didepan untuk membantuk meningkatkan retensi dan performa karyawan Anda." />
    </Head>
    
    <section className="py-16 lg:px-32 md:px-16 px-4 text-center mx-auto max-w-4xl">
        <h1 className="text-primary text-center text-4xl mb-2 font-extrabold">Kontak Kami</h1>
        <p className="text-xl mb-8 ">Bantu karyawan Anda untuk mendapatkan kesehatan finansialdan meningkatkan performa dan retensi karyawan.</p>
        {/* Form */}
    </section>
    
  </DefaultLayout>
}
     