function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section */}
        <div className="flex space-x-6">
          <a href="/" className="hover:text-white transition-colors duration-200">
            Home
          </a>
          <a href="/about-us" className="hover:text-white transition-colors duration-200">
            About
          </a>
          <a href="/contact-us" className="hover:text-white transition-colors duration-200">
            Help
          </a>
        </div>
        <p className="text-sm text-center">&copy; {new Date().getFullYear()} Jobed Hunt. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <p className="text-sm">Follow us on:</p>
          <a 
            href="https://github.com/iamkajal18" 
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="text-gray-500">|</span>
          <a 
            href="https://www.linkedin.com/in/iamkajalkasaudhan/" 
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
