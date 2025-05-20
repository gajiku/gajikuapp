import { DefaultLayout } from '@/components/layouts/general.layout';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Link from 'next/link';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Pinjaman Aman & Fleksibel untuk Karyawan</title>
        <meta
          name="description"
          content="Ajukan pinjaman langsung dari kantor lewat Pinjaman Karyawan Gajiku. Tanpa agunan, bunga ringan, dan cicilan dari gaji."
        />
        <meta name="keywords" content="pinjaman karyawan, cicilan langsung dari gaji" />
      </Head>

      <Hero
        background={HomepageBackdrop}
        image={GajikuHeroImage}
        reverse
        title="Pinjaman Karyawan yang Aman & Fleksibel"
      >
        <p>
          Mau ajukan pinjaman tanpa ribet dan tanpa takut bunga mencekik? Gajiku punya solusinya lewat pinjaman karyawan
          langsung dari kantor yang sudah bekerja sama dengan Gajiku.
        </p>
        <footer>
          <Link href="/contact-us" className="btn btn-primary">
            Hubungi Kami
          </Link>
        </footer>
      </Hero>

      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Apa Itu Pinjaman Karyawan?</h2>
        <p>
          Pinjaman Karyawan adalah fasilitas pinjaman yang diberikan kepada karyawan dari perusahaan yang telah bekerja
          sama dengan Gajiku. Pengajuannya mudah, pembayarannya langsung dipotong dari gaji secara berkala, dan semuanya
          transparan. Pinjaman ini bisa digunakan untuk berbagai kebutuhan pribadi seperti:
        </p>
        <ol className="list-decimal px-6">
          <li>Renovasi rumah</li>
          <li>Pendidikan anak</li>
          <li>Kesehatan mendadak</li>
          <li>Kebutuhan harian mendesak</li>
        </ol>
      </section>
      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Kenapa Ajukan Pinjaman Karyawan di Gajiku?</h2>
        <ol className="list-decimal px-6">
          <li>
            <dl>
              <dt className="font-bold">Proses Mudah dan Cepat</dt>
              <dd>Ajukan langsung dari aplikasi, gak perlu ke bank</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="font-bold">Bunga Ringan & Transparan</dt>
              <dd>Semua biaya terlihat di awal, gak ada yang disembunyikan</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="font-bold">Tanpa Agunan</dt>
              <dd>Gak perlu jaminan untuk pinjaman</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="font-bold">Cicilan Otomatis dari Gaji</dt>
              <dd>Bayar cicilan langsung dipotong dari gaji tiap bulan</dd>
            </dl>
          </li>
        </ol>
      </section>
      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Cara Ajukan Pinjaman Karyawan?</h2>
        <ol className="list-decimal px-6">
          <li>Buka aplikasi Gajiku</li>
          <li>Pilih menu Pinjaman</li>
          <li>Isi jumlah pinjaman & jangka waktu</li>
          <li>Submit pengajuan, tunggu persetujuan</li>
          <li>Dana cair ke rekeningmu!</li>
        </ol>
      </section>
      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Siapa yang Bisa Ajukan?</h2>
        <p>
          Karyawan dari perusahaan yang sudah terhubung dengan Gajiku. Kalau perusahaanmu belum kerja sama, kamu bisa
          rekomendasikan ke HR-mu.
        </p>
      </section>
      <section className="container text-center">
        <h3 className="text-primary text-xl font-bold mb-2">Gajiku, Teman Finansial Karyawan</h3>
        <p className="max-w-2xl mx-auto mb-6">
          Kami percaya karyawan butuh akses ke pinjaman yang adil, mudah, dan aman. Pinjaman Karyawan dari Gajiku dibuat
          untuk bantu kamu saat butuh dana tambahan tanpa ribet.
        </p>
        <p className="max-w-2xl mx-auto mb-6">Ingin tahu lebih lanjut, Tim kami siap membantu Anda.</p>
        <Link href="/contact-us" className="btn btn-primary">
          Hubungi Kami
        </Link>
      </section>
    </DefaultLayout>
  );
}
