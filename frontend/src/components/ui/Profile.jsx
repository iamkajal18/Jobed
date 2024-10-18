import React from "react";
import Navbar from "./Navbar";

// You need to define jobInfo array or import it
const jobInfo = [
  // Example job data
  {
    company: "Company A",
    location: "Location A",
    title: "Job Title A",
    details: "Job details A",
    salary: "$60,000",
  },
  {
    company: "Company B",
    location: "Location B",
    title: "Job Title B",
    details: "Job details B",
    salary: "$70,000",
  },
  {
    company: "Company C",
    location: "Location C",
    title: "Job Title C",
    details: "Job details C",
    salary: "$80,000",
  },
];

function Profile() {
  // Replace 'input.username' with the actual username, e.g., from props or state
  const username = "input.username"; // Replace with the actual logic to get the username

  return (
    <div className="py-6 sm:py-12">
      <div className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-10 shadow-2xl sm:rounded-3xl sm:px-12 md:py-16 lg:px-20 lg:py-24">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset="1" stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>

            <img
              src="shyam.jpg"
              alt="Profile picture"
              className="w-24 h-24 rounded-full mx-auto"
            />

            <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-2xl">
                Username: {username}
                <br />
                Start using our app today.
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-300">
                Biodata: Ac euismod vel sit maecenas id pellentesque eu sed
                consectetur. Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="/job"
                  className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a
                  href="/job"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="py-1">
              <div className="container mx-auto text-center p-8 bg-[#faf5ff] shadow-lg rounded-lg">
                <h2 className="text-4xl font-bold mb-12">
                  <span className="text-[#dc2626]">Apply</span> Job
                  Opportunity
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {jobInfo.map((job, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white shadow-lg rounded-lg h-full flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="text-xl font-semibold mt-4">
                          {job.company}
                        </h4>
                        <p className="text-gray-600">{job.location}</p>
                        <h4 className="text-xl font-semibold mt-4">
                          {job.title}
                        </h4>
                        <p className="text-gray-500">{job.details}</p>
                      </div>
                      <div className="mt-4">
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium m-1 px-2 py-1 rounded-lg">
                          New
                        </span>
                        <span className="inline-block bg-blue-100 text-red-800 text-sm font-medium m-1 px-2 py-1 rounded-lg">
                          Part Time
                        </span>
                        <span className="inline-block bg-blue-100 text-purple-800 text-sm font-medium m-1 px-2 py-1 rounded-lg">
                          {job.salary}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileShow() {
  return (
    <>
      <Navbar />
      <Profile />
    </>
  );
}

export default ProfileShow;
