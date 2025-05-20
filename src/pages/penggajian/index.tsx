import { Accordion, Card } from 'react-daisyui';
import { RiCodeBoxLine, RiFileExcel2Line, RiFilePdf2Line, RiMoneyDollarBoxLine, RiUserHeartLine } from 'react-icons/ri';
import BPJS from '@/assets/payroll/BPJS_Screenshot.webp';
import Background from '@/assets/payroll/image.png';
import { DefaultLayout } from '@/components/layouts/general.layout';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import { HiOutlineCheck } from 'react-icons/hi';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Iframe from 'react-iframe';
import Image from 'next/image';
import { IoLogoWhatsapp } from 'react-icons/io5';
import Link from 'next/link';
import Script from 'next/script';

export default function Index() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Sistem Penggajian Otomatis</title>
        <meta
          name="description"
          content="Gajiku menyediakan solusi penggajian otomatis yang menghitung gaji, tunjangan, dan potongan secara akurat, lengkap dengan laporan dan integrasi BPJS serta PPh 21."
        />
        <meta
          name="keywords"
          content="penggajian otomatis, payroll, sistem gaji, HRIS Indonesia, aplikasi penggajian"
        />
      </Head>
      <Script src="https://tally.so/widgets/embed.js"></Script>

      <Hero background={HomepageBackdrop} image={GajikuHeroImage} title="Solusi Penggajian Terbaik untuk Bisnis Anda">
        <p>
          Kelola penggajian dengan mudah dan efisien menggunakan aplikasi penggajian kami. Dapatkan laporan akurat,
          hitung pajak otomatis, dan tingkatkan produktivitas tim Anda!
        </p>
        <footer>
          <Link className="btn btn-primary mb-8" href="/contact-us">
            Mulai Sekarang
          </Link>
        </footer>
      </Hero>

      <section className="container">
        <h2 className="text-slate-700 text-4xl mb-8 font-extrabold text-center">
          Efisiensi dan Akurasi dalam Mengelola Gaji
        </h2>
        <div className="grid md:grid-cols-2 gap-2">
          <p className="content-center">
            Apakah Anda mencari cara untuk menyederhanakan pengelolaan gaji karyawan? Dashboard penggajian kami hadir
            untuk memberikan solusi lengkap, memudahkan perhitungan gaji, manajemen absensi, dan laporan keuangan dengan
            efisiensi tinggi. Dengan teknologi terbaru, Anda dapat fokus pada pengembangan bisnis tanpa khawatir tentang
            proses penggajian.
          </p>
          <Image alt="" className="hidden md:block" src={Background} />
        </div>
      </section>

      <section className="container">
        <div className="grid sm:grid-cols-2 gap-6">
          <Card>
            <Card.Body className="gap-0 px-4 py-5">
              <Accordion defaultChecked icon="arrow" className="rounded-none border-b-[1px]">
                <Accordion.Title className="font-bold p-2">Perhitungan PPh 21</Accordion.Title>
                <Accordion.Content className="text-sm">
                  <p>
                    Hitung PPh 21 karyawan Anda dengan metode pemotongan pajak (gross, nett) secara akurat dan otomatis.
                  </p>
                </Accordion.Content>
              </Accordion>
              <Accordion icon="arrow" className="rounded-none border-b-[1px]">
                <Accordion.Title className="font-bold p-2">Perhitungan Terkini</Accordion.Title>
                <Accordion.Content className="text-sm">
                  <p>
                    Hitung PPh untuk kode objek 21-100-02 dan lainnya lebih mudah, akurat, dan sesuai dengan peraturan
                    terkini.
                  </p>
                </Accordion.Content>
              </Accordion>
              <Accordion icon="arrow" className="rounded-none">
                <Accordion.Title className="font-bold p-2">Bonus, insentif, dan pensiun</Accordion.Title>
                <Accordion.Content className="text-sm">
                  <p>
                    Hitung bonus dan insentif yang diterima karyawan, berikut pemotongan pajak dan penyesuaian laporan.
                  </p>
                </Accordion.Content>
              </Accordion>
            </Card.Body>
          </Card>

          <article>
            <h2 className="text-slate-700 text-4xl font-extrabold mb-4">Perhitungan Gaji Otomatis</h2>
            <p>
              Nikmati kemudahan perhitungan gaji yang cepat dan akurat dengan sistem otomatis kami. Kurangi kesalahan
              manual dan pastikan karyawan Anda dibayar tepat waktu.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="grid sm:grid-cols-2 gap-6">
          <article>
            <h2 className="text-slate-700 text-3xl font-extrabold mb-4">Perhitungan BPJS</h2>
            <p>
              Jangan biarkan perhitungan BPJS menjadi beban! Dengan sistem yang terintegrasi, semua jadi lebih
              sederhana. Hitung iuran BPJS Kesehatan dan Ketenagakerjaan dengan mudah dan sesuai dengan regulasi terkini
              hanya dalam hitungan detik.
            </p>
          </article>

          <Image src={BPJS} className="h-fit px-6" alt="Gajiku employee apps" loading="lazy" />
        </div>
      </section>

      <div className="bg-[#f5f5f7]">
        <div className="py-16 px-4 md:px-16 lg:px-32 mb-16">
          <section className="mb-8">
            <h2 className="text-center text-primary text-3xl mb-8 font-extrabold">
              Keuntungan Menggunakan Penggajian Gajiku
            </h2>

            <ul className="grid grid-cols-6 gap-6 mb-16">
              <li className="col-span-3 lg:col-span-2 card bg-white shadow-md transition-all scale-100 hover:scale-105">
                <Card.Body>
                  <RiFileExcel2Line size={32} />
                  <h3 className="font-bold mb-2 text-2xl">Laporan Akurat</h3>
                  <p className="leading-5 text-[15px]">
                    Dapatkan laporan gaji dan pajak secara real-time. Semua data terorganisir dan siap untuk analisis
                    mendalam.
                  </p>
                </Card.Body>
              </li>
              <li className="col-span-3 lg:col-span-2 card bg-white shadow-md transition-all scale-100 hover:scale-105">
                <Card.Body>
                  <RiCodeBoxLine size={32} />
                  <h3 className="font-bold mb-2 text-2xl">Integrasi Mudah</h3>
                  <p className="leading-5 text-[15px]">
                    Sistem kami dapat terintegrasi dengan software HR dan akuntansi yang Anda gunakan saat ini.
                  </p>
                </Card.Body>
              </li>
              <li className="col-span-3 lg:col-span-2 card bg-white shadow-md transition-all scale-100 hover:scale-105">
                <Card.Body>
                  <RiUserHeartLine size={32} />
                  <h3 className="font-bold mb-2 text-2xl">Dukungan Pelanggan</h3>
                  <p className="leading-5 text-[15px]">
                    Tim dukungan siap membantu Anda kapan saja, memastikan pengalaman pengguna yang lancar.
                  </p>
                </Card.Body>
              </li>
              <li className="col-span-3 lg:col-span-2 lg:col-start-2 card bg-white shadow-md transition-all scale-100 hover:scale-105">
                <Card.Body>
                  <RiFilePdf2Line size={32} />
                  <h3 className="font-bold mb-2 text-2xl">Slip Gaji Real-Time</h3>
                  <p className="leading-5 text-[15px]">
                    Memudahkan distribusi slip gaji dengan mengirimkannya melalui aplikasi Gajiku di ponsel
                    masing-masing karyawan
                  </p>
                </Card.Body>
              </li>
              <li className="col-span-4 col-start-2 lg:col-span-2 card bg-white shadow-md transition-all scale-100 hover:scale-105">
                <Card.Body>
                  <RiMoneyDollarBoxLine size={32} />
                  <h3 className="font-bold mb-2 text-2xl">Pencarian Gaji</h3>
                  <p className="leading-5 text-[15px]">
                    Kami menyederhanakan proses transfer gaji yang biasanya sulit dengan administrasi bank. Transfer
                    gaji jadi jauh lebih cepat, mudah, dan aman.
                  </p>
                </Card.Body>
              </li>
            </ul>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-5">
                <h3 className="font-bold text-2xl text-primary mb-4">Cari tahu lebih banyak fitur Penggajian Gajiku</h3>
                <p>
                  Gajiku menyediakan fitur yang komprehensif yang memudahkan untuk kebutuhan bisnis dan semua proses
                  penggajian.
                </p>
              </div>
              <div className="col-span-7">
                <ul className="flex flex-col gap-1">
                  <li className="flex gap-2">
                    <span className="btn btn-primary btn-circle btn-xs text-white">
                      <HiOutlineCheck size={18} />
                    </span>
                    <span>Atur komponen penggajian untuk perusahaan Anda</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="btn btn-primary btn-circle btn-xs text-white">
                      <HiOutlineCheck size={18} />
                    </span>
                    <span>Atur configurasi keterlambatan/lembur untuk karyawan Anda.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="btn btn-primary btn-circle btn-xs text-white">
                      <HiOutlineCheck size={18} />
                    </span>
                    <span>Perhitungan PPh untuk karyawan/non karyawan.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="btn btn-primary btn-circle btn-xs text-white">
                      <HiOutlineCheck size={18} />
                    </span>
                    <span>Penggajian Multi-Periode</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="btn btn-primary btn-circle btn-xs text-white">
                      <HiOutlineCheck size={18} />
                    </span>
                    <span>Import/export data</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="container text-center">
        <p className="mb-8">
          Transformasi cara Anda mengelola gaji karyawan dengan aplikasi penggajian yang inovatif. Ciptakan lingkungan
          kerja yang lebih baik dan produktif dengan solusi kami. Hubungi kami hari ini untuk <b>demo gratis</b>!
        </p>
        <a className="btn btn-success" href="https://wa.me/6281119209415">
          <IoLogoWhatsapp size={18} />
          WhatsApp Kami
        </a>
      </section>

      <section className="container">
        <h2 className="text-2xl mb-4 text-center font-semibold">Atau langsung jadwalkan demo</h2>
        <div className="max-w-2xl mx-auto">
          <Iframe
            url="https://tally.so/embed/meE2je?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="100%"
            className="h-full"
            scrolling="no"
            frameBorder={0}
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
