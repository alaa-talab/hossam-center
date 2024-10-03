import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';

const Features = ({ id, header, items, additionalContent, columns = 3, hasBackground = false }: FeaturesProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="scroll-mt-16 max-w-6xl">
    {/* Render the headline if the header exists */}
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
    
    {/* Render the items grid */}
    <ItemGrid
      id={id}
      items={items}
      columns={columns}
      defaultColumns={2}
      containerClass={`pb-6 ${columns === 2 ? 'max-w-5xl' : ''}`}
      panelClass={`flex max-w-full ${columns === 2 ? 'sm:max-w-md mx-auto' : ''}`}
      iconClass="h-12 w-12 flex items-center justify-center rounded-md text-white bg-primary-900 p-2 md:p-3 mt-1.5 mb-4 mr-4 rtl:ml-4 rtl:mr-0"
      titleClass="mb-2 text-xl font-bold"
      descriptionClass="text-gray-600 dark:text-slate-400"
      actionClass="justify-start"
    />

    {/* Render the additional content if available */}
    {additionalContent && (
      <div className="mt-8 space-y-6">
        {additionalContent.map((content, index) => (
          <div key={index} className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
            <p className="text-gray-600 dark:text-slate-400">{content.description}</p>
          </div>
        ))}
      </div>
    )}
  </WidgetWrapper>
);

export default Features;
