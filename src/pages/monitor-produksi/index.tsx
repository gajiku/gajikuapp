import { Accordion, Card, WindowMockup } from 'react-daisyui';
import DashboardImg from '@/assets/product/production-tracker-dashboard.png';
import { DefaultLayout } from '@/components/layouts/general.layout';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Image from 'next/image';
import Link from 'next/link';
import ReportImg from '@/assets/product/production-tracker-report.png';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Monitor Produksi & Upah Karyawan</title>
        <meta
          name="description"
          content="Fitur Monitor Produksi Gajiku membantu perusahaan manufaktur mencatat hasil produksi dan menghitung upah berdasarkan output, mendukung efisiensi dan transparansi."
        />
        <meta
          name="keywords"
          content="monitor produksi, production tracker, upah berdasarkan hasil, sistem produksi, manajemen produksi"
        />
      </Head>

      <Hero background={HomepageBackdrop} image={GajikuHeroImage} title="Monitor Produksi">
        <p>
          Sistem pencatatan hasil produksi. Perhitungan upah berdasarkan hasil produksi dapat dilakukan dengan Monitor
          Produksi di Gajiku
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
            <h2 className="text-slate-700 text-4xl font-extrabold">Manajemen Proyek</h2>
            <p>
              Monitor Produksi bisa diatur per proyek, lengkap dengan target dan siapa saja yang terlibat sehingga bisa
              dijadikan bagian dari KPI tim.
            </p>
            <footer>
              <Link className="btn btn-primary mb-8" href="/contact-us">
                Mulai Sekarang
              </Link>
            </footer>
          </div>
          <div className="content-center">
            <WindowMockup className="w-full" border frameColor="base-200">
              <Image src={DashboardImg} className="h-fit w-full p-0" alt="Gajiku Production Tracker" loading="lazy" />
            </WindowMockup>
          </div>

          <div className="content-center">
            <WindowMockup className="w-full" border frameColor="base-200">
              <Image src={ReportImg} className="h-fit w-full p-0" alt="Gajiku Production Tracker" loading="lazy" />
            </WindowMockup>
          </div>
          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Hitung Upah Berdasarkan Hasil Produksi</h2>
            <p>
              Hasil produksi bisa diatur apakah berdasarkan pieces atau bahkan dimensi yang akan menjadi dasar
              perhitungan upah karyawan.
            </p>
            <footer>
              <Link className="btn btn-primary mb-8" href="/contact-us">
                Mulai Sekarang
              </Link>
            </footer>
          </div>

          <div className="grid gap-4 content-start">
            <h2 className="text-slate-700 text-4xl font-extrabold">Multi Role</h2>
            <p>
              Karyawan dapat diatur sebagai worker, checker, operator ataupun manager dimana masing-masing memiliki
              tugasnya.
            </p>
            <footer>
              <Link className="btn btn-primary mb-8" href="/contact-us">
                Mulai Sekarang
              </Link>
            </footer>
          </div>
          <div className="content-center">
            <Card>
              <Card.Body className="gap-0 px-4 py-5">
                <Accordion defaultChecked icon="arrow" className="rounded-none border-b-[1px]">
                  <Accordion.Title className="font-bold pl-2 py-2">Worker</Accordion.Title>
                  <Accordion.Content className="text-sm px-2">
                    <p>Worker dapat memasukan/meng-input data hasil produksi melalui aplikasi gajiku</p>
                  </Accordion.Content>
                </Accordion>
                <Accordion icon="arrow" className="rounded-none border-b-[1px]">
                  <Accordion.Title className="font-bold pl-2 py-2">Operator</Accordion.Title>
                  <Accordion.Content className="text-sm px-2">
                    <p>
                      Operator dapat menginput hasil produksi tim dibawahnya setelah worker melaporkan hasil produksi
                    </p>
                  </Accordion.Content>
                </Accordion>
                <Accordion icon="arrow" className="rounded-none border-b-[1px]">
                  <Accordion.Title className="font-bold pl-2 py-2">Checker</Accordion.Title>
                  <Accordion.Content className="text-sm px-2">
                    <p>
                      Checker adalah approver layer pertama sebelum di teruskan kepada manager. Jika ditolak, proses
                      akan dikembalikan ke worker/operator untuk diperbaiki
                    </p>
                  </Accordion.Content>
                </Accordion>
                <Accordion icon="arrow" className="rounded-none">
                  <Accordion.Title className="font-bold pl-2 py-2">Manager</Accordion.Title>
                  <Accordion.Content className="text-sm px-2">
                    <p>
                      Approver terakhir sebelum nantinya akan diteruskan ke HR (dashboard) agar bisa dilakukan
                      penghitungan upah
                    </p>
                  </Accordion.Content>
                </Accordion>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
