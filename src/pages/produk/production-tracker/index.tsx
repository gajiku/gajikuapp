import { DefaultLayout } from "@/components/layouts/general.layout";
import { HiArrowRight, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineChartBar, HiOutlineCheck, HiOutlineCheckCircle, HiOutlineClock, HiOutlinePlusCircle, HiOutlineUserGroup } from "react-icons/hi";
import { Button, Link } from "react-daisyui";
import Image from "next/image";
import Head from "next/head";
import HomepageBackdrop  from "@/assets/homepage/backdrop.png";
import GajikuHeroImage  from "@/assets/gajiku-hero-image.png";
import PlaceholderEwa  from "@/assets/ewa/placeholder-ewa.svg";

export default function Page() {
  return <DefaultLayout>
    <Head>
      <title>Aplikasi Absensi Karyawan Online - Gajiku</title>
      <meta name="description" content="Absensi karyawan menjadi simpel dan fleksibel. Semua data termasuk masuk, absen, cuti dapat di akses secara real-time" />
      <meta name="twitter:title" content="Aplikasi Absensi Karyawan Online - Gajiku" />
      <meta name="description" content="Absensi karyawan menjadi simpel dan fleksibel. Semua data termasuk masuk, absen, cuti dapat di akses secara real-time" />
    </Head>
    
    <section id="hero" className={`bg-cover  inset-x-0 inset-y-0 pb-16 pt-16 lg:px-32 md:px-16 px-4`} 
      style={{backgroundImage:"url("+HomepageBackdrop.src+")", backgroundPosition: "50%", objectFit: "cover", backgroundSize: "cover", zIndex: "-1"}}
    >
      <div className="grid lg:grid-cols-2">
        <div className="px-6 antialiased">
          <h1 className="text-primary text-[3rem]/[1.2] mb-4 font-extrabold">Production Tracker</h1>
          <p className="text-[1.25rem]/[1.75] font-normal mb-8">Perhitungan upah berdasarkan hasil produksi jadi lebih mudah dengan Gajiku Production Tracker</p>
          <Button tag="a" color="primary" className="text-white" size="sm" href="/contact-us">Hubungi Kami <HiArrowRight /></Button>
        </div>
        <div className="content-center lg:block hidden">
        <Image src={GajikuHeroImage} alt="Gajikuapp background" loading="lazy" />
        </div>
      </div>
    </section>
    <section id="separator" className="flex flex-col justify-center max-w-[100vw] overflow-hidden px-[50px] relative pb-[6px] pt-[120px]" 
      style={{
        backgroundColor: "rgb(63, 195, 197)", 
        background: "linear-gradient(0deg, rgb(63, 195, 197) 0%, white 100%)"}}
    >
        <div className="items-end bottom-0 flex left-0 overflow-hidden pointer-events-none absolute right-0">
          <svg viewBox="0 0 1695 876" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fillRule="evenodd"><path opacity=".61" d="M1695 0l-555.512 876H1695z"></path><path opacity=".61" d="M0 872.81V703l1695 76L0 876z"></path><path d="M0 872.729L1695 779v97H0z"></path></g></svg>
        </div>
    </section>


    <section className="py-16 lg:px-32 md:px-16 px-4">
      {/* <h2 className="text-primary text-[2.5rem]/[1.2] mb-16 font-extrabold text-center">Fitur Absensi Karyawan</h2> */}
      <div className="grid md:grid-cols-2 gap-y-16 gap-x-8">
        <div className="flex flex-col gap-y-4 justify-center">
          <h3 className="text-3xl font-normal">Multi Level User</h3>
          <p className="text-lg font-[350]">
            Karyawan dapat di atur sebagai worker, checker, operator ataupun manager dimana worker melakukan input, checker sebagai penjaga dan manager sebagai approver terakhir.
          </p>
          <div className="w-fit mt-4">
            <Button tag="a" color="primary" className="text-white" size="sm" href="/contact-us">Hubungi Kami <HiArrowRight /></Button>
          </div>
        </div>
        <div className="content-center">
          <Image src={PlaceholderEwa} className="h-fit  px-6" alt="Gajiku employee apps"   loading="lazy" />
        </div>


        <div className="content-center">
          <Image src={PlaceholderEwa} className="h-fit  px-6" alt="Gajiku employee apps"   loading="lazy" />
        </div>
        <div className="flex flex-col gap-y-4 justify-center">
          <h3 className="text-3xl font-normal">Manajemen Proyek</h3>
          <p className="text-lg font-[350]">
          Production Tracker dapat diatur sebagai proyek di mana setiap proyek memiliki target dan melibatkan siapa saja yang terlibat, sehingga bisa menjadi KPI.
          </p>
          <div className="w-fit mt-4">
            <Button tag="a" color="primary" className="text-white" size="sm" href="/contact-us">Hubungi Kami <HiArrowRight /></Button>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 justify-center">
          <h3 className="text-3xl font-normal">Hitung Upah Berdasarkan Hasil Produksi</h3>
          <p className="text-lg font-[350]">
            Hasil produksi bisa di atur apakah berdasarkan pieces atau bahkan dimensi yang akan menjadi dasar perhitungan upah karyawan.
          </p>
          <div className="w-fit mt-4">
            <Button tag="a" color="primary" className="text-white" size="sm" href="/contact-us">Hubungi Kami <HiArrowRight /></Button>
          </div>
        </div>
        <div className="content-center">
          <Image src={PlaceholderEwa} className="h-fit  px-6" alt="Gajiku employee apps"   loading="lazy" />
        </div>
       
      </div>
    </section>
  </DefaultLayout>
}
     