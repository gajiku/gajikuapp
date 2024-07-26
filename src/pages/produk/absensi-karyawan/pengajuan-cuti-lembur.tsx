import { DefaultLayout } from "@/components/layouts/general.layout";
import { HiArrowRight, HiOutlineCheck } from "react-icons/hi";
import { Button, PhoneMockup, WindowMockup } from "react-daisyui";
import Image from "next/image";
import Head from "next/head";
import HomepageBackdrop  from "@/assets/homepage/backdrop.png";
import GajikuHeroImage  from "@/assets/gajiku-hero-image.png";
import PlaceholderEwa  from "@/assets/ewa/placeholder-ewa.svg";
import RequestLeaveImg  from "@/assets/product/request-leave.png";
import RequestOvertimeImg  from "@/assets/product/request-overtime.png";
import RequestApprovalImg  from "@/assets/product/request-approval.png";

export default function Page() {
  return <DefaultLayout>
    <Head>
      <title>Aplikasi Cuti, Lembur dan Pengajuan Lainnya - Gajiku</title>
      <meta name="description" content="Dengan gajiku karyawan dapat dengan mudah mengajukan cuti, lembur, hingga work from home melalui aplikasi android/ios gajiku" />
      <meta name="twitter:title" content="Aplikasi Cuti, Lembur dan Pengajuan Lainnya - Gajiku" />
      <meta name="description" content="Dengan gajiku karyawan dapat dengan mudah mengajukan cuti, lembur, hingga work from home melalui aplikasi android/ios gajiku" />
    </Head>
    
    <section id="hero" className={`bg-cover  inset-x-0 inset-y-0 pb-16 pt-16 lg:px-32 md:px-16 px-4`} 
      style={{backgroundImage:"url("+HomepageBackdrop.src+")", backgroundPosition: "50%", objectFit: "cover", backgroundSize: "cover", zIndex: "-1"}}
    >
      <div className="grid lg:grid-cols-2">
        <div className="px-6 antialiased">
          <h1 className="text-primary text-[3rem]/[1.2] mb-4 font-extrabold">Aplikasi Cuti, Lembur dan Pengajuan Lainnya </h1>
          <p className="text-[1.25rem]/[1.75] font-normal mb-8">Dengan gajiku karyawan dapat dengan mudah mengajukan cuti, lembur, hingga work from home melalui aplikasi android/ios gajiku</p>
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
          <h3 className="text-3xl font-normal">Pengajuan Cuti</h3>
          <p className="text-lg font-[350]">
            Berbagai jenis cuti bisa dibuat dengan pengaturan yang fleksibel dari pro-rata, cuti yang bersifat sekali ataupun berulang. Kamu juga bisa mengatur kuota hingga memberikan cuti pengganti dengan mudah
          </p>
          <div className="w-fit mt-4">
            <Button tag="a" color="primary" className="text-white" size="sm" href="/contact-us">Hubungi Kami <HiArrowRight /></Button>
          </div>
        </div>
        <div className="content-center">
          <PhoneMockup className="max-w-64 aspect-[9/16]">
            <Image src={RequestLeaveImg} className="max-w-64 aspect-[9/16] mb-auto mr-auto pr-6 pb-4" alt="Gajiku MAster Shift" loading="lazy" />
          </PhoneMockup>
        </div>


        <div className="content-center text-right pr-6">
          <PhoneMockup className="max-w-64 aspect-[9/16] ">
            <Image src={RequestOvertimeImg} className="max-w-64 aspect-[9/16] mb-auto mr-auto pr-6 pb-4" alt="Gajiku MAster Shift" loading="lazy" />
          </PhoneMockup>
        </div>
        <div className="flex flex-col gap-y-4 justify-center">
          <h3 className="text-3xl font-normal">Pengajuan Lembur</h3>
          <p className="text-lg font-[350]">
            Pengajuan lembur baik di hari kerja ataupun di luar hari kerja bisa dengan mudah di buat hanya melalui aplikasi karyawan Gajiku
          </p>
          <div className="w-fit mt-4">
            <Button tag="a" color="primary" className="text-white" size="sm" href="/contact-us">Hubungi Kami <HiArrowRight /></Button>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 justify-center">
          <h3 className="text-3xl font-normal">Pengajuan Work From Home</h3>
          <p className="text-lg font-[350]">
            Walaupun penjadwalan kerjamu work from office, benefit work from home masih bisa di buat dengan pengajuan
          </p>
          <div className="w-fit mt-4">
            <Button tag="a" color="primary" className="text-white" size="sm" href="/contact-us">Hubungi Kami <HiArrowRight /></Button>
          </div>
        </div>
        <div className="content-center">
          <Image src={PlaceholderEwa} className="h-fit  px-6" alt="Gajiku employee apps"   loading="lazy" />
        </div>

        <div className="content-center">
          <WindowMockup className="w-full" border frameColor="base-200">
            <Image src={RequestApprovalImg} className="h-fit w-full p-0" alt="Gajiku MAster Shift" loading="lazy" />
          </WindowMockup>
        </div>
        <div className="flex flex-col gap-y-4 justify-center">
          <h3 className="text-3xl font-normal">Mekanisme persetujuan yang fleksibel</h3>
          <p className="text-lg font-[350]">
            Pengajuan cuti, lembur dan lainnya dapat di atur dalam berbagai level persetujuan hingga jumlah orang yang menyetujui.
          </p>
          <div className="w-fit mt-4">
            <Button tag="a" color="primary" className="text-white" size="sm" href="/contact-us">Hubungi Kami <HiArrowRight /></Button>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 lg:px-32 md:px-16 px-4 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-y-16 gap-x-8">
        <div>
        <h2 className="text-3xl font-normal mb-4">Fitur Lainnya</h2>
          <p className="font-[350] text-gray-800">Manajemen pengajuan Gajiku memiliki fitur yang komprehensif dan memudahkan untuk kebutuhan bisnis dan semua proses absensi.</p>
        </div>
        <ul className="flex flex-col gap-y-2 ">
          <li className="flex gap-x-1 items-center">
            <HiOutlineCheck size={20} className="font-light text-success" />
            <div>Semua pengajuan & approval melalui aplikasi karyawan</div>
          </li>
          <li className="flex gap-x-1 items-center">
            <HiOutlineCheck size={20} className="font-light text-success" />
            <div>Cuti setengah hari/jam, cuti pengganti bisa dibuat</div>
          </li>
          <li className="flex gap-x-1 items-center">
            <HiOutlineCheck size={20} className="font-light text-success" />
            <div>Integrasi dengan payroll gajiku</div>
          </li>
          <li className="flex gap-x-1 items-center">
            <HiOutlineCheck size={20} className="font-light text-success" />
            <div>Perhitungan bisa dengan aturan pemerintah ataupun custom</div>
          </li>
        </ul>
      </div>
    </section>
  </DefaultLayout>
}
     