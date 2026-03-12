import { Accordion } from 'react-daisyui';
import { DefaultLayout } from '@/components/layouts/general.layout';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Dashboard KPI Karyawan & Organisasi</title>
        <meta
          name="description"
          content="Gunakan dashboard KPI dari Gajiku untuk memantau, mengelola, dan mengevaluasi kinerja karyawan dan organisasi secara real time. Lengkap dengan fitur multi-level KPI, laporan terintegrasi dan notifikasi otomatis."
        />
        <meta
          name="keywords"
          content="KPI karyawan, dashboard KPI, sistem penilaian kinerja, evaluasi kinerja karyawan, monitoring KPI, manajemen performa, aplikasi KPI"
        />
      </Head>

      <Hero
        background={HomepageBackdrop}
        image={GajikuHeroImage}
        title="Dashboard KPI Karyawan dan Organisasi yang Terintegrasi"
      >
        <p>Tingkatkan kinerja bisnis dengan pemantauan KPI yang lebih terstruktur dan transparan.</p>
        <p>
          Kelola dan evaluasi pencapaian karyawan serta organisasi secara efisien melalui dashboard KPI yang fleksibel
          dan mudah digunakan.
        </p>
        <footer>
          <Link className="btn btn-primary mb-8" href="/contact-us">
            Jadwalkan Demo
          </Link>
        </footer>
      </Hero>

      <section className="container">
        <h2 className="text-slate-700 text-4xl font-extrabold mb-12 text-center">Fitur Unggulan KPI Dashboard</h2>
        <div className="max-w-2xl mx-auto">
          <div className="card card-bordered">
            <div className="card-body">
              {[
                {
                  title: 'Manajemen KPI Multi-Level',
                  message:
                    'Buat dan sesuaikan KPI dari level organisasi, divisi, tim, hingga individu. Setiap indikator dapat dihubungkan secara hierarkis untuk memudahkan pemantauan kontribusi terhadap target besar perusahaan.',
                },
                {
                  title: 'Penetapan Target yang Lebih Terarah',
                  message:
                    'Tentukan target yang jelas dan terukur (SMART Goals), baik secara kuantitatif maupun kualitatif, sesuai dengan tanggung jawab masing-masing peran di perusahaan.',
                },
                {
                  title: 'Monitoring Real-Time dan Visualisasi Progress',
                  message:
                    'Pantau perkembangan KPI secara real-time dengan tampilan visual yang intuitif. Progress bar dan indikator status membantu seluruh tim untuk tetap berada di jalur yang benar.',
                },
                {
                  title: 'Review & Evaluasi Kinerja Terjadwal',
                  message:
                    'Atur periode evaluasi secara fleksibel, bulanan, kuartalan, atau tahunan. Atasan dapat memberikan feedback secara langsung melalui sistem, mendukung budaya kerja yang terbuka dan terukur.',
                },
                {
                  title: 'Laporan & Analitik Kinerja Instan',
                  message:
                    'Hasil pemantauan KPI dapat diunduh dalam bentuk laporan yang dapat disesuaikan, lengkap dengan insight visual untuk mempermudah pengambilan keputusan strategis.',
                },
                {
                  title: 'Notifikasi & Reminder Otomatis',
                  message:
                    'Sistem akan mengirimkan pengingat otomatis kepada karyawan dan atasan terkait pembaruan atau review KPI secara berkala, sehingga tidak ada proses yang terlewat.',
                },
              ].map((dt, n: number): ReactNode => {
                return (
                  <Accordion key={n} defaultChecked={n === 0} icon="arrow">
                    <Accordion.Title className="font-bold pl-2 py-2">{dt.title}</Accordion.Title>
                    <Accordion.Content className="text-sm px-2">
                      <p>{dt.message}</p>
                    </Accordion.Content>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Keuntungan yang Didapatkan</h2>
        <ol className="list-decimal px-6">
          <li>Meningkatkan transparansi target kerja di seluruh level organisasi</li>
          <li>Mendukung objektivitas dalam penilaian kinerja karyawan</li>
          <li>Memperkuat akuntabilitas dan motivasi karyawan</li>
          <li>Mengurangi penggunaan sistem manual yang rawan kesalahan</li>
          <li>Terintegrasi dengan produk lain seperti absensi, payroll, dan reimbursement</li>
        </ol>
      </section>

      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Siapa yang Cocok Menggunakan Sistem Ini?</h2>
        <ol className="list-decimal px-6">
          <li>Perusahaan dengan target bisnis jangka panjang</li>
          <li>Divisi HR dan People Development</li>
          <li>Team Leader dan Manager yang perlu memantau performa tim</li>
          <li>Organisasi dengan struktur kerja berbasis target atau OKR/KPI</li>
        </ol>
      </section>

      <section className="container text-center">
        <h3 className="text-primary text-xl font-bold mb-2">Ingin Mengetahui Cara Kerjanya?</h3>
        <p className="mb-6">
          Tim kami siap membantu Anda memahami bagaimana sistem KPI dari Gajiku dapat diimplementasikan sesuai kebutuhan
          perusahaan Anda.
        </p>
        <Link href="/contact-us" className="btn btn-primary">
          Jadwalkan Demo Gratis
        </Link>
      </section>
    </DefaultLayout>
  );
}
