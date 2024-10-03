import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';
import Image from 'next/image';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'Discover the services provided by Hossam Center for Honda vehicle maintenance.',
    href: '/services',
  },
  callToAction2: {
    text: 'Follow us for updates on social media!',
    href: 'https://twitter.com/hossamcenter',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'About Us',
      href: '/about',
    },
    {
      label: 'Contact Us',
      href: '/contact',
    },
  ],
  actions: [
    {
      text: 'Book Appointment',
      href: '/contact',
      targetBlank: false,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'Hossam Center',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
    {
      label: 'FAQs',
      href: '/faqs',
    },
  ],
  columns: [
    {
      title: 'Services',
      links: [
        {
          label: 'Engine Maintenance',
          href: '/services#engine-maintenance',
        },
        {
          label: 'Brake Inspection',
          href: '/services#brake-inspection',
        },
        {
          label: 'Oil Change',
          href: '/services#oil-change',
        },
        {
          label: 'Original Spare Parts',
          href: '/services#spare-parts',
        },
        {
          label: 'Comprehensive Vehicle Checkup',
          href: '/services#vehicle-checkup',
        },
      ],
    },
    {
      title: 'Contact',
      links: [
        {
          label: 'Call us: +962 123 4567',
          href: 'tel:+9621234567',
        },
        {
          label: 'Email: info@hossamcenter.com',
          href: 'mailto:info@hossamcenter.com',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'FAQs',
          href: '/faqs',
        },
        {
          label: 'Customer Support',
          href: '/support',
        },
        {
          label: 'Appointment Booking',
          href: '/contact',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/hossamcenter' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://instagram.com/hossamcenter' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://facebook.com/hossamcenter' },
    { label: 'RSS', icon: IconRss, href: '/rss' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://dfeelings.com/' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm flex items-center">
      {/* Use the logo */}
      <Image
        src="https://dfeelings.com/wp-content/uploads/2024/02/Dfeelings-logo-white.svg"
        alt="Dfeelings Logo"
        width={24} // Adjust width as needed
        height={24} // Adjust height as needed
        className="mr-2 rtl:ml-2 h-6" // CSS classes for styling
      />
      <span className="text-gray-600 dark:text-gray-400">
        All rights reserved to Hossam Center 2024
      </span>
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
    {
      label: 'FAQs',
      href: '/faqs',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['Hossam Maintenance Center, Amman, Jordan'],
    },
    {
      title: 'Phone',
      texts: ['Mobile: +962 123 4567', 'Office: +962 987 6543'],
     
    },
    {
      title: 'Email',
      texts: ['info@hossamcenter.com'],
      
    },
    {
      logo: {
        src: '/Website Logo.png',  // Path to your logo image
        alt: 'Logo Alt Text',
        width: 300,  // Specify the width
        height: 300,  // Specify the height
      },
    }
  ],
  socials: [
    { label: 'Tiktok', icon: IconBrandTiktok, href: 'https://tiktok.com' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://instagram.com' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://facebook.com' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm flex items-center">
      <a href="https://dfeelings.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="https://dfeelings.com/wp-content/uploads/2024/02/Dfeelings-logo-white.svg"
          alt="Dfeelings Logo"
          width={75}
          height={75}
          className="mr-2 rtl:ml-2"
        />
      </a>
      <span className="text-gray-600 dark:text-gray-400">
        All rights reserved to Hossam Center 2024
      </span>
    </div>
  ),
};


  

