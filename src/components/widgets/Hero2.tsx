import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero2 = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section
      id="heroTwo"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-red-500 to-gray-900 text-white"
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            className="object-cover w-full h-full opacity-60"
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 z-1"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-7xl mx-auto lg:text-left">
        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-10">
          {/* Text Content */}
          <div className="w-full max-w space-y-6 lg:space-y-8">
            {tagline && (
              <p className="text-sm font-bold uppercase tracking-widest text-center text-gray-200">
                {tagline}
              </p>
            )}
            {title && (
              <h1 className="text-4xl lg:text-6xl font-extrabold text-center leading-tight tracking-tight">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-lg lg:text-2xl font-light text-center text-indigo-100">
                {subtitle}
              </p>
            )}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
          {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
        </div>
          </div>

          {/* Image Section */}
          {image && (
            <div className="relative flex-shrink-0 w-full max-w-xl">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  className="object-cover"
                  src={image.src}
                  alt={image.alt}
                  width={640}
                  height={480}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  placeholder="blur"
                  loading="eager"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero2;
