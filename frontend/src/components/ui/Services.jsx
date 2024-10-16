import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Serives1 = () => {
  return (
    <div className="services-container p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="mb-6 text-lg">
        At <strong>JobedIn</strong>, we offer a comprehensive range of services designed to cater to both job seekers and employers. Our goal is to simplify the hiring process and provide tools that enhance job search efficiency.
      </p>

      <h2 className="text-2xl font-semibold mb-3">For Job Seekers:</h2>
      <ul className="mb-6 list-disc list-inside">
        <li>Access to a vast database of job listings across various industries.</li>
        <li>Personalized job recommendations based on your skills and experience.</li>
        <li>Resume building and interview preparation resources.</li>
        <li>Job alerts for new openings that match your criteria.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">For Employers:</h2>
      <ul className="list-disc list-inside">
        <li>Custom job posting solutions to attract the right candidates.</li>
        <li>Advanced candidate filtering and shortlisting tools.</li>
        <li>Access to analytics and reporting for hiring performance.</li>
        <li>Employer branding options to showcase your company culture.</li>
      </ul>

      <p className="mt-6 text-lg">
        Our services are tailored to ensure a smooth and effective hiring experience, empowering job seekers to find their dream jobs while helping employers connect with the best talent available.
      </p>
    </div>
  );
};



const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <p className="text-sm">
          JobedIn is your trusted job portal connecting talented professionals with top employers.
          Explore thousands of job listings and find your dream job today.
        </p>
        <Link to="/about-us" className="text-blue-400 hover:underline">Learn more about us</Link>
        <br />
        <p className="text-sm mt-2">
          We offer tailored services for both job seekers and employers, enhancing your hiring experience.
        </p>
        <Link to="/services" className="text-blue-400 hover:underline">Explore our services</Link>
      </div>
    </footer>
  );
};

const Serives2 = () => {
    return (
      <div className="home-container p-8">
        {/* Other homepage content here */}
        
        <section className="services-brief bg-blue-100 p-6 mt-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-3">Our Services</h2>
          <p className="text-lg mb-4">
            At JobedIn, we provide tailored solutions for job seekers and employers to enhance your
            hiring experience. Discover how we can assist you!
          </p>
          <Link to="/services" className="text-blue-600 font-semibold hover:underline">
            Learn more about our services
          </Link>
        </section>
      </div>
    );
  };
  
function Services() {
  return (
    <div>
      <Navbar/>
        < Serives1/>
        < Serives2/>
        <Footer />
        
    </div>
  );
}
export default Services;