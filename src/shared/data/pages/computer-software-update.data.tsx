import { CallToActionProps, FAQsProps, HeroProps } from '~/shared/types';

// Hero data for Computer Software Update page
export const heroSoftwareUpdate: HeroProps = {
  title: 'Computer Software Update',
  subtitle: 'Ensure your vehicle’s software is always up to date for optimal performance.',
  tagline: 'Seamless Software Updates for Your Vehicle',
};

// Stats data for Computer Software Update page
export const statsSoftwareUpdate = {
  id: 'stats-software-update',
  items: [
    { title: '15+', description: 'Years of experience in vehicle software updates.' },
    { title: '500+', description: 'Vehicles updated successfully.' },
    { title: '98%', description: 'Customer satisfaction rate.' },
  ],
};

// Features data for Computer Software Update page
export const featuresSoftwareUpdate = {
  id: 'features-software-update',
  header: {
    title: 'Why Choose Our Software Update Services?',
    subtitle: 'We ensure your vehicle’s software is up to date, improving performance and reliability.',
    position: 'left', // Use "left", "center", or "right"
  },
  items: [
    { title: 'Advanced Software Tools', description: 'We use cutting-edge software tools to update your vehicle’s system seamlessly.' },
    { title: 'Certified Technicians', description: 'Our experienced technicians handle the entire update process, ensuring everything runs smoothly.' },
    { title: 'Performance Boost', description: 'Software updates can enhance your vehicle’s performance and functionality.' },
  ],
};

// Steps data for Computer Software Update page
export const stepsSoftwareUpdate = {
  id: 'steps-software-update',
  items: [
    { title: 'Initial Consultation', description: 'Discuss your vehicle’s software update needs with our experts.' },
    { title: 'Software Compatibility Check', description: 'We ensure your vehicle’s current software version is compatible with the latest updates.' },
    { title: 'Update Installation', description: 'Our technicians install the latest software updates to improve your vehicle’s performance.' },
    { title: 'Post-Update Testing', description: 'We run tests to ensure the software update is functioning correctly.' },
  ],
};

// FAQs data for Computer Software Update page
export const faqsSoftwareUpdate: FAQsProps = {
  id: 'faqs-software-update',
  hasBackground: false,
  header: {
    title: 'Computer Software Update FAQs',
    subtitle: 'Find answers to common questions about vehicle software updates.',
    position: 'center',
  },
  tabs: [
    {
      link: { label: 'Software Updates', href: '/software-updates' },
      items: [
        { title: 'Why are software updates important?', description: 'Software updates enhance performance, improve fuel efficiency, and fix bugs.' },
        { title: 'How often should I update my vehicle’s software?', description: 'We recommend updating your vehicle’s software once a year or whenever a new update is available.' },
        { title: 'Can software updates improve my vehicle’s performance?', description: 'Yes, software updates can enhance various systems, leading to better performance.' },
      ],
    },
  ],
};

// CallToAction data for Computer Software Update page
export const contactSoftwareUpdate: CallToActionProps = {
  id: 'call-to-action-software-update',
  hasBackground: true,
  title: 'Need a Software Update?',
  subtitle: 'Contact us today to schedule a software update for your vehicle and ensure it’s running the latest version.',
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
};
