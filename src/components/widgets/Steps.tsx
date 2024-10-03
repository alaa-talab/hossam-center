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
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass="max-w-7xl mx-auto px-6 lg:px-12 py-16"
  >
    <div
      className={`flex flex-col gap-12 md:gap-16 ${isReversed ? 'md:flex-row-reverse' : ''} ${
        isImageDisplayed ? 'md:flex-row' : ''
      }`}
    >
      {/* Steps and Content */}
      <div
        className={`md:py-4 ${
          isImageDisplayed
            ? 'md:pr-16 md:rtl:pr-0 md:rtl:pl-16 md:basis-1/2'
            : 'max-w-4xl mx-auto md:self-center'
        }`}
      >
        {header && (
          <Headline
            header={header}
            containerClass={isImageDisplayed ? 'text-left rtl:text-right' : 'text-center'}
            titleClass="text-4xl sm:text-5xl font-extrabold leading-tight"
            subtitleClass={`${isImageDisplayed ? 'text-left rtl:text-right' : 'text-center'} text-lg sm:text-xl text-gray-500`}
          />
        )}
       <Timeline
  items={items}
  defaultIcon={IconCheck}
  iconClass="text-primary border-primary-900"
  titleClass="animate-fadeInUp"
/>
      </div>

      {/* Image Section */}
      {isImageDisplayed && (
        <div className="relative flex items-center justify-center md:basis-1/2">
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={1200}
              height={800}
              objectFit="cover"
              placeholder="blur"
              className="rounded-xl shadow-2xl"
              quality={100}
            />
          )}
        </div>
      )}
    </div>
  </WidgetWrapper>
);

export default Steps;
