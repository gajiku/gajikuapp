import { DefaultLayout } from '@/components/layouts/general.layout';
import Head from 'next/head';
import { HiOutlineCheck } from 'react-icons/hi';
import Iframe from 'react-iframe';
import Image from 'next/image';
import { Link } from 'react-daisyui';
import PlaceholderEwa from '@/assets/ewa/placeholder-ewa.svg';
import Script from 'next/script';

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Akses Gaji di Depan (EWA)</title>
        <meta
          name="description"
          content="Fitur EWA Gajiku memungkinkan karyawan mengakses sebagian gaji sebelum tanggal gajian, membantu mengatasi kebutuhan finansial mendesak tanpa bunga atau jaminan."
        />
        <meta
          name="keywords"
          content="Akses Gaji di Depan, Earned Wage Access, EWA Indonesia, manfaat karyawan, solusi keuangan karyawan"
        />
      </Head>
      <Script src="https://tally.so/widgets/embed.js"></Script>

      <section className="container py-8">
        <h1 className="text-primary text-center text-4xl mb-8 font-extrabold">GAJIKU Earned Wage Access (EWA)</h1>
        <div className="grid gap-4">
          <p>
            Earned Wage Access (EWA) adalah sebuah fitur keuangan yang memungkinkan karyawan untuk mengakses sebagian
            dari gaji mereka sebelum jadwal gajian resmi. Dalam sistem EWA, karyawan dapat meminta sebagian dari gaji
            mereka yang telah mereka peroleh, dan perusahaan akan mengirimkan jumlah tersebut ke rekening bank karyawan.
          </p>
          <p>
            Fitur ini bertujuan untuk membantu karyawan yang membutuhkan uang tunai lebih awal daripada jadwal gajian
            resmi mereka.
          </p>
          <p>
            EWA biasanya ditawarkan sebagai bagian dari paket manfaat karyawan, dan banyak perusahaan yang
            menggunakannya sebagai daya tarik untuk merekrut dan mempertahankan karyawan. Fitur ini juga memungkinkan
            karyawan untuk mengakses uang mereka tanpa harus meminjam dari pihak ketiga atau mengambil pinjaman dari
            bank, yang dapat memiliki biaya bunga yang tinggi.
          </p>
          <p>
            Selain itu, EWA juga dapat membantu karyawan mengatasi masalah keuangan sehari-hari seperti membayar
            tagihan, membeli bahan makanan, atau membayar sewa. Dengan EWA, karyawan dapat mengakses uang mereka dengan
            cepat dan mudah tanpa harus menunggu jadwal gajian resmi. Namun, perlu diingat bahwa EWA bukan solusi jangka
            panjang untuk masalah keuangan dan karyawan harus memperhatikan pengeluaran mereka dengan bijak.
          </p>
          <p>
            Itulah sedikit penjelasan tentang Early Wage Access (EWA). Hubungi Customer Service Gajiku di{' '}
            <Link href="mailto:support@gajikuaap.com" color="primary">
              support@gajikuaap.com
            </Link>{' '}
            apabila ada pertanyaan seputar EWA Gajiku.
          </p>
        </div>
      </section>
      <section className="container">
        <h2 className="text-primary text-4xl mb-12 font-extrabold">Keuntungan Earned Wage Access (EWA) Gajiku:</h2>
        <div className="grid md:grid-cols-2 mb-12">
          <ul className="grid gap-8">
            <li className="flex gap-4">
              <span className="rounded-full p-2 bg-gray-200 h-fit w-fit">
                <HiOutlineCheck size={24} />
              </span>
              Membantu karyawan yang membutuhkan uang tunai lebih awal daripada jadwal gajian resmi mereka.
            </li>
            <li className="flex gap-4">
              <span className="rounded-full p-2 bg-gray-200 h-fit w-fit">
                <HiOutlineCheck size={24} />
              </span>
              Memungkinkan karyawan untuk mengakses uang mereka tanpa harus meminjam dari pihak ketiga atau mengambil
              pinjaman dari bank.
            </li>
            <li className="flex gap-4">
              <span className="rounded-full p-2 bg-gray-200 h-fit w-fit">
                <HiOutlineCheck size={24} />
              </span>
              Membantu karyawan mengatasi masalah keuangan sehari-hari seperti membayar tagihan, membeli bahan makanan,
              atau membayar sewa.
            </li>
            <li className="flex gap-4">
              <span className="rounded-full p-2 bg-gray-200 h-fit w-fit">
                <HiOutlineCheck size={24} />
              </span>
              Memungkinkan karyawan untuk mengakses uang mereka dengan cepat dan mudah tanpa harus menunggu jadwal
              gajian resmi.
            </li>
            <li className="flex gap-4">
              <span className="rounded-full p-2 bg-gray-200 h-fit w-fit">
                <HiOutlineCheck size={24} />
              </span>
              Mengurangi biaya bunga yang tinggi dari pinjaman, dan Tidak memerlukan jaminan.
            </li>
            <li className="flex gap-x-4">
              <span className="rounded-full p-2 bg-gray-200 h-fit w-fit">
                <HiOutlineCheck size={24} />
              </span>
              Fitur ini biasanya ditawarkan sebagai bagian dari paket manfaat karyawan/Employee Benefit, dan banyak
              perusahaan yang menggunakannya sebagai daya tarik untuk merekrut dan mempertahankan karyawan.
            </li>
          </ul>
          <div className="content-start">
            <Image alt="Keuntungan EWA" src={PlaceholderEwa} loading="lazy" />
          </div>
        </div>
      </section>
      <section className="container">
        <p className="text-center mb-6">
          Jika ada pertanyaan seputar EWA Gajiku, silakan hubungi Customer Service Gajiku di{' '}
          <Link href="mailto:support@gajikuapp.com" color="primary">
            support@gajikuapp.com
          </Link>
        </p>
        <h2 className="text-slate-700 text-3xl mb-6 text-center font-extrabold">Atau langsung jadwalkan demo</h2>
        <div className="max-w-xl mx-auto">
          <Iframe
            url="https://tally.so/embed/meE2je?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="100%"
            className="h-full"
            scrolling="no"
            frameBorder={0}
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
