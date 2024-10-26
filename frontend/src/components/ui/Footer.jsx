import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left Section - Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <div className="grid grid-cols-2 gap-2">
            <a href="/" className="hover:text-white transition-colors duration-200">Home</a>
            <a href="/about-us" className="hover:text-white transition-colors duration-200">About</a>
            <a href="/contact-us" className="hover:text-white transition-colors duration-200">Help</a>
            <a href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="/careers" className="hover:text-white transition-colors duration-200">Careers</a>
          </div>
        </div>

        {/* Center Section (optional if additional content is needed) */}
        <div></div>

        {/* Right Section - Social Media Links */}
        <div className="flex flex-col space-y-4 md:items-end items-center">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <p className="text-sm">Stay connected on social media.</p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/iamkajal18" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/iamkajalkasaudhan/" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} JobedIn. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
