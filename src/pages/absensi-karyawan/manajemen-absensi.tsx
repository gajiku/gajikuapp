import AttendanceDashboardImg from '@/assets/product/attendance-dashboard.png';
import AbsenceManagementImg from '@/assets/product/management/absence-management.jpg';
import { ContactUsForm } from '@/components/forms/contact-us';
import { DefaultLayout } from '@/components/layouts/general.layout';
import Footer from './_components/Footer';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import { HiOutlineCheck } from 'react-icons/hi';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Image from 'next/image';
import Link from 'next/link';
import PlaceholderEwa from '@/assets/ewa/placeholder-ewa.svg';
import { WindowMockup } from 'react-daisyui';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Manajemen Absensi - Gajiku</title>
        <meta name="description" content="Sistem manajemen absensi karyawan menggunakan dashboard gajiku." />
      </Head>

      <Hero background={HomepageBackdrop} image={GajikuHeroImage} reverse title="Manajemen Absensi">
        <p>
          Solusi manajemen kehadiran karyawan yang fleksibel dan laporan kehadiran yang ditampilkan menggunakan
          dashboard yang interaktif
        </p>
        <footer>
          <Link className="btn btn-primary mb-8" href="/contact-us">
            Hubungi Kami
          </Link>
        </footer>
      </Hero>

      <section className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Kelola Kehadiran Karyawan</h2>
            <p>Fitur pengelolaan kehadiran karyawan untuk data kehadiran yang lebih akurat.</p>
            <footer>
              <Link className="btn btn-primary mb-8" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>
          <div className="content-center">
            <Image
              src={AbsenceManagementImg}
              className="object-contain h-[360px] w-full p-0"
              alt="Fingerprint Dashboard"
              loading="lazy"
            />
          </div>

          <div className="content-center">
            <WindowMockup className="w-full" border frameColor="base-200">
              <Image
                src={AttendanceDashboardImg}
                className="h-fit w-full p-0"
                alt="Gajiku MAster Shift"
                loading="lazy"
              />
            </WindowMockup>
          </div>
          <div className="grid gap-4 content-start">
            <h3 className="text-slate-700 text-4xl font-extrabold">Dashboard & Laporan</h3>
            <ul className="grid gap-2">
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success flex-none" />
                Data laporan lengkap termasuk cuti, telat, early clock-out, istirahat, absen lembur, dan lainnya.
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                Pantau karyawan masuk dan tidak masuk.
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                Laporan bulanan absensi untuk penggajian.
              </li>
            </ul>
            <footer>
              <Link className="btn btn-primary" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>

          <div className="content-center">
            <Image src={PlaceholderEwa} className="h-fit  px-6" alt="Gajiku employee apps" loading="lazy" />
          </div>
          <div className="grid gap-4 content-start">
            <h3 className="text-slate-700 text-4xl font-extrabold">Kemudahan Integrasi</h3>
            <ul className="grid gap-2">
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                Integrasi dengan penggajian gajiku
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                Integrasi menggunakan file excel & csv
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                Integrasi fingerprint*
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                Integrasi API*
              </li>
            </ul>
            <footer>
              <Link className="btn btn-primary" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>
        </div>
      </section>

      <Footer />

      <ContactUsForm
        className="mt-16"
        header={
          <p>
            Hubungi kami sekarang untuk menjadwalkan <b>demo gratis</b>!
          </p>
        }
      />
    </DefaultLayout>
  );
}
