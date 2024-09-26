import Image from 'next/image';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Contact = ({ header, content, items, image, id, hasBackground = false }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="grid md:grid-cols-2 gap-10 items-stretch justify-center">
      {/* Contact Information */}
      <div className="pr-6">
        {content && <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">{content}</p>}
        <ul className="mb-6 md:mb-0">
          {items &&
            items.map(({ title, description, icon: Icon }, index) => (
              <li key={`item-contact-${index}`} className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <div className="ml-4 rtl:ml-0 rtl:mr-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
                  {/* Ensure phone numbers are in two lines */}
                  {typeof description === 'string' ? (
                    <p key={`text-description-${index}`} className="text-gray-600 dark:text-slate-400">
                      {description}
                    </p>
                  ) : (
                    description && description.map((descLine, lineIndex) => (
                      <p key={`text-description-${lineIndex}`} className="text-gray-600 dark:text-slate-400">
                        {descLine}
                      </p>
                    ))
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>

      {/* Image on the Right */}
      {image && (
        <div className="flex justify-center items-center">
          <Image
            src={image.src}
            alt={image.alt}
            width={500} // Adjust the width according to your layout
            height={500} // Adjust the height accordingly
            className="rounded-lg shadow-lg"
            placeholder="blur"
            objectFit="cover"
          />
        </div>
      )}
    </div>
  </WidgetWrapper>
);

export default Contact;
