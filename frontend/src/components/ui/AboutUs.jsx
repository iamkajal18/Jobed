import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const About1 = () => {
  const fullText = `
    Welcome to JobedIn, your one-stop solution for all career needs! We are committed to
    bridging the gap between job seekers and employers, making the hiring process easier, faster,
    and more efficient.`;

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const typingSpeed = 50; // typing speed in milliseconds

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="about-us-container p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="mb-6 text-lg">{displayedText}</p>

      <h2 className="text-2xl font-semibold mb-3">For Job Seekers:</h2>
      <ul className="mb-6 list-disc list-inside">
        <li>Explore thousands of job listings tailored to your skills and interests.</li>
        <li>Filter opportunities based on industry, location, and experience level.</li>
        <li>Apply for jobs effortlessly with our user-friendly interface.</li>
        <li>Stay updated with real-time notifications on the latest job openings.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">For Employers:</h2>
      <ul className="list-disc list-inside">
        <li>Post job openings and manage applications with ease.</li>
        <li>Leverage powerful search and filtering tools to find the best talent.</li>
        <li>Gain insights and analytics to make better hiring decisions.</li>
      </ul>

      <p className="mt-6 text-lg">
        Our mission is to empower job seekers to connect with their dream jobs and assist employers in
        hiring the right talent swiftly. With advanced features, a responsive design, and a dedicated
        team behind the scenes, we strive to make <strong>JobedIn</strong> a trusted platform for career success.
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
      </div>
    </footer>
  );
};

const About2 = () => {
  return (
    <div className="home-container p-8">
      {/* Other homepage content here */}
      
      <section className="about-us-brief bg-blue-100 p-6 mt-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-3">About JobedIn</h2>
        <p className="text-lg mb-4">
          Welcome to JobedIn, where job seekers meet their dream jobs and employers find top talent.
          Start your journey with us today!
        </p>
        <Link to="/about-us" className="text-blue-600 font-semibold hover:underline">
          Learn more about us
        </Link>
      </section>
    </div>
  );
};

function AboutUs() {
  return (
    <div>
      <Navbar />
      <About1 />
      
      <About2 />

    </div>
  );
}

export default AboutUs;
