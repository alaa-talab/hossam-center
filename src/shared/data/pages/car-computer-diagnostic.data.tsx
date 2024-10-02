import { CallToActionProps, FAQsProps, HeroProps } from '~/shared/types';
import { IconAddressBook, IconMapPin, IconPhone, IconClock
} from '@tabler/icons-react';

// Hero data for Car Computer Diagnostic page
export const heroCarDiagnostic: HeroProps = {
  title: 'Car Computer Diagnostic',
  subtitle: 'Ensure your vehicle is running at peak performance with our advanced diagnostic services.',
  tagline: 'Accurate Diagnostics for Your Vehicle',
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
};

// Stats data for Car Computer Diagnostic page
export const statsCarDiagnostic = {
  id: 'stats-car-diagnostic',
  items: [
    { title: '20+', description: 'Years of experience in vehicle diagnostics.' },
    { title: '1000+', description: 'Vehicles diagnosed successfully.' },
    { title: '95%', description: 'Customer satisfaction rate.' },
  ],
};

// Features data for Car Computer Diagnostic page
export const featuresCarDiagnostic = {
  id: 'features-car-diagnostic',
  header: {
    title: 'Why Choose Our Diagnostic Services?',
    subtitle: 'We use the latest technology to identify and resolve vehicle issues quickly.',
  },
  items: [
    { title: 'Advanced Diagnostic Tools', description: 'We use state-of-the-art diagnostic equipment for precise issue identification.' },
    { title: 'Certified Technicians', description: 'Our experienced technicians provide expert diagnostics and solutions.' },
    { title: 'Comprehensive Reports', description: 'Receive detailed reports on the condition of your vehicle’s systems.' },
  ],
};



  

// Steps data for Car Computer Diagnostic page
export const stepsCarDiagnostic = {
  id: 'steps-car-diagnostic',
  items: [
    { title: 'Initial Consultation', description: 'Discuss any issues you’ve noticed with our technicians.' },
    { title: 'Comprehensive Diagnostic Scan', description: 'We run a full computer diagnostic to identify potential problems.' },
    { title: 'Detailed Report & Solution', description: 'We provide you with a full report and recommended solutions.' },
  ],
};

// FAQs data for Car Computer Diagnostic page
export const faqsCarDiagnostic: FAQsProps = {
  id: 'faqs-car-diagnostic',
  hasBackground: false,
  header: {
    title: 'Car Diagnostic FAQs',
    subtitle: 'Find answers to common questions about car diagnostics.',
    position: 'center',
  },
  tabs: [
    {
      link: { label: 'General Diagnostics', href: '/diagnostics' },
      items: [
        { title: 'What is a car computer diagnostic?', description: 'It is a scan of your car’s systems to detect potential issues using specialized tools.' },
        { title: 'How often should I get a diagnostic scan?', description: 'It’s recommended to perform a scan annually or when you notice unusual performance.' },
      ],
    },
  ],
};


// CallToAction data for Car Computer Diagnostic page
export const contactCarDiagnostic: CallToActionProps = {
  id: 'call-to-action-car-diagnostic',
  hasBackground: true,
  title: 'Need a Car Diagnostic?',
  subtitle: 'Contact us today to schedule a full car computer diagnostic and ensure your vehicle is in top condition.',
  form: {
    inputs: [
      { label: 'Name', type: 'text', placeholder: 'Enter your name' },
      { label: 'Email', type: 'email', placeholder: 'Enter your email' },
      { label: 'Message', type: 'textarea', placeholder: 'Enter your message' },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
  callToAction: { text: 'Book Now', href: '/contact' },
  
  // Add contact details with icons
  items: [
    {
      title: 'Our Address',
      description: 'Hossam Center for Maintenance-Amman, Jordan',
      icon: IconMapPin, // Add the MapPin icon
    },
    {
      title: 'Phone Numbers',
      description: ['+962 123 4567', '+962 987 6543'],
      icon: IconPhone, // Add the Phone icon
    },
    {
      title: 'Business Hours',
      description: ['Sunday - Thursday: 9 AM - 6 PM', 'Friday: Closed'],
      icon: IconClock, // Add the Clock icon
    },
  ],
};

