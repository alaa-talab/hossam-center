import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';
import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import { notFound } from 'next/navigation'; // Import notFound if needed for error handling
import {
  heroSoftwareUpdate, // Use SoftwareUpdate data
  statsSoftwareUpdate,
  featuresSoftwareUpdate,
  stepsSoftwareUpdate,
  faqsSoftwareUpdate,
  contactSoftwareUpdate,
} from '~/shared/data/pages/computer-software-update.data'; // Import the correct data

export const metadata: Metadata = {
  title: 'Computer Software Update',
};

const SoftwareUpdatePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero2 {...heroSoftwareUpdate} />

      {/* Stats Section */}
      <Stats {...statsSoftwareUpdate} />

      {/* Steps Section */}
      <Steps {...stepsSoftwareUpdate} />

      {/* FAQs Section */}
      <FAQs {...faqsSoftwareUpdate} />

      {/* Contact Section */}
      <Contact
        form={{
          title: 'Get in touch',
          description: 'Contact us today to schedule your software update.',
          inputs: [
            { label: 'Name', type: 'text', placeholder: 'Enter your name' },
            { label: 'Email', type: 'email', placeholder: 'Enter your email' },
            { label: 'Message', type: 'textarea', placeholder: 'Enter your message' },
          ],
          btn: { title: 'Send Message', type: 'submit' }
        }}
        {...contactSoftwareUpdate}
      />
    </>
  );
};

export default SoftwareUpdatePage;
