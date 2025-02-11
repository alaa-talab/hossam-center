import { BackgroundProps } from '~/shared/types';

const Background = ({ children, hasBackground }: BackgroundProps) => {
  return (
    <div className={`absolute inset-0 ${hasBackground ? 'bg-primary-50 dark:bg-gray-800' : 'bg-transparent'}`}>
      {children}
    </div>
  );
};

export default Background;
