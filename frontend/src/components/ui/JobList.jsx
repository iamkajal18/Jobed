import React from 'react';

// JobCard Component
const JobCard = ({ time, companyName, location, title, positions, jobType, salary }) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 m-4 w-full md:w-1/2 lg:w-1/3">
      <div className="text-gray-500 text-sm">{time}</div>
      <div className="font-bold text-lg">{companyName}</div>
      <div className="text-gray-500">{location}</div>
      <div className="font-bold text-xl my-2">{title}</div>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos provident.
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-gray-600">{positions} Positions</span>
        <span className="text-red-600">{jobType}</span>
        <span className="text-gray-800 font-bold">{salary}</span>
      </div>
      <div className="mt-4 flex">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Details</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Save For Later</button>
      </div>
    </div>
  );
};

// JobList Component
const JobList = () => {
  const jobs = [
    {
      time: '2 days ago',
      companyName: 'Company Name',
      location: 'India',
      title: 'Job Title',
      positions: '12',
      jobType: 'Part Time',
      salary: '24LPA',
    },
    {
      time: '3 days ago',
      companyName: 'Another Company',
      location: 'India',
      title: 'Job Title 2',
      positions: '10',
      jobType: 'Full Time',
      salary: '30LPA',
    },
    // Add more jobs as needed
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {jobs.map((job, index) => (
        <JobCard
          key={index}
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
