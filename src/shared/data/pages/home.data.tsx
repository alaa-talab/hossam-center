import {
  IconArrowDown,
  IconPhone,
  IconBrandLinkedin,
  IconBrandVsco,
  IconBrandTwitter,
  IconRotate2,
  IconDeviceDesktopAnalytics,
  IconClock,
  IconCarTurbine,
  IconDownload,
  IconCarGarage,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconCarCrash,
  IconAddressBook,
  IconCalendar,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hossam-maintenance-hero.webp';
import hondalogo from '~/assets/images/hondalogo.webp';
import oemparts from '~/assets/images/honda-genuine.webp';
import AutoHonda from '~/assets/images/Auto Honda Body & Parts.png';
import bosch from '~/assets/images/Bosch-Logo.png';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import MaintenanceProcess from '~/assets/images/Maintenance Process.webp';
import HossamCenterBuilding from '~/assets/images/Hossam Center Building.webp';


// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Welcome to <span>Hossam Maintenance Center</span> - Specialized in <span>Honda</span> Car Maintenance
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          Hossam Maintenance Center
        </span>{' '}
        is a trusted center offering specialized maintenance and original spare parts for Honda cars. We are committed to
        excellence, professionalism, and ethical standards.
      </span>{' '}
      With over 30 years of experience, we provide top-tier services to ensure your Honda runs smoothly.
    </>
  ),
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
  videoSrc: '/videos/video hero cover.mp4',
  // The path to the video fil
};



// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://www.honda.com/',
      src: hondalogo,
      alt: 'Honda Logo',
    },
    {
      link: 'https://oempartsonline.com/',
      src: oemparts,
      alt: 'oem parts Logo',
    },
    {
      link: 'https://auto-honda-body-parts.odoo.com/',
      src: AutoHonda,
      alt: 'auto honda body & parts Logo',
    },
    {
      link: 'https://www.bosch.com/',
      src: bosch,
      alt: 'bosch Logo',
    },
  ],
};

// Features data for Hossam Center *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        What Hossam Center Offers for Your Honda
      </>
    ),
    subtitle:
      "Providing top-tier Honda maintenance and original spare parts for over 30 years. Our commitment to quality and excellence ensures your car runs smoothly for years to come.",
    tagline: 'Our Services',
  },
  items: [
    {
      title: 'Maintenance',
      description:
        'Our skilled technicians are fully equipped to provide comprehensive maintenance services, ensuring your vehicle operates at peak performance, delivering reliability, safety, and efficiency in every drive.',
      icon: IconCarGarage
      , // Update with an appropriate icon
      callToAction: {
        text: 'Learn more',
        href: '/services#engine-maintenance',
      },
    },
    {
      title: 'Spare Parts',
      description:
        'Get high-quality spare parts for your Honda, ensuring optimal performance and safety.',
      icon: IconCarTurbine, // Update with an appropriate icon
      callToAction: {
        text: 'Learn more',
        href: '/services#inspection',
      },
    },
    {
      title: 'Radar Calibration',
      description:
        'Ensure your vehicles safety systems function accurately with precise radar calibration by our expert technicians.',
      icon: IconCarCrash, // Update with an appropriate icon
      callToAction: {
        text: 'Discover now',
        href: '/services#oil-change',
      },
    },
    {
      title: 'Car Computer Diagnostic',
      description:
        'Our advanced car computer diagnostic tools ensure accurate assessments to maintain your vehicle’s performance.',
      icon: IconDeviceDesktopAnalytics, // Update with an appropriate icon
      callToAction: {
        text: 'Learn more',
        href: '/services#spare-parts',
      },
    },
    {
      title: 'Computer Software Update',
      description:
        'Keep your vehicles systems up-to-date with our computer software updates, ensuring optimal performance.',
      icon: IconRotate2, // Update with an appropriate icon
      callToAction: {
        text: 'Learn more',
        href: '/services#air-conditioning',
      },
    },
  
  ],
};


// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contact-section-one',
  hasBackground: true,
  header: {
    title: 'Get in Touch with Hossam Center',
    subtitle: 'We are here to assist you with all your Honda maintenance needs.',
    tagline: 'Contact Us',
  },
  content:
    'Whether you need to schedule an appointment, inquire about our services, or need help with your Honda, feel free to reach out. Our team is always ready to provide professional assistance.',
  items: [
    {
      title: 'Our Address',
      description: ['Hossam Center for Maintenance', '-Amman, Jordan'],
      icon: IconMapPin,
    },
    {
      title: 'Phone Numbers',
      description: ['+962 123 4567  ', ' +962 987 6543'],
      icon: IconPhone,
    },
    {
      title: 'Business Hours',
      description: ['Sunday - Thursday: 9 AM - 6 PM', 'Friday: Closed'],
      icon: IconClock,
    },
  ],
  image: {
    src: HossamCenterBuilding , // Provide the correct image path
    alt: 'Hossam Center Building',
  },
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contact-section-two',
  hasBackground: false,
  header: {
    title: 'Contact Hossam Center',
    subtitle: 'We are available to answer any inquiries.',
    tagline: 'Reach Us Anytime',
  },
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: MaintenanceProcess, // Replace with your actual image path
    alt: 'Maintenance Process',
  },
  header: {
    title: 'Step-by-Step Guide to Quality Car Maintenance',
  },
  items: [
    {
      title: 'Step 1: Comprehensive Inspection',
      description:
        'We begin every service with a thorough inspection of your Honda vehicle, identifying any areas that need immediate attention.',
      icon: IconArrowDown, // You can replace with any fitting icon for your branding.
    },
    {
      title: 'Step 2: Engine and Mechanical Work',
      description:
        'Our experts provide in-depth engine diagnostics and repairs to ensure optimal performance and fuel efficiency.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3: Oil Change and Brake Check',
      description:
        'We use only high-quality oil and perform a brake check to ensure safety and long-term reliability.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 4: Ready for the Road',
      description:
        'Once we’ve completed all necessary maintenance, we ensure that your vehicle is fully ready to hit the road.',
    },
  ],
};


// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our customers say about us',
    subtitle:
      'Discover how our services have made a difference for our valued clients.',
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
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
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


// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Etiam in libero, et volutpat',
        },
        {
          description: 'Aenean ac nunc dolor tristique',
        },
        {
          description: 'Cras scelerisque accumsan lib',
        },
        {
          description: 'In hac habitasse',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Proin vel laoreet',
        },
        {
          description: 'Ut efficitur egestas',
        },
        {
          description: 'Pellentesque ut nibh',
        },
        {
          description: 'Donec fringilla sem',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Curabitur suscipit risus',
        },
        {
          description: 'Aliquam blandit malesuada',
        },
        {
          description: 'Suspendisse sit amet',
        },
        {
          description: 'Suspendisse auctor dui',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'We are here to provide the best Honda vehicle services',
    tagline: 'Contact Us',
  },
  content:
    'Feel free to reach out to us for any inquiries, appointment scheduling, or additional information about our services. Our team is here to assist you with all your Honda vehicle maintenance needs.',
  items: [
    {
      title: 'Our Address',
      description: ['Hossam Maintenance Center, Amman, Jordan'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +962 123 4567', 'Email: hossamcenter@example.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Sunday - Thursday: 09:00 - 18:00', 'Friday: Closed'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Schedule a Service?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'message',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};


// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Exceptional Honda Vehicle Services',
  subtitle:
    'Experience top-tier maintenance and support for your Honda vehicle at Hossam Maintenance Center. Our expert team is ready to ensure your vehicle runs smoothly and efficiently.',
  callToAction: {
    text: 'Book Your Appointment',
    href: '/contact',
    icon: IconCalendar,
  },
  items: [
    {
      title: 'Learn About Our Services',
      description: 'Discover our full range of services for Honda vehicles.',
      href: '/services',
    },
    {
      title: 'Why Choose Us',
      description: 'We are committed to providing exceptional service with over 30 years of experience.',
      href: '/about',
    },
    {
      title: 'Subscribe for Updates',
      description: 'Stay informed about our latest offers and updates.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};

