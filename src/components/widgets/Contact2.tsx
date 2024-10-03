import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Contact2 = ({ header, id, hasBackground = false, form }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-7xl mx-auto">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="flex flex-col items-center justify-center mt-8">
      {/* Render the form section if it exists */}
      {form && (
        <div className="w-full max-w-lg">
          <form className="grid gap-6">
            {form.inputs.map((input, index) => (
              <div key={index} className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-800 dark:text-white">{input.label}</label>
                {input.type === 'textarea' ? (
                  <textarea
                    className="p-3 border border-gray-300 rounded-md dark:bg-slate-800 dark:border-slate-600"
                    placeholder={input.placeholder}
                    rows={5}
                  />
                ) : (
                  <input
                    type={input.type}
                    className="p-3 border border-gray-300 rounded-md dark:bg-slate-800 dark:border-slate-600"
                    placeholder={input.placeholder}
                  />
                )}
              </div>
            ))}
            <button type={form.btn.type} className="btn btn-primary mt-4">
              {form.btn.title}
            </button>
          </form>
        </div>
      )}
    </div>
  </WidgetWrapper>
);

export default Contact2;
