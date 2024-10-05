import Image from 'next/image';
import { FeaturesProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Headline from '../common/Headline';
import ItemGrid from '../common/ItemGrid';

const Features4 = ({
  header,
  items,
  columns = 2,
  image,
  isBeforeContent,
  isAfterContent,
  id,
  hasBackground = false,
  isImageDisplayed = true,
}: FeaturesProps) => (
  <WidgetWrapper
    id={id}
    hasBackground={hasBackground}
    containerClass={`${isBeforeContent ? 'md:pb-8 lg:pb-12' : ''} ${isAfterContent ? 'pt-0 md:pt-0 lg:pt-0' : ''}`}
  >
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl font-bold text-center" />}
    
    {/* Display Image */}
    {isImageDisplayed && image && (
      <div className="relative w-full h-96 md:h-[28rem] lg:h-[32rem] mt-8">
        <Image
          className="object-cover w-full h-full rounded-xl bg-gray-500 shadow-lg"
          src={image.src}
          alt={image.alt}
          layout="fill" // Ensures the image covers the full container while maintaining aspect ratio
          sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 80vw, 1280px"
        />
      </div>
    )}

    {/* Grid of Items */}
    <ItemGrid
      items={items}
      columns={columns}
      defaultColumns={4}
      containerClass={`mt-12 grid gap-8 ${columns === 2 ? 'max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}
      panelClass={`flex max-w-full ${columns === 2 ? 'sm:max-w-md mx-auto' : ''}`}
      titleClass="text-lg font-semibold mb-2 "
      descriptionClass="mt-1 text-gray-600 dark:text-gray-400"
      iconClass="flex-shrink-0 mx-auto w-10 h-10 text-primary-800 dark:text-primary-600 pr-2 mb-4 mr-2"
    />
  </WidgetWrapper>
);

export default Features4;
