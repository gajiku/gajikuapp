import { PhoneMockup, WindowMockup } from 'react-daisyui';
import { DefaultLayout } from '@/components/layouts/general.layout';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Image from 'next/image';
import Link from 'next/link';
import MasterShiftImg from '@/assets/product/shift-master.png';
import OpenShiftImg from '@/assets/product/shift-open.png';
import WfhShiftImg from '@/assets/product/shift-wfh.png';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Sistem Penjadwalan dan Shift Karyawan - Gajiku</title>
        <meta
          name="description"
          content="Kelola penjadwalan atau shift karyawan dengan mudah: jadwal 9to5, open shift, hybrid, work from home"
        />
      </Head>

      <Hero background={HomepageBackdrop} image={GajikuHeroImage} reverse title="Sistem Penjadwalan dan Shift Karyawan">
        <p>Kelola penjadwalan atau shift karyawan dengan mudah</p>
        <footer>
          <Link className="btn btn-primary mb-8" href="/contact-us">
            Hubungi Kami
          </Link>
        </footer>
      </Hero>

      <section className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Kelola jadwal shift secara otomatis</h2>
            <p>Jadwal kerja yang sudah pasti seperti Senin-Jumat (9to5) dapat dibuat secara otomatis dengan Gajiku</p>
            <footer>
              <Link className="btn btn-primary mb-8" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>
          <div className="content-center">
            <WindowMockup className="w-full" border frameColor="base-200">
              <Image src={MasterShiftImg} className="h-fit w-full p-0" alt="Gajiku MAster Shift" loading="lazy" />
            </WindowMockup>
          </div>

          <div className="content-center">
            <WindowMockup className="w-full" border frameColor="base-200">
              <Image src={OpenShiftImg} className="h-fit w-full p-0" alt="Gajiku Open Shift" loading="lazy" />
            </WindowMockup>
          </div>
          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Kelola jadwal karyawan lapangan dan produksi</h2>
            <p>Untuk jadwal yang lebih fleksibel, gajiku memiliki metode Open Shift</p>
            <footer>
              <Link className="btn btn-primary mb-8" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>

          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Work From Home & Hybrid</h2>
            <p>Work from home, hybrid ataupun harus work from office semua bisa diatur di dashboard gajiku</p>
            <footer>
              <Link className="btn btn-primary mb-8" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>
          <div className="content-center">
            <PhoneMockup className="max-w-xs max-h-fit">
              <Image src={WfhShiftImg} className="w-fit pr-6 mb-auto" alt="Gajiku Shift WFH" loading="lazy" />
            </PhoneMockup>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
