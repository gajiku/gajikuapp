import { WindowMockup } from 'react-daisyui';
import { ContactUsForm } from '@/components/forms/contact-us';
import { DefaultLayout } from '@/components/layouts/general.layout';
import FpAddMachineImage from '@/assets/product/fingerprint/fingerprint-add-machine.jpg';
import FpDashboardImage from '@/assets/product/fingerprint/fingerprint-dashboard.jpg';
import FpImportDataImage from '@/assets/product/fingerprint/fingerprint-import-data.jpg';
import FpManageEmployeeImage from '@/assets/product/fingerprint/fingerprint-manage-employee.jpg';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Integrasi Mesin Fingerprint - Gajiku</title>
        <meta
          name="description"
          content="Kelola berbagai mesin absensi fisik di kantor Anda melalui satu dashboard digital. Sinkronisasi data menjadi otomatis, akurat, dan real-time."
        />
      </Head>

      <Hero background={HomepageBackdrop} image={GajikuHeroImage} reverse title="Integrasi Mesin Fingerprint">
        <p>Kelola berbagai mesin absensi fisik di kantor Anda melalui satu dashboard digital</p>
        <footer>
          <Link className="btn btn-primary mb-8" href="/contact-us">
            Hubungi Kami
          </Link>
        </footer>
      </Hero>

      <section className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Kemudahan Dalam Pengelolaan Mesin</h2>
            <p>Kelola mesin fingerprint Anda melalui dashboard khusus dengan user interface yang ramah</p>
            <footer>
              <Link className="btn btn-primary mb-8" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>
          <div className="content-center">
            <WindowMockup className="w-full" border frameColor="base-200">
              <Image src={FpDashboardImage} className="h-fit w-full p-0" alt="Fingerprint Dashboard" loading="lazy" />
            </WindowMockup>
          </div>

          <div className="content-center">
            <WindowMockup className="w-full" border frameColor="base-200">
              <Image
                src={FpAddMachineImage}
                className="h-fit w-full p-0"
                alt="Fingerprint Add Machine"
                loading="lazy"
              />
            </WindowMockup>
          </div>
          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Pendaftaran Mesin Tanpa Batas</h2>
            <p>
              Hubungkan berbagai model mesin (seperti Solution X100C) dengan mudah hanya dengan memasukkan alamat IP dan
              Serial Number
            </p>
            <footer>
              <Link className="btn btn-primary mb-8" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>

          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Manajemen Pengguna Mesin</h2>
            <p>
              Kelola data karyawan yang terdaftar di setiap mesin langsung melalui integrasi sistem, tanpa perlu
              melakukan pengaturan manual di masing-masing perangkat
            </p>
            <footer>
              <Link className="btn btn-primary mb-8" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>
          <div className="content-center">
            <WindowMockup className="w-full" border frameColor="base-200">
              <Image
                src={FpManageEmployeeImage}
                className="h-fit w-full p-0"
                alt="Fingerprint Dashboard"
                loading="lazy"
              />
            </WindowMockup>
          </div>

          <div className="content-center">
            <WindowMockup className="w-full" border frameColor="base-200">
              <Image
                src={FpImportDataImage}
                className="h-fit w-full p-0"
                alt="Fingerprint Add Machine"
                loading="lazy"
              />
            </WindowMockup>
          </div>
          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Impor Data Log Kehadiran</h2>
            <p>
              Fleksibilitas untuk mengimpor data kehadiran secara manual melalui file jika terjadi kendala koneksi
              internet pada mesin
            </p>
            <footer>
              <Link className="btn btn-primary mb-8" href="/contact-us">
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
