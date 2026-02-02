import { Card } from 'react-daisyui';
import { DefaultLayout } from '@/components/layouts/general.layout';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Link from 'next/link';
import Script from 'next/script';

export default function Index() {
  return (
    <DefaultLayout>
      <Head>
        <title>Jasa Konsultan Pajak PPh 21 & SPT Badan Murah Jakarta | Gajiku</title>
        <meta
          name="description"
          content="Solusi pajak SME: Hitung, bayar, & lapor PPh 21, PPN, PPh 23, hingga SPT Badan. Layanan retainer per jam, harga terjangkau, berbasis di Jakarta."
        />
        <meta
          name="keywords"
          content="Jasa Konsultan Pajak Jakarta, Konsultan Pajak Murah UMKM, Jasa Lapor SPT Badan Terjangkau, Jasa Hitung PPh 21 Karyawan"
        />
      </Head>
      <Script src="https://tally.so/widgets/embed.js"></Script>

      <Hero
        background={HomepageBackdrop}
        image={GajikuHeroImage}
        title="Kelola Pajak Perusahaan Tanpa Celah, Mulai dari Perhitungan hingga Pelaporan."
      >
        <p>
          Gabungan kekuatan sistem otomasi payroll Gajiku dengan keahlian konsultan pajak bersertifikat. Pastikan
          perusahaan Anda 100% patuh regulasi tanpa perlu pusing urusan administrasi.
        </p>
        <footer>
          <Link className="btn btn-primary mb-8" href="/contact-us">
            Jadwalkan Demo
          </Link>
        </footer>
      </Hero>

      <section className="container grid gap-4">
        <h2 className="text-primary text-3xl font-extrabold">Mengapa Urusan Pajak Sering Menjadi Beban?</h2>
        <p>Kami memahami tantangan yang dihadapi oleh HR dan pemilik bisnis dalam mengelola kewajiban perpajakan.</p>
        <ul className="grid grid-cols-6 gap-6 mb-16">
          {[
            {
              title: 'Aturan Pajak Berubah-ubah',
              description:
                'Aturan pajak (seperti tarif TER) yang berubah-ubah dan membingungkan, membuat tim HR kesulitan mengikuti regulasi terbaru.',
            },
            {
              title: 'Risiko Denda Tinggi',
              description:
                'Risiko denda akibat keterlambatan atau kesalahan input data manual yang dapat berdampak signifikan pada keuangan perusahaan.',
            },
            {
              title: 'Waktu HR Terbuang',
              description:
                'Waktu tim HR habis hanya untuk rekonsiliasi data pajak dan payroll, mengalihkan fokus dari tugas strategis lainnya.',
            },
          ].map((dt, n) => {
            return (
              <li
                key={`tax.reason.${n}`}
                className="col-span-6 lg:col-span-2 card bg-white shadow-md transition-all scale-100 hover:scale-105"
              >
                <Card.Body>
                  <h3 className="font-bold mb-2 text-2xl text-slate-700">{dt.title}</h3>
                  <p>{dt.description}</p>
                </Card.Body>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="container grid gap-4">
        <h2 className="text-primary text-3xl font-extrabold">Layanan Komprehensif untuk Ketenangan Bisnis Anda</h2>
        <p>Solusi perpajakan lengkap yang disesuaikan dengan kebutuhan perusahaan Anda.</p>
        <ul className="grid grid-cols-6 gap-6 mb-16">
          {[
            {
              title: 'Manajemen PPh 21/26',
              description:
                'Bukan sekadar hitung gaji. Kami memastikan pemotongan pajak karyawan akurat sesuai status PTKP dan aturan terbaru, terintegrasi langsung dengan slip gaji digital.',
            },
            {
              title: 'Penyusunan SPT Tahunan Badan',
              description:
                'Lupakan lembur di akhir tahun pajak. Konsultan kami menyiapkan laporan keuangan fiskal dan SPT Badan Anda dengan dokumentasi yang rapi dan siap audit.',
            },
            {
              title: 'Tax Health Check',
              description:
                'Kami melakukan deteksi dini terhadap potensi risiko pajak di perusahaan Anda sebelum menjadi temuan DJP. Mencegah lebih baik daripada membayar denda.',
            },
          ].map((dt, n: number) => {
            return (
              <li
                key={`tax.feature.${n}`}
                className="col-span-6 lg:col-span-2 card bg-white shadow-md transition-all scale-100 hover:scale-105"
              >
                <Card.Body>
                  <h3 className="font-bold mb-2 text-2xl text-slate-700">{dt.title}</h3>
                  <p>{dt.description}</p>
                </Card.Body>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="container grid gap-4">
        <h2 className="text-primary text-3xl font-extrabold">Cakupan Layanan Kami</h2>
        <p>
          Kami menangani seluruh administrasi perpajakan Anda secara end-to-end, mulai dari perhitungan rutin bulanan,
          pelaporan berkala, hingga asistensi pajak tahunan agar Anda bisa fokus sepenuhnya pada pertumbuhan bisnis.
        </p>
        <ul className="grid grid-cols-6 gap-6 mb-16">
          {[
            {
              title: 'Perhitungan & Pembayaran Pajak',
              description: (
                <>
                  <p className="grow-0">Kami mengelola arus keluar pajak Anda dengan presisi tinggi.</p>
                  <ol className="list-decimal pl-4">
                    <li>PPh Pasal 21 terintegrasi payroll</li>
                    <li>PPN Masa yang akurat</li>
                    <li>PPh 4(2), 15, 22, 23/26</li>
                    <li>Pendampingan setor sendiri</li>
                  </ol>
                </>
              ),
            },
            {
              title: 'Pelaporan Pajak Digital',
              description: (
                <>
                  <p className="grow-0">Laporan rapi adalah kunci keamanan dari audit pajak.</p>
                  <ol className="list-decimal pl-4">
                    <li>Integrasi HRIS & Payroll</li>
                    <li>SPT Tahunan Orang Pribadi</li>
                    <li>SPT Tahunan Badan</li>
                  </ol>
                </>
              ),
            },
            {
              title: 'Konsultasi Pajak & Akuntansi',
              description: (
                <>
                  <p className="grow-0">Akses ke tim ahli tanpa biaya overhead tinggi.</p>
                  <ol className="list-decimal pl-4">
                    <li>Expert Advisory berpengalaman</li>
                    <li>Skema Retainer atau Per Jam</li>
                    <li>Pendampingan kepatuhan dan mitigasi risiko pajak</li>
                  </ol>
                </>
              ),
            },
          ].map((dt, n: number) => {
            return (
              <li
                key={`tax.feature.${n}`}
                className="col-span-6 lg:col-span-2 card bg-white shadow-md transition-all scale-100 hover:scale-105"
              >
                <Card.Body>
                  <h3 className="font-bold mb-2 text-2xl text-slate-700">{dt.title}</h3>
                  {dt.description}
                </Card.Body>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Mengapa Gajiku Tax Consultant Berbeda?</h2>
        <ol className="list-decimal px-6">
          <li>
            <dl>
              <dt className="font-bold">Data-Driven</dt>
              <dd>
                Kami tidak meminta data manual. Sistem kami menarik data langsung dari dashboard payroll Anda. Akurasi
                100%.
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="font-bold">Efisiensi Biaya</dt>
              <dd>
                Tidak perlu rekrut In-house Tax Specialist yang mahal. Dapatkan akses ke tim ahli dengan biaya yang
                fleksibel.
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="font-bold">Keamanan Data Standar Bank</dt>
              <dd>
                Data keuangan dan pajak Anda dienkripsi dengan standar keamanan tertinggi. Privasi terjaga sepenuhnya.
              </dd>
            </dl>
          </li>
        </ol>
      </section>

      <section className="container text-center">
        <h3 className="text-primary text-xl font-bold mb-2">Siap Lepas Dari Kerumitan Pajak?</h3>
        <p className="max-w-2xl mx-auto mb-6">
          Jangan biarkan urusan pajak menghambat skalabilitas perusahaan Anda. Hubungi tim ahli kami untuk konsultasi
          singkat gratis.
        </p>
        <Link href="/contact-us" className="btn btn-primary">
          Jadwalkan Konsultasi Gratis
        </Link>
      </section>
    </DefaultLayout>
  );
}
