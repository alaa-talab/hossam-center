import { footerData } from '~/shared/data/global.data';
import Logo from '~/components/atoms/Logo'; // Import your logo component
import Link from 'next/link'; // Import Link from Next.js

const Footer = () => {
  const { title, links, columns, socials, footNote } = footerData;

  return (
    <footer className="relative border-t border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-gray-900">
      <div className="relative mx-auto max-w-7xl px-4 py-10 dark:text-slate-300 sm:px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12 py-8 md:py-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="mb-6">
              <Link href="/" passHref>
                <Logo /> {/* Use the Logo component here */}
              </Link>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              We provide exceptional maintenance services for Honda vehicles. Visit us for all your car service needs!
            </p>
            <ul className="flex space-x-4 rtl:space-x-reverse">
              {links &&
                links.map(({ label, href }, index) => (
                  <li key={`item-link-${index}`}>
                    {href ? (
                      <Link
                        href={href} // Only render if href is defined
                        className="duration-150 ease-in-out hover:text-primary-500 dark:hover:text-primary-400 text-gray-600 dark:text-gray-400"
                        aria-label={label}
                      >
                        {label}
                      </Link>
                    ) : (
                      <span className="text-muted">{label}</span> // Fallback for undefined href
                    )}
                    {links.length - 1 !== index && <span className="mx-1 text-gray-400">·</span>}
                  </li>
                ))}
            </ul>
          </div>

          {columns.map(({ title, links }, index) => (
            <div key={`item-column-${index}`} className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-300">{title}</div>
              <ul className="text-sm space-y-2">
                {links &&
                  links.map(({ label, href }, index2) => (
                    <li key={`item-column-link-${index2}`}>
                      <Link
                        href={href ?? '/'} // Provide fallback href if undefined
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-150 ease-in-out"
                        aria-label={label}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
          <div className="md:flex md:items-center md:justify-between">
            <ul className="mb-6 md:mb-0 flex space-x-6 rtl:space-x-reverse">
              {socials.map(({ label, icon: Icon, href }, index) => (
                <li key={`item-social-${index}`}>
                  {href ? (
                    <Link
                      href={href} // Only render if href is defined
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-150 ease-in-out"
                      aria-label={label}
                    >
                      {Icon && <Icon className="h-6 w-6" />}
                    </Link>
                  ) : (
                    <span className="text-muted">{label}</span> // Fallback for undefined href
                  )}
                </li>
              ))}
            </ul>
            <div className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              {footNote}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
