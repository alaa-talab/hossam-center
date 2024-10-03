import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';
import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import {
  heromaintenance,
  statsmaintenance,
  featuresmaintenance,
  stepsmaintenance,
  faqsmaintenance,
  contactmaintenance,
} from '~/shared/data/pages/maintenance.data';

export const metadata: Metadata = {
  title: 'Honda Maintenance & Repair Services',
};

const MaintenancePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero2 {...heromaintenance} />

      {/* Stats Section */}
      <Stats {...statsmaintenance} />

      {/* Features Section */}
      <Features {...featuresmaintenance} />

      {/* Steps Section */}
      <Steps
        id={stepsmaintenance.id}
        header={{
          title: 'Our Process',
          subtitle: 'Step-by-step process to ensure quality service.',
        }}
        items={stepsmaintenance.items}
        image={stepsmaintenance.image} // Pass the image object here
      />

      {/* FAQs Section */}
      <FAQs {...faqsmaintenance} />

      {/* Contact Section */}
      <Contact
        form={{
          title: 'Get in touch',
          description: 'Contact us today for more details about our Honda maintenance and repair services.',
          inputs: [
            { label: 'Name', type: 'text', placeholder: 'Enter your name' },
            { label: 'Email', type: 'email', placeholder: 'Enter your email' },
            { label: 'Message', type: 'textarea', placeholder: 'Describe your issue or request' }
          ],
          btn: { title: 'Send Message', type: 'submit' }
        }}
        {...contactmaintenance}
      />
    </>
  );
};

export default MaintenancePage;
