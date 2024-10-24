import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const TopCompanies = () => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(
          "https://jobedinwebsite-production.up.railway.app/api/get_companies/"
        ); // Replace with your backend URL
        setCompany(response.data.comapnies);
        console.log(response.data.comapnies);

        localStorage.setItem("comapnies", response.data.comapnies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCompany();

    // another api for jobs that a company has listed
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Top companies</h2>
        <a href="/view-all" className="text-blue-500">
          View all
        </a>
      </div>
      <div className="flex space-x-4">
        {company.map((company, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              src={`http://res.cloudinary.com/djahxpuyx/${company.image}`}
              alt={company.company_name}
              className="h-16 w-16 mb-4"
            />
            <h3 className="font-bold text-lg">{company.company_name}</h3>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="ml-1">{company.rating}</span>
              <span className="ml-2 text-gray-500">
                {company.reviews} reviews
              </span>
              <span className="ml-2 text-gray-500">
                {company.company_address}
              </span>
            </div>
            <a href="/view-jobs" className="text-blue-500 mt-4">
              View jobs
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompanies;
