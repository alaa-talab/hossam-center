import Image from 'next/image';
import { SocialProofProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const SocialProof = ({ images, id, hasBackground = false }: SocialProofProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="mt-6 mb-0"> {/* Adjust margin to keep it close to hero section */}
    {/* Adjust gap to balance space and ensure consistent layout */}
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 min-h-[150px]"> 
      {images &&
        images.map(({ src, alt, link }, index) => (
          <div 
            key={`item-social-proof-${index}`} 
            className="flex items-center justify-center w-24 md:w-32 lg:w-40"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Image
                src={src}
                alt={alt}
                className="h-auto w-full opacity-50 transition-opacity duration-300 hover:opacity-100"
                style={{ objectFit: 'contain' }} 
                width={150} 
                height={150}  
              />
            </a>
          </div>
        ))}
    </div>
  </WidgetWrapper>
);

export default SocialProof;
