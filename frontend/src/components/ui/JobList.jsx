import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaRupeeSign } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://jobedinwebsite-production.up.railway.app/api/get_job/"
        ); // Replace with your backend URL
        setJobs(response.data.jobs);
        console.log(response.data.jobs);
        console.log(jobs);
        localStorage.setItem("job", response.data.jobs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="bg-white-200 py-2">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {jobs.map((jobb) => (
            <div
              key={jobb.id}
              className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-lg p-6 m-4"
            >
              <div className="flex items-center mb-4">
                {jobb.company.image ? (
                  <img
                    src={`http://res.cloudinary.com/djahxpuyx/${jobb.company.image}`}
                    alt={`${jobb.company.company_name} logo`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                ) : (
                  <div className="bg-gray-200 w-12 h-12 rounded-full mr-4" />
                )}
                <div>
                  <div className="font-bold text-md">
                    {jobb.company.company_name}
                  </div>
                </div>
              </div>
              <div className="text-gray-600 mb-2 flex justify-between">
                <span>
                  <FaMapMarkerAlt className="mr-2" /> {jobb.location}
                </span>
                <span>{jobb.created_at}</span>
              </div>
              <div className="font-bold text-md text-gray-800 mb-2">
                {jobb.job_title}
              </div>
              <p className="text-gray-500 mb-5">{jobb.description}</p>
              <div className="mt-4 flex items-center justify-between text-gray-600">
                <span className="flex items-center">
                  <FaBriefcase className="mr-2 text-md" /> {jobb.position}
                </span>
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> {jobb.salary}
                </span>
                <span className="text-blue-500 font-semibold">
                  {jobb.job_type}
                </span>
              </div>
              <div className="mt-6 flex">
                <a
                  href={`https://jobedinwebsite-production.up.railway.app/api/get_job_by_id/${jobb.id}`}
                  className="bg-blue-600 text-white px-2 py-2 rounded-md hover:bg-blue-700"
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
};

export default JobList;
