import React from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaRupeeSign } from 'react-icons/fa';

// JobCard Component
const JobCard = ({ logo, time, companyName, location, title, positions, jobType, salary }) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-6 m-4 w-full md:w-1/2 lg:w-1/3">
      <div className="flex items-center mb-4">
        {logo ? (
          <img src={logo} alt={`${companyName} logo`} className="w-12 h-12 rounded-full mr-4" />
        ) : (
          <div className="bg-gray-200 w-12 h-12 rounded-full mr-4" />
        )}
        <div>
          <div className="font-bold text-lg">{companyName}</div>
          <div className="text-gray-500 text-sm">{time}</div>
        </div>
      </div>
      <div className="text-gray-600 mb-2 flex items-center">
        <FaMapMarkerAlt className="mr-2" /> {location}
      </div>
      <div className="font-bold text-xl my-2 text-gray-800">{title}</div>
      <p className="text-gray-500 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos provident.
      </p>
      <div className="mt-4 flex items-center justify-between text-gray-600">
        <span className="flex items-center"><FaBriefcase className="mr-2" /> {positions} Positions</span>
        <span className="flex items-center"><FaRupeeSign className="mr-1" /> {salary}</span>
        <span className="text-blue-500 font-semibold">{jobType}</span>
      </div>
      <div className="mt-6 flex">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">View Details</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md ml-2 hover:bg-gray-300 transition">Save For Later</button>
      </div>
    </div>
  );
};

// JobList Component
const JobList = () => {
  const jobs = [
    
    {
      logo: 'https://via.placeholder.com/50',
      time: '2 days ago',
      companyName: 'TechCorp',
      location: 'New Delhi, India',
      title: 'Frontend Developer',
      positions: '5',
      jobType: 'Part Time',
      salary: '24 LPA',
    },
    {
      logo: 'https://via.placeholder.com/50',
      time: '3 days ago',
      companyName: 'BizTech',
      location: 'Bangalore, India',
      title: 'Backend Engineer',
      positions: '3',
      jobType: 'Full Time',
      salary: '30 LPA',
    },
    // Add more jobs as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          logo={job.logo}
          time={job.time}
          companyName={job.companyName}
          location={job.location}
          title={job.title}
          positions={job.positions}
          jobType={job.jobType}
          salary={job.salary}
        />
      ))}
    </div>
  );
};

export default JobList;
