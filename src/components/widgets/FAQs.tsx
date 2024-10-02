import WidgetWrapper from '../common/WidgetWrapper'; 
import Headline from '../common/Headline'; 
import ItemGrid from '../common/ItemGrid'; 
import { IconArrowDownRight } from '@tabler/icons-react';
import { FAQsProps } from '~/shared/types'; 

const FAQs = ({ header, tabs, columns = 2, id, hasBackground = false }: FAQsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-6" />}
    
    {/* Loop through the tabs */}
    {tabs?.map((tab, index) => (
      <div key={index} className="mt-12">
        {tab.link && (
          <h3 className="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-300">
            {tab.link.label}
          </h3>
        )}
        <ItemGrid
          items={tab?.items || []}
          columns={columns}
          defaultColumns={2}
          defaultIcon={IconArrowDownRight}
          containerClass="mt-6 grid gap-8 md:gap-12"
          panelClass="flex flex-col md:flex-row items-start md:items-center max-w-full bg-white dark:bg-slate-800 shadow-md rounded-lg p-6 md:p-8"
          titleClass="text-lg font-semibold mb-2 text-gray-800 dark:text-white"
          descriptionClass="text-sm font-normal text-gray-600 dark:text-slate-400"
          iconClass="flex-shrink-0 mr-4 mt-1 w-8 h-8 bg-primary-900 dark:bg-primary-600 text-white p-2 rounded-md"
        />
      </div>
    ))}
  </WidgetWrapper>
);

export default FAQs;
