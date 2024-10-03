import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';
import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import { notFound } from 'next/navigation'; // Import notFound
import {
  heroradarcalibration,
  statsradarcalibration,
  featuresradarcalibration,
  stepsradarcalibration,
  faqsradarcalibration,
  contactradarcalibration,
} from '~/shared/data/pages/radar calibration.data';

export const metadata: Metadata = {
  title: 'Radar Calibration Services',
};

const RadarCalibrationPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero2 {...heroradarcalibration} />

      {/* Stats Section */}
      <Stats {...statsradarcalibration} />

      {/* Features Section */}
      <Features {...featuresradarcalibration} />

      {/* Steps Section */}
      <Steps
        id={stepsradarcalibration.id}
        header={{
          title: 'Our Calibration Process',
          subtitle: 'Step-by-step process to ensure accurate calibration.',
        }}
        items={stepsradarcalibration.items}
        image={stepsradarcalibration.image} // Pass the image object here
      />

      {/* FAQs Section */}
      <FAQs {...faqsradarcalibration} />

      {/* Contact Section */}
      <Contact
        form={{
          title: 'Get in touch',
          description: 'Contact us today for more details about our radar calibration services.',
          inputs: [
            { label: 'Name', type: 'text', placeholder: 'Enter your name' },
            { label: 'Email', type: 'email', placeholder: 'Enter your email' },
            { label: 'Message', type: 'textarea', placeholder: 'Describe your issue or request' }
          ],
          btn: { title: 'Send Message', type: 'submit' }
        }}
        {...contactradarcalibration}
      />
    </>
  );
};

export default RadarCalibrationPage;
