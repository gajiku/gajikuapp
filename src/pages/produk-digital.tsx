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
        <title>Gajiku - Beli Pulsa & Token Pakai Gaji yang Sudah Anda Hasilkan</title>
        <meta
          name="description"
          content="Beli pulsa, paket data atau token listrik pakai sebagian gaji sebelum gajian lewat fitur Produk Digital di aplikasi Gajiku."
        />
        <meta name="keywords" content="akses gaji lebih awal, produk digital, beli kebutuhan dengan gaji" />
      </Head>

      <Hero
        background={HomepageBackdrop}
        image={GajikuHeroImage}
        title="Belanja Pulsa, Bayar Pakai Gaji yang Sudah Anda Hasilkan"
      >
        <p>
          Butuh pulsa, paket data, atau token listrik tapi gajian masih lama? Gajiku bantu Anda akses sebagian gaji
          lebih awal untuk beli produk digital langsung dari aplikasi.
        </p>
        <footer>
          <Link href="/contact-us" className="btn btn-primary">
            Hubungi Kami
          </Link>
        </footer>
      </Hero>

      <section className="container grid gap-4">
        <h2 className="text-primary text-3xl font-extrabold">Produk Digital yang Ditawarkan Gajiku</h2>
        <p>Produk Digital adalah fitur yang memungkinkan karyawan membeli kebutuhan digital seperti:</p>
        <ul className="flex items-center gap-4">
          <li className="btn btn-primary btn-outline">Token PLN</li>
          <li className="btn btn-secondary btn-outline">Pulsa</li>
          <li className="btn btn-accent btn-outline">Paket Internet</li>
          <li className="btn btn-success btn-outline">Voucher Deals</li>
        </ul>
        <p>
          Pembayaran produk dilakukan menggunakan sebagian dari gaji yang sudah Anda hasilkan, sehingga Anda tidak perlu
          menunggu hingga akhir bulan untuk memenuhi kebutuhan penting.
        </p>
      </section>
      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Keuntungan</h2>
        <ol className="list-decimal px-6">
          <li>
            <dl>
              <dt className="font-bold">Harga Terjangkau</dt>
              <dd>Produk mulai dari Rp5.000 saja</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="font-bold">Akses Kapan Saja</dt>
              <dd>Penuhi kebutuhan Anda kapan pun dan dimana pun lewat aplikasi Gajiku</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="font-bold">Tanpa Utang & Tanpa Bunga</dt>
              <dd>Bukan pinjaman, Anda memakai gaji yang sudah Anda hasilkan</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="font-bold">Terintegrasi dengan Perusahaan</dt>
              <dd>
                Sistem Gajiku terhubung langsung dengan perusahaan tempat Anda bekerja membuat semuanya lebih mudah
              </dd>
            </dl>
          </li>
        </ol>
      </section>
      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Siapa yang Bisa Gunakan?</h2>
        <p>
          Karyawan dari perusahaan yang sudah terhubung dengan Gajiku. Jika perusahaan Anda belum kerja sama dengan
          Gajiku, Anda bisa rekomendasikan ke HR Anda.
        </p>
      </section>
      <section className="container text-center">
        <h3 className="text-primary text-xl font-bold mb-2">Yuk, Gunakan Gaji yang Sudah Anda Hasilkan</h3>
        <p className="max-w-2xl mx-auto mb-6">
          Tidak perlu tunggu gajian untuk beli kebutuhan penting. Pakai Produk Digital dari Gajiku, langsung dari
          aplikasi.
        </p>
        <p className="max-w-2xl mx-auto mb-6">Ingin tahu lebih lanjut, Tim kami siap membantu Anda.</p>
        <Link href="/contact-us" className="btn btn-primary">
          Hubungi Kami
        </Link>
      </section>
    </DefaultLayout>
  );
}
