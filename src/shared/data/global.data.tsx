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
import Logo from '~/components/atoms/Logo';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'Discover the services provided by Hossam Center for Honda vehicle maintenance.',
    href: '/services',
  },
  callToAction2: {
    text: 'Follow us for updates on social media!',
    href: 'https://www.facebook.com/HondaHousam',
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
      links: [
        { label: 'Car Computer Diagnostic', href: '/services/Car-Computer-Diagnostic' },
        { label: 'Computer Software Update', href: '/services/Computer-Software-Update' },
        { label: 'Maintenance', href: '/services/Maintenance' },
        { label: 'Radar Calibration', href: '/services/Radar-Calibration' },
        { label: 'Spare Parts', href: '/services/Spare-Parts' },
      ],
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
          label: 'Maintenance',
          href: '/services/Maintenance',
        },
        {
          label: 'Spare Parts',
          href: '/services/Spare-Parts',
        },
        {
          label: 'Radar Calibration',
          href: '/services/Radar-Calibration',
        },
        {
          label: 'Car Computer Diagnostic',
          href: '/services/Car-Computer-Diagnostic',
        },
        {
          label: 'Computer Software Update',
          href: '/services/Computer-Software-Update',
        },
      ],
    },
    {
      title: 'Contact',
      links: [
        {
          label: 'Call us: +962 987 6543 ',
          href: 'tel:+9629876543',
        },
        {
          label: 'Email: hossamcenter@example.com',
          href: 'mailto:hossamcenter@example.com'
        }
        
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
          href: '/contact',
        },
        {
          label: 'Appointment Booking',
          href: '/contact',
        },
      ],
    },
  ],
  socials: [
    { label: 'Tiktok', icon: IconBrandTiktok, href: 'https://www.tiktok.com/@housam.maintenance.honda?_t=8qEW0swwCJj&_r=1' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/housammainten/' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://www.facebook.com/HondaHousam' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm flex items-center">
      {/* Light theme image */}
      <a href="https://dfeelings.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="https://dfeelings.com/wp-content/uploads/2024/02/black-logo-01.svg" // Light theme logo
          alt="Dfeelings Logo"
          width={75}
          height={75} 
          className="mr-2 rtl:ml-2 dark:hidden" // Visible in light theme, hidden in dark theme
        />
      </a>
      {/* Dark theme image */}
      <a href="https://dfeelings.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="https://dfeelings.com/wp-content/uploads/2024/02/Dfeelings-logo-white.svg" // Dark theme logo
          alt="Dfeelings Logo Dark"
          width={75}
          height={75}
          className="mr-2 rtl:ml-2 hidden dark:block" // Visible in dark theme, hidden in light theme
        />
      </a>
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


  

