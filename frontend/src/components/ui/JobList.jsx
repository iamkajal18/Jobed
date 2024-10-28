import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaRupeeSign } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        localStorage.setItem("job", JSON.stringify(response.data.jobs)); // Store jobs as a string
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const timeDiff = Math.abs(now - date);
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff === 0 ? "Today" : `${daysDiff} day${daysDiff > 1 ? 's' : ''} ago`;
  };

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {jobs.map((jobb) => (
            <div
              key={jobb.id}
              className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-lg p-6 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                {jobb.company.image ? (
                  <img
                    src={`http://res.cloudinary.com/djahxpuyx/${jobb.company.image}`}
                    alt={`${jobb.company.company_name} logo`}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                ) : (
                  <div className="bg-gray-200 w-16 h-16 rounded-full mr-4" />
                )}
                <div>
                  <div className="font-bold text-md">
                    {jobb.company.company_name}
                  </div>
                  <div className="text-gray-600 text-sm flex items-center mb-2">
                    <FaMapMarkerAlt className="mr-1" /> {jobb.location}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {formatDate(jobb.created_at)}
                  </div>
                </div>
              </div>
              <div className="font-bold text-sm text-gray-800 mb-2 flex items-center">
                <FaBriefcase className="mr-1" /> {jobb.job_title}
              </div>

              <p className="text-gray-500 mb-5 text-sm flex-grow">{jobb.postition}</p>
              <div className="mt-auto flex items-center justify-between text-gray-600">
                <div className="justify-between flex">
               
                  <FaRupeeSign /> 
                  <span>{jobb.salary}</span>
               
                </div>
                <span className="text-blue-500 font-semibold text-sm">
                  {jobb.job_type}
                </span>
              </div>
              <div className="mt-6 flex">
                <Link
                  to={`/jobcard/${jobb.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
