import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Contact2 = ({ header, id, hasBackground = false }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-7xl mx-auto">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="flex items-stretch justify-center">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Add more content or contact information here as needed */}
      </div>
    </div>
  </WidgetWrapper>
);

export default Contact2;
