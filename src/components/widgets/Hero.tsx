import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, videoSrc }: HeroProps) => {
  return (
    <section id="heroOne" className="relative w-full h-screen overflow-hidden">
      {/* Full-width background video */}
      {videoSrc && (
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50 px-4 sm:px-6">
        {tagline && (
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-400">
            {tagline}
          </p>
        )}
        {title && (
          <h1 className="leading-tighter font-heading mb-4 text-3xl font-bold tracking-tight md:text-5xl lg:text-3xl">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="mb-6 text-sm font-normal text-gray-200 md:text-xl">
            {subtitle}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
          {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
