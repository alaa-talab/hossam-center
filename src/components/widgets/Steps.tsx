import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';
import { StepsProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Timeline from '../common/Timeline';
import Headline from '../common/Headline';

const Steps = ({
  id,
  header,
  items,
  isImageDisplayed = true,
  image,
  isReversed = false,
  hasBackground = false,
}: StepsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl ">
    <div
      className={`flex flex-col gap-8 md:gap-12 ${isReversed ? 'md:flex-row-reverse' : ''} ${
        isImageDisplayed ? 'md:flex-row' : ''
      }`}
    >
      {/* Steps and Content */}
      <div
        className={`md:py-4 ${
          isImageDisplayed ? 'md:pr-16 md:rtl:pr-0 md:rtl:pl-16 md:basis-1/2' : 'max-w-4xl mx-auto md:self-center'
        }`}
      >
        {header && (
          <Headline
            header={header}
            containerClass={isImageDisplayed ? 'text-left rtl:text-right' : ''}
            titleClass="text-3xl sm:text-4xl"
            subtitleClass={isImageDisplayed ? 'text-left rtl:text-right' : ''}
          />
        )}
        <Timeline items={items} defaultIcon={IconCheck} iconClass="text-primary border-primary-900" />
      </div>

{/* Image */}
{isImageDisplayed && (
  <div className="relative flex items-center justify-center md:basis-1/2">
    {image && (
      <Image
        src={image.src}
        alt={image.alt}
        layout="responsive" // Ensures the image scales proportionally
        width={1200} // Replace this with the actual width of your image
        height={800}  // Replace this with the actual height of your image
        objectFit="contain" // Ensures the entire image is shown within the container
        placeholder="blur"
        className="rounded-md shadow-lg"
        quality={100}
      />
    )}
  </div>
)}

    </div>
  </WidgetWrapper>
);

export default Steps;
