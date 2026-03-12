import { LuAlarmClockCheck, LuAlignEndHorizontal, LuPercent } from 'react-icons/lu';
import { DefaultLayout } from '@/components/layouts/general.layout';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import { IconType } from 'react-icons';
import Link from 'next/link';
import { ReactNode } from 'react';
import classNames from 'classnames';

type CardProp = {
  className?: string;
  children?: ReactNode;
  icon?: IconType;
  iconClassName?: string;
  title?: string;
};

function Card(props: CardProp) {
  return (
    <div className={classNames('card border-4 border-gray-200 rounded-3xl', props.className)}>
      <div className="card-body gap-6 text-center">
        {props.icon && (
          <div
            className={classNames(
              'h-20 w-20 mx-auto flex justify-center items-center rounded-2xl',
              props.iconClassName,
            )}
          >
            <props.icon size={56} />
          </div>
        )}
        {props.title && <h3 className="text-2xl font-extrabold tracking-tight text-slate-700">{props.title}</h3>}
        <div className="text-slate-500">{props.children}</div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Pinjaman untuk Kebutuhan Perusahaan</title>
        <meta
          name="description"
          content="Butuh dana untuk gaji atau operasional? Ajukan Pinjaman Usaha ke Gajiku. Proses cepat dan bunga transparan."
        />
        <meta name="keywords" content="pinjaman usaha, pinjaman operasional bisnis, pinjaman untuk bayar gaji" />
      </Head>

      <Hero background={HomepageBackdrop} image={GajikuHeroImage} title="Solusi Pinjaman untuk Kebutuhan Bisnis Anda">
        <p>
          Atasi kebutuhan operasional perusahaan dengan cepat dan mudah melalui Pinjaman Usaha. Produk ini dirancang
          untuk membantu perusahaan dalam memenuhi kebutuhan finansial jangka pendek, seperti pembayaran gaji karyawan,
          bonus, atau kebutuhan operasional lainnya.
        </p>
        <footer>
          <Link href="/contact-us" className="btn btn-primary">
            Hubungi Kami
          </Link>
        </footer>
      </Hero>

      <section className="container">
        <h2 className="text-slate-700 text-3xl mb-16 font-extrabold text-center">Kenapa Memilih Pinjaman Usaha?</h2>
        <ul className="grid lg:grid-cols-3 gap-8">
          <li>
            <Card
              className="h-full"
              icon={LuAlarmClockCheck}
              iconClassName="bg-secondary text-white"
              title="Proses Cepat dan Mudah"
            >
              <p>
                Pengajuan dan pencairan dana dilakukan dengan proses yang efisien, mendukung kelancaran operasional
                perusahaan Anda.
              </p>
            </Card>
          </li>
          <li>
            <Card
              className="h-full"
              icon={LuAlignEndHorizontal}
              iconClassName="bg-accent text-white"
              title="Fleksibel untuk Berbagai Kebutuhan"
            >
              <p>Dana pinjaman dapat digunakan untuk berbagai keperluan, tidak terbatas pada pembayaran gaji saja.</p>
            </Card>
          </li>
          <li>
            <Card
              className="h-full"
              icon={LuPercent}
              iconClassName="bg-success text-white"
              title="Bunga Kompetitif dan Transparan"
            >
              <p>Nikmati suku bunga yang bersaing tanpa biaya tersembunyi.</p>
            </Card>
          </li>
        </ul>
      </section>
      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Cara Kerja Pinjaman Usaha</h2>
        <ol className="list-decimal px-6">
          <li>
            <dl>
              <dt className="font-bold">Pengajuan</dt>
              <dd>Hubungi tim kami untuk pengajuan pinjaman usaha dan pengisian data pengajuan.</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="font-bold">Verifikasi</dt>
              <dd>Tim kami akan melakukan verifikasi dokumen dan informasi yang diberikan.</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="font-bold">Persetujuan</dt>
              <dd>Setelah disetujui, dana akan segera dicairkan ke rekening perusahaan.</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="font-bold">Penggunaan Dana</dt>
              <dd>Gunakan dana sesuai kebutuhan operasional perusahaan Anda.</dd>
            </dl>
          </li>
        </ol>
      </section>
      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Siapa yang Cocok Pinjaman Usaha?</h2>
        <ol className="list-decimal px-6">
          <li>
            <dl>
              <dt className="font-bold">Perusahaan dengan Kebutuhan Cash Flow Mendadak</dt>
              <dd>Untuk memenuhi kebutuhan mendesak seperti pembayaran gaji atau bonus.</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="font-bold">Startup dan UKM</dt>
              <dd>Mendukung pertumbuhan bisnis dengan menyediakan dana tambahan saat diperlukan.</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt className="font-bold">Perusahaan dengan Proyek Khusus</dt>
              <dd>Membiayai proyek atau inisiatif khusus tanpa mengganggu cash flow utama.</dd>
            </dl>
          </li>
        </ol>
      </section>
      <section className="container text-center">
        <p className="max-w-md mx-auto mb-6">
          Ingin tahu lebih lanjut atau siap mengajukan Pinjaman Usaha? Tim kami siap membantu Anda.
        </p>
        <Link href="/contact-us" className="btn btn-primary">
          Hubungi Kami
        </Link>
      </section>
    </DefaultLayout>
  );
}
