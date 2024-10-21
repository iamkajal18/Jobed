import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDollarSign, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function JobCard() {
  const { id } = useParams();
  const [jobb, setJobb] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle API call
  const fetchJobDetails = async () => {
    setError(null);
    try {
      const response = await axios.get(`https://jobedinwebsite-production.up.railway.app/api/get_job_by_id/${id}`);
      setJobb(response.data.job);
    } catch (err) {
      setError('Failed to fetch job details');
    }
  };

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const timeDiff = Math.abs(now - date);
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff === 0 ? "Today" : `${daysDiff} day${daysDiff > 1 ? 's' : ''} ago`;
  };

  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-red-600">Job</span> Details
        </h2>

        {/* Display error message if there's an error */}
        {error && <p className="text-red-600">{error}</p>}

        {/* Display job details after API call */}
        {jobb && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 center">
            <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col justify-between h-auto">
              <div className="flex items-center mb-4">
                <img
                  src={`http://res.cloudinary.com/djahxpuyx/${jobb.company.image}`}
                  alt={`${jobb.company.company_name} logo`}
                  className="w-24 h-24 object-contain"
                />
                <h4 className="text-xl font-semibold ml-4">{jobb.company.company_name}</h4>
              </div>

              <div className="text-gray-600 text-sm right-8">
                {formatDate(jobb.created_at)}
              </div>

              {/* Job Location */}
              <p className="text-gray-600">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Location: {jobb.location ? jobb.location : 'Not specified'}
              </p>

              {/* Job Title */}
              <h4 className="text-xl font-semibold mt-4">{jobb.job_title}</h4>

              {/* Job Description */}
              <p className="text-gray-600 mb-4">
                {jobb.job_des ? jobb.job_des : 'No description available.'}
              </p>

              {/* Experience & Salary */}
              <div className="mt-4">
                <p className="text-gray-600 mb-2">
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                  Experience: {jobb.experience ? jobb.experience : 'Not specified'}
                </p>
                <p className="text-gray-600">
                  <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                  Salary: {jobb.salary ? jobb.salary : 'Not disclosed'}
                </p>
              </div>

              {/* Job Type and Salary Badge */}
              <div className="mt-4 flex gap-2">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
                  {jobb.job_type}
                </span>
                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded">
                  <FontAwesomeIcon icon={faDollarSign} className="mr-1" />
                  {jobb.salary}
                </span>
              </div>

              {/* Apply Now Button */}
              <a
                href={`/apply/${id}`}
                className="mt-6 bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 text-center"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobCard;
