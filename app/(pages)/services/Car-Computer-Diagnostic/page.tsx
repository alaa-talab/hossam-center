import type { Metadata } from 'next';
import Contact2 from '~/components/widgets/Contact2';  // Update the import to use Contact2
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
  title: 'Car Computer Diagnostic Services',
};

const CarDiagnosticPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero2 {...heroCarDiagnostic} />

      {/* Features Section */}
      <Features {...featuresCarDiagnostic} />

      {/* Stats Section */}
      <Stats {...statsCarDiagnostic} />

      {/* Steps Section */}
      <Steps
        id={stepsCarDiagnostic.id}
        header={{
          title: 'Our Diagnostic Process',
          subtitle: 'How we ensure your vehicle is thoroughly diagnosed and repaired.',
        }}
        items={stepsCarDiagnostic.items}
        image={stepsCarDiagnostic.image} // Pass the image object
      />

      {/* FAQs Section */}
      <FAQs {...faqsCarDiagnostic} />

      {/* Contact Section using Contact2 */}
      <Contact2
        header={{
          title: contactCarDiagnostic.title,
          subtitle: contactCarDiagnostic.subtitle,
        }}
        form={contactCarDiagnostic.form}
        id={contactCarDiagnostic.id}
        hasBackground={contactCarDiagnostic.hasBackground}
      />
    </>
  );
};

export default CarDiagnosticPage;
