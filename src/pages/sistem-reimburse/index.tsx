import { DefaultLayout } from '@/components/layouts/general.layout';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import Image from 'next/image';
import Link from 'next/link';
import Picture1 from '@/assets/reimbursement/Reimbursement.webp';
import Picture2 from '@/assets/reimbursement/One_Click.webp';
import Picture3 from '@/assets/reimbursement/Approval_Flexible.webp';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Sistem Reimburse</title>
        <meta
          name="description"
          content="Semua proses reimbursement, mulai dari pencatatan, persetujuan, hingga pencairan bisa dilakukan secara online lewat Gajiku."
        />
      </Head>

      <div className="flex flex-col gap-12">
        <Hero background={HomepageBackdrop} image={GajikuHeroImage} title="Sistem Reimburse">
          <p>
            Semua proses reimbursement, mulai dari pencatatan, persetujuan, hingga pencairan bisa dilakukan secara
            online lewat Gajiku.
          </p>
          <footer>
            <Link className="btn btn-primary mb-8" href="/contact-us">
              Hubungi Kami
            </Link>
          </footer>
        </Hero>

        <section className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="grid gap-3">
              <h2 className="text-slate-700 text-4xl font-extrabold">Pencatatan Reimbursement</h2>
              <p>
                Pengajuan dan riwayat reimbursement tercatat otomatis secara online. Gajiku juga menyediakan laporan
                yang bisa diatur berdasarkan kategori penggunaan.
              </p>
              <footer>
                <Link className="btn btn-primary" href="/contact-us">
                  Hubungi Kami
                </Link>
              </footer>
            </div>
            <div className="content-center">
              <Image alt="Pencatatan Reimbursement" src={Picture1} loading="lazy" />
            </div>
          </div>
        </section>
        <section className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="content-center">
              <Image alt="Satu Klik untuk Pencairan" src={Picture2} loading="lazy" />
            </div>
            <div className="grid gap-3">
              <h3 className="text-slate-700 text-4xl font-extrabold">Satu Klik untuk Pencairan</h3>
              <p>
                Tanpa repot transfer manual lewat bank atau uang tunai, transfer dana reimbursement bisa dilakukan hanya
                dengan satu klik.
              </p>
              <footer>
                <Link className="btn btn-primary" href="/contact-us">
                  Hubungi Kami
                </Link>
              </footer>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="grid gap-3">
              <h3 className="text-slate-700 text-4xl font-extrabold">Approval Fleksibel</h3>
              <p>
                Approval untuk pengajuan reimbursement sangat fleksibel dengan konsep multi level approval. Semua bisa
                di atur.
              </p>
              <footer>
                <Link className="btn btn-primary" href="/contact-us">
                  Hubungi Kami
                </Link>
              </footer>
            </div>
            <div className="content-center">
              <Image src={Picture3} className="h-fit px-6" alt="Approval Fleksibel" loading="lazy" />
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
