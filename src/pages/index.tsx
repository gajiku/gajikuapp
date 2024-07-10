import { DefaultLayout } from "@/components/layouts/general.layout";
import { HiArrowRight } from "react-icons/hi";
import { Button } from "react-daisyui";
import HomepageBackdrop  from "@/assets/homepage/backdrop.png";
import AppleEn  from "@/assets/apple-en.png";
import GooglePlayEn  from "@/assets/google-play-en.png";
import GajikuHeroImage  from "@/assets/gajiku-hero-image.png";
import LogoSquare  from "@/assets/logo.png";
import GajikuEmployeeApps  from "@/assets/homepage/gajiku-employee-apps.png";
import GajikuDashboard  from "@/assets/homepage/gajiku-dashboard.png";
import ClientMatahari  from "@/assets/homepage/client-matahari.png";
import ClientSampoerna  from "@/assets/homepage/client-sampoerna.png";
import ClientLotte  from "@/assets/homepage/client-lotte.png";
import ClientShipper  from "@/assets/homepage/client-shipper.png";
import ClientHangry  from "@/assets/homepage/client-hangry.png";
import ClientEsb  from "@/assets/homepage/client-esb.png";
import ClientEdenfarm  from "@/assets/homepage/client-edenfarm.svg";
import ClientEvermos  from "@/assets/homepage/client-evermos.png";
import ClientEkrut  from "@/assets/homepage/client-ekrut.png";
import ClientGowork  from "@/assets/homepage/client-gowork.png";
import ClientMajoo  from "@/assets/homepage/client-majoo.png";
import MediaDailysocial  from "@/assets/homepage/media-dailysocial.png";
import MediaTechinasia  from "@/assets/homepage/media-techinasia.png";
import MediaJakartaPost  from "@/assets/homepage/media-thejakartapost.png";
import MediaStraitsTime  from "@/assets/homepage/media-straitstimes.png";
import Image from "next/image";
import Head from "next/head";

