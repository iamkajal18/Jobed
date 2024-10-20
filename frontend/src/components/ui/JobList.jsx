import React from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaRupeeSign } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';
// {
//   "message": "Here is all the data",
//   "success": true,
//   "jobs": [
//       {
//           "id": 3,
//           "postition": "Data Analytics",
//           "job_title": "Data engineering",
//           "job_type": "Full Time",
//           "location": "Lucknow, Uttar Pradesh",
//           "salary": "1LPA",
//           "created_at": "2024-10-19T16:07:33.500846Z",
//           "slug": null,
//           "user": 102,
//           "company": 3
//       }
//   ]
// }
// JobCard Component
const JobList = () => {
  const [jobs, setJobs] = useState([]);
  

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://jobedinwebsite-production.up.railway.app/api/get_job/'); // Replace with your backend URL
        setJobs(response.data.jobs);
        console.log(response.data.jobs)
        // setting the data I means the jobs which comes from the response ka data response.data 
        localStorage.setItem("job",response.data.jobs)
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch job data.');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="bg-white-200 py-2 ">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-6 m-4 w-full">
              <div className="flex items-center mb-4">
                {job.company.logo ? (
                  <img 
                    src={job.company.logo} 
                    alt={`${job.company.companyName} logo`} 
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                ) : (
                  <div className="bg-gray-200 w-12 h-12 rounded-full mr-4" />
                )}
                <div>
                  <div className="font-bold text-lg">{job.company.companyName}</div>
                </div>
              </div>
              <div className="text-gray-600 mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> {job.location}
              </div>
              <div className="font-bold text-xl my-2 text-gray-800">{job.job_title}</div>
              <p className="text-gray-500 mb-4">{job.description}</p>
              <div className="mt-4 flex items-center justify-between text-gray-600">
                <span className="flex items-center">
                  <FaBriefcase className="mr-2" /> {job.position}
                </span>
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> {job.salary}
                </span>
                <span className="text-blue-500 font-semibold">{job.job_type}</span>
              </div>
              <div className="mt-6 flex">
                <a 
                  href={`https://jobedinwebsite-production.up.railway.app/api/get_job_by_id/${job.id}`} 
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// JobList Component


export default JobList;
