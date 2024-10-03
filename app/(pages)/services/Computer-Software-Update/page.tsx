import React from 'react';
import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact2';
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
import Contact2 from '~/components/widgets/Contact2';

export const metadata: Metadata = {
  title: 'Computer Software Update',
};

const SoftwareUpdatePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero2 {...heroSoftwareUpdate} />

      {/* Features Section */}
      <Features {...featuresSoftwareUpdate} />

      {/* Stats Section */}
      <Stats {...statsSoftwareUpdate} />

      {/* Steps Section */}
      <Steps {...stepsSoftwareUpdate} />

      {/* FAQs Section */}
      <FAQs {...faqsSoftwareUpdate} />

      {/* Contact Section */}
      <Contact2
        header={{
          title: contactSoftwareUpdate.title,
          subtitle: contactSoftwareUpdate.subtitle,
        }}
        form={contactSoftwareUpdate.form}
        id={contactSoftwareUpdate.id}
        hasBackground={contactSoftwareUpdate.hasBackground}
      />
    </>
  );
};

export default SoftwareUpdatePage;
