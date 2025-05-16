import {
  LuAlarmClock,
  LuComputer,
  LuSmartphoneCharging,
  LuWallet,
  LuWalletCards,
  LuWalletMinimal,
} from 'react-icons/lu';
import AppleEn from '@/assets/apple-en.png';
import ClientEdenfarm from '@/assets/homepage/client-edenfarm.svg';
import ClientEkrut from '@/assets/homepage/client-ekrut.png';
import ClientEsb from '@/assets/homepage/client-esb.png';
import ClientEvermos from '@/assets/homepage/client-evermos.png';
import ClientGowork from '@/assets/homepage/client-gowork.png';
import ClientHangry from '@/assets/homepage/client-hangry.png';
import ClientLotte from '@/assets/homepage/client-lotte.png';
import ClientMajoo from '@/assets/homepage/client-majoo.png';
import ClientMatahari from '@/assets/homepage/client-matahari.png';
import ClientSampoerna from '@/assets/homepage/client-sampoerna.png';
import ClientShipper from '@/assets/homepage/client-shipper.png';
import { DefaultLayout } from '@/components/layouts/general.layout';
import GajikuDashboard from '@/assets/homepage/gajiku-dashboard.png';
import GajikuEmployeeApps from '@/assets/homepage/gajiku-employee-apps.png';
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
        <title>Gajiku - Gajian, on demand</title>
        <meta
          name="description"
          content="Pembayaran gaji dimuka untuk karyawan terbaikmu! Bebas biaya untukmu, beri kebebasan untuk mereka."
        />
        <meta name="twitter:title" content="Gajiku - Gajian, on demand" />
      </Head>

      <div className="flex flex-col gap-12">
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
              <a
                href="https://play.google.com/store/apps/details?id=com.gajiku.app&amp;hl=en&amp;gl=US"
                target="_blank"
              >
                <Image src={GooglePlayEn} alt="Gajiku Google Play" className="h-12 w-auto" loading="lazy" />
              </a>
            </div>
            <small className="text-sm tracking-tight text-slate-500">*Aplikasi Gajiku khusus karyawan</small>
          </footer>
        </Hero>
        <div className="container">
          <div className="grid md:grid-cols-2">
            <section>
              <h2 className="text-slate-700 text-4xl mb-12 font-bold">Gajiku App Untuk Karyawan</h2>
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
                      <div
                        className={`bg-${dt.color} text-white h-10 w-10 flex items-center justify-center rounded-xl`}
                      >
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
            <div className="content-center pt-8">
              <Image
                src={GajikuEmployeeApps}
                className="max-h-[500px] w-fit pl-16"
                alt="Gajiku employee apps"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <section className="container">
          <h2 className="text-primary text-center text-3xl mb-4 font-extrabold">Gajiku Dashboard Untuk Perusahaan</h2>
          <div className="grid md:grid-cols-3 gap-x-12 px-8">
            <div className="mt-8">
              <h3 className="text-xl text-primary mb-2">Database Karyawan</h3>
              <p>Atur semua informasi terkait karyawan baru, resign, perubahan karir, data penggajian dan lainnya.</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl text-primary mb-2">Payroll</h3>
              <p>Perhitungan gaji, tunjangan, PPh 21 dan BPJS secara otomatis.</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl text-primary mb-2">Manajemen Biaya dan Pinjaman Karyawan</h3>
              <p>Monitor klaim biaya dan juga pinjaman karyawan secara real time!</p>
            </div>
          </div>
          <div className="mt-8">
            <Image
              src={GajikuDashboard}
              className="max-h-[500px] w-fit mx-auto"
              alt="Gajiku dashboard"
              loading="lazy"
            />
          </div>
        </section>
        <section className="container">
          <h2 className="text-primary lg:px-32 md:px-16 px-4 text-center text-3xl mb-4 font-extrabold">
            Gajiku Dipercaya Oleh Lebih dari 100 Perusahaan Indonesia di Berbagai Sektor
          </h2>
          <div className="grid md:grid-cols-6 grid-cols-2 gap-x-4 gap-y-4 lg:px-16 md:px-8 px-4 py-16 items-center">
            <Image
              src={ClientMatahari}
              className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
              alt="Gajiku x Matahari"
              loading="lazy"
            />
            <Image
              src={ClientSampoerna}
              className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
              alt="Gajiku x Sampoerna"
              loading="lazy"
            />
            <Image
              src={ClientLotte}
              className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
              alt="Gajiku x Lotte"
              loading="lazy"
            />
            <Image
              src={ClientShipper}
              className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
              alt="Gajiku x Shipper"
              loading="lazy"
            />
            <Image
              src={ClientHangry}
              className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
              alt="Gajiku x Hangry"
              loading="lazy"
            />
            <Image
              src={ClientEsb}
              className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
              alt="Gajiku x Esb"
              loading="lazy"
            />
            <Image
              src={ClientEdenfarm}
              className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
              alt="Gajiku x Edenfarm"
              loading="lazy"
            />
            <Image
              src={ClientEvermos}
              className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
              alt="Gajiku x Evermos"
              loading="lazy"
            />
            <Image
              src={ClientEkrut}
              className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
              alt="Gajiku x Ekrut"
              loading="lazy"
            />
            <Image
              src={ClientGowork}
              className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
              alt="Gajiku x Gowork"
              loading="lazy"
            />
            <Image
              src={ClientMajoo}
              className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
              alt="Gajiku x Majoo"
              loading="lazy"
            />
          </div>
        </section>
        <section className="container">
          <h2 className="text-primary lg:px-32 md:px-16 px-4 text-center text-3xl mb-4 font-extrabold">
            Yang Sering Ditanyakan
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-[800px] pt-12 mx-auto px-4">
            <div>
              <div className="font-bold mb-2">Apa itu Akses Gaji Didepan (EWA)?</div>
              <p>
                Sebuah fasilitas yang didapatkan oleh karyawan dimana karyawan dapat mengambil gajinya terlebih dahulu
                tanpa harus menunggu tanggal gajian
              </p>
            </div>
            <div>
              <div className="font-bold mb-2">Bagaimana saya sebagai karyawan dapat fasilitas EWA?</div>
              <p>
                Informasikan tim HR Anda mengenai Gajiku, Tim kami akan dengan senang hati memberikan penjelasan dan
                demo kepada perusahaan Anda
              </p>
            </div>
            <div>
              <div className="font-bold mb-2">Apakah Gajiku (EWA) adalah pinjaman?</div>
              <p>
                Tidak, Gajiku (EWA) memberikan gaji yang memang sudah semestinya hak yang didapatkan oleh karyawan. Dan
                Gajiku tidak memberikan bunga sepersen pun
              </p>
            </div>
            <div>
              <div className="font-bold mb-2">Apakah ini membebankan perusahaan?</div>
              <p>
                Gajiku (EWA) gratis untuk perusahaan, tidak ada biaya apapun. Dan juga tidak merubah proses penggajian
                di Perusahaan Anda
              </p>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="max-w-6xl border rounded-lg shadow-xl mx-auto lg:py-16 py-8 px-8">
            <h2 className="text-primary lg:px-32 md:px-16 px-4 text-center text-3xl mb-16 font-extrabold">
              Media Berita
            </h2>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-8 items-center">
              <a
                href="https://dailysocial.id/post/startup-ewa-gajiku-raih-pendanaan-awal-16-miliar-rupiah"
                target="_blank"
                rel="noreferer noopener"
              >
                <Image
                  src={MediaDailysocial}
                  className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
                  alt="Gajiku in Dailysocial"
                  loading="lazy"
                />
              </a>
              <a href="https://id.techinasia.com/pendanaan-gajiku" target="_blank" rel="noreferer noopener">
                <Image
                  src={MediaTechinasia}
                  className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
                  alt="Gajiku in Techinasia"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.thejakartapost.com/business/2022/01/26/hr-start-up-gajiku-raises-1-1-million-in-seed-round.html"
                target="_blank"
                rel="noreferer noopener"
              >
                <Image
                  src={MediaJakartaPost}
                  className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
                  alt="Gajiku in Jakarta Post"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.forbes.com/30-under-30/2024/asia/finance-venture-capital?profile=sherman-tanuwidjaja"
                target="_blank"
                rel="noreferer noopener"
              >
                <Image
                  src={MediaForbes}
                  className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center"
                  alt="Gajiku 30 under 30"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
