import {
  LuAlarmClock,
  LuComputer,
  LuSmartphoneCharging,
  LuWallet,
  LuWalletCards,
  LuWalletMinimal,
} from 'react-icons/lu';
import AppleEn from '@/assets/apple-en.png';
import ClientAgung from '@/assets/homepage/client-agung.png';
import ClientBAV from '@/assets/homepage/client-bav.png';
import ClientDVL from '@/assets/homepage/client-dvl.svg';
import ClientEsb from '@/assets/homepage/client-esb.png';
import ClientHangry from '@/assets/homepage/client-hangry.png';
import ClientKadence from '@/assets/homepage/client-kadence.png';
import ClientLotte from '@/assets/homepage/client-lotte.png';
import ClientMPM from '@/assets/homepage/client-mpm.png';
import ClientMajoo from '@/assets/homepage/client-majoo.png';
import ClientSamator from '@/assets/homepage/client-samator.jpg';
import ClientSampoerna from '@/assets/homepage/client-sampoerna.png';
import ClientShipper from '@/assets/homepage/client-shipper.png';
import { DefaultLayout } from '@/components/layouts/general.layout';
import GajikuDashboard from '@/assets/homepage/dashboard.png';
import GajikuEmployeeApps from '@/assets/homepage/superapp.png';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import GooglePlayEn from '@/assets/google-play-en.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Image from 'next/image';
import Link from 'next/link';
import MediaDailysocial from '@/assets/homepage/media-dailysocial.png';
import MediaForbes from '@/assets/homepage/media-forbes.png';
import MediaJakartaPost from '@/assets/homepage/media-thejakartapost.png';
import MediaTechinasia from '@/assets/homepage/media-techinasia.png';
import { ReactNode } from 'react';

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Solusi HR & Keuangan Digital untuk Karyawan dan Perusahaan</title>
        <meta
          name="description"
          content="Gajiku membantu perusahaan meningkatkan kesejahteraan karyawan melalui fitur seperti absensi online, penggajian otomatis, pinjaman karyawan Earned Wage Access (EWA)."
        />
        <meta
          name="keywords"
          content="Gajiku, HRIS SaaS, Akses Gaji di Depan, absensi online, penggajian digital, pinjaman karyawan"
        />
      </Head>

      <Hero background={HomepageBackdrop} image={GajikuHeroImage} title="Benefit Terbaik Untuk Karyawan Anda">
        <p>
          Gajiku membantu meningkatkan performa dan retensi karyawan perusahaan Anda dengan memberikan akses Gaji di
          depan dan benefit lainnya.
        </p>
        <footer>
          <Link className="btn btn-primary mb-8" href="/contact-us">
            Mulai Sekarang
          </Link>
          <div className="flex items-center gap-4">
            <a href="https://apps.apple.com/id/app/gajiku/id6444016967" target="_blank">
              <Image src={AppleEn} alt="Gajiku App Store" className="h-12 w-auto" loading="lazy" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.gajiku.app&amp;hl=en&amp;gl=US" target="_blank">
              <Image src={GooglePlayEn} alt="Gajiku Google Play" className="h-12 w-auto" loading="lazy" />
            </a>
          </div>
          <small className="text-sm tracking-tight text-slate-500">*Aplikasi Gajiku khusus karyawan</small>
        </footer>
      </Hero>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-slate-700 text-4xl mb-12 font-extrabold">Gajiku App Untuk Karyawan</h2>
            <ul className="flex flex-col gap-4 text-slate-500">
              {[
                {
                  icon: LuWalletMinimal,
                  title: 'Akses Gaji Didepan (Earned Wage Access)',
                  description: 'Ambil Gajimu kapanpun dan dimanapun. 24/7',
                  color: 'primary',
                },
                {
                  icon: LuAlarmClock,
                  title: 'Absensi (Mobile Attendance)',
                  description: 'Sekarang absen terasa mudah cukup dengan satu klik saja.',
                  color: 'secondary',
                },
                {
                  icon: LuWalletCards,
                  title: 'Manajemen Biaya',
                  description: 'Monitoring klaim biaya dari karyawan Anda',
                  color: 'accent',
                },
                {
                  icon: LuWallet,
                  title: 'Pinjaman Karyawan',
                  description: 'Digitalisaikan proses peminjaman karyawan Anda',
                  color: 'info',
                },
                {
                  icon: LuSmartphoneCharging,
                  title: 'Produk Digital',
                  description: 'Beli Pulsa, Paket Data ataupun PLN menggunakan EWA',
                  color: 'success',
                },
                {
                  icon: LuComputer,
                  title: 'Monitor Produksi',
                  description: 'Solusi manufaktur untuk menghitung upah pekerja',
                  color: 'warning',
                },
              ].map((dt, n: number): ReactNode => {
                return (
                  <li key={n} className="flex items-center gap-4">
                    <div className={`bg-${dt.color} text-white h-10 w-10 flex items-center justify-center rounded-xl`}>
                      <dt.icon size={24} />
                    </div>
                    <dl>
                      <dt className={`text-${dt.color} font-semibold text-lg`}>{dt.title}</dt>
                      <dd className="text-sm">{dt.description}</dd>
                    </dl>
                  </li>
                );
              })}
            </ul>
          </section>
          <div className="content-start">
            <Image alt="Aplikasi Karyawan Gajiku" className="w-3/5 mx-auto" src={GajikuEmployeeApps} loading="lazy" />
          </div>
        </div>
      </div>
      <section className="container">
        <h2 className="text-slate-700 text-4xl mb-12 font-extrabold md:text-center">
          Gajiku Dashboard Untuk Perusahaan
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-2xl text-primary mb-2 font-bold">Database Karyawan</h3>
            <p>Atur semua informasi terkait karyawan baru, resign, perubahan karir, data penggajian dan lainnya.</p>
          </div>
          <div>
            <h3 className="text-2xl text-secondary mb-2 font-bold">Penggajian</h3>
            <p>Perhitungan gaji, tunjangan, PPh 21 dan BPJS secara otomatis.</p>
          </div>
          <div>
            <h3 className="text-2xl text-accent mb-2 font-bold">Manajemen Biaya dan Pinjaman Karyawan</h3>
            <p>Monitor klaim biaya dan juga pinjaman karyawan secara real time!</p>
          </div>
        </div>
        <Image alt="Gajiku Dashboard" className="w-3/5 mx-auto" src={GajikuDashboard} loading="lazy" />
      </section>
      <section className="container">
        <h2 className="text-slate-700 text-4xl mb-12 font-extrabold md:text-center">
          Gajiku Dipercaya Oleh Lebih dari 100 Perusahaan Indonesia di Berbagai Sektor
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-14 items-center">
          {[
            { image: ClientSamator, title: 'Samator' },
            { image: ClientDVL, title: 'Darya Varia Laboratoria' },
            { image: ClientSampoerna, title: 'Sampoerna' },
            { image: ClientAgung, title: 'Agung Concern' },
            { image: ClientLotte, title: 'Lotte' },
            { image: ClientMPM, title: 'MPM' },
            { image: ClientShipper, title: 'Shipper' },
            { image: ClientHangry, title: 'Hangry' },
            { image: ClientMajoo, title: 'Majoo' },
            { image: ClientEsb, title: 'ESB' },
            { image: ClientBAV, title: 'Bina Artha Ventura' },
            { image: ClientKadence, title: 'Kadence' },
          ].map((dt, n: number): ReactNode => {
            return <Image key={`client.${n}`} alt={dt.title} src={dt.image} loading="lazy" />;
          })}
        </div>
      </section>
      <section className="container">
        <h2 className="text-slate-700 text-center text-4xl mb-12 font-extrabold">Yang Sering Ditanyakan</h2>
        <ul className="grid md:grid-cols-2 gap-8">
          <li>
            <span className="font-bold mb-2">Apa itu Akses Gaji Didepan (EWA)?</span>
            <p>
              Sebuah fasilitas yang didapatkan oleh karyawan dimana karyawan dapat mengambil gajinya terlebih dahulu
              tanpa harus menunggu tanggal gajian
            </p>
          </li>
          <li>
            <span className="font-bold mb-2">Bagaimana saya sebagai karyawan dapat fasilitas EWA?</span>
            <p>
              Informasikan tim HR Anda mengenai Gajiku, Tim kami akan dengan senang hati memberikan penjelasan dan demo
              kepada perusahaan Anda
            </p>
          </li>
          <li>
            <span className="font-bold mb-2">Apakah Gajiku (EWA) adalah pinjaman?</span>
            <p>
              Tidak, Gajiku (EWA) memberikan gaji yang memang sudah semestinya hak yang didapatkan oleh karyawan. Dan
              Gajiku tidak memberikan bunga sepersen pun
            </p>
          </li>
          <li>
            <span className="font-bold mb-2">Apakah ini membebankan perusahaan?</span>
            <p>
              Gajiku (EWA) gratis untuk perusahaan, tidak ada biaya apapun. Dan juga tidak merubah proses penggajian di
              Perusahaan Anda
            </p>
          </li>
        </ul>
      </section>
      <section className="container">
        <div className="border rounded-2xl shadow-lg p-8">
          <h2 className="text-primary text-center text-4xl mb-16 font-extrabold">Media Berita</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            <a
              href="https://dailysocial.id/post/startup-ewa-gajiku-raih-pendanaan-awal-16-miliar-rupiah"
              target="_blank"
              rel="noreferer noopener"
            >
              <Image alt="Gajiku in Dailysocial" src={MediaDailysocial} loading="lazy" />
            </a>
            <a href="https://id.techinasia.com/pendanaan-gajiku" target="_blank" rel="noreferer noopener">
              <Image alt="Gajiku in Techinasia" src={MediaTechinasia} loading="lazy" />
            </a>
            <a
              href="https://www.thejakartapost.com/business/2022/01/26/hr-start-up-gajiku-raises-1-1-million-in-seed-round.html"
              target="_blank"
              rel="noreferer noopener"
            >
              <Image alt="Gajiku in Jakarta Post" src={MediaJakartaPost} loading="lazy" />
            </a>
            <a
              href="https://www.forbes.com/30-under-30/2024/asia/finance-venture-capital?profile=sherman-tanuwidjaja"
              target="_blank"
              rel="noreferer noopener"
            >
              <Image alt="Gajiku 30 under 30" src={MediaForbes} loading="lazy" />
            </a>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
