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
import Head from 'next/head';
import Image from 'next/image';
import { ReactNode } from 'react';
import { TbBrandLinkedin } from 'react-icons/tb';
import classNames from 'classnames';

export default function Page() {
  return (
    <DefaultLayout>
      <Head>
        <title>Gajiku - Tentang Kami</title>
        <meta name="description" content="Tentang Gajiku" />
      </Head>

      <section className="relative bg-primary bg-cover">
        <div className="items-end bottom-0 flex left-0 overflow-hidden pointer-events-none absolute right-0">
          <svg viewBox="0 0 1695 876" xmlns="http://www.w3.org/2000/svg">
            <g fill="#fff" fillRule="evenodd">
              <path opacity=".61" d="M1695 0l-555.512 876H1695z"></path>
              <path opacity=".61" d="M0 872.81V703l1695 76L0 876z"></path>
              <path d="M0 872.729L1695 779v97H0z"></path>
            </g>
          </svg>
        </div>

        <div className="container py-12 text-white">
          <h1 className="text-center text-5xl mb-16 font-extrabold">Perjalanan Gajiku</h1>
          <div className="grid gap-8">
            {[
              {
                image: AboutImg1,
                year: 2020,
                description:
                  'Gajiku hadir sebagai pioneer fasilitator Early Wage Access di Indonesia, dan membangun kerjasama dengan berbagai enterprise.',
              },
              {
                image: AboutImg2,
                year: 2021,
                description:
                  'Di back up oleh Sampoerna, Gajiku memperluas solusi yang dibangun ke ranah solusi digital dalam sektor tenaga kerja melalui HRIS.',
              },
              {
                image: AboutImg3,
                year: 2022,
                description:
                  'Mencapai tahap Seed A dengan rounding dari berbagai VC termasuk Sampoerna & AC Ventures sembari terus mengembangkan teknologi HR terkini.',
              },
              {
                image: AboutImg4,
                year: 2023,
                description:
                  'Gajiku terus berkembang untuk memenuhi kebutuhan dan memberikan solusi terbaik khususnya di bidang HR Technology',
              },
            ].map((dt, n: number): ReactNode => {
              return (
                <div key={`about.${n}`} className="grid md:grid-cols-2 items-center gap-4">
                  <article className={classNames(n % 2 === 1 && 'order-last')}>
                    <div className="relative text-white mb-4">
                      <span className="absolute text-7xl font-bold z-0 opacity-10 -left-4 -top-14">{`#${n + 1}`}</span>
                      <h4 className="text-4xl font-extrabold z-1">{dt.year}</h4>
                    </div>
                    <p>{dt.description}</p>
                  </article>
                  <Image
                    alt={`Story ${n + 1}`}
                    className={classNames('max-h-96 hidden lg:block', n % 2 === 1 && 'order-first')}
                    src={dt.image}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="card card-bordered">
          <div className="card-body">
            <h2 className="text-primary text-center text-4xl mb-16 font-extrabold">Tim Gajiku</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center">
                <Avatar shape="circle" size={120} src={AboutSherman.src} />
                <h3 className="text-primary text-lg font-bold">Sherman Tanuwidjaja</h3>
                <div className="mb-6">
                  <p>Co-Founder/CEO</p>
                  <div className="flex justify-center">
                    <a href="https://www.linkedin.com/in/sherman-tanuwidjaja" target="_blank" rel="nofollow noopener">
                      <TbBrandLinkedin size={24} className="text-[#0a66c2]" />
                    </a>
                  </div>
                </div>
                <div className="grid gap-3">
                  <p>
                    Pitch and sold ~$300K project for Temasek. Led team recruitment and backend architecture as Tech
                    lead.
                  </p>
                  <p>Raised Pre-seed round with Sequioa, RTP and Febe Ventures as Co-Founder of Vara</p>
                  <p>
                    Founder 20-person dev shop, Ocurise Consultancy, and generated 400k in revenue in the first year
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar shape="circle" size={120} src={AboutHerry.src} className="mx-auto" />
                <h3 className="text-primary text-lg font-bold">Herry Gunawan </h3>
                <div className="mb-6">
                  <p>Co-Founder/CTO</p>
                  <div className="flex justify-center">
                    <a href="https://www.linkedin.com/in/herryg91" rel="nofollow noopener" target="_blank">
                      <TbBrandLinkedin size={24} className="text-[#0a66c2]" />
                    </a>
                  </div>
                </div>
                <div className="grid gap-3">
                  <p>
                    Tech lead at Tokopedia, Build search, personalization and recommendation team from scratch. Bult and
                    structured entire architecture and development.
                  </p>
                  <p>
                    Climbed Ruang Guru ladder from Engineering manager all the way to head of Engineering. Leading team
                    of 40 engineers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="card card-bordered">
          <div className="card-body">
            <h2 className="text-primary text-center text-4xl mb-16 font-extrabold">Founding Member</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  avatar: AboutCantika.src,
                  name: 'Cantika Dewi',
                  position: 'Head of Partnership',
                  linkedin: 'https://www.linkedin.com/in/cantika-dewi-498b681b3',
                },
                {
                  avatar: AboutHayu.src,
                  name: 'Tyas Hayuwuri',
                  position: 'Head of Operation and Account',
                  linkedin: 'https://www.linkedin.com/in/tyas-hayuwuri-067665bb',
                },
                {
                  avatar: AboutEffene.src,
                  name: 'Effene Herry',
                  position: 'Head of Engineer',
                  linkedin: 'https://www.linkedin.com/in/effene-herry',
                },
              ].map((dt, n: number): ReactNode => {
                return (
                  <div key={`member.${n}`} className="flex flex-col items-center text-center">
                    <Avatar shape="circle" size={120} src={dt.avatar} />
                    <h3 className="text-primary text-lg font-bold">{dt.name}</h3>
                    <p className="leading-5 mb-3">{dt.position}</p>
                    <a href={dt.linkedin} rel="nofollow noopener" target="_blank">
                      <TbBrandLinkedin size={24} className="text-[#0a66c2]" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
