import Image from 'next/image';

const Logo = () => (
  <div className="ml-2 flex items-center">
    {/* Add your logo image with responsive width and height */}
    <Image
      src="/Website Logo.png" // Ensure the file path is correct
      alt="Hossam Maintenance Center Logo"
      width={200} // Default width for larger screens
      height={100} // Default height for larger screens
      sizes="(max-width: 768px) 120px, (max-width: 1024px) 180px, 200px" // Responsive sizes
      className="w-auto h-auto" // Allow the image to scale automatically with the screen
    />
  </div>
);

export default Logo;
