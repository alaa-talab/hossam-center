import { IconAddressBook } from '@tabler/icons-react';
import { CallToActionProps, FAQsProps, HeroProps } from '~/shared/types';

// Hero data for Car Computer Diagnostic page
export const heroCarDiagnostic: HeroProps = {
  title: 'Car Computer Diagnostic',
  subtitle: 'Advanced car code reader and computer diagnostic services to keep your vehicle running efficiently.',
  tagline: 'Reliable Diagnostics at Hossam Center',
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
  videoSrc: '/videos/Car Computer Diagnostic hero cover.mp4',
};

// Stats data for Car Computer Diagnostic page
export const statsCarDiagnostic = {
  id: 'stats-car-diagnostic',
  items: [
    { title: '30+', description: 'Years of experience in car diagnostics and repair.' },
    { title: '5000+', description: 'Vehicles diagnosed and serviced successfully.' },
    { title: '100%', description: 'Commitment to quality and customer satisfaction.' },
  ],
};

// Car Diagnostic Content
export const carCodeReaderContent = `
Hossam Center uses advanced car code reader devices to identify any problems with your vehicle. 
Using a car code reader, our technicians can detect issues related to engine performance, transmission, and other essential systems. 
This effective diagnostic procedure allows us to provide quick and reliable solutions.
`;

export const autoCodeReaderContent = `
At Hossam Center, our technicians use advanced auto code reader equipment to identify and fix issues with your car’s electrical and mechanical systems. 
By utilizing this equipment, we can quickly find problems and save you money on repairs, ensuring your car operates at its best.
`;

export const engineCodeReaderContent = `
Our engine code reader is an essential tool for solving engine-related issues. 
Hossam Center accesses the car ECU (engine control unit) through an engine code reader to find error codes that indicate potential issues. 
This accurate analysis helps us address problems like poor fuel economy, engine misfires, and malfunctioning emission systems, ensuring optimal engine performance.
`;

export const carComputerReaderContent = `
Our car computer reader technology generates precise diagnostic reports for your vehicle’s systems. 
At Hossam Center, we can identify any irregularities in your vehicle’s performance by reading data from its onboard computer, 
detecting everything from minor sensor issues to more significant problems. 
This technology ensures that your vehicle remains safe and efficient.
`;

// Features data for Car Computer Diagnostic page
export const featuresCarDiagnostic = {
  id: 'features-car-diagnostic',
  header: {
    title: 'Why Choose Hossam Center for Car Diagnostics?',
    subtitle: 'We use state-of-the-art tools to identify and solve any issues with your vehicle efficiently.',
  },
  items: [
    { title: 'Advanced Car Code Readers', description: 'We use car code readers to quickly diagnose vehicle issues and provide effective solutions.' },
    { title: 'Engine Code Reader', description: 'Our engine code reader allows us to diagnose engine-related issues accurately and efficiently.' },
    { title: 'Car Computer Readers', description: 'Our car computer readers ensure precise diagnostics, helping us fix even the smallest issues in your vehicle.' },
  ],
  additionalContent: [
    { title: 'Car Code Reader', description: carCodeReaderContent },
    { title: 'Auto Code Reader', description: autoCodeReaderContent },
    { title: 'Engine Code Reader', description: engineCodeReaderContent },
    { title: 'Car Computer Reader', description: carComputerReaderContent },
  ],
};

// Steps data for Car Computer Diagnostic page
export const stepsCarDiagnostic = {
  id: 'steps-car-diagnostic',
  items: [
    { title: 'Initial Consultation', description: 'Discuss any vehicle issues you’ve noticed with our expert technicians.' },
    { title: 'Full Diagnostic Scan', description: 'We perform a complete diagnostic scan to identify any potential problems.' },
    { title: 'Service & Repair', description: 'Our technicians provide efficient repair solutions, ensuring your vehicle is back on the road safely.' },
  ],
  image: {
    src: 'https://res.cloudinary.com/dvcfefmys/image/upload/v1727955088/Car_Computer_Diagnostic_q6yprr.webp',  // Replace with the actual image path
    alt: 'Image of car computer diagnostic service', // Alt text for accessibility
  },
};

// FAQs data for Car Computer Diagnostic page
export const faqsCarDiagnostic: FAQsProps = {
  id: 'faqs-car-diagnostic',
  hasBackground: false,
  header: {
    title: 'Car Diagnostic FAQs',
    subtitle: 'Find answers to common questions about our car diagnostic services.',
    position: 'center',
  },
  tabs: [
    {
      link: { label: 'General Services', href: '/services' },
      items: [
        { title: 'What types of diagnostics do you offer?', description: 'We offer engine diagnostics, car computer diagnostics, code reading, and more.' },
        { title: 'How long does a diagnostic take?', description: 'Most diagnostics are completed within 1-2 hours, depending on the complexity of the issue.' },
        { title: 'What is the benefit of using a car code reader?', description: 'Car code readers help us quickly identify vehicle issues, saving time and ensuring accurate repairs.' },
        { title: 'Do you offer repairs after diagnostics?', description: 'Yes, we provide comprehensive repair services after identifying any issues during diagnostics.' },
        { title: 'How much does a diagnostic service cost?', description: 'The cost depends on the type of diagnostic service. Contact us for a detailed estimate.' },
      ],
    },
  ],
};

// CallToAction data for Car Computer Diagnostic page
export const contactCarDiagnostic: CallToActionProps = {
  id: 'call-to-action-car-diagnostic',
  hasBackground: true,
  title: 'Need a Car Diagnostic?',
  subtitle: 'Contact us today to schedule a diagnostic for your vehicle and ensure it is running smoothly.',
  form: {
    inputs: [
      { label: 'Name', type: 'text', placeholder: 'Enter your name' },
      { label: 'Email', type: 'email', placeholder: 'Enter your email' },
      { label: 'Message', type: 'textarea', placeholder: 'Describe the issues you’re experiencing' },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
  callToAction: { text: 'Schedule Now', href: '/contact' },
};



