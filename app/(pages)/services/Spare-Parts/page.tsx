import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';
import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import { notFound } from 'next/navigation'; // Import notFound
import {
  herospareparts,
  statsspareparts,
  featuresspareparts,
  stepsspareparts,
  faqsspareparts,
  contactspareparts,
} from '~/shared/data/pages/spare parts.data';

export const metadata: Metadata = {
  title: 'Spare Parts & Services',
};

const SparePartsPage = () => {
  return (
      <>
        {/* Hero Section */}
        <Hero2 {...herospareparts} />
  
        {/* Stats Section */}
        <Stats {...statsspareparts} />
  
        {/* Features Section */}
        <Features {...featuresspareparts} />
  
        {/* Steps Section */}
        <Steps
          id={stepsspareparts.id}
          header={{
            title: 'Our Spare Parts Process',
            subtitle: 'Step-by-step guide to getting the right spare parts for your vehicle.',
          }}
          items={stepsspareparts.items}
          image={stepsspareparts.image} // Pass the image object here
        />
  
        {/* FAQs Section */}
        <FAQs {...faqsspareparts} />
  
        {/* Contact Section */}
        <Contact
          form={{
            title: 'Get in touch',
            description: 'Contact us today for more details about our spare parts and services.',
            inputs: [
              { label: 'Name', type: 'text', placeholder: 'Enter your name' },
              { label: 'Email', type: 'email', placeholder: 'Enter your email' },
              { label: 'Message', type: 'textarea', placeholder: 'Describe your spare parts needs' }
            ],
            btn: { title: 'Send Message', type: 'submit' }
          }}
          {...contactspareparts}
        />
      </>
    );
  };

export default SparePartsPage;
