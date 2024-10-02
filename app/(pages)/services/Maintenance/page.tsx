import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';
import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import { notFound } from 'next/navigation'; // Import notFound
import {
  heroCarDiagnostic,
  statsCarDiagnostic,
  featuresCarDiagnostic,
  stepsCarDiagnostic,
  faqsCarDiagnostic,
  contactCarDiagnostic,
} from '~/shared/data/pages/car-computer-diagnostic.data';

export const metadata: Metadata = {
  title: 'Computer Software Update',
};

const CarDiagnosticPage = () => {
  return (
    <>
      <Hero2 {...heroCarDiagnostic} />
      <Stats {...statsCarDiagnostic} />
      <Steps {...stepsCarDiagnostic} />
      <FAQs {...faqsCarDiagnostic} />
      <Contact
        form={{
          title: 'Get in touch',
          description: 'Contact us today for more details.',
          inputs: [
            { label: 'Name', type: 'text', placeholder: 'Enter your name' },
            { label: 'Email', type: 'email', placeholder: 'Enter your email' }
          ],
          btn: { title: 'Send Message', type: 'submit' }
        }}
        {...contactCarDiagnostic}
      />
    </>
  );
};

export default CarDiagnosticPage;
