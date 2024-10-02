import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';
import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import {
  heroCarDiagnostic,
  statsCarDiagnostic,
  featuresCarDiagnostic,
  stepsCarDiagnostic,
  faqsCarDiagnostic,
  contactCarDiagnostic,
} from '~/shared/data/pages/car-computer-diagnostic.data';

export const metadata: Metadata = {
  title: 'Car Computer Diagnostic',
};

const CarDiagnosticPage = () => {
  return (
    <>
      <Hero2 {...heroCarDiagnostic} />
      <Features {...featuresCarDiagnostic} />
      <Stats {...statsCarDiagnostic} />
      <Steps {...stepsCarDiagnostic} />
      <FAQs {...faqsCarDiagnostic} />
      <Contact {...contactCarDiagnostic} />
    </>
  );
};

export default CarDiagnosticPage;
