import { DefaultLayout } from '@/components/layouts/general.layout';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import { HiOutlineCheck } from 'react-icons/hi';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Image from 'next/image';
import Link from 'next/link';
import PlaceholderEwa from '@/assets/ewa/placeholder-ewa.svg';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Dashboard Absensi Online - Gajiku</title>
        <meta
          name="description"
          content="Sistem absensi gajiku di lengkapi dashboard untuk melakukan monitoring dan konfigurasi yang fleksibel"
        />
      </Head>

      <Hero background={HomepageBackdrop} image={GajikuHeroImage} reverse title="Dashboard Absensi Online">
        <p>Sistem absensi gajiku di lengkapi dashboard untuk melakukan monitoring dan konfigurasi yang fleksibel.</p>
        <footer>
          <Link className="btn btn-primary mb-8" href="/contact-us">
            Hubungi Kami
          </Link>
        </footer>
      </Hero>

      <section className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-y-4 justify-center">
            <h2 className="text-slate-700 text-4xl font-extrabold">Monitor Jadwal Kerja</h2>
            <ul className="grid gap-2">
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                Kalender Kerja
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                Timesheet
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                Bulk Approval
              </li>
            </ul>
            <footer>
              <Link className="btn btn-primary" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>
          <div className="content-center">
            <Image src={PlaceholderEwa} className="h-fit px-6" alt="Gajiku employee apps" loading="lazy" />
          </div>

          <div className="content-center">
            <Image src={PlaceholderEwa} className="h-fit px-6" alt="Gajiku employee apps" loading="lazy" />
          </div>
          <div className="flex flex-col gap-y-4 justify-center">
            <h2 className="text-slate-700 text-4xl font-extrabold">Master Data & Laporan</h2>
            <ul className="grid gap-2">
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                <div>Master Shift</div>
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                <div>Master Data Cuti</div>
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                <div>Laporan umum yang bisa di pakai di berbagai sistem payroll</div>
              </li>
            </ul>
            <footer>
              <Link className="btn btn-primary" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>

          <div className="flex flex-col gap-y-4 justify-center">
            <h2 className="text-slate-700 text-4xl font-extrabold">Atur Workflow Approval</h2>
            <p>
              Jenjang persetujuan dapat dibuat dengan fleksibel, hingga siapa dan berapa orang yang harus menyetujui
              bisa di atur dengan mudah melalui dashboard gajiku
            </p>
            <footer>
              <Link className="btn btn-primary" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>
          <div className="content-center">
            <Image src={PlaceholderEwa} className="h-fit px-6" alt="Gajiku employee apps" loading="lazy" />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