export default function Home() {

  return <DefaultLayout>
    <Head>
      <title>Gajiku - Gajian, on demand</title>
      <meta name="description" content="Pembayaran gaji dimuka untuk karyawan terbaikmu! Bebas biaya untukmu, beri kebebasan untuk mereka." />
      <meta name="twitter:title" content="Gajiku - Gajian, on demand" />
      <meta name="description" content="Pembayaran gaji dimuka untuk karyawan terbaikmu! Bebas biaya untukmu, beri kebebasan untuk mereka." />
    </Head>
    <section id="hero" className={`bg-cover  inset-x-0 inset-y-0 h-[600px] pt-16 lg:px-32 md:px-16 px-4`} 
      style={{backgroundImage:"url("+HomepageBackdrop.src+")", backgroundPosition: "50%", objectFit: "cover", backgroundSize: "cover", zIndex: "-1"}}
    >
      <div className="grid lg:grid-cols-2">
        <div className="px-6 antialiased">
          <h1 className="text-primary text-[3rem]/[1.2] mb-4 font-extrabold">Benefit Terbaik Untuk Karyawan Anda</h1>
          <p className="text-[1.25rem]/[1.75] font-normal mb-8">Gajiku membantu meningkatkan performa dan retensi karyawan perusahaan Anda dengan memberikan akses Gaji di depan dan benefit lainnya.</p>
          <Button tag="a" color="primary" className="text-white" size="sm">Mulai Sekarang <HiArrowRight /></Button>
          <div className="flex gap-x-4 my-2.5">
            <a href="https://apps.apple.com/id/app/gajiku/id6444016967" target="_blank">
              <Image src={AppleEn} alt="Gajiku App Store" className="h-[52px] w-fit"  />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.gajiku.app&amp;hl=en&amp;gl=US" target="_blank">
              <Image src={GooglePlayEn} alt="Gajiku Google Play" className="h-[52px] w-fit"  />
            </a>
          </div>
          <p className="text-sm py-8 text-gray-500">*Aplikasi Gajiku khusus Karyawan Anda.</p>
        </div>
        <div className="content-center lg:block hidden">
        <Image src={GajikuHeroImage} alt="Gajikuapp background"   />
        </div>
      </div>
    </section>

    <section id="separator" className="flex flex-col justify-center max-w-[100vw] overflow-hidden px-[50px] relative pb-[6px] pt-[120px]" 
      style={{
        backgroundColor: "rgb(63, 195, 197)", 
        background: "linear-gradient(0deg, rgb(63, 195, 197) 0%, white 100%)"}}
    >
        <div className="items-end bottom-0 flex left-0 overflow-hidden pointer-events-none absolute right-0">
          <svg viewBox="0 0 1695 876" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fill-rule="evenodd"><path opacity=".61" d="M1695 0l-555.512 876H1695z"></path><path opacity=".61" d="M0 872.81V703l1695 76L0 876z"></path><path d="M0 872.729L1695 779v97H0z"></path></g></svg>
        </div>
    </section>
    <section className="py-16 lg:px-32 md:px-16 px-4 border-b-[3px] border-[#fafafa]" id="feature-karyawan">
      
      <div className="grid md:grid-cols-2 pl-8">
        <div>
          <h2 className="text-primary text-[2.5rem]/[1.2] mb-4 font-extrabold">Gajiku App Untuk Karyawan</h2>
          <div className="flex flex-col gap-y-8 mt-8">
            <div className="flex gap-x-4">
              <Image src={LogoSquare} alt="Logo gajiku" className="h-[32px] w-fit"  />
              <div>
                <div className="text-primary font-semibold">Akses Gaji Didepan (Earned Wage Access)</div>
                <div>Ambil Gajimu kapanpun dan dimanapun. 24/7</div>
              </div>
            </div>
            <div className="flex gap-x-4">
              <Image src={LogoSquare} alt="Logo gajiku" className="h-[32px] w-fit"  />
              <div>
                <div className="text-primary font-semibold">Absensi (Mobile Attendance)</div>
                <div>Sekarang absen terasa mudah cukup dengan satu klik saja.</div>
              </div>
            </div>
            <div className="flex gap-x-4">
              <Image src={LogoSquare} alt="Logo gajiku" className="h-[32px] w-fit"  />
              <div>
                <div className="text-primary font-semibold">Manajemen Biaya</div>
                <div>Monitoring klaim biaya dari karyawan Anda</div>
              </div>
            </div>
            <div className="flex gap-x-4">
              <Image src={LogoSquare} alt="Logo gajiku" className="h-[32px] w-fit"  />
              <div>
                <div className="text-primary font-semibold">Pinjaman Karyawan (Loan Management)</div>
                <div>Digitalisaikan proses peminjaman karyawan Anda</div>
              </div>
            </div>
            <div className="flex gap-x-4">
              <Image src={LogoSquare} alt="Logo gajiku" className="h-[32px] w-fit"  />
              <div>
                <div className="text-primary font-semibold">Digital Product</div>
                <div>Beli Pulsa, Paket Data ataupun PLN menggunakan EWA</div>
              </div>
            </div>
            <div className="flex gap-x-4">
              <Image src={LogoSquare} alt="Logo gajiku" className="h-[32px] w-fit"  />
              <div>
                <div className="text-primary font-semibold">Production Tracker</div>
                <div>Solusi manufaktur untuk menghitung upah pekerja</div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="content-center pt-8">
          <Image src={GajikuEmployeeApps} className="max-h-[500px] w-fit pl-16" alt="Gajiku employee apps"   />
        </div>
      </div>
    </section>
    <section className="py-16 lg:px-32 md:px-16 px-4 border-b-[3px] border-[#fafafa]" id="features">
      <h2 className="text-primary text-center text-[2.5rem]/[1.2] mb-4 font-extrabold">Gajiku Dashboard Untuk Perusahaan</h2>
      <div className="grid md:grid-cols-3 gap-x-12 px-8">
        <div className="mt-8">
          <h3 className="text-xl text-primary mb-2">Database Karyawan</h3>
          <p>Atur semua informasi terkait karyawan baru, resign, perubahan karir, data penggajian dan lainnya.</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl text-primary mb-2">Payroll</h3>
          <p>Perhitungan gaji, tunjangan, PPh 21 dan BPJS secara otomatis.</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl text-primary mb-2">Manajemen Biaya dan Pinjaman Karyawan</h3>
          <p>Monitor klaim biaya dan juga pinjaman karyawan secara real time!</p>
        </div>
      </div>
      <div className="mt-8">
        <Image src={GajikuDashboard} className="max-h-[500px] w-fit mx-auto" alt="Gajiku dashboard"   />
      </div>
    </section>
    <section className="pt-16 pb-8 border-[#fafafa]" id="clients">
      <h2 className="text-primary lg:px-32 md:px-16 px-4 text-center text-[2.5rem]/[1.2] mb-4 font-extrabold">GAJIKU Dipercaya Oleh Lebih dari 100 Perusahaan Indonesia di Berbagai Sektor</h2>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-x-4 gap-y-4 lg:px-16 md:px-8 px-4 py-16 items-center">
        <Image src={ClientMatahari} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku x Matahari" />
        <Image src={ClientSampoerna} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku x Sampoerna" />
        <Image src={ClientLotte} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku x Lotte" />
        <Image src={ClientShipper} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku x Shipper" />
        <Image src={ClientHangry} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku x Hangry" />
        <Image src={ClientEsb} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku x Esb" />
        <Image src={ClientEdenfarm} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku x Edenfarm" />
        <Image src={ClientEvermos} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku x Evermos" />
        <Image src={ClientEkrut} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku x Ekrut" />
        <Image src={ClientGowork} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku x Gowork" />
        <Image src={ClientMajoo} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku x Majoo" />
      </div>
      
    </section>
    <section className="pb-16 border-[#fafafa]" id="faq">
      <h2 className="text-primary lg:px-32 md:px-16 px-4 text-center text-center text-[2.5rem]/[1.2] mb-4 font-extrabold">Yang Sering Ditanyakan</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-[800px] pt-12 mx-auto px-4">
        <div>
          <div className="font-bold mb-2">Apa itu Akses Gaji Didepan (EWA)?</div>
          <p>Sebuah fasilitas yang didapatkan oleh karyawan dimana karyawan dapat mengambil gajinya terlebih dahulu tanpa harus menunggu tanggal gajian</p>
        </div>
        <div>
          <div className="font-bold mb-2">Bagaimana saya sebagai karyawan dapat fasilitas EWA?</div>
          <p>Informasikan tim HR Anda mengenai Gajiku, Tim kami akan dengan senang hati memberikan penjelasan dan demo kepada perusahaan Anda</p>
        </div>
        <div>
          <div className="font-bold mb-2">Apakah Gajiku (EWA) adalah pinjaman?</div>
          <p>Tidak, Gajiku (EWA) memberikan gaji yang memang sudah semestinya hak yang didapatkan oleh karyawan. Dan Gajiku tidak memberikan bunga sepersen pun</p>
        </div>
        <div>
          <div className="font-bold mb-2">Apakah ini membebankan perusahaan?</div>
          <p>Gajiku (EWA) gratis untuk perusahaan, tidak ada biaya apapun. Dan juga tidak merubah proses penggajian di Perusahaan Anda</p>
        </div>
      </div>
    </section>
    <section className="pb-16 px-4" id="media">
      <div className="max-w-6xl border rounded-lg shadow-xl mx-auto lg:py-16 py-8 px-8">
        <h2 className="text-primary lg:px-32 md:px-16 px-4 text-center text-[2.5rem]/[1.2] mb-16 font-extrabold">Media Berita</h2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8 items-center">
          <a href="https://dailysocial.id/post/startup-ewa-gajiku-raih-pendanaan-awal-16-miliar-rupiah" target="_blank" rel="noreferer noopener"><Image src={MediaDailysocial} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku in Dailysocial" /></a>
          <a href="https://dailysocial.id/post/startup-ewa-gajiku-raih-pendanaan-awal-16-miliar-rupiah" target="_blank" rel="noreferer noopener"><Image src={MediaTechinasia} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku in Techinasia" /></a>
          <a href="https://www.thejakartapost.com/business/2022/01/26/hr-start-up-gajiku-raises-1-1-million-in-seed-round.html" target="_blank" rel="noreferer noopener"><Image src={MediaJakartaPost} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku in Jakarta Post" /></a>
          <Image src={MediaStraitsTime} className="max-h-[80px] max-w-[100px] w-fit mx-auto self-center" alt="Gajiku in Straits Time" />
        </div>
      </div>
    </section>
  </DefaultLayout>
}
        // background:;padding-bottom:6px;padding-top:120px;--pdx-min-height:0px;--wr-max:1200px">

// export default function Home() {
//   return (
//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//     >
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/pages/index.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Discover and deploy boilerplate example Next.js&nbsp;projects.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
