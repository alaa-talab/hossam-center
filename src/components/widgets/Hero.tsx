import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne">
    <div className="relative w-full h-[80vh] sm:h-[90vh] lg:h-[100vh] overflow-hidden object-fill">
      {image && (
        <Image
          className="absolute right-2 w-full h-full object-cover object-center "
          src={image.src}
          alt={image.alt}
          layout="fill"
          sizes="100vw"
          priority
        />
      )}
    </div>
    <div className="relative z-10 mx-auto max-w-full text-center py-12 md:py-20 bg-gradient-to-b from-black/80 to-black/0 text-white ">
      {tagline && (
        <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
          {tagline}
        </p>
      )}
      {title && (
        <h1 className="leading-tighter font-heading mb-6 text-2xl font-bold tracking-tighter md:text-5xl lg:text-5xl ">
          {title}
        </h1>
      )}
      <div className="mx-auto max-w-3xl">
        {subtitle && <p className="mb-6 text-xl font-normal text-gray-100 dark:text-slate-200">{subtitle}</p>}
        <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
          {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
          {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
