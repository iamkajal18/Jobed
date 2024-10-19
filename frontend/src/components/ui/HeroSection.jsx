import LetterByLetterJobHeading from "./LetterByLetterJobHeading";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-3xl font-bold mb-4 lg:text-4xl leading-tight">
          <LetterByLetterJobHeading />
        </h1>
        <p className="text-2xl mt-4 mb-6 sm:text-sm lg:text-sm">
          Join the No.1 Job Hunt Website and discover thousands of opportunities.
        </p>
        <a href="/sign-up">
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
}

function JobSearch() {
  return (
    <div className="py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center">
          <div className="flex w-full lg:w-2/3">
            <input
              type="text"
              className="border-2 border-gray-300 p-2 w-1/2 rounded-l-lg"
              placeholder="Job title, keywords, or company"
            />
            <input
              type="text"
              className="border-2 border-gray-300 p-2 w-1/2 rounded-r-lg"
              placeholder="Location"
            />
            <button className="bg-blue-500 text-white text-lg px-8 py-2 ml-4 rounded-full hover:bg-blue-600 transition">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LatestJob() {
  return (
    <div className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-red-600">Latest & Top</span> Job Opportunity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg"
            >
              <h4 className="text-md font-semibold mb-2">Company Name</h4>
              <p>India</p>
              <h4 className="text-md font-semibold mt-4">Job Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex justify-start flex-wrap mt-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-2">
                  New
                </span>
                <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full mr-2">
                  Part Time
                </span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                  24LPA
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-12"> <span className="text-red-600">Why Choose</span> Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h4 className="text-md font-semibold mb-4">Verified Jobs</h4>
            <p>All jobs posted on our site are verified by industry professionals.</p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h4 className="text-md font-semibold mb-4">User-Friendly Interface</h4>
            <p>We offer a simple and intuitive platform for job seekers and recruiters.</p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h4 className="text-md font-semibold mb-4">Career Advice</h4>
            <p>Our <Link to="https://iamadi-blog.onrender.com/">Blog</Link> provides expert career advice and tips.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-12"> <span className="text-red-600">What Our</span> Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <p>"Waiting For The Feedback"</p>
            <h4 className="text-xl font-semibold mt-4">- Kajal Kasaudhan</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; Kajal Kasaudhan All Rights Reserved.</p>
        <p className="mt-4">
          Follow us on:
          <a href="https://github.com/iamkajal18" className="ml-2 text-blue-400">
            GitHub
          </a>
          |
          <a href="https://www.linkedin.com/in/iamkajalkasaudhan/" className="ml-2 text-blue-400">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <JobSearch />
      <LatestJob />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
