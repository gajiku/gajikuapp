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
        <title>Gajiku - Tax Consultant</title>
        <meta name="description" content="Gajiku menyediakan solusi tax consultant untuk perusahaan anda." />
        <meta
          name="keywords"
          content="penggajian otomatis, payroll, sistem gaji, HRIS Indonesia, aplikasi penggajian"
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
                className="col-span-3 lg:col-span-2 card bg-white shadow-md transition-all scale-100 hover:scale-105"
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
        <div className="grid md:grid-cols-2 gap-12">
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
            {
              title: 'Pendampingan Hukum & SP2DK',
              description:
                'Menerima surat dari kantor pajak? Jangan panik. Ahli pajak kami akan mendampingi Anda memberikan tanggapan profesional dan mewakili perusahaan jika diperlukan.',
            },
          ].map((dt, n: number) => {
            return (
              <div key={`tax.feature.${n}`} className="card card-bordered">
                <div className="card-body text-center">
                  <h3 className="text-2xl text-slate-700">{dt.title}</h3>
                  <p className="text-slate-500 mb-8">{dt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
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
          Hubungi Kami
        </Link>
      </section>
    </DefaultLayout>
  );
}
