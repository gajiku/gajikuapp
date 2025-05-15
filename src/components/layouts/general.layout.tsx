import { Button, Dropdown, Footer, Navbar } from 'react-daisyui';
import { FaInstagram, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import LogoSquare from '@/assets/logo.png';
import LogoWide from '@/assets/logo-wide.png';
import { ReactNode } from 'react';
import classNames from 'classnames';

type Props = { children?: ReactNode; className?: string };

export const DefaultLayout = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed w-full bg-white z-40">
        <Navbar className="lg:px-16 shadow h-20">
          <Navbar.Start>
            <Dropdown>
              <Button tag="label" color="ghost" tabIndex={0} className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </Button>
              <Dropdown.Menu tabIndex={0} className="w-52 menu-sm z-[1] bg-white">
                <li>
                  <a>Produk Kami</a>
                  <ul className="p-2">
                    <li>
                      <Link href="/earned-wage-access">Earned Wage Access</Link>
                    </li>
                    <li>
                      <Link href="/produk/absensi-karyawan">Absensi Karyawan (Online)</Link>
                    </li>
                    <li>
                      <Link href="/produk/payroll">Payroll</Link>
                    </li>
                    <li>
                      <Link href="/produk/reimbursement">Reimbursement System</Link>
                    </li>
                    <li>
                      <Link href="/salary-loan">Salary Loan</Link>
                    </li>
                    <li>
                      <Link href="/employee-loan">Employee Loan</Link>
                    </li>
                    <li>
                      <Link href="/product-digital">Digital Product</Link>
                    </li>
                    <li>
                      <Link href="/produk/production-tracker">Production Tracker</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Tentang Gajiku</a>
                  <ul className="p-2">
                    <li>
                      <Link href="/about">Tim Gajiku</Link>
                    </li>
                    <li>
                      <Link href="#">Testimoni</Link>
                    </li>
                  </ul>
                </li>
                <Dropdown.Item href="/blog">Blog</Dropdown.Item>
                <Dropdown.Item href="/contact-us">Kontak Kami</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link href="/">
              <Image src={LogoWide} alt="Gajiku" className="h-fit" width="167" />
            </Link>
          </Navbar.Start>
          <Navbar.Center className="hidden lg:flex">
            <Dropdown hover={true}>
              <Dropdown.Toggle
                className="btn btn-ghost hover:bg-gray-100 rounded-btn text-base text-primary font-semibold"
                button={false}
              >
                Produk Kami
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-white w-max text-base text-primary font-semibold">
                <Dropdown.Item href="/earned-wage-access">Earned Wage Access</Dropdown.Item>
                <Dropdown.Item href="/produk/absensi-karyawan">Absensi Karyawan (Online)</Dropdown.Item>
                <Dropdown.Item href="/produk/payroll">Payroll</Dropdown.Item>
                <Dropdown.Item href="/produk/reimbursement">Reimbursement System</Dropdown.Item>
                <Dropdown.Item href="/salary-loan">Salary Loan</Dropdown.Item>
                <Dropdown.Item href="/employee-loan">Employee Loan</Dropdown.Item>
                <Dropdown.Item href="/product-digital">Digital Product</Dropdown.Item>
                <Dropdown.Item href="/produk/production-tracker">Production Tracker</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown hover={true}>
              <Dropdown.Toggle
                className="btn btn-ghost hover:bg-gray-100 rounded-btn text-base text-primary font-semibold"
                button={false}
              >
                Tentang Gajiku
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-white w-max text-base text-primary font-semibold">
                <Dropdown.Item href="/about">Tim Gajiku</Dropdown.Item>
                <Dropdown.Item href="#">Testimoni</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button
              tag="a"
              className="btn btn-ghost hover:bg-gray-100 rounded-btn text-base text-primary font-semibold"
              href="/blog"
            >
              Blog
            </Button>
            <Button
              tag="a"
              className="btn btn-ghost hover:bg-gray-100 rounded-btn text-base text-primary font-semibold"
              href="/contact-us"
            >
              Kontak Kami
            </Button>
          </Navbar.Center>
          <Navbar.End>
            <Button tag="a" color="primary" className="text-white" size="sm" href="/contact-us">
              Coba Sekarang <HiArrowRight />
            </Button>
          </Navbar.End>
        </Navbar>
      </div>
      <div className={classNames('grow pt-20', props.className)}>{props.children}</div>
      <Footer className="p-10 bg-gray-100 ">
        <div>
          <Link href="/">
            <Image src={LogoSquare} alt="Gajiku" className="h-fit" width="40" />
          </Link>
          <p>
            <span>© 2023 Sampradaa Pte Ltd </span>
            <br />
            <span>Jakarta - Indonesia</span>
          </p>
          <p>
            Email:{' '}
            <Link href="mailto:support@gajikuapp.com" color="primary">
              support@gajikuapp.com
            </Link>
          </p>
          <div className="flex gap-x-6 mt-3">
            <a
              href="https://instagram.com/gajikuapp?igshid=ZDg1NjBiNjg="
              className="text-3xl"
              target="_blank"
              rel="nofollow noopener"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/gajiku"
              className="text-3xl"
              target="_blank"
              rel="nofollow noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=6281119209415&text&type=phone_number&app_absent=0"
              className="text-3xl"
              target="_blank"
              rel="nofollow noopener"
            >
              <FaWhatsappSquare />
            </a>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <Footer.Title>Tentang Kami</Footer.Title>
          <Link href="/about" className="link link-hover">
            Tentang Gajiku
          </Link>
          <Link href="/privacy-policy" className="link link-hover">
            Kebijakan Privasi
          </Link>
          <Link href="/contact-us" className="link link-hover">
            Kontak
          </Link>
        </div>
        <div>
          <Footer.Title>Produk</Footer.Title>
          <Link href="/earned-wage-access" className="link link-hover">
            Earned Wage Access
          </Link>
          <Link href="/produk/absensi-karyawan" className="link link-hover">
            Absensi Karyawan (Online)
          </Link>
          <Link href="/produk/payroll" className="link link-hover">
            Payroll
          </Link>
          <Link href="/produk/reimbursement" className="link link-hover">
            Reimbursement System
          </Link>
          <Link href="/salary-loan" className="link link-hover">
            Salary Loan
          </Link>
          <Link href="/employee-loan" className="link link-hover">
            Employee Loan
          </Link>
          <Link href="/product-digital" className="link link-hover">
            Digital Product
          </Link>
          <Link href="/produk/production-tracker" className="link link-hover">
            Production Tracker
          </Link>
        </div>
        <div>
          <Footer.Title>Lainnya</Footer.Title>
          <Link href="/blog" className="link link-hover">
            Blog
          </Link>
          <Link href="#" className="link link-hover">
            Use Case
          </Link>
          <Link href="#" className="link link-hover">
            Panduan Penggunaan
          </Link>
        </div>
      </Footer>
    </div>
  );
};
