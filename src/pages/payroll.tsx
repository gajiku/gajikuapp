import { DefaultLayout } from '@/components/layouts/general.layout';
import { HiOutlineCheck } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { Link } from 'react-daisyui';
import Background from '@/assets/payroll/image.png';
import Image from 'next/image';
import Head from 'next/head';
import Iframe from 'react-iframe';
import Script from 'next/script';

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Payroll</title>
        <meta name="description" content="" />
        <meta name="twitter:title" content="Gajiku - Payroll" />
      </Head>
      <Script src="https://tally.so/widgets/embed.js"></Script>

      <section className="pt-16 px-4 md:px-16 lg:px-32">
        <h1 className="text-primary text-4xl mb-8 font-extrabold">
          Solusi Payroll Terbaik untuk Bisnis Anda: Efisiensi dan Akurasi dalam Mengelola Gaji
        </h1>
        <div className="grid md:grid-cols-2 gap-2">
          <p className="content-center">
            Apakah Anda mencari cara untuk menyederhanakan pengelolaan gaji karyawan? Aplikasi payroll kami hadir untuk
            memberikan solusi lengkap, memudahkan perhitungan gaji, manajemen absensi, dan laporan keuangan dengan
            efisiensi tinggi. Dengan teknologi terbaru, Anda dapat fokus pada pengembangan bisnis tanpa khawatir tentang
            proses penggajian.
          </p>
          <Image alt="" className="hidden md:block" src={Background} />
        </div>
      </section>

      <section className="pt-16 px-4 md:px-16 lg:px-32">
        <h2 className="text-primary text-3xl mb-8 font-extrabold">Keuntungan Menggunakan Gajiku Payroll:</h2>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <span className="btn btn-primary btn-circle btn-xs text-white">
              <HiOutlineCheck size={18} />
            </span>
            <p>
              <span className="font-medium">Perhitungan Gaji Otomatis</span>:
              <br />
              Nikmati kemudahan perhitungan gaji yang cepat dan akurat dengan sistem otomatis kami. Kurangi kesalahan
              manual dan pastikan karyawan Anda dibayar tepat waktu.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="btn btn-primary btn-circle btn-xs text-white">
              <HiOutlineCheck size={18} />
            </span>
            <p>
              <span className="font-medium">Laporan Akurat</span>:
              <br />
              Dapatkan laporan gaji dan pajak secara real-time. Semua data terorganisir dan siap untuk analisis
              mendalam.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="btn btn-primary btn-circle btn-xs text-white">
              <HiOutlineCheck size={18} />
            </span>
            <p>
              <span className="font-medium">Integrasi Mudah</span>:
              <br />
              Sistem kami dapat terintegrasi dengan software HR dan akuntansi yang Anda gunakan saat ini.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="btn btn-primary btn-circle btn-xs text-white">
              <HiOutlineCheck size={18} />
            </span>
            <p>
              <span className="font-medium">Dukungan Pelanggan</span>:
              <br />
              Tim dukungan siap membantu Anda kapan saja, memastikan pengalaman pengguna yang lancar.
            </p>
          </li>
        </ul>
      </section>

      <section className="pt-16 px-4 md:px-16 lg:px-32">
        <p className="mb-6 text-center">
          Transformasi cara Anda mengelola gaji karyawan dengan aplikasi payroll yang inovatif. Ciptakan lingkungan
          kerja yang lebih baik dan produktif dengan solusi kami. Hubungi kami hari ini untuk demo gratis!
        </p>
        <div className="text-center mb-4">
          <a className="btn bg-[#1A3636] hover:bg-[#1A3636] text-white" href="https://wa.me/628170177701">
            <IoLogoWhatsapp size={18} />
            WhatsApp Kami
          </a>
        </div>
        <h2 className="text-2xl mb-4 text-center font-semibold">Atau langsung jadwalkan demo</h2>
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
