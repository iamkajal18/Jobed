import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaRupeeSign } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CompaniesList = () => {
  const [companies, setcompany] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://jobedinwebsite-production.up.railway.app/api/get_companies/"
        ); // Replace with your backend URL
        setcompany(response.data.comapnies);
    
        //localStorage.setItem("job", JSON.stringify(response.data.jobs)); // Store jobs as a string
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
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-lg p-6 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                {company.image ? (
                  <img
                    src={`http://res.cloudinary.com/djahxpuyx/${company.image}`}
                    alt={`${company.company_name} logo`}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                ) : (
                  <div className="bg-gray-200 w-16 h-16 rounded-full mr-4" />
                )}
                <div>
                  <div className="font-bold text-md">
                    {company.company_name}
                  </div>
                  <div className="text-gray-600 text-sm flex items-center mb-2">
                    <FaMapMarkerAlt className="mr-1" /> {company.company_address}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {formatDate(company.created_at)}
                  </div>
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesList;
