import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import classNames from 'classnames';

type HeroProps = {
  background?: StaticImageData;
  image?: StaticImageData;
  children?: ReactNode;
  reverse?: boolean;
  title?: string;
};

export default function Hero(props: HeroProps) {
  return (
    <section>
      <div
        id="hero"
        className="container py-6 bg-center bg-no-repeat bg-cover object-cover"
        style={{
          backgroundImage: 'url(' + props.background?.src + ')',
        }}
      >
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col gap-8 text-slate-700">
            {props.title && <h1 className="text-primary text-5xl font-bold">{props.title}</h1>}
            {props.children}
          </div>
          {props.image && (
            <div className={classNames('content-center lg:block hidden', props.reverse && 'order-first')}>
              <Image src={props.image} alt="Hero Image" loading="lazy" />
            </div>
          )}
        </div>
      </div>
      <div
        id="separator"
        className="w-full overflow-hidden relative pb-36"
        style={{
          background: 'linear-gradient(0deg, rgb(63, 195, 197) 0%, white 100%)',
        }}
      >
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1695 876" xmlns="http://www.w3.org/2000/svg">
            <g fill="#fff" fillRule="evenodd">
              <path opacity=".61" d="M1695 0l-555.512 876H1695z"></path>
              <path opacity=".61" d="M0 872.81V703l1695 76L0 876z"></path>
              <path d="M0 872.729L1695 779v97H0z"></path>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
