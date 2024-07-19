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
      <title>Sistem Penjadwalan dan Shift Karyawan - Gajiku</title>
      <meta name="description" content="Kelola penjadwalan atau shift karyawan dengan mudah: jadwal 9to5, open shift, hybrid, work from home" />
      <meta name="twitter:title" content="Sistem Penjadwalan dan Shift Karyawan" />
      <meta name="description" content="Kelola penjadwalan atau shift karyawan dengan mudah: jadwal 9to5, open shift, hybrid, work from home" />
    </Head>
    
    <section id="hero" className={`bg-cover  inset-x-0 inset-y-0 pb-16 pt-16 lg:px-32 md:px-16 px-4`} 
      style={{backgroundImage:"url("+HomepageBackdrop.src+")", backgroundPosition: "50%", objectFit: "cover", backgroundSize: "cover", zIndex: "-1"}}
    >
      <div className="grid lg:grid-cols-2">
        <div className="px-6 antialiased">
          <h1 className="text-primary text-[3rem]/[1.2] mb-4 font-extrabold">Sistem Penjadwalan dan Shift Karyawan </h1>
          <p className="text-[1.25rem]/[1.75] font-normal mb-8">Kelola penjadwalan atau shift karyawan dengan mudah</p>
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
          <h3 className="text-3xl font-normal">Kelola jadwal shift secara otomatis</h3>
          <p className="text-lg font-[350]">Jadwal kerja yang sudah pasti seperti Senin-Jumat (9to5) dapat dibuat secara otomatis dengan Gajiku</p>
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
          <h3 className="text-3xl font-normal">Kelola jadwal karyawan lapangan dan produksi</h3>
          <p className="text-lg font-[350]">Untuk jadwal yang lebih fleksibel, gajiku memiliki metode Open Shift</p>
          <div className="w-fit mt-4">
            <Button tag="a" color="primary" className="text-white" size="sm" href="/contact-us">Hubungi Kami <HiArrowRight /></Button>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 justify-center">
          <h3 className="text-3xl font-normal">Work From Home & Hybrid</h3>
          <p className="text-lg font-[350]">Work from home, hybrid ataupun harus work from office semua bisa diatur di dashboard gajiku</p>
          <div className="w-fit mt-4">
            <Button tag="a" color="primary" className="text-white" size="sm" href="/contact-us">Hubungi Kami <HiArrowRight /></Button>
          </div>
        </div>
        <div className="content-center">
          <Image src={PlaceholderEwa} className="h-fit  px-6" alt="Gajiku employee apps"   loading="lazy" />
        </div>

      </div>
    </section>

    {/* <section className="py-16 lg:px-32 md:px-16 px-4 bg-gray-50">
    <div className="grid md:grid-cols-2 gap-y-16 gap-x-8">
      <div>
      <h2 className="text-3xl font-normal mb-4">Fitur Lainnya</h2>
        <p className="font-[350] text-gray-800">Manajemen absensi Gajiku memiliki fitur yang komprehensif dan memudahkan untuk kebutuhan bisnis dan semua proses absensi.</p>
      </div>
      <ul className="flex flex-col gap-y-2 ">
        <li className="flex gap-x-1 items-center">
          <HiOutlineCheck size={20} className="font-light text-success" />
          <div>Request perubahan absensi</div>
        </li>
        <li className="flex gap-x-1 items-center">
          <HiOutlineCheck size={20} className="font-light text-success" />
          <div>Absensi Back Date</div>
        </li>
        <li className="flex gap-x-1 items-center">
          <HiOutlineCheck size={20} className="font-light text-success" />
          <div>Atur Radius Clock-In/Clock-Out dari lokasi kantor</div>
        </li>
        <li className="flex gap-x-1 items-center">
          <HiOutlineCheck size={20} className="font-light text-success" />
          <div>Work from home melalui permohonan</div>
        </li>
      </ul>
    </div>
    </section> */}
   
  </DefaultLayout>
}
     