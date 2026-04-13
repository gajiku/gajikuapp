import Banner from '@/assets/payroll-outsource/banner.png';
import { Card } from 'react-daisyui';
import { ContactUsForm } from '@/components/forms/contact-us';
import { DefaultLayout } from '@/components/layouts/general.layout';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

export default function Index() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Jasa Payroll Outsource: Terima Beres dari Hitung Gaji hingga PPh 21</title>
        <meta
          name="description"
          content="Sederhanakan penggajian perusahaan Anda dengan layanan Managed Payroll. Tim Payroll Specialist kami menangani kalkulasi gaji, BPJS, hingga pelaporan PPh 21 (TER) secara akurat dan patuh hukum. Terima beres, aman, dan rahasia."
        />
        <meta
          name="keywords"
          content="Payroll outsource Indonesia, Jasa hitung gaji perusahaan, Managed payroll services, Layanan pelaporan PPh 21 perusahaan, Payroll specialist outsource"
        />
      </Head>
      <Script src="https://tally.so/widgets/embed.js"></Script>

      <section className="container py-6">
        <h2 className="text-primary text-4xl font-extrabold text-center">Payroll Outsource Service</h2>
        <p className="text-primary text-center mb-8">
          Bebaskan Tim Anda dari Kompleksitas Penggajian. Biarkan Spesialis Kami yang Mengelolanya untuk Anda.
        </p>
        <div className="flex gap-4">
          <Image alt="" className="hidden md:block md:w-2/5" src={Banner} />
          <div className="grow py-6">
            <p className="mb-4">
              Kami memahami bahwa proses payroll di akhir bulan sering kali menyita waktu dan energi yang besar.
              Mengelola gaji bukan sekadar tentang transfer dana; ada perhitungan PPh 21 yang detail, penyesuaian
              regulasi BPJS yang terus diperbarui, hingga keharusan menjaga kerahasiaan data internal secara ketat.
            </p>
            <p>
              Ketika tim HR dan Keuangan Anda mulai kewalahan dengan beban administratif ini, fokus mereka pada
              pengembangan strategi bisnis tentu akan terbagi. Di sinilah kami hadir untuk mengambil alih kerumitan
              tersebut.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="text-primary text-2xl font-extrabold">
          Dikelola Langsung oleh Payroll Specialist Berpengalaman
        </h2>
        <p className="mb-8">
          Kami tidak sekadar menawarkan sistem otomatisasi, melainkan pendampingan penuh dari{' '}
          <strong>Tim Payroll Specialist</strong> kami. Begitu Anda bekerja sama dengan kami, operasional penggajian
          Anda akan ditangani langsung oleh para praktisi yang secara khusus mendedikasikan waktu mereka untuk memahami
          regulasi ketenagakerjaan dan perpajakan (termasuk penerapan skema PPh 21 TER terbaru). Anda tidak perlu lagi
          khawatir tertinggal aturan pemerintah yang baru—spesialis kami akan memastikannya untuk Anda.
        </p>
      </section>

      <section className="container">
        <h2 className="text-primary text-2xl font-extrabold">
          Proses Terstruktur: Dari Data Mentah Hingga Pelaporan Pajak
        </h2>
        <p>
          Kami mendesain alur kerja yang sangat efisien. Anda cukup memberikan data mentah bulanan, dan tim kami akan
          menyelesaikan seluruh rangkaian prosesnya hingga tuntas:
        </p>
        <ol className="list-decimal pl-4">
          {[
            {
              title: 'Penerimaan & Verifikasi Data',
              description:
                'Anda mengirimkan data variabel (seperti kehadiran, lembur, atau mutasi karyawan). Tim kami akan melakukan validasi awal untuk memastikan data siap diproses.',
            },
            {
              title: 'Kalkulasi Komprehensif',
              description:
                'Spesialis kami menghitung secara presisi, mulai dari take-home pay, pemotongan BPJS Kesehatan dan Ketenagakerjaan, hingga kalkulasi PPh 21 sesuai kebijakan perusahaan Anda.',
            },
            {
              title: 'Persetujuan (Approval) Klien',
              description:
                'Kami tidak akan memproses pembayaran tanpa persetujuan Anda. Draf perhitungan akan kami kirimkan untuk Anda ulas terlebih dahulu.',
            },
            {
              title: 'Distribusi Slip Gaji & Pembayaran',
              description:
                'Setelah disetujui, kami menerbitkan slip gaji digital yang rahasia untuk setiap karyawan, sekaligus menyiapkan instruksi pembayaran (bank transfer file) untuk perusahaan Anda.',
            },
            {
              title: 'Penyelesaian Pajak & Pelaporan BPJS',
              description:
                'Ini adalah tahap akhir yang paling krusial. Tim kami akan menuntaskan pembuatan draf laporan, menyiapkan instruksi penyetoran, hingga melakukan pelaporan SPT Masa bulanan dan penyiapan bukti potong tahunan (1721-A1).',
            },
          ].map((dt, n) => {
            return (
              <li key={`payroll-outsource.process.${n}`}>
                <h3 className="font-bold">{dt.title}</h3>
                <p>{dt.description}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="container">
        <h2 className="text-primary text-2xl font-extrabold">Keuntungan Beralih ke Managed Payroll Kami</h2>
        <p className="mb-6">Proses kolaborasi dirancang secara sistematis untuk menjamin efisiensi.</p>
        <ul className="grid grid-cols-6 gap-6 mb-16">
          {[
            {
              title: 'Akurasi & Kepatuhan Penuh',
              description:
                'Menghindari risiko denda keterlambatan pelaporan atau kesalahan perhitungan yang dapat memengaruhi kredibilitas perusahaan di mata karyawan.',
            },
            {
              title: 'Kerahasiaan Internal yang Terjaga',
              description:
                'Menyerahkan pengelolaan gaji kepada pihak ketiga yang profesional adalah cara paling aman untuk mencegah kebocoran informasi kompensasi di lingkungan internal kantor Anda.',
            },
            {
              title: 'Fokus pada Pertumbuhan Bisnis',
              description:
                'Dengan mendelegasikan tugas administratif ini, tim HR Anda dapat kembali berfokus pada inisiatif strategis seperti pengembangan talenta dan budaya kerja.',
            },
          ].map((dt, n) => {
            return (
              <li
                key={`payroll-outsource.reason.${n}`}
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

      <ContactUsForm
        header={
          <>
            <h2 className="text-primary text-2xl font-extrabold">Mari Diskusikan Kebutuhan Perusahaan Anda</h2>
            <p>
              Setiap perusahaan memiliki struktur kompensasi dan tantangannya masing-masing. Jadwalkan sesi konsultasi
              dengan tim Payroll Specialist kami untuk merancang solusi penggajian yang paling tepat dan efisien bagi
              bisnis Anda.
            </p>
          </>
        }
        contact="Hubungi Spesialis Kami"
      />
    </DefaultLayout>
  );
}
