import { IconAddressBook } from '@tabler/icons-react';
import { CallToActionProps, FAQsProps, HeroProps } from '~/shared/types';

// Hero data for Spare Parts page
export const herospareparts: HeroProps = {
  title: 'Honda & Car Spare Parts',
  subtitle: 'Find high-quality spare parts for Honda and other vehicle models.',
  tagline: 'Reliable Car Parts at Hossam Center',
  callToAction: {
    text: 'Get a Quote',
    href: '/contact',
    icon: IconAddressBook,
    targetBlank: false,
  },
  callToAction2: {
    text: 'Learn more',
    href: '/about',
  },
  videoSrc: '/videos/spare parts hero cover.mp4',
};

// Stats data for Spare Parts page
export const statsspareparts = {
  id: 'stats-honda-spare-parts',
  items: [
    { title: '30+', description: 'Years of experience in car spare parts sales and service.' },
    { title: '5000+', description: 'Satisfied customers with top-quality spare parts.' },
    { title: '100%', description: 'Commitment to quality and customer satisfaction.' },
  ],
};

// Spare Parts Content
export const carSparesContent = `
Hossam Center offers a wide range of car spares for various vehicle models, including Honda and others. 
Whether you need standard components like filters, batteries, or belts, or more specialized parts, 
we have what you need. Our broad selection ensures that you can find the parts necessary 
to enhance your vehicle’s safety and performance.
`;

export const hondaSparesContent = `
Hossam Center specializes in high-quality spare parts designed to ensure the best performance. 
Our inventory includes critical components such as brake pads, suspension parts, and electrical modules. 
Each part is sourced to meet Honda’s high-quality standards, ensuring precise fit and durability.
`;

export const hondaGenuinePartsContent = `
Using original parts is essential to extending the life of your Honda. 
At Hossam Center, we stock a wide range of Honda original parts, 
ensuring that every replacement meets the exact specifications of your vehicle.
`;

export const boschPartsContent = `
In addition to Honda parts, we offer Bosch parts, which are known for their high quality and dependability. 
Bosch provides a wide selection of components, such as brake systems and fuel injectors. 
You can rely on our skilled staff to help you find the right Bosch components to enhance the performance of your vehicle.
`;

// Features data for Spare Parts page
export const featuresspareparts = {
  id: 'features-honda-spare-parts',
  header: {
    title: 'Why Choose Hossam Center for Spare Parts?',
    subtitle: 'We provide genuine parts and ensure top performance for your vehicle.',
  },
  items: [
    { title: 'Wide Range of Car Spares', description: 'Find spare parts for various car models, including Honda.' },
    { title: 'Honda Genuine Parts', description: 'We stock a full range of original Honda parts to maintain your vehicle’s quality and performance.' },
    { title: 'Bosch Parts', description: 'We also offer high-quality Bosch parts, known for reliability and precision.' },
  ],
  additionalContent: [
    { title: 'Car Spares', description: carSparesContent },
    { title: 'Honda Spares', description: hondaSparesContent },
    { title: 'Honda Genuine Parts', description: hondaGenuinePartsContent },
    { title: 'Bosch Parts', description: boschPartsContent },
  ],
};

// Steps data for Spare Parts page
export const stepsspareparts = {
  id: 'steps-honda-spare-parts',
  items: [
    { title: 'Consultation', description: 'Discuss your spare parts needs with our experts.' },
    { title: 'Parts Selection', description: 'We help you choose the right parts for your vehicle.' },
    { title: 'Installation & Service', description: 'We provide professional installation and ensure everything fits perfectly.' },
  ],
  image: {
    src: 'https://res.cloudinary.com/dvcfefmys/image/upload/v1727952606/Honda_spares_ccrshh.webp',  // Replace with the actual image path
    alt: 'Image of Honda spare parts', // Alt text for accessibility
  },
};

// FAQs data for Spare Parts page
export const faqsspareparts: FAQsProps = {
  id: 'faqs-honda-spare-parts',
  hasBackground: false,
  header: {
    title: 'Spare Parts FAQs',
    subtitle: 'Find answers to common questions about our spare parts.',
    position: 'center',
  },
  tabs: [
    {
      link: { label: 'General Services', href: '/services' },
      items: [
        { title: 'What types of spare parts do you offer?', description: 'We offer a wide range of parts for Honda and other vehicle models.' },
        { title: 'Are your Honda parts genuine?', description: 'Yes, we stock only genuine Honda parts for quality and durability.' },
        { title: 'Do you provide installation services?', description: 'Yes, we offer professional installation for all the parts we sell.' },
        { title: 'How can I order spare parts?', description: 'You can contact us through phone, email, or visit our center to order parts.' },
        { title: 'What is the warranty on your parts?', description: 'All our parts come with a manufacturer warranty for peace of mind.' },
      ],
    },
  ],
};

// CallToAction data for Spare Parts page
export const contactspareparts: CallToActionProps = {
  id: 'call-to-action-honda-spare-parts',
  hasBackground: true,
  title: 'Need Spare Parts?',
  subtitle: 'Contact us today to get the right spare parts for your Honda or other vehicle.',
  form: {
    inputs: [
      { label: 'Name', type: 'text', placeholder: 'Enter your name' },
      { label: 'Email', type: 'email', placeholder: 'Enter your email' },
      { label: 'Message', type: 'textarea', placeholder: 'Describe your spare parts needs' },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
  callToAction: { text: 'Order Now', href: '/contact' },
};
