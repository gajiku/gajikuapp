import Iframe from 'react-iframe';
// import { IoLogoWhatsapp } from 'react-icons/io5';
import Link from 'next/link';
import { ReactNode } from 'react';
import classNames from 'classnames';

type Props = { children?: ReactNode; className?: string; header?: ReactNode };

export const ContactUsForm = (props: Props) => {
  return (
    <section className={classNames('container text-center', props.className)}>
      <div className="mb-4">{props.header}</div>
      {/* <a className="btn bg-green-500 hover:bg-green-600 mb-8 text-white" href="https://wa.me/6281119209415">
        <IoLogoWhatsapp size={18} />
        WhatsApp Kami
      </a> */}
      <Link href="/contact-us" className="btn btn-primary mb-8">
        Hubungi Kami
      </Link>
      <h2 className="text-slate-700 text-3xl mb-6 text-center font-extrabold">Atau langsung jadwalkan demo</h2>
      <div className="max-w-2xl mx-auto">
        <Iframe
          url="https://tally.so/embed/meE2je?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="100%"
          className="h-full min-h-[800px]"
          scrolling="no"
          frameBorder={0}
        />
      </div>
    </section>
  );
};
