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
import LogoSquare from '@/assets/logo.png';
import MediaDailysocial from '@/assets/homepage/media-dailysocial.png';
import MediaForbes from '@/assets/homepage/media-forbes.png';
import MediaJakartaPost from '@/assets/homepage/media-thejakartapost.png';
import MediaTechinasia from '@/assets/homepage/media-techinasia.png';

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

      <Hero background={HomepageBackdrop} image={GajikuHeroImage}>
        <h1 className="text-primary text-5xl leading-tight font-bold">Benefit Terbaik Untuk Karyawan Anda</h1>
        <p className="leading-6">
          Gajiku membantu meningkatkan performa dan retensi karyawan perusahaan Anda dengan memberikan akses Gaji di
          depan dan benefit lainnya.
        </p>
        <footer>
          <Link className="btn btn-primary mb-6" href="/contact-us">
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
          <small className="text-sm tracking-tight">*Aplikasi Gajiku khusus karyawan</small>
        </footer>
      </Hero>

      <section className="py-16 lg:px-32 md:px-16 px-4 border-b-[3px] border-[#fafafa]" id="feature-karyawan">
        <div className="grid md:grid-cols-2 pl-8">
          <div>
            <h2 className="text-primary text-[2.5rem]/[1.2] mb-4 font-extrabold">Gajiku App Untuk Karyawan</h2>
            <div className="flex flex-col gap-y-8 mt-8">
              <div className="flex gap-x-4">
                <Image src={LogoSquare} alt="Logo gajiku" className="h-[32px] w-fit" loading="lazy" />
                <div>
                  <div className="text-primary font-semibold">Akses Gaji Didepan (Earned Wage Access)</div>
                  <div>Ambil Gajimu kapanpun dan dimanapun. 24/7</div>
                </div>
              </div>
              <div className="flex gap-x-4">
                <Image src={LogoSquare} alt="Logo gajiku" className="h-[32px] w-fit" loading="lazy" />
                <div>
                  <div className="text-primary font-semibold">Absensi (Mobile Attendance)</div>
                  <div>Sekarang absen terasa mudah cukup dengan satu klik saja.</div>
                </div>
              </div>
              <div className="flex gap-x-4">
                <Image src={LogoSquare} alt="Logo gajiku" className="h-[32px] w-fit" loading="lazy" />
                <div>
                  <div className="text-primary font-semibold">Manajemen Biaya</div>
                  <div>Monitoring klaim biaya dari karyawan Anda</div>
                </div>
              </div>
              <div className="flex gap-x-4">
                <Image src={LogoSquare} alt="Logo gajiku" className="h-[32px] w-fit" loading="lazy" />
                <div>
                  <div className="text-primary font-semibold">Pinjaman Karyawan (Loan Management)</div>
                  <div>Digitalisaikan proses peminjaman karyawan Anda</div>
                </div>
              </div>
              <div className="flex gap-x-4">
                <Image src={LogoSquare} alt="Logo gajiku" className="h-[32px] w-fit" loading="lazy" />
                <div>
                  <div className="text-primary font-semibold">Digital Product</div>
                  <div>Beli Pulsa, Paket Data ataupun PLN menggunakan EWA</div>
                </div>
              </div>
              <div className="flex gap-x-4">
                <Image src={LogoSquare} alt="Logo gajiku" className="h-[32px] w-fit" loading="lazy" />
                <div>
                  <div className="text-primary font-semibold">Production Tracker</div>
                  <div>Solusi manufaktur untuk menghitung upah pekerja</div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-center pt-8">
            <Image
              src={GajikuEmployeeApps}
              className="max-h-[500px] w-fit pl-16"
              alt="Gajiku employee apps"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="py-16 lg:px-32 md:px-16 px-4 border-b-[3px] border-[#fafafa]" id="features">
        <h2 className="text-primary text-center text-[2.5rem]/[1.2] mb-4 font-extrabold">
          Gajiku Dashboard Untuk Perusahaan
        </h2>
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
          <Image src={GajikuDashboard} className="max-h-[500px] w-fit mx-auto" alt="Gajiku dashboard" loading="lazy" />
        </div>
      </section>
      <section className="pt-16 pb-8 border-[#fafafa]" id="clients">
        <h2 className="text-primary lg:px-32 md:px-16 px-4 text-center text-[2.5rem]/[1.2] mb-4 font-extrabold">
          GAJIKU Dipercaya Oleh Lebih dari 100 Perusahaan Indonesia di Berbagai Sektor
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
      <section className="pb-16 border-[#fafafa]" id="faq">
        <h2 className="text-primary lg:px-32 md:px-16 px-4 text-center text-[2.5rem]/[1.2] mb-4 font-extrabold">
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
              Informasikan tim HR Anda mengenai Gajiku, Tim kami akan dengan senang hati memberikan penjelasan dan demo
              kepada perusahaan Anda
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
              Gajiku (EWA) gratis untuk perusahaan, tidak ada biaya apapun. Dan juga tidak merubah proses penggajian di
              Perusahaan Anda
            </p>
          </div>
        </div>
      </section>
      <section className="pb-16 px-4" id="media">
        <div className="max-w-6xl border rounded-lg shadow-xl mx-auto lg:py-16 py-8 px-8">
          <h2 className="text-primary lg:px-32 md:px-16 px-4 text-center text-[2.5rem]/[1.2] mb-16 font-extrabold">
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
    </DefaultLayout>
  );
}
