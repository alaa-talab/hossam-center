import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne" className="relative w-full h-[calc(100vh-200px)] overflow-hidden">
      <div className="absolute inset-0">
        {image && (
          <Image
            className="object-cover w-full h-full"
            src={image.src}
            alt={image.alt}
            layout="fill" // Ensures the image fills the container
            priority
          />
        )}
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-32"> {/* Adjusted padding */}
        <div className="flex flex-col items-center justify-center h-full text-center text-white">
          {title && (
            <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mb-6 text-xl font-normal max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
            {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
            {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn btn-secondary" />}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Optional overlay for better text contrast */}
    </section>
  );
};

export default Hero;
