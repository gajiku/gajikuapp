import { DefaultLayout } from "@/components/layouts/general.layout";
import { HiArrowRight, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineChartBar, HiOutlineCheck, HiOutlineCheckCircle, HiOutlineClock, HiOutlinePlusCircle, HiOutlineUserGroup } from "react-icons/hi";
import { Button, Link } from "react-daisyui";
import Image from "next/image";
import Head from "next/head";
import HomepageBackdrop  from "@/assets/homepage/backdrop.png";
import GajikuHeroImage  from "@/assets/gajiku-hero-image.png";

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
          <h1 className="text-primary text-[3rem]/[1.2] mb-4 font-extrabold">Aplikasi Absensi Karyawan Online</h1>
          <p className="text-[1.25rem]/[1.75] font-normal mb-8">Absensi karyawan menjadi simpel dan fleksibel. Semua data termasuk masuk, absen, cuti dapat di akses secara real-time</p>
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
      <h2 className="text-primary text-[2.5rem]/[1.2] mb-16 font-extrabold text-center">Fitur Absensi Karyawan by Gajiku</h2>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-y-16 gap-x-8">
        <div className="flex flex-col gap-y-4 items-center justify-center text-center border rounded-xl p-4 self-start h-full">
          <HiOutlineCalendar size={36}/>
          <h3 className="text-xl font-normal">Shift & Jadwal</h3>
          <p className="text-sm font-[350]">Penjadwalan (shift) lengkap dari normal shift (9 to 5), flexible hour, multiple shift, open shift dan lainnya</p>
          <div className="grow"></div>
          <Button type="button" color="primary" className="w-full text-white" size="sm" tag="a" href="/produk/absensi-karyawan/shift">Pelajari Lebih Lanjut</Button>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center text-center border rounded-xl p-4 self-start h-full">
          <HiOutlineUserGroup size={36}/>
          <h3 className="text-xl font-normal">Manajemen Absensi</h3>
          <p className="text-sm font-[350]">Absensi karyawan yang fleksibel dengan GPS menggunakan android & ios</p>
          <div className="grow"></div>
          <Button type="button" color="primary" className="w-full text-white" size="sm" tag="a" href="/produk/absensi-karyawan/manajemen-absensi">Pelajari Lebih Lanjut</Button>
        </div>
        
        <div className="flex flex-col gap-y-4 items-center justify-center text-center border rounded-xl p-4 self-start h-full">
          <HiOutlineClock size={36}/>
          <h3 className="text-xl font-normal">Pengajuan Cuti, Lembur, dll</h3>
          <p className="text-sm font-[350]">Kelola kebijakan, kuota dan reset cuti tahunan serta alur persetujuan sesuai kebutuhan perusahaan</p>
          <div className="grow"></div>
          <Button type="button" color="primary" className="w-full text-white" size="sm" tag="a" href="/produk/absensi-karyawan/pengajuan-cuti-lembur">Pelajari Lebih Lanjut</Button>
        </div>
        {/* <div className="flex flex-col gap-y-4 items-center justify-center text-center border rounded-xl p-4 self-start h-full">
          <HiOutlineBriefcase size={36}/>
          <h3 className="text-xl font-normal">Manajemen Lembur</h3>
          <p className="text-sm font-[350]">Kelola pengajuan lembur baik lembur di hari kerja maupun di luar hari kerja</p>
          <div className="grow"></div>
          <Button type="button" color="primary" className="w-full text-white" size="sm" tag="a" href="/produk/absensi-karyawan/manajemen-lembur">Pelajari Lebih Lanjut</Button>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center text-center border rounded-xl p-4 self-start h-full">
          <HiOutlineCheck size={36}/>
          <h3 className="text-xl font-normal">Manajemen Persetujuan</h3>
          <p className="text-sm font-[350]">Alur persetujuan (cuti, lembur dan lainnya) dapat di atur dalam multiple level</p>
          <div className="grow"></div>
          <Button type="button" color="primary" className="w-full text-white" size="sm">Pelajari Lebih Lanjut</Button>
        </div> */}
        <div className="flex flex-col gap-y-4 items-center justify-center text-center border rounded-xl p-4 self-start h-full">
          <HiOutlineChartBar size={36}/>
          <h3 className="text-xl font-normal">Dashboard & Laporan</h3>
          <p className="text-sm font-[350]">Monitor absensi dan penjadwalan melalui dashboard dan laporan </p>
          <div className="grow"></div>
          <Button type="button" color="primary" className="w-full text-white" size="sm" tag="a" href="/produk/absensi-karyawan/dashboard">Pelajari Lebih Lanjut</Button>
        </div>
      </div>
    </section>

    {/* <section className="py-16 lg:px-32 md:px-16 px-4">
      <h2 className="text-primary text-[2.5rem]/[1.2] mb-16 font-extrabold text-center">Fitur Absensi Online by Gajiku</h2>
      <div className="grid md:grid-cols-2 gap-y-16 gap-x-8">
        <div className="flex flex-col gap-y-4 justify-center">
          <h3 className="text-3xl font-normal">Absensi Dengan Fleksibel</h3>
          <ul className="flex flex-col gap-y-2 text-lg">
            <li className="flex gap-x-1 font-[350] items-center">
              <HiOutlineCheck size={20} className="font-light text-success" />
              <div>Absen menggunakan android dan ios dengan GPS</div>
            </li>
            <li className="flex gap-x-1 font-[350] items-center">
              <HiOutlineCheck size={20} className="font-light text-success" />
              <div>Absen berdasarkan lokasi kantor</div>
            </li>
            <li className="flex gap-x-1 font-[350] items-center">
              <HiOutlineCheck size={20} className="font-light text-success" />
              <div>Atur Radius Clock-In/Clock-Out</div>
            </li>
            <li className="flex gap-x-1 font-[350] items-center">
              <HiOutlineCheck size={20} className="font-light text-success" />
              <div>Ijin Istirahat</div>
            </li>
            <li className="flex gap-x-1 font-[350] items-center">
              <HiOutlineCheck size={20} className="font-light text-success" />
              <div>Lacak Pergerakan Karyawan (Sales)</div>
            </li>
          </ul>
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
          <h3 className="text-3xl font-normal">Cuti dan Pengajuan Lainnya Jadi Mudah</h3>
          <ul className="flex flex-col gap-y-2 text-lg">
            <li className="flex gap-x-1 font-[350] items-center">
              <HiOutlineCheck size={20} className="font-light text-success" />
              <div>Pengajuan Cuti Secara Online</div>
            </li>
            <li className="flex gap-x-1 font-[350] items-center">
              <HiOutlineCheck size={20} className="font-light text-success" />
              <div>Lembur Dihari Kerja dan Di Luar Hari Kerja</div>
            </li>
            <li className="flex gap-x-1 font-[350] items-center">
              <HiOutlineCheck size={20} className="font-light text-success" />
              <div>Pengajuan Work From Home</div>
            </li>
          </ul>
          <div className="w-fit mt-4">
            <Button tag="a" color="primary" className="text-white" size="sm" href="/contact-us">Hubungi Kami <HiArrowRight /></Button>
          </div>
        </div>

        
        <div className="flex flex-col gap-y-4 justify-center">
          <h3 className="text-3xl font-normal">Jadwal Kerja (Shift)</h3>
          <ul className="flex flex-col gap-y-2 text-lg">
            <li className="flex gap-x-1 font-[350] items-center">
              <HiOutlineCheck size={20} className="font-light text-success" />
              <div>Normal Shift: Penjadwalan pada umumnya, misalnya 09:00 - 17.00</div>
            </li>
            <li className="flex gap-x-1 font-[350] items-center">
              <HiOutlineCheck size={20} className="font-light text-success" />
              <div>Flexible Shift: Jadwal masuk fleksibel asalkan memenuhi 8 jam kerja.</div>
            </li>
            <li className="flex gap-x-1 font-[350] items-center">
              <HiOutlineCheck size={20} className="font-light text-success" />
              <div>Open Shift: untuk penjadwalan yang lebih fleksibel</div>
            </li>
          </ul>
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
          <h3 className="text-3xl font-normal">Sistem Approval yang Advance</h3>
          <p className="text-lg font-[350]">Baik single level approval maupun multi level approval, semua bisa di atur. Banyak orang yang bisa melakukan approval juga dapat dengan mudah diatur</p>
          
          <div className="w-fit mt-4">
            <Button tag="a" color="primary" className="text-white" size="sm" href="/contact-us">Hubungi Kami <HiArrowRight /></Button>
          </div>
        </div>
        
      </div>
    </section> */}

   

    {/* <section className="py-16 lg:px-32 md:px-16 px-4 bg-gray-50">

      <div className="grid md:grid-cols-2 gap-y-16 gap-x-8">
        <div>
        <h2 className="text-3xl font-normal mb-4">Fitur Absensi Online Gajiku Lainnya</h2>
          <p className="font-[350] text-gray-800">Absensi Karyawan Online Gajiku memiliki fitur yang komprehensif dan memudahkan untuk kebutuhan bisnis dan semua proses absensi.</p>
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
            <div>Face Recognition*</div>
          </li>
          <li className="flex gap-x-1 items-center">
            <HiOutlineCheck size={20} className="font-light text-success" />
            <div>Integrasi dengan Fingerprint*</div>
          </li>
          <li className="flex gap-x-1 items-center">
            <HiOutlineCheck size={20} className="font-light text-success" />
            <div>Integrasi dengan Payroll Gajiku</div>
          </li>
          <li className="flex gap-x-1 items-center">
            <HiOutlineCheck size={20} className="font-light text-success" />
            <div>Laporan Absensi</div>
          </li>
        </ul>
      </div>
    </section> */}
    
  </DefaultLayout>
}
     