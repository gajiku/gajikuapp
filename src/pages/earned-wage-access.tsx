import { DefaultLayout } from "@/components/layouts/general.layout";
import { HiOutlineCheck } from "react-icons/hi";
import { Link } from "react-daisyui";
import PlaceholderEwa  from "@/assets/ewa/placeholder-ewa.svg";
import Image from "next/image";
import Head from "next/head";
import Iframe from "react-iframe";
import Script from "next/script";

export default function Home() {
  return <DefaultLayout>
    <Head>
      <title>Gajiku - Earned Wage Access</title>
      <meta name="description" content="Earned Wage Access (EWA) adalah sebuah fitur keuangan yang memungkinkan karyawan untuk mengakses sebagian dari gaji mereka sebelum jadwal gajian resmi." />
      <meta name="twitter:title" content="Gajiku - Earned Wage Access" />
      <meta name="description" content="Earned Wage Access (EWA) adalah sebuah fitur keuangan yang memungkinkan karyawan untuk mengakses sebagian dari gaji mereka sebelum jadwal gajian resmi." />
    </Head>
    <Script src="https://tally.so/widgets/embed.js"></Script>
    
    <section className="py-16 lg:px-32 md:px-16 px-4" id="features">
      <h1 className="text-primary text-center text-4xl mb-8 font-extrabold">GAJIKU Earned Wage Access (EWA)</h1>
      <div className="px-8 flex flex-col gap-y-4 text-lg font-[350]">
        <p>Earned Wage Access (EWA) adalah sebuah fitur keuangan yang memungkinkan karyawan untuk mengakses sebagian dari gaji mereka sebelum jadwal gajian resmi. Dalam sistem EWA, karyawan dapat meminta sebagian dari gaji mereka yang telah mereka peroleh, dan perusahaan akan mengirimkan jumlah tersebut ke rekening bank karyawan.</p>

        <p>Fitur ini bertujuan untuk membantu karyawan yang membutuhkan uang tunai lebih awal daripada jadwal gajian resmi mereka.</p>
        <p>EWA biasanya ditawarkan sebagai bagian dari paket manfaat karyawan, dan banyak perusahaan yang menggunakannya sebagai daya tarik untuk merekrut dan mempertahankan karyawan. Fitur ini juga memungkinkan karyawan untuk mengakses uang mereka tanpa harus meminjam dari pihak ketiga atau mengambil pinjaman dari bank, yang dapat memiliki biaya bunga yang tinggi.</p>

        <p>Selain itu, EWA juga dapat membantu karyawan mengatasi masalah keuangan sehari-hari seperti membayar tagihan, membeli bahan makanan, atau membayar sewa. Dengan EWA, karyawan dapat mengakses uang mereka dengan cepat dan mudah tanpa harus menunggu jadwal gajian resmi. Namun, perlu diingat bahwa EWA bukan solusi jangka panjang untuk masalah keuangan dan karyawan harus memperhatikan pengeluaran mereka dengan bijak.</p>

        <p>Itulah sedikit penjelasan tentang Early Wage Access (EWA). Hubungi Customer Service Gajiku di <Link href="mailto:support@gajikuaap.com" color="primary">support@gajikuaap.com</Link> apabila ada pertanyaan seputar EWA Gajiku.</p>
      </div>
    </section>

    <section className="pb-16 lg:px-32 md:px-16 px-4">
      <div className="grid md:grid-cols-2">
        <div>
          <h2 className="text-primary text-[2.5rem]/[1.2] mb-4 font-extrabold">Keuntungan Earned Wage Access (EWA) Gajiku:</h2>
          <div className="flex flex-col gap-y-8 mt-8">
            <div className="flex gap-x-4">
              <div className="rounded-full p-2 bg-gray-200 h-fit w-fit"><HiOutlineCheck size={24} className="font-light" /></div>
              <div className="text-base font-[350]">Membantu karyawan yang membutuhkan uang tunai lebih awal daripada jadwal gajian resmi mereka.</div>
            </div>
            <div className="flex gap-x-4">
              <div className="rounded-full p-2 bg-gray-200 h-fit w-fit"><HiOutlineCheck size={24} className="font-light" /></div>
              <div className="text-base font-[350]">Memungkinkan karyawan untuk mengakses uang mereka tanpa harus meminjam dari pihak ketiga atau mengambil pinjaman dari bank.</div>
            </div>
            <div className="flex gap-x-4">
              <div className="rounded-full p-2 bg-gray-200 h-fit w-fit"><HiOutlineCheck size={24} className="font-light" /></div>
              <div className="text-base font-[350]">Membantu karyawan mengatasi masalah keuangan sehari-hari seperti membayar tagihan, membeli bahan makanan, atau membayar sewa.</div>
            </div>
            <div className="flex gap-x-4">
              <div className="rounded-full p-2 bg-gray-200 h-fit w-fit"><HiOutlineCheck size={24} className="font-light" /></div>
              <div className="text-base font-[350]">Memungkinkan karyawan untuk mengakses uang mereka dengan cepat dan mudah tanpa harus menunggu jadwal gajian resmi.</div>
            </div>
            <div className="flex gap-x-4">
              <div className="rounded-full p-2 bg-gray-200 h-fit w-fit"><HiOutlineCheck size={24} className="font-light" /></div>
              <div className="text-base font-[350]">Mengurangi biaya bunga yang tinggi dari pinjaman, dan Tidak memerlukan jaminan.</div>
            </div>
            <div className="flex gap-x-4">
              <div className="rounded-full p-2 bg-gray-200 h-fit w-fit"><HiOutlineCheck size={24} className="font-light" /></div>
              <div className="text-base font-[350]">Fitur ini biasanya ditawarkan sebagai bagian dari paket manfaat karyawan/Employee Benefit, dan banyak perusahaan yang menggunakannya sebagai daya tarik untuk merekrut dan mempertahankan karyawan.</div>
            </div>
          </div>
          
        </div>
        <div className="content-center">
          <Image src={PlaceholderEwa} className="h-fit  px-6" alt="Gajiku employee apps"   loading="lazy" />
        </div>
      </div>
      <div className="text-base font-[350] mt-8">Jika ada pertanyaan seputar EWA Gajiku, silakan hubungi Customer Service Gajiku di <Link href="mailto:support@gajikuapp.com" color="primary">support@gajikuapp.com</Link></div>
    </section>
    <section className="pb-16 lg:px-32 md:px-16 px-4">
      <h2 className="text-2xl mb-4 text-center font-semibold">Atau langsung jadwalkan demo</h2>
      {/* Forms */}
      <Iframe 
          url="https://tally.so/embed/meE2je?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="100%"
          className="h-full"
          scrolling="no"
          frameBorder={0}
      />
    </section>
    
  </DefaultLayout>
}
     