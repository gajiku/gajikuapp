import { PhoneMockup, WindowMockup } from 'react-daisyui';
import { DefaultLayout } from '@/components/layouts/general.layout';
import Footer from './_components/Footer';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Image from 'next/image';
import Link from 'next/link';
import PlaceholderEwa from '@/assets/ewa/placeholder-ewa.svg';
import RequestApprovalImg from '@/assets/product/request-approval.png';
import RequestLeaveImg from '@/assets/product/request-leave.png';
import RequestOvertimeImg from '@/assets/product/request-overtime.png';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Aplikasi Cuti, Lembur dan Pengajuan Lainnya - Gajiku</title>
        <meta
          name="description"
          content="Dengan gajiku karyawan dapat dengan mudah mengajukan cuti, lembur, hingga work from home melalui aplikasi android/ios gajiku"
        />
      </Head>

      <Hero background={HomepageBackdrop} image={GajikuHeroImage} title="Aplikasi Cuti, Lembur dan Pengajuan Lainnya">
        <p>
          Dengan gajiku karyawan dapat dengan mudah mengajukan cuti, lembur, hingga work from home melalui aplikasi
          Android/iOS Gajiku.
        </p>
        <footer>
          <Link className="btn btn-primary mb-8" href="/contact-us">
            Mulai Sekarang
          </Link>
        </footer>
      </Hero>

      <section className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Pengajuan Cuti</h2>
            <p>
              Berbagai jenis cuti bisa dibuat dengan pengaturan yang fleksibel dari pro-rata, cuti yang bersifat sekali
              ataupun berulang.
            </p>
            <p>Kamu juga bisa mengatur kuota hingga memberikan cuti pengganti dengan mudah.</p>
            <footer>
              <Link className="btn btn-primary" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>
          <div className="content-center">
            <PhoneMockup className="max-w-64 aspect-[9/16]">
              <Image
                src={RequestLeaveImg}
                className="max-w-64 aspect-[9/16] mb-auto mr-auto pr-6 pb-4"
                alt="Gajiku MAster Shift"
                loading="lazy"
              />
            </PhoneMockup>
          </div>

          <div className="content-center text-right pr-6">
            <PhoneMockup className="max-w-64 aspect-[9/16] ">
              <Image
                src={RequestOvertimeImg}
                className="max-w-64 aspect-[9/16] mb-auto mr-auto pr-6 pb-4"
                alt="Gajiku MAster Shift"
                loading="lazy"
              />
            </PhoneMockup>
          </div>
          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Pengajuan Lembur</h2>
            <p>
              Pengajuan lembur baik di hari kerja ataupun di luar hari kerja bisa dengan mudah di buat hanya melalui
              aplikasi karyawan Gajiku
            </p>
            <footer>
              <Link className="btn btn-primary" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>

          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Pengajuan Work From Home</h2>
            <p>
              Walaupun penjadwalan kerjamu work from office, benefit work from home masih bisa di buat dengan pengajuan
            </p>
            <footer>
              <Link className="btn btn-primary" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>
          <div className="content-center">
            <Image src={PlaceholderEwa} className="h-fit  px-6" alt="Gajiku employee apps" loading="lazy" />
          </div>

          <div className="content-center">
            <WindowMockup className="w-full" border frameColor="base-200">
              <Image src={RequestApprovalImg} className="h-fit w-full p-0" alt="Gajiku MAster Shift" loading="lazy" />
            </WindowMockup>
          </div>
          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Mekanisme persetujuan yang fleksibel</h2>
            <p>
              Pengajuan cuti, lembur dan lainnya dapat di atur dalam berbagai level persetujuan hingga jumlah orang yang
              menyetujui.
            </p>
            <footer>
              <Link className="btn btn-primary" href="/contact-us">
                Hubungi Kami
              </Link>
            </footer>
          </div>
        </div>
      </section>

      <Footer />
    </DefaultLayout>
  );
}
