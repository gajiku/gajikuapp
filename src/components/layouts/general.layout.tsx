import { Button, Dropdown, Navbar } from 'react-daisyui';
import { LuChevronsRight, LuMenu } from 'react-icons/lu';
import { TbBrandInstagram, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb';
import Container from '../sections/container';
import Image from 'next/image';
import Link from 'next/link';
import LogoSquare from '@/assets/logo.png';
import LogoWide from '@/assets/logo-wide.png';
import { MENU } from '@/config/menu';
import { ReactNode } from 'react';
import classNames from 'classnames';

const menu = [
  { label: 'Produk Kami', menu: MENU },
  { label: 'Tentang Gajiku', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontak Kami', href: '/contact-us' },
  { label: 'FAQ', href: '/faq' },
];

type Props = { children?: ReactNode; className?: string };

export const DefaultLayout = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed w-full bg-white z-40 shadow">
        <div className="container px-4">
          <Navbar className="px-0 h-20">
            <Navbar.Start>
              <Dropdown>
                <Button tag="label" color="ghost" shape="circle" tabIndex={0} className="lg:hidden">
                  <LuMenu size={22} />
                </Button>
                <Dropdown.Menu tabIndex={0} className="w-72 menu-sm z-[1] bg-white">
                  {menu.map((item, n) => {
                    const key = `nav.mobile.${n}`;

                    return (
                      <li key={key}>
                        {item.menu && (
                          <>
                            <a>{item.label}</a>
                            <ul className="p-2">
                              {item.menu.map((m) => {
                                return (
                                  <li key={m.to}>
                                    <Link href={m.to}>{m.label}</Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </>
                        )}

                        {item.href && <Link href={item.href}>{item.label}</Link>}
                      </li>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
              <Link href="/">
                <Image src={LogoWide} alt="Gajiku" className="h-fit" width="167" />
              </Link>
            </Navbar.Start>
            <Navbar.Center className="hidden lg:flex">
              {menu.map((item, n) => {
                const key = `nav.header.${n}`;

                if (item.menu) {
                  return (
                    <Dropdown key={key} hover>
                      <Dropdown.Toggle
                        className="btn btn-ghost hover:bg-white text-base text-primary font-semibold"
                        button={false}
                      >
                        {item.label}
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="w-max text-primary font-medium rounded-[28px]">
                        {item.menu.map((m) => {
                          return (
                            <li key={m.to}>
                              <Link href={m.to}>{m.label}</Link>
                            </li>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  );
                }

                return (
                  <Link
                    key={key}
                    className="btn btn-ghost hover:bg-white text-base text-primary font-semibold"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </Navbar.Center>
            <Navbar.End>
              <Button tag="a" color="primary" className="text-white" href="/contact-us">
                Coba Sekarang <LuChevronsRight />
              </Button>
            </Navbar.End>
          </Navbar>
        </div>
      </div>
      <div className={classNames('grow py-20', props.className)}>
        <Container>{props.children}</Container>
      </div>
      <footer className="bg-gray-50 py-6 text-sm">
        <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          <div className="grid gap-3">
            <Link className="w-fit" href="/">
              <Image alt="Gajiku" className="w-10 h-auto" src={LogoSquare} />
            </Link>
            <p>
              © {new Date().getFullYear()} Sampradaa Pte Ltd
              <br />
              Jakarta - Indonesia
            </p>
            <p>
              Email: <a href="mailto:support@gajikuapp.com">support@gajikuapp.com</a>
            </p>
            <div className="flex items-center gap-1.5">
              <a href="https://instagram.com/gajikuapp?igshid=ZDg1NjBiNjg=" rel="nofollow noopener" target="_blank">
                <TbBrandInstagram size={28} className="text-[#962fbf]" />
              </a>
              <a href="https://www.linkedin.com/company/gajiku" rel="nofollow noopener" target="_blank">
                <TbBrandLinkedin size={24} className="text-[#0a66c2]" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=6281119209415&text&type=phone_number&app_absent=0"
                rel="nofollow noopener"
                target="_blank"
              >
                <TbBrandWhatsapp size={24} className="text-[#075E54]" />
              </a>
            </div>
          </div>
          <div className="grid gap-3">
            <span className="mb-2 font-bold uppercase opacity-60">Tentang Kami</span>
            <nav>
              <ul className="grid gap-1">
                <li>
                  <Link href="/about" className="link link-hover">
                    Tentang Gajiku
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="link link-hover">
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="link link-hover">
                    Kontak
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="link link-hover">
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="grid gap-3">
            <span className="mb-2 font-bold uppercase opacity-60">Produk</span>
            <nav>
              <ul className="grid gap-1">
                {MENU.map((m) => {
                  return (
                    <li key={m.to}>
                      <Link href={m.to} className="link link-hover">
                        {m.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="grid gap-3">
            <span className="mb-2 font-bold uppercase opacity-60">Lainnya</span>
            <nav>
              <ul>
                <li>
                  <Link href="/blog" className="link link-hover">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};
