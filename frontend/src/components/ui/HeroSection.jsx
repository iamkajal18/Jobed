import CategoryCarousel from "./CategoryCarousel";
import Navbar from "./Navbar";
function HeroSection() {
  return (
    <div className="bg-blue-500 text-white py-20 sm:py-16 md:py-24">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-4 sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          Find Your Dream Job
        </h1>
        <p className="text-lg mb-8 sm:text-base md:text-lg lg:text-xl">
          Join the No.1 Job Hunt Website and discover thousands of
          opportunities.
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
function JobSearch() {
  return (
    <div className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Search for Jobs</h2>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            className="border-2 border-gray-300 p-3 w-1/3 rounded-l-lg"
            placeholder="Job title, keywords, or company"
          />
          <input
            type="text"
            className="border-2 border-gray-300 p-3 w-1/3 rounded-r-lg"
            placeholder="Location"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full ml-4 hover:bg-blue-600 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

function LatestJob() {
  return (
    <>
      <div className="py-1">
        <div className="container mx-auto text-center">
          <div className="p-8 #faf5ff shadow-lg rounded-lg">
            <h2 className="text-4xl font-bold mb-12">
              <span className="text-[#dc2626]">Latest & Top</span>{" "}
              <span>Job Opportunity</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <h4 className="text-xl font-semibold mt-4">Company Name</h4>
                <p>India</p>
                <h4 className="text-xl font-semibold mt-4">Job Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, magnam.
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium m-2 px-3 py-2 rounded-lg">
                  New
                </span>
                <span className="inline-block bg-blue-100 text-red-800 text-sm font-medium m-2 px-3 py-2 rounded-lg">
                 Part Time
                </span>
                <span className="inline-block bg-blue-100 text-purple-800 text-sm font-medium  m-3 px-2 py-2 rounded-lg">
                  24LPA
                </span>
              </div>
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <h4 className="text-xl font-semibold mt-4">-Company Name</h4>
                <p>India</p>
                <h4 className="text-xl font-semibold mt-4">Job Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, magnam.
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium m-2 px-3 py-2 rounded-lg">
                  New
                </span>
                <span className="inline-block bg-blue-100 text-red-800 text-sm font-medium m-2 px-3 py-2 rounded-lg">
                 Part Time
                </span>
                <span className="inline-block bg-blue-100 text-purple-800 text-sm font-medium  m-3 px-2 py-2 rounded-lg">
                  24LPA
                </span>
              </div>
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <h4 className="text-xl font-semibold mt-4">Company Name</h4>
                <p>India</p>
                <h4 className="text-xl font-semibold mt-4">Job Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, magnam.
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium m-2 px-3 py-2 rounded-lg">
                  New
                </span>
                <span className="inline-block bg-blue-100 text-red-800 text-sm font-medium m-2 px-3 py-2 rounded-lg">
                 Part Time
                </span>
                <span className="inline-block bg-blue-100 text-purple-800 text-sm font-medium  m-3 px-2 py-2 rounded-lg">
                  24LPA
                </span>
              </div>
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <h4 className="text-xl font-semibold mt-4">Company Name</h4>
                <p>India</p>
                <h4 className="text-xl font-semibold mt-4">Job Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, magnam.
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium m-2 px-3 py-2 rounded-lg">
                  New
                </span>
                <span className="inline-block bg-blue-100 text-red-800 text-sm font-medium m-2 px-3 py-2 rounded-lg">
                 Part Time
                </span>
                <span className="inline-block bg-blue-100 text-purple-800 text-sm font-medium  m-3 px-2 py-2 rounded-lg">
                  24LPA
                </span>
              </div>
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <h4 className="text-xl font-semibold mt-4">Company Name</h4>
                <p>India</p>
                <h4 className="text-xl font-semibold mt-4">Job Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, magnam.
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium m-2 px-3 py-2 rounded-lg">
                  New
                </span>
                <span className="inline-block bg-blue-100 text-red-800 text-sm font-medium m-2 px-3 py-2 rounded-lg">
                 Part Time
                </span>
                <span className="inline-block bg-blue-100 text-purple-800 text-sm font-medium  m-3 px-2 py-2 rounded-lg">
                  24LPA
                </span>
              </div>
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <h4 className="text-xl font-semibold mt-4">Company Name</h4>
                <p>India</p>
                <h4 className="text-xl font-semibold mt-4">Job Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, magnam.
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium m-2 px-3 py-2 rounded-lg">
                  New
                </span>
                <span className="inline-block bg-blue-100 text-red-800 text-sm font-medium m-2 px-3 py-2 rounded-lg">
                 Part Time
                </span>
                <span className="inline-block bg-blue-100 text-purple-800 text-sm font-medium  m-3 px-2 py-2 rounded-lg">
                  24LPA
                </span>
              </div>
             
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Features() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Verified Jobs</h3>
            <p>
              All jobs posted on our site are verified by industry
              professionals.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">
              User-Friendly Interface
            </h3>
            <p>
              We offer a simple and intuitive platform for job seekers and
              recruiters.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Career Advice</h3>
            <p>
              Our blog and resource center provides expert career advice and
              tips.
            </p>
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
        <h2 className="text-4xl font-bold mb-12">What Our Users Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <p>"Waiting For The Feedback"</p>
            <h4 className="text-xl font-semibold mt-4">-Kajal Kasaudhan</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Job Hunt Website. All Rights Reserved.</p>
        <p className="mt-2">
          Follow us on:
          <a href="https://github.com/iamkajal18" className="ml-2 text-blue-400">
           GitHub
          </a>{" "}
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
      <CategoryCarousel />
      <JobSearch />
      <LatestJob />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
