import { HiOutlineCalendar, HiOutlineChartBar, HiOutlineClock, HiOutlineUserGroup } from 'react-icons/hi';
import { DefaultLayout } from '@/components/layouts/general.layout';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Link from 'next/link';
import { ReactNode } from 'react';
import classNames from 'classnames';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Absensi Karyawan Online</title>
        <meta
          name="description"
          content="Sistem absensi online Gajiku memudahkan pencatatan kehadiran karyawan secara real-time, mendukung cuti dan kerja remote, serta integrasi dengan penggajian."
        />
        <meta
          name="keywords"
          content="absensi online, aplikasi absensi karyawan, manajemen kehadiran, absensi digital, HRIS"
        />
      </Head>

      <Hero background={HomepageBackdrop} image={GajikuHeroImage} title="Aplikasi Absensi Karyawan Online">
        <p>
          Absensi karyawan menjadi simpel dan fleksibel. Semua data termasuk masuk, absen, cuti dapat di akses secara
          real-time
        </p>
        <footer>
          <Link className="btn btn-primary mb-8" href="/contact-us">
            Mulai Sekarang
          </Link>
        </footer>
      </Hero>

      <section className="container">
        <h2 className="text-slate-700 text-4xl mb-12 font-extrabold">Fitur Absensi Karyawan by Gajiku</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              icon: HiOutlineCalendar,
              color: 'success',
              title: 'Shift & Jadwal',
              description:
                'Penjadwalan (shift) lengkap dari normal shift (9 to 5), flexible hour, multiple shift, open shift dan lainnya',
              href: '/absensi-karyawan/shift',
            },
            {
              icon: HiOutlineUserGroup,
              color: 'secondary',
              title: 'Manajemen Absensi',
              description: 'Absensi karyawan yang fleksibel dengan GPS menggunakan Android & iOS',
              href: '/absensi-karyawan/manajemen-absensi',
            },
            {
              icon: HiOutlineClock,
              color: 'accent',
              title: 'Pengajuan Cuti, Lembur, dll',
              description:
                'Kelola kebijakan, kuota dan reset cuti tahunan serta alur persetujuan sesuai kebutuhan perusahaan',
              href: '/absensi-karyawan/pengajuan-cuti-lembur',
            },
            {
              icon: HiOutlineChartBar,
              color: 'info',
              title: 'Dashboard & Laporan',
              description: 'Monitor absensi dan penjadwalan melalui dashboard dan laporan.',
              href: '/absensi-karyawan/dashboard',
            },
          ].map((dt, n: number): ReactNode => {
            return (
              <div key={`attendance.feature.${n}`} className="card card-bordered">
                <div className="card-body text-center">
                  <dt.icon size={48} className={classNames('mx-auto mb-4', `text-${dt.color}`)} />
                  <h3 className="text-2xl text-slate-700">{dt.title}</h3>
                  <p className="text-slate-500 mb-8">{dt.description}</p>
                  <footer className="items-end">
                    <Link className="btn btn-primary" href={dt.href}>
                      Pelajari Lebih Lanjut
                    </Link>
                  </footer>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </DefaultLayout>
  );
}
