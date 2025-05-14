import { DefaultLayout } from '@/components/layouts/general.layout';
import { Button } from 'react-daisyui';
import PlaceholderEwa from '@/assets/ewa/placeholder-ewa.svg';
import Image from 'next/image';
import Head from 'next/head';
import Iframe from 'react-iframe';
import Script from 'next/script';
import {
  HiArrowRight,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineCheck,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlinePlusCircle,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import HomepageBackdrop from '@/assets/homepage/backdrop.png';
import GajikuHeroImage from '@/assets/gajiku-hero-image.png';
import { LuAlarmCheck, LuAlignEndHorizontal, LuPercent } from 'react-icons/lu';
import { ReactNode } from 'react';
import classNames from 'classnames';
import { IconType } from 'react-icons';
import Link from 'next/link';

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
        {props.title && <h3 className="text-2xl font-extrabold tracking-tight">{props.title}</h3>}
        <div className="text-slate-600">{props.children}</div>
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
          content="Butuh dana untuk gaji atau operasional? Ajukan Salary Loan ke Gajiku. Proses cepat dan bunga transparan."
        />
        <meta
          name="keywords"
          content="salary loan perusahaan, pinjaman operasional bisnis, pinjaman untuk bayar gaji"
        />
        <meta name="twitter:title" content="Gajiku - Pinjaman Untuk Kebutuhan Perusahaan" />
      </Head>

      <div className="flex flex-col gap-16 mb-16">
        <section>
          <div
            id="hero"
            className="container py-6"
            style={{
              backgroundImage: 'url(' + HomepageBackdrop.src + ')',
              backgroundPosition: '50%',
              objectFit: 'cover',
              backgroundSize: 'cover',
              zIndex: '-1',
            }}
          >
            <div className="grid lg:grid-cols-2">
              <section className="flex flex-col gap-8">
                <h1 className="text-primary text-5xl leading-tight font-bold">
                  Solusi Pinjaman untuk Kebutuhan Bisnis Anda
                </h1>
                <p className="leading-6">
                  Atasi kebutuhan operasional perusahaan dengan cepat dan mudah melalui Salary Loan. Produk ini
                  dirancang untuk membantu perusahaan dalam memenuhi kebutuhan finansial jangka pendek, seperti
                  pembayaran gaji karyawan, bonus, atau kebutuhan operasional lainnya.
                </p>
                <footer>
                  <Link href="/contact-us" className="btn btn-primary">
                    Hubungi Kami
                  </Link>
                </footer>
              </section>
              <div className="content-center lg:block hidden">
                <Image src={GajikuHeroImage} alt="Gajikuapp background" loading="lazy" />
              </div>
            </div>
          </div>
          <div
            id="separator"
            className="w-full overflow-hidden relative pb-36"
            style={{
              background: 'linear-gradient(0deg, rgb(63, 195, 197) 0%, white 100%)',
            }}
          >
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1695 876" xmlns="http://www.w3.org/2000/svg">
                <g fill="#fff" fillRule="evenodd">
                  <path opacity=".61" d="M1695 0l-555.512 876H1695z"></path>
                  <path opacity=".61" d="M0 872.81V703l1695 76L0 876z"></path>
                  <path d="M0 872.729L1695 779v97H0z"></path>
                </g>
              </svg>
            </div>
          </div>
        </section>

        <section className="container">
          <h2 className="text-slate-600 text-5xl mb-16 font-extrabold text-center">Kenapa Memilih Salary Loan?</h2>
          <ul className="grid lg:grid-cols-3 gap-8">
            <li>
              <Card
                className="h-full"
                icon={LuAlarmCheck}
                iconClassName="bg-[#c06c84] text-white"
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
                iconClassName="bg-[#f8b195] text-white"
                title="Fleksibel untuk Berbagai Kebutuhan"
              >
                <p>Dana pinjaman dapat digunakan untuk berbagai keperluan, tidak terbatas pada pembayaran gaji saja.</p>
              </Card>
            </li>
            <li>
              <Card
                className="h-full"
                icon={LuPercent}
                iconClassName="bg-[#17a2b8] text-white"
                title="Bunga Kompetitif dan Transparan"
              >
                <p>Nikmati suku bunga yang bersaing tanpa biaya tersembunyi.</p>
              </Card>
            </li>
          </ul>
        </section>
        <section className="container">
          <h2 className="text-primary text-5xl mb-16 font-extrabold">Cara Kerja Salary Loan</h2>
          <ol className="list-decimal px-6">
            <li>
              <dl>
                <dt className="font-bold">Pengajuan</dt>
                <dd>Hubungi tim kami untuk pengajuan salary loan dan pengisian data pengajuan.</dd>
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
          <h2 className="text-primary text-5xl mb-16 font-extrabold">Siapa yang Cocok Salary Loan?</h2>
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
            Ingin tahu lebih lanjut atau siap mengajukan Salary Loan? Tim kami siap membantu Anda.
          </p>
          <Link href="/contact-us" className="btn btn-primary">
            Hubungi Kami
          </Link>
        </section>
      </div>
    </DefaultLayout>
  );
}
