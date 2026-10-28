import { DefaultLayout } from '@/components/layouts/general.layout';
import Head from 'next/head';
import Hero from '@/components/sections/hero';
import Link from 'next/link';
import PartnershipBackdrop from '@/assets/partnership/backdrop.png';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Program Kemitraan & Kolaborasi Strategis</title>
        <meta
          name="description"
          content="Bergabunglah dalam program kemitraan Gajiku. Solusi HR & Payroll untuk perusahaan, serta peluang sinergi ekosistem digital yang terintegrasi dan aman."
        />
        <meta
          name="keywords"
          content="kemitraan bisnis gajiku, partnership hr digital, sinergi ekosistem corporate indonesia, solusi payroll dan financial wellness"
        />
      </Head>

      <Hero
        image={PartnershipBackdrop}
        title="Tumbuh dan Bertransformasi Bersama Ekosistem Gajiku"
        className="rounded-full overflow-hidden w-5/6 mx-auto"
      >
        <p>
          Kami membuka ruang kolaborasi bagi perusahaan yang ingin mengoptimalkan pengelolaan HR & payroll, serta mitra
          strategis yang ingin berpartisipasi dalam memperkuat ekosistem financial wellness di Indonesia.
        </p>
      </Hero>

      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Satu Platform, Beragam Peluang Kolaborasi</h2>
        <p>
          Gajiku terus berkembang sebagai solusi digital terintegrasi untuk retensi karyawan, manajemen gaji, hingga
          efisiensi operasional perusahaan. Untuk melangkah lebih jauh, kami mengundang Anda untuk bergabung—baik
          sebagai Mitra Solusi Bisnis yang memanfaatkan platform kami, maupun sebagai Mitra Strategis Ekosistem yang
          tumbuh bersama jaringan teknologi kami.
        </p>
      </section>
      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Dua Jalur Kemitraan</h2>
        <ol className="list-decimal px-6">
          <li className="mb-4">
            <dl className="mb-4">
              <dt className="font-bold text-primary">Mitra Perusahaan (Corporate Client Partner)</dt>
              <dd>
                Solusi lengkap untuk meningkatkan kinerja, retensi karyawan, dan efisiensi manajemen keuangan perusahaan
                Anda.
                <ol className="list-[lower-latin] px-8">
                  <li>
                    <span className="font-bold">Earned Wage Access (EWA):</span> Akses gaji fleksibel bagi karyawan
                    tanpa mengganggu cash flow perusahaan.
                  </li>
                  <li>
                    <span className="font-bold">Sistem HRIS & Payroll Otomatis:</span> Kelola absensi, penggajian,
                    hingga klaim reimburse dalam satu dashboard.
                  </li>
                  <li>
                    <span className="font-bold">Tax Consultant & Compliance:</span> Penanganan PPh 21, PPN, dan SPT
                    Badan secara akurat oleh praktisi profesional.
                  </li>
                  {/* <li>
                    <span className="font-bold">Pinjaman Karyawan & Usaha:</span> Solusi pembiayaan terstruktur yang
                    terintegrasi langsung dengan sistem penggajian.
                  </li> */}
                </ol>
              </dd>
            </dl>
            <Link href="/contact-us" className="btn btn-primary">
              Gunakan Layanan Gajiku
            </Link>
          </li>
          <li>
            <dl className="mb-4">
              <dt className="font-bold text-primary">Mitra Strategis Ekosistem (Ecosystem & Synergy Partner)</dt>
              <dd>
                Berpartisipasi aktif dalam mendukung penguatan dan perluasan jangkauan infrastruktur digital Gajiku.
                <ol className="list-[lower-latin] px-8">
                  <li>
                    <span className="font-bold">Sinergi Infrastruktur Digital:</span> Menjadi bagian dari jaringan
                    platform yang mengintegrasikan sistem HR, penggajian, dan manajemen kesejahteraan tenaga kerja di
                    Indonesia.
                  </li>
                  <li>
                    <span className="font-bold">Penguatan Manajemen Risiko Berbasis Data:</span> Akselerasi rantai pasok
                    dan operasional yang ditopang oleh sistem verifikasi serta pemotongan otomatis yang presisi.
                  </li>
                  <li>
                    <span className="font-bold">Dampak Sosial Berkelanjutan:</span> Mendukung tingkat produktivitas dan
                    stabilitas ekonomi puluhan ribu tenaga kerja di berbagai sektor industri.
                  </li>
                  <li>
                    <span className="font-bold">Pelajari Detail Kolaborasi:</span> Diskusi mendalam mengenai alur kerja
                    sama, kerangka sinergi, dan skema partisipasi dapat dipelajari secara langsung bersama tim Corporate
                    Strategy kami.
                  </li>
                </ol>
              </dd>
            </dl>
            <Link href="/contact-us" className="btn btn-primary">
              Hubungi Tim Strategis Kami
            </Link>
          </li>
        </ol>
      </section>
      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Metrik & Jangkauan Ekosistem</h2>
        <p>Membangun kepercayaan calon mitra melalui fakta dan pencapaian Gajiku.</p>
        <ol className="list-decimal px-6">
          <li>
            <span className="font-bold">100+ Perusahaan Mitra:</span> Dipercaya oleh berbagai industri skala menengah
            hingga korporasi besar di Indonesia.
          </li>
          <li>
            <span className="font-bold">Ribuan Karyawan Terhubung:</span> Akses layanan harian yang aman dan
            terintegrasi untuk tenaga kerja Indonesia.
          </li>
          <li>
            <span className="font-bold">Infrastruktur Teruji:</span> Pengolahan data payroll dan transaksi yang aman,
            transparan, serta mengutamakan kerahasiaan data.
          </li>
        </ol>
      </section>
      <section className="container">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Mengapa Bermitra dengan Gajiku?</h2>
        <ol className="list-decimal px-6">
          <li>
            <span className="font-bold">Teknologi Terintegrasi:</span> Infrastruktur berbasis data yang aman,
            transparan, dan dapat diandalkan.
          </li>
          <li>
            <span className="font-bold">Manajemen Risiko Teruji:</span> Sistem otomatisasi yang meminimalisir risiko
            operasional dan kegagalan sistemik.
          </li>
          <li>
            <span className="font-bold">Berbasis di Jakarta:</span> Memahami dengan mendalam dinamika regulasi bisnis
            dan pasar keuangan di Indonesia.
          </li>
        </ol>
      </section>

      <section className="text-center">
        <h2 className="text-primary text-3xl mb-4 font-extrabold">Siap untuk Memulai Kolaborasi?</h2>
        <p className="mb-6">
          Mari diskusikan bagaimana perusahaan atau instansi Anda dapat saling melengkapi dan tumbuh bersama ekosistem
          Gajiku. Tim kami siap memberikan informasi lengkap sesuai dengan kebutuhan kolaborasi Anda.
        </p>
        <Link href="/contact-us" className="btn btn-primary">
          Hubungi Kami Lebih Lanjut
        </Link>
      </section>
    </DefaultLayout>
  );
}
