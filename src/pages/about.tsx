import AboutCantika from '@/assets/about/about-cantika.jpg';
import AboutEffene from '@/assets/about/about-effene.jpg';
import AboutHayu from '@/assets/about/about-hayu.jpg';
import AboutHerry from '@/assets/about/about-herry.jpg';
import AboutImg1 from '@/assets/about/about-img1.svg';
import AboutImg2 from '@/assets/about/about-img2.svg';
import AboutImg3 from '@/assets/about/about-img3.svg';
import AboutImg4 from '@/assets/about/about-img4.svg';
import AboutSherman from '@/assets/about/about-sherman.jpg';
import { Avatar } from 'react-daisyui';
import { DefaultLayout } from '@/components/layouts/general.layout';
import { FaLinkedin } from 'react-icons/fa';
import Head from 'next/head';
import Image from 'next/image';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Tentang Kami</title>
        <meta name="description" content="Gajiku Team Sherman Tanuwidjaja and Herry Gunawan" />
        <meta name="twitter:title" content="Gajiku - Tentang Kami " />
        <meta name="description" content="Gajiku Team Sherman Tanuwidjaja and Herry Gunawan" />
      </Head>
      <section className={`relative bg-[#3FC3C5] bg-cover  inset-x-0 inset-y-0 pt-16 lg:px-32 md:px-16 px-4`}>
        <div className="items-end bottom-0 flex left-0 overflow-hidden pointer-events-none absolute right-0">
          <svg viewBox="0 0 1695 876" xmlns="http://www.w3.org/2000/svg">
            <g fill="#fff" fillRule="evenodd">
              <path opacity=".61" d="M1695 0l-555.512 876H1695z"></path>
              <path opacity=".61" d="M0 872.81V703l1695 76L0 876z"></path>
              <path d="M0 872.729L1695 779v97H0z"></path>
            </g>
          </svg>
        </div>

        <h1 className="text-white text-center text-[2.5rem]/[1.2] mb-4 font-extrabold">Perjalanan Gajiku</h1>
        <div className="max-w-4xl mx-auto mt-16 pb-16 grid md:grid-cols-2 gap-x-4">
          <div className="antialiased ml-[50px] content-center md:pb-0 pb-16">
            <div className="relative">
              <span className="absolute text-white opacity-[0.08] text-[72px] left-[-50px] top-[-65px] font-bold z-0">
                #1
              </span>
              <h4 className="relative text-white text-3xl mb-4 font-extrabold z-1">2020</h4>
            </div>
            <p className="text-white text-lg font-normal">
              Gajiku hadir sebagai pioneer fasilitator Early Wage Access di Indonesia, dan membangun kerjasama dengan
              berbagai enterprise.
            </p>
          </div>
          <div className="content-center lg:block hidden">
            <Image src={AboutImg1} className="max-h-[350px] w-fit" alt="image 1" loading="lazy" />
          </div>

          <div className="content-center lg:block hidden">
            <Image src={AboutImg2} className="max-h-[350px] w-fit" alt="image 2" loading="lazy" />
          </div>
          <div className="antialiased ml-[50px] content-center md:pb-0 pb-16">
            <div className="relative">
              <span className="absolute text-white opacity-[0.08] text-[72px] left-[-50px] top-[-65px] font-bold z-0">
                #2
              </span>
              <h4 className="relative text-white text-3xl mb-4 font-extrabold z-1">2021</h4>
            </div>
            <p className="text-white text-lg font-normal">
              Di back up oleh Sampoerna, Gajiku memperluas solusi yang dibangun ke ranah solusi digital dalam sektor
              tenaga kerja melalui HRIS.
            </p>
          </div>

          <div className="antialiased ml-[50px] content-center md:pb-0 pb-16">
            <div className="relative">
              <span className="absolute text-white opacity-[0.08] text-[72px] left-[-50px] top-[-65px] font-bold z-0">
                #3
              </span>
              <h4 className="relative text-white text-3xl mb-4 font-extrabold z-1">2022</h4>
            </div>
            <p className="text-white text-lg font-normal">
              Mencapai tahap Seed A dengan rounding dari berbagai VC termasuk Sampoerna & AC Ventures sembari terus
              mengembangkan teknologi HR terkini.
            </p>
          </div>
          <div className="content-center lg:block hidden">
            <Image src={AboutImg3} className="max-h-[350px] w-fit" alt="image 3" loading="lazy" />
          </div>

          <div className="content-center lg:block hidden">
            <Image src={AboutImg4} className="max-h-[350px] w-fit" alt="image 4" loading="lazy" />
          </div>
          <div className="antialiased ml-[50px] content-center md:pb-0 pb-16">
            <div className="relative">
              <span className="absolute text-white opacity-[0.08] text-[72px] left-[-50px] top-[-65px] font-bold z-0">
                #4
              </span>
              <h4 className="relative text-white text-3xl mb-4 font-extrabold z-1">Saat Ini</h4>
            </div>
            <p className="text-white text-lg font-normal">
              Gajiku terus berkembang untuk memenuhi kebutuhan dan memberikan solusi terbaik khususnya di bidang HR
              Technology
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4" id="media">
        <div className="max-w-6xl bg-gray-100 border rounded-lg shadow-xl mx-auto lg:py-16 py-8 px-8">
          <h2 className="text-primary lg:px-32 md:px-16 px-4 text-center text-[2.5rem]/[1.2] mb-16 font-extrabold">
            Tim Gajiku
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-y-1 justify-center items-center self-start">
              <Avatar src={AboutSherman.src} shape="circle" size={120} className="mb-4" />
              <h3 className="text-primary text-lg">Sherman Tanuwidjaja</h3>
              <p>Co-Founder/ CEO</p>
              <a
                href="https://www.linkedin.com/in/sherman-tanuwidjaja"
                className="text-xl py-2 "
                target="_blank"
                rel="nofollow noopener"
              >
                <FaLinkedin />
              </a>

              <p className="mb-4 text-center">
                Pitch and sold ~$300K project for Temasek. Led team recruitment and backend architecture as Tech lead.
              </p>
              <p className="mb-4 text-center">
                Raised Pre-seed round with Sequioa, RTP and Febe Ventures as Co-Founder of Vara
              </p>
              <p className="mb-4 text-center">
                Founder 20-person dev shop, Ocurise Consultancy, and generated 400k in revenue in the first year
              </p>
            </div>
            <div className="flex flex-col gap-y-1 justify-center items-center self-start">
              <Avatar src={AboutHerry.src} shape="circle" size={120} className="mb-4" />
              <h3 className="text-primary text-lg">Herry Gunawan </h3>
              <p>Co-Founder/ CEO</p>
              <a
                href="https://www.linkedin.com/in/herryg91"
                className="text-xl py-2 "
                target="_blank"
                rel="nofollow noopener"
              >
                <FaLinkedin />
              </a>

              <p className="mb-4 text-center">
                Tech lead at Tokopedia, Build search, personalization and recommendation team from scratch. Bult and
                structured entire architecture and development.
              </p>
              <p className="mb-4 text-center">
                Climbed Ruang Guru ladder from Engineering manager all the way to head of Engineering. Leading team of
                40 engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4" id="media">
        <div className="max-w-6xl bg-gray-100 border rounded-lg shadow-xl mx-auto lg:py-16 py-8 px-8">
          <h2 className="text-primary lg:px-32 md:px-16 px-4 text-center text-[2.5rem]/[1.2] mb-16 font-extrabold">
            Founding Member
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col gap-y-1 justify-center items-center self-start">
              <Avatar src={AboutCantika.src} shape="circle" size={120} className="mb-4" />
              <h3 className="text-primary text-lg">Cantika Dewi</h3>
              <p>Head of Partnership</p>
              <a
                href="https://www.linkedin.com/in/cantika-dewi-498b681b3"
                className="text-xl py-2 "
                target="_blank"
                rel="nofollow noopener"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="flex flex-col gap-y-1 justify-center items-center self-start">
              <Avatar src={AboutHayu.src} shape="circle" size={120} className="mb-4" />
              <h3 className="text-primary text-lg">Tyas Hayuwuri </h3>
              <p>Head of Operation and Account</p>
              <a
                href="https://www.linkedin.com/in/tyas-hayuwuri-067665bb"
                className="text-xl py-2 "
                target="_blank"
                rel="nofollow noopener"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="flex flex-col gap-y-1 justify-center items-center self-start">
              <Avatar src={AboutEffene.src} shape="circle" size={120} className="mb-4" />
              <h3 className="text-primary text-lg">Effene Herry </h3>
              <p>Principal Software Engineer</p>
              <a
                href="https://www.linkedin.com/in/effene-herry"
                className="text-xl py-2 "
                target="_blank"
                rel="nofollow noopener"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
