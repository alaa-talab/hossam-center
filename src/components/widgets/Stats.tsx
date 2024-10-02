"use client"; // Add this at the very top of the file
import CountUp from 'react-countup';
import { StatsProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Stats = ({ items, id, hasBackground = false }: StatsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <div className="row-gap-8 grid grid-cols-2 md:grid-cols-3">
      {items.map(({ title, description }, index) => {
        const numericTitle = typeof title === 'string' ? title.replace(/[^0-9]/g, '') : '0'; // Ensure title is a string

        return (
          <div
            key={`item-stat-${index}`}
            className="mb-12 text-center md:mb-0 md:border-r md:last:border-none dark:md:border-slate-500"
          >
            <div className="font-heading text-primary text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">
              <CountUp
                start={0}
                end={parseInt(numericTitle, 10)} // Extract numeric part
                duration={2} // Animation duration in seconds
                separator="," // Add commas for large numbers
              />
              {/* If needed, append the '+' sign after count */}
              {typeof title === 'string' && title.includes('+') && '+'}
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base">
              {description}
            </p>
          </div>
        );
      })}
    </div>
  </WidgetWrapper>
);

export default Stats;
