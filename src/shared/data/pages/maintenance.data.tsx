import { IconAddressBook } from '@tabler/icons-react';
import { CallToActionProps, FAQsProps, HeroProps } from '~/shared/types';

// Hero data for Maintenance page
export const heromaintenance: HeroProps = {
  title: 'Honda Repair & Maintenance Services',
  subtitle: 'Expert Honda repair services near you to keep your vehicle in top condition.',
  tagline: 'Reliable Honda Repair & Service',
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
  videoSrc: '/videos/maintenance hero cover.mp4',
};

// Stats data for Maintenance page
export const statsmaintenance = {
  id: 'stats-honda-maintenance',
  items: [
    { title: '30+', description: 'Years of experience in Honda repair and maintenance.' },
    { title: '5000+', description: 'Satisfied Honda owners.' },
    { title: '100%', description: 'Commitment to quality service.' },
  ],
};

// Honda Service Center Content
export const hondaServiceCenterContent = `
Hossam Center is a fully equipped Honda service station dedicated to offering high-quality repair services and maintenance. 
Our advanced facility is staffed by qualified professionals who are highly familiar with Honda models and technologies. 
We provide comprehensive services such as routine maintenance, diagnostic checks, and specialist repairs. 
With a focus on using authentic Honda parts and advanced tools, we guarantee that your vehicle receives the best possible care.
Visit us for all your Honda service needs and experience our excellent customer care firsthand.
`;

// Honda Service Near Me Content
export const hondaServiceNearMeContent = `
If you’re looking for Honda service near you, Hossam Center is conveniently located nearby. 
We gladly provide a variety of services such as oil changes, brake inspections, and tire rotations. 
Our committed team offers quality service to enhance your vehicle’s performance and longevity. 
We simplify your service experience by providing flexible scheduling options.
Discover why so many Honda owners choose us for their service needs.
`;

// Honda Repair Near Me Content
export const hondaRepairNearMeContent = `
When you’re looking for dependable Honda repair services nearby, Hossam Center is your first-choice destination. 
Our experienced technicians specialize in identifying and solving a variety of issues specific to Honda vehicles, from engine troubles to transmission repairs. 
We recognize the importance of maintaining your car in excellent condition, which is why we provide specialized repair services tailored to your needs. 
We guarantee quality and customer satisfaction, ensuring you get back on the road safely.
`;

// Features data for Maintenance page
export const featuresmaintenance = {
    id: 'features-honda-maintenance',
    header: {
      title: 'Why Choose Hossam Center?',
      subtitle: 'We specialize in identifying and solving a variety of issues specific to Honda vehicles.',
    },
    items: [
      { title: 'Expert Technicians', description: 'Our technicians are highly skilled in diagnosing and repairing Honda vehicles.' },
      { title: 'Advanced Diagnostic Tools', description: 'We use the latest tools and technology to provide precise repairs.' },
      { title: 'Genuine Honda Parts', description: 'We only use original Honda parts to ensure the highest quality of service.' },
      { title: 'Customer Satisfaction', description: 'We guarantee high-quality service and customer satisfaction.' },
    ],
    additionalContent: [
      { title: 'Honda Service Center', description: hondaServiceCenterContent },
      { title: 'Honda Service Near Me', description: hondaServiceNearMeContent },
      { title: 'Honda Repair Near Me', description: hondaRepairNearMeContent },
    ],
  };

// Steps data for Maintenance page
export const stepsmaintenance = {
    id: 'steps-honda-maintenance',
    items: [
      { title: 'Consultation', description: 'Discuss any issues you’ve noticed with our experienced technicians.' },
      { title: 'Diagnostic Check', description: 'We perform a full diagnostic to identify any potential problems.' },
      { title: 'Service & Repair', description: 'Our expert team provides efficient repair solutions, ensuring your vehicle is back on the road safely.' },
    ],
    image: {
      src: 'https://res.cloudinary.com/dvcfefmys/image/upload/v1727950615/honda_maintenance_bfgb4g.webp',  // Replace with the actual image path
      alt: 'Image of Honda maintenance service', // Alt text for accessibility
    },
  };
  


// FAQs data for Maintenance page
export const faqsmaintenance: FAQsProps = {
    id: 'faqs-honda-maintenance',
    hasBackground: false,
    header: {
      title: 'Honda Service FAQs',
      subtitle: 'Find answers to common questions about our Honda repair and maintenance services.',
      position: 'center',
    },
    tabs: [
      {
        link: { label: 'General Services', href: '/services' },
        items: [
          { 
            title: 'What services do you offer?', 
            description: 'We offer oil changes, brake inspections, tire rotations, diagnostic checks, and more.' 
          },
          { 
            title: 'How often should I service my Honda?', 
            description: 'Routine maintenance is recommended every 6 months or 5,000 miles.' 
          },
          {
            title: 'What is included in a Honda diagnostic check?',
            description: 'A diagnostic check includes a full scan of your vehicle’s systems to identify potential issues.'
          },
          {
            title: 'Do you use authentic Honda parts?',
            description: 'Yes, we use genuine Honda parts to ensure the best quality and performance for your vehicle.'
          },
          {
            title: 'How can I schedule an appointment?',
            description: 'You can easily book a service appointment by contacting us through phone, email, or our website.'
          },
          {
            title: 'What is the cost of Honda repair services?',
            description: 'The cost varies depending on the service. Contact us for a detailed estimate based on your specific needs.'
          },
          {
            title: 'How long does it take for a typical service?',
            description: 'Routine services such as oil changes and brake inspections typically take 1-2 hours. More complex repairs may take longer.'
          },
          {
            title: 'Do you offer emergency repair services?',
            description: 'Yes, we provide emergency repair services. Please contact us for immediate assistance.'
          },
        ],
      },
    ],
  };
  

// CallToAction data for Maintenance page
export const contactmaintenance: CallToActionProps = {
  id: 'call-to-action-honda-maintenance',
  hasBackground: true,
  title: 'Need Honda Maintenance?',
  subtitle: 'Contact us today to schedule maintenance or repair services for your Honda.',
  form: {
    inputs: [
      { label: 'Name', type: 'text', placeholder: 'Enter your name' },
      { label: 'Email', type: 'email', placeholder: 'Enter your email' },
      { label: 'Message', type: 'textarea', placeholder: 'Describe your issue or request' },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
  callToAction: { text: 'Book Now', href: '/contact' },
};
