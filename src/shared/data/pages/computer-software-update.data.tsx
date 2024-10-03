import { IconAddressBook } from '@tabler/icons-react';
import { CallToActionProps, FAQsProps, HeroProps } from '~/shared/types';

// Hero data for Computer Software Update page
export const heroSoftwareUpdate: HeroProps = {
  title: 'Car Computer Software Update',
  subtitle: 'Keep your car’s systems up-to-date for improved performance, safety, and security.',
  tagline: 'Expert Software Updates at Hossam Center',
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
  videoSrc: '/videos/Computer Software Update hero cover.mp4',
};

// Stats data for Computer Software Update page
export const statsSoftwareUpdate = {
  id: 'stats-software-update',
  items: [
    { title: '30+', description: 'Years of expertise in car diagnostics and software updates.' },
    { title: '5000+', description: 'Software updates performed on various car models.' },
    { title: '100%', description: 'Commitment to quality and customer satisfaction.' },
  ],
};

// Computer Software Update Content
export const softwarePerformanceContent = `
Software updates can improve engine performance, fuel efficiency, and overall vehicle efficiency 
by updating critical parts like the ECU (Engine Control Unit) and ECM (Engine Control Module).
These updates ensure your vehicle operates at maximum efficiency.
`;

export const softwareSafetyFeaturesContent = `
Updates often include enhancements to safety systems such as anti-lock brakes, traction control, 
and airbag activation methods. A control module update can improve the functionality of these features, 
making your vehicle safer to drive.
`;

export const softwareBugFixesContent = `
Just like any other software, vehicle systems may contain bugs. Updates can fix known issues 
that may affect your car’s operation, ensuring that the ECU and other systems are running smoothly.
`;

export const softwareNewTechContent = `
Updates ensure that your car’s systems are compatible with the latest features, such as advanced driver assistance systems (ADAS), 
and future-proof your vehicle for new technologies as they become available.
`;

export const softwareSecurityContent = `
Manufacturers routinely release updates that protect against potential security threats, ensuring 
your ECM and other reprogrammable software are safe from vulnerabilities.
`;

export const softwareResaleValueContent = `
Keeping your car’s software up-to-date, including control module updates, increases resale value 
as potential buyers prefer well-maintained cars with the latest technology.
`;

export const softwareManufacturerContent = `
To maintain compliance with warranty requirements, many manufacturers recommend regular updates 
for reprogrammable software like the ECU. These updates are a key part of vehicle maintenance.
`;

// Features data for Computer Software Update page
export const featuresSoftwareUpdate = {
  id: 'features-software-update',
  header: {
    title: 'Why Choose Hossam Center for Software Updates?',
    subtitle: 'We provide manufacturer-recommended updates to enhance your car’s performance and safety.',
  },
  items: [
    { title: 'Enhanced Performance', description: softwarePerformanceContent },
    { title: 'Improved Safety Features', description: softwareSafetyFeaturesContent },
    { title: 'Fixes for Bugs', description: softwareBugFixesContent },
    { title: 'Flexibility with New Technologies', description: softwareNewTechContent },
    { title: 'Improved Security', description: softwareSecurityContent },
    { title: 'Increase Resale Value', description: softwareResaleValueContent },
    { title: 'Manufacturer Recommendations', description: softwareManufacturerContent },
  ],
};

// Steps data for Computer Software Update page
export const stepsSoftwareUpdate = {
  id: 'steps-software-update',
  items: [
    { title: 'Initial Consultation', description: 'Discuss any issues with your car’s systems and determine if updates are required.' },
    { title: 'Software Check', description: 'We check the car’s software version to see if an update is available.' },
    { title: 'Update Installation', description: 'We install the latest software updates to ensure optimal performance and safety.' },
  ],
  image: {
    src: 'https://res.cloudinary.com/dvcfefmys/image/upload/v1727960473/Computer_Software_Update_j6ualp.webp',  // Replace with the actual image path
    alt: 'Image of car computer software update service', // Alt text for accessibility
  },
};

// FAQs data for Computer Software Update page
export const faqsSoftwareUpdate: FAQsProps = {
  id: 'faqs-software-update',
  hasBackground: false,
  header: {
    title: 'Software Update FAQs',
    subtitle: 'Find answers to common questions about our software update services.',
    position: 'center',
  },
  tabs: [
    {
      link: { label: 'General Services', href: '/services' },
      items: [
        { title: 'Why is it important to update my car’s software?', description: 'Software updates improve performance, safety, and ensure compatibility with new technologies.' },
        { title: 'How often should I update my car’s software?', description: 'It’s recommended to check for updates regularly or when recommended by the manufacturer.' },
        { title: 'How long does a software update take?', description: 'Most updates take between 30 minutes to 1 hour, depending on the system being updated.' },
        { title: 'Can I update the software myself?', description: 'We recommend having the updates performed by professionals to ensure proper installation and avoid any risks.' },
        { title: 'Is the software update covered under warranty?', description: 'Yes, many software updates are covered under your car’s warranty. Check with the manufacturer for more details.' },
      ],
    },
  ],
};

// CallToAction data for Computer Software Update page
export const contactSoftwareUpdate: CallToActionProps = {
  id: 'call-to-action-software-update',
  hasBackground: true,
  title: 'Need a Software Update?',
  subtitle: 'Contact us today to schedule your car’s software update and improve its performance and safety.',
  form: {
    inputs: [
      { label: 'Name', type: 'text', placeholder: 'Enter your name' },
      { label: 'Email', type: 'email', placeholder: 'Enter your email' },
      { label: 'Message', type: 'textarea', placeholder: 'Describe any issues or concerns' },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
  callToAction: { text: 'Schedule Now', href: '/contact' },
};
