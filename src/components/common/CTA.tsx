import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { CallToActionType, LinkOrButton } from '~/shared/types';

const CTA = ({ callToAction, containerClass, linkClass, iconClass }: LinkOrButton) => {
  const { text, href, icon: Icon, targetBlank } = callToAction as CallToActionType;

  return (
    <>
      {href && (text || Icon) && (
        <div className={twMerge('flex w-auto cursor-pointer', containerClass)}>
          {targetBlank ? (
            <Link
              className={twMerge(
                'inline-flex items-center justify-center w-full sm:mb-0 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
                linkClass
              )}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Icon && (
                <Icon className={twMerge(
                  `w-5 h-5 transition-colors duration-200 ${text ? 'mr-2 rtl:mr-0 rtl:ml-2' : ''}`,
                  iconClass
                )} />
              )}
              <span >
                {text}
              </span>
            </Link>
          ) : (
            <Link
              className={twMerge(
                'inline-flex items-center justify-center w-full sm:mb-0 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
                linkClass
              )}
              href={href}
            >
              {Icon && (
                <Icon className={twMerge(
                  `w-5 h-5 transition-colors duration-200 ${text ? 'mr-2 rtl:mr-0 rtl:ml-2' : ''}`,
                  iconClass
                )} />
              )}
              <span >
                {text}
              </span>
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default CTA;
