import {
  IconAddressBook,
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconCarCrash,
  IconCarGarage,
  IconCarTurbine,
  IconChevronsRight,
  IconComponents,
  IconDeviceDesktopAnalytics,
  IconListCheck,
  IconRocket,
  IconRotate2,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';


import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'Our Services',
  subtitle:
    'Providing top-tier Honda maintenance and original spare parts for over 30 years. Our commitment to quality and excellence ensures your car runs smoothly for years to come ',
  
  callToAction: {
    text: 'Book a Service',
    href: '/contact',
    icon: IconAddressBook,
    targetBlank: false,
  },
  callToAction2: {
    text: 'Learn more',
    href: '/about',
  },
  image: {
    src: `https://res.cloudinary.com/dvcfefmys/image/upload/v1728064796/services_hero_cover_khe1qq.webp`,
    alt: 'Hero TailNext',
  },
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Our Top 5 Services',
  },
  items: [
    {
      title: 'Maintenance',
      description: 'Our skilled technicians are fully equipped to provide comprehensive maintenance services, ensuring your vehicle operates at peak performance, delivering reliability, safety, and efficiency in every drive.',
      icon: IconCarGarage,
      callToAction: {
        text: 'Learn more',
        href: '/services#engine-maintenance',
      },
    },
    {
      title: 'Spare Parts',
      description: 'Get high-quality spare parts for your Honda, ensuring optimal performance and safety.',
      icon: IconCarTurbine,
      callToAction: {
        text: 'Learn more',
        href: '/services/Spare-Parts',
      },
    },
    {
      title: 'Radar Calibration',
      description: 'Ensure your vehicles safety systems function accurately with precise radar calibration by our expert technicians.',
      icon: IconCarCrash,
      callToAction: {
        text: 'Discover now',
        href: '/services/Radar-Calibration',
      },
    },
    {
      title: 'Car Computer Diagnostic',
      description: 'Our advanced car computer diagnostic tools ensure accurate assessments to maintain your vehicle’s performance.',
      icon: IconDeviceDesktopAnalytics,
      callToAction: {
        text: 'Learn more',
        href: '/services/Car-Computer-Diagnostic',
      },
    },
    {
      title: 'Computer Software Update',
      description:
        'Keep your vehicles systems up-to-date with our computer software updates, ensuring optimal performance.',
        icon: IconRotate2, // Update with an appropriate icon
        callToAction: {
          text: 'Learn more',
          href: '/services/Computer-Software-Update',
        },
    },
  ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  content:
    'At Hossam Maintenance Center, we take pride in offering specialized services designed to keep your Honda running smoothly. From comprehensive inspections to advanced diagnostics, we ensure the best care for your vehicle.',
  items: [
    {
      title: 'Comprehensive Inspections',
      description: 'Our thorough vehicle inspections identify areas needing attention, ensuring safety and reliability.',
    },
    {
      title: 'Engine and Mechanical Work',
      description: 'Our experts provide in-depth engine diagnostics and repairs to enhance your car’s performance and fuel efficiency.',
    },
    {
      title: 'Oil Change and Brake Check',
      description: 'We use only high-quality oil and perform brake checks to ensure long-term reliability and safety.',
    },
  ],
  image: {
    src: 'https://res.cloudinary.com/dvcfefmys/image/upload/v1728121857/Hossam_Maintenance_Center_u6pk8i.webp',
    alt: 'Honda Car Inspection',
  },
  isReversed: true,
  isAfterContent: false,
};


// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  hasBackground: false,
  content:
    'Our maintenance process follows a detailed, step-by-step approach to ensure your Honda is serviced with the utmost care and precision.',
  items: [
    {
      title: 'Step 1: Comprehensive Inspection',
      description: 'We start with a complete vehicle inspection to identify issues and areas that require immediate attention.',
    },
    {
      title: 'Step 2: Engine and Mechanical Work',
      description: 'Our technicians perform detailed engine diagnostics and repairs to enhance performance and fuel efficiency.',
    },
    {
      title: 'Step 3: Oil Change and Brake Check',
      description: 'We use high-quality oil for changes and perform thorough brake checks to ensure safety.',
    },
    {
      title: 'Step 4: Ready for the Road',
      description: 'Once all maintenance is complete, we ensure your Honda is in optimal condition for your next drive.',
    },
  ],
  image: {
    src: 'https://res.cloudinary.com/dvcfefmys/image/upload/v1728121857/Oil_Change_and_Brake_Check_ad1xib.webp',
    alt: 'Honda Maintenance Process',
  },
  isReversed: false,
  isAfterContent: true,
};


// Feature4 data on Services page *******************
export const features4Services: FeaturesProps = {
  id: 'featuresFour-on-services',
  hasBackground: true, // Adds a background for better section visibility
  columns: 2, // Defines two columns for better content arrangement
  header: {
    title: 'Why Choose Hossam Maintenance Center?',
    subtitle:
      'For over 30 years, we have been a trusted provider of Honda car maintenance services, offering expertise, genuine parts, and unparalleled customer satisfaction. Our commitment to quality and excellence sets us apart.',
  },
  isImageDisplayed: true, // Controls whether the image is displayed alongside text
  image: {
    src: 'https://res.cloudinary.com/dvcfefmys/image/upload/v1728121841/Certified_Technicians_kbnwau.jpg',
    alt: 'Honda Car Service Image', // A relevant description for the image
  },
  items: [
    {
      title: 'Certified Technicians',
      description: 'Our skilled technicians are fully certified and trained in Honda vehicle maintenance, ensuring top-quality service and attention to detail.',
      icon: IconListCheck, // Relevant icon to represent certification and quality assurance
    },
    {
      title: 'Genuine Honda Parts',
      description: 'We use only genuine Honda parts to ensure your vehicle maintains its original performance, reliability, and safety standards.',
      icon: IconCarTurbine, // Relevant icon to represent genuine parts
    },
    {
      title: 'State-of-the-Art Diagnostics',
      description: 'Our facility is equipped with the latest diagnostic tools to accurately assess and repair your Honda, from engine diagnostics to radar calibration.',
      icon: IconDeviceDesktopAnalytics, // Represents advanced diagnostic tools
    },
    {
      title: '30+ Years of Experience',
      description: 'With over 30 years of experience in Honda maintenance, we have built a reputation for trust, reliability, and customer satisfaction.',
      icon: IconRocket, // Represents experience and trustworthiness
    },
    {
      title: 'Comprehensive Maintenance Services',
      description: 'From regular oil changes to advanced engine repairs, our maintenance services cover every aspect of your Honda\'s care to ensure long-lasting performance.',
      icon: IconCarGarage, // Represents maintenance services
    },
    {
      title: 'Customer-Centric Approach',
      description: 'We prioritize customer satisfaction and work closely with you to ensure your vehicle receives the best care possible, keeping you informed every step of the way.',
      icon: IconBulb, // Represents customer-centric innovation and care
    },
  ],
};


// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'Satisfied Client Experiences',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Mohammad Shatarah',
      job: 'From Google Reviews',
      testimonial: `Amazing helpul peaople, ask for yazeed, they saved me a ton of money and restored my car`,
      image: {
        src: 'https://lh3.googleusercontent.com/a/ACg8ocLUoX8k2HZ8wOF4IOjONv6psceKZFnxM9j-1c_0sPeABNuo5g=w60-h60-p-rp-mo-br100',
        alt: 'Mohammad Shatarah',
      },
      href: 'https://g.co/kgs/sifbydC',
    },
    {
      name: 'Mohammad Hasan',
      job: 'From Google Reviews',
      testimonial: `Great services from both Husam and Ziad Thank you !`,
      image: {
        src: 'https://lh3.googleusercontent.com/a/ACg8ocJYEFSDB2ZkcNULPNevDkW2J5mGgtTUQqvSNvkCGMF1vsaWvw=w60-h60-p-rp-mo-ba3-br100',
        alt: 'Mohammad Hasan',
      },
      href: 'https://g.co/kgs/h6QjfFE',
    },
    {
      name: 'Hazem Hamadneh',
      job: 'From Google Reviews',
      testimonial: `Highly experienced and professionally-minded employees.`,
      image: {
        src: 'https://lh3.googleusercontent.com/a/ACg8ocK2YViqh7PJHn9O7GNCQz7zpRdSemM6wnFB_UbBLmu-wm8rIA=w60-h60-p-rp-mo-ba2-br100',
        alt: 'Hazem Hamadneh',
      },
      href: 'https://g.co/kgs/LJtx3Ui',
    },
    {
      name: 'Yazeed Samara',
      job: 'From Google Reviews',
      testimonial: `Very good`,
      image: {
        src: 'https://lh3.googleusercontent.com/a/ACg8ocIdbl27sUe6pRGamlSR_c7poFIlD-vMbbimmCYBpoK0Bi0pAw=w60-h60-p-rp-mo-br100',
        alt: 'Yazeed Samara',
      },
      href: 'https://g.co/kgs/j7uU89H',
    },
    {
      name: 'Waleed Mohammad',
      job: 'From Google Reviews',
      testimonial: `Very good place kind people who try to keep your car in good condition`,
      image: {
        src: 'https://lh3.googleusercontent.com/a-/ALV-UjV-C765z9QwXrhjvzXXmsNbPqXT_I5wd6VUJicVokKKO8ToBYsK=w60-h60-p-rp-mo-ba2-br100',
        alt: 'Waleed Mohammad',
      },
      href: 'https://g.co/kgs/DUYEbq6',
    },
    {
      name: 'Saed Aladam',
      job: 'From Google Reviews',
      testimonial: `Amazing service`,
      image: {
        src: 'https://lh3.googleusercontent.com/a/ACg8ocIrbGjAvkMM_5tXX00VX9zTbbU2OLAzRxnxnYTdHIs7BXZ5aQ=w60-h60-p-rp-mo-br100',
        alt: 'Saed Aladam',
      },
      href: 'https://g.co/kgs/vCj6Dd9',
    },
  ],
  callToAction: {
    targetBlank: true,
    text: 'More testimonials...',
    href: '/',
  },
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Here you can find answers to the most common questions about our Honda car maintenance services.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'What services does Hossam Center for Maintenance provide?',
      description: `We specialize in the maintenance of Honda vehicles, offering services such as comprehensive vehicle inspections, oil and filter changes, engine maintenance, brake system checks, air conditioning services, and the installation of original spare parts.`,
    },
    {
      title: 'Do you offer original Honda parts?',
      description: `Yes, we provide both original and high-quality commercial spare parts for Honda vehicles. We ensure that all parts meet the highest standards of performance and durability.`,
    },
    {
      title: 'How can I book a maintenance appointment?',
      description: `You can easily book a maintenance appointment by contacting us via phone, email, or through the online booking form on our website. We recommend booking in advance to ensure availability.`,
    },
    {
      title: 'Do you offer a vehicle inspection service?',
      description: `Yes, we offer a comprehensive vehicle inspection service that covers all essential components, including the engine, brakes, air conditioning, and overall vehicle performance to ensure everything is running smoothly.`,
    },
    {
      title: 'How often should I service my Honda vehicle?',
      description: `It is recommended to service your Honda vehicle every 5,000 to 7,500 miles, depending on the model and usage. Regular maintenance ensures optimal performance and longevity of your car.`,
    },
    {
      title: 'Can I get a quote before the maintenance starts?',
      description: `Absolutely. We provide detailed cost estimates after a thorough inspection of your vehicle. This ensures transparency and allows you to understand the work needed before proceeding.`,
    },
  ],
};


// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: false,
  title: 'Have any more questions?',
  subtitle:
    'If you need further information or have any inquiries about our services, feel free to contact us. Our team is here to assist you.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};

