import Image from 'next/image';

const Logo = () => (
  <div className="ml-2 flex items-center">
    {/* Light theme logo */}
    <Image
      src="/Website Logo Red.png"  // Light mode logo
      alt="Hossam Maintenance Center Logo"
      width={200} // Default width for larger screens
      height={100} // Default height for larger screens
      sizes="(max-width: 768px) 120px, (max-width: 1024px) 180px, 200px" // Responsive sizes
      className="w-auto h-auto dark:hidden" // Hide in dark mode
    />
    {/* Dark theme logo */}
    <Image
      src="/Website Logo.png" // Dark mode logo
      alt="Hossam Maintenance Center Logo (Dark)"
      width={200} // Default width for larger screens
      height={100} // Default height for larger screens
      sizes="(max-width: 768px) 120px, (max-width: 1024px) 180px, 200px" // Responsive sizes
      className="w-auto h-auto hidden dark:block" // Show only in dark mode
    />
  </div>
);

export default Logo;
