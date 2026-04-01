import AttendanceLocationImg from '@/assets/product/attendance-location.png';
import AttendancePresenceImg from '@/assets/product/attendance-presence.png';
import { ContactUsForm } from '@/components/forms/contact-us';
import { DefaultLayout } from '@/components/layouts/general.layout';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import { HiOutlineCheck } from 'react-icons/hi';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Absensi Online - Gajiku</title>
        <meta name="description" content="Absensi karyawan secara online dengan GPS menggunakan Android & iOS." />
      </Head>

      <Hero background={HomepageBackdrop} image={GajikuHeroImage} reverse title="Absensi Online">
        <p>
          Sistem absensi dan kehadiran karyawan dengan GPS dapat diakses dari berbagai platform termasuk browser,
          Android dan iOS
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
            <h3 className="text-slate-700 text-4xl font-extrabold">Absensi Online dari Smartphone</h3>
            <ul className="grid gap-2">
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                <div>Clock-in & clock-out dari browser, Android & iOS</div>
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                <div>Presensi mode kantor, work from home dan hybrid</div>
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                <div>Anti Fake GPS tracker</div>
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                <div>Laporan langsung secara real-time</div>
              </li>
            </ul>
            <footer>
              <Link className="btn btn-primary" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>
          <div className="content-center">
            <div aria-label="Phone mockup" className="mockup-phone max-w-xs max-h-fit">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1 !h-fit">
                  <Image src={AttendancePresenceImg} className="pr-6 mb-auto " alt="Gajiku Attendance" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          <div className="content-center text-right pr-6">
            <div aria-label="Phone mockup" className="mockup-phone max-w-xs max-h-fit">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1 !h-fit">
                  <Image
                    src={AttendanceLocationImg}
                    className="pr-6 mb-auto "
                    alt="Gajiku Attendance Location"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 content-start">
            <h3 className="text-slate-700 text-4xl font-extrabold">Absensi Untuk Karyawan Lapangan</h3>
            <ul className="grid gap-2">
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                Mode clock-in & clock-out di mana saja
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                Lacak koordinat karyawan berdasarkan GPS
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineCheck size={20} className="text-success" />
                Lacak seberapa lama ijin istirahat
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

      <ContactUsForm
        header={
          <p>
            Hubungi kami sekarang untuk menjadwalkan <b>demo gratis</b>!
          </p>
        }
      />
    </DefaultLayout>
  );
}
