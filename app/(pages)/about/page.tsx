import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';

import FAQs from '~/components/widgets/FAQs';
import FAQs2 from '~/components/widgets/FAQs2';
import Features from '~/components/widgets/Features';
import Features3 from '~/components/widgets/Features3';
import Features4 from '~/components/widgets/Features4';
import Hero from '~/components/widgets/Hero';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';

import Testimonials2 from '~/components/widgets/Testimonials';
import {
  contactAbout,
  faqsAbout,
  featuresFourAbout,
  featuresFourAboutTwo,
  features3About,
  hero2About,
  statsAbout,
  stepsAbout,
  testimonials2About,
  featuresAbout,
  teamAbout,
} from '~/shared/data/pages/about.data';
import { testimonialsHome, faqs2Home, contactHome } from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <Hero {...hero2About} />
      <Features4 {...featuresFourAbout} />
      <Features4 {...featuresFourAboutTwo} />
      <Steps {...stepsAbout} />
      <Features3 {...features3About} />
      <Features {...featuresAbout} />
  
      <Testimonials {...testimonialsHome} />
      <FAQs2 {...faqs2Home} />
      <Contact {...contactHome} />
    </>
  );
};

export default Page;
