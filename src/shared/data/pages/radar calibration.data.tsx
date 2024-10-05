import { IconAddressBook } from '@tabler/icons-react';
import { CallToActionProps, FAQsProps, HeroProps } from '~/shared/types';

// Hero data for Radar Calibration page
export const heroradarcalibration: HeroProps = {
  title: 'Radar & Level Transmitter Calibration',
  subtitle: 'Expert calibration services to ensure accuracy and reliability for your radar and level transmitter systems.',
  tagline: 'ADAS technology used by Honda',
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
  videoSrc: '/videos/Radar Calibration hero cover.mp4',
};

// Stats data for Radar Calibration page
export const statsradarcalibration = {
  id: 'stats-radar-calibration',
  items: [
    { title: '30+', description: 'Years of experience in calibration and measurement services.' },
    { title: '5000+', description: 'Calibrations successfully performed across industries.' },
    { title: '100%', description: 'Commitment to precision and reliability.' },
  ],
};

// Radar Calibration Content
export const vegaLevelCalibrationContent = `
Hossam Center specializes in Vega level transmitter calibration, ensuring accurate measurement and optimal performance for your systems. 
Our expert technicians use advanced technology to calibrate Vega devices, delivering precise level measurements across a wide range of applications. 
This calibration enhances the dependability of your monitoring devices, ensuring consistent results.
`;

export const radarCalibrationContent = `
Our team is committed to assisting you with radar system calibration, essential for maintaining the functionality and accuracy of your vehicle’s safety features. 
Comprehensive radar calibrations are performed by the experienced technicians at Hossam Center, ensuring that all systems and sensors work as intended.
`;

export const radarLevelCalibrationContent = `
We offer expert radar level transmitter calibration services to ensure your radar sensors perform at their best. 
Proper level measurements in sectors such as chemicals, food production, and water treatment depend on accurate calibration. 
At Hossam Center, we focus on optimizing radar level transmitters to meet industrial requirements and deliver precise data.
`;

export const guidedWaveRadarCalibrationContent = `
Hossam Center also provides guided wave radar level transmitter calibration services. 
Our expert technicians use specialist equipment to ensure that guided wave radar systems operate at their best, even in challenging conditions. 
This calibration is critical for sectors like gas and oil, pharmaceuticals, and wastewater management, where precise level measurements are essential.
`;



// Steps data for Radar Calibration page
export const stepsradarcalibration = {
  id: 'steps-radar-calibration',
  items: [
    { title: 'Initial Consultation', description: 'Discuss your radar or level transmitter calibration needs with our experts.' },
    { title: 'Calibration Process', description: 'Our team performs comprehensive calibration using advanced tools and technology.' },
    { title: 'Final Testing & Verification', description: 'We conduct thorough testing to ensure optimal performance and accuracy.' },
  ],
  image: {
    src: 'https://res.cloudinary.com/dvcfefmys/image/upload/v1727953573/Radar_Calibration_oh0s0a.webp',  // Replace with the actual image path
    alt: 'Radar Calibration Process Image', // Alt text for accessibility
  },
};

// Features data for Radar Calibration page
export const featuresradarcalibration = {
    id: 'features-radar-calibration',
    header: {
      title: 'Why Choose Hossam Center for Radar Calibration?',
      subtitle: 'Honda has adopted advanced ADAS (Advanced Driving Assistance System) technology in its models to provide drivers with a variety of safety and driving assistance functions. These features are designed to increase driving safety and comfort and help reduce the risk of traffic accidents. The following is a detailed introduction to the ADAS functions of Honda:',
    },
    items: [
      { title: 'Collision warning and automatic emergency braking system:', description: vegaLevelCalibrationContent },
      { title: 'Radar System Calibration', description: radarCalibrationContent },
      { title: 'Radar Level Transmitter Calibration', description: radarLevelCalibrationContent },
      { title: 'Guided Wave Radar Calibration', description: guidedWaveRadarCalibrationContent },
    ],
  };
  
// FAQs data for Radar Calibration page
export const faqsradarcalibration: FAQsProps = {
  id: 'faqs-radar-calibration',
  hasBackground: false,
  header: {
    title: 'Radar Calibration FAQs',
    subtitle: 'Find answers to common questions about our radar calibration services.',
    position: 'center',
  },
  tabs: [
    {
      link: { label: 'General Calibration Services', href: '/services' },
      items: [
        { title: 'What types of radar calibration do you offer?', description: 'We offer Vega, radar level transmitter, and guided wave radar calibration services.' },
        { title: 'How often should radar systems be calibrated?', description: 'Regular calibration is recommended yearly or whenever system accuracy is in question.' },
        { title: 'Do you offer calibration for industrial applications?', description: 'Yes, we specialize in calibration for industries such as chemicals, water treatment, and food production.' },
        { title: 'How can I schedule a calibration service?', description: 'You can contact us via phone, email, or through our website to book a calibration service.' },
        { title: 'What is the cost of radar calibration?', description: 'The cost varies depending on the type of radar system and calibration requirements. Contact us for a detailed estimate.' },
      ],
    },
  ],
};

// CallToAction data for Radar Calibration page
export const contactradarcalibration: CallToActionProps = {
  id: 'call-to-action-radar-calibration',
  hasBackground: true,
  title: 'Need Radar Calibration?',
  subtitle: 'Contact us today to schedule your radar or level transmitter calibration service.',
  form: {
    inputs: [
      { label: 'Name', type: 'text', placeholder: 'Enter your name' },
      { label: 'Email', type: 'email', placeholder: 'Enter your email' },
      { label: 'Message', type: 'textarea', placeholder: 'Describe your calibration needs' },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
  callToAction: { text: 'Book Now', href: '/contact' },
};
