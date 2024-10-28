import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";

import {
  faMapMarkerAlt,
  faDollarSign,
  faBriefcase,
  faCalendarAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import Slider from "./TopCompanies";
function JobCard() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("description"); // Tab state

  const fetchJobDetails = async () => {
    setError(null);
    try {
      const response = await axios.get(
        `https://jobedinwebsite-production.up.railway.app/api/get_job_by_id/${id}`
      );
      setJob(response.data.job);
    } catch (err) {
      setError("Failed to fetch job details");
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
    return daysDiff === 0
      ? "Today"
      : `${daysDiff} day${daysDiff > 1 ? "s" : ""} ago`;
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 lg:px-12">
        <h3 className="text-2xl font-bold mb-8">
          <span className="text-red-600">Job</span> Details
        </h3>

        {error && <p className="text-red-600">{error}</p>}

        {job && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-2">
                <img
                  src={`http://res.cloudinary.com/djahxpuyx/${job.company.image}`}
                  alt={`${job.company.company_name} logo`}
                  className="w-20 h-20 object-contain"
                />
                <h4 className="text-xl font-semibold ml-4 ">
                  {job.company.company_name}
                </h4>
              </div>

              <div className="text-gray-600 text-sm ">
                Posted: {formatDate(job.created_at)}
              </div>

              <div className="mt-6">
                <p className="text-gray-600 mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  Location: {job.location || "Not specified"}
                </p>
               
                <p className="text-gray-600 mb-2">
                  <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                  Salary: {job.salary || "Not disclosed"}
                </p>
                <p className="text-gray-600">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  Job Type: {job.job_type || "Not specified"}
                </p>
              </div>

              <a
                href={`/apply/${id}`}
                className="mt-8 bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 text-center block"
              >
                Apply Now
              </a>
            </div>

            {/* Main Content with Tabs */}
            <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-3xl font-semibold mb-4">{job.job_title}</h3>

              {/* Tabs */}
              <div className="border-b-2 mb-6">
                <button
                  className={`px-4 py-2 text-lg font-medium ${
                    activeTab === "description"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : ""
                  }`}
                  onClick={() => setActiveTab("description")}
                >
                  Job Description
                </button>
                <button
                  className={`px-4 py-2 text-lg font-medium ${
                    activeTab === "requirements"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : ""
                  }`}
                  onClick={() => setActiveTab("requirements")}
                >
                  Requirements
                </button>
                <button
                  className={`px-4 py-2 text-lg font-medium ${
                    activeTab === "experience"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : ""
                  }`}
                  onClick={() => setActiveTab("experience")}
                >
                  Experience
                </button>
              </div>
              {activeTab === "description" ? (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2">
                    Job Description
                  </h4>
                  <p className="text-gray-600">
                    {job.job_description || "No description available."}
                  </p>
                </div>
              ) : activeTab === "requirements" ? (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2">
                    Job Requirements
                  </h4>
                  <p className="text-gray-600">
                    {job.job_requirement ||
                      "No specific requirements provided."}
                  </p>
                </div>
              ) : (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2">Experience</h4>
                  <p className="text-gray-600">
                    {job.job_experience || "No specific experience required."}
                  </p>
                </div>
              )}

              {/* Other Job Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-gray-600">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  Posted: {formatDate(job.created_at)}
                </div>
                <div className="text-gray-600">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  Job Type: {job.job_type || "Full-time"}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function showDetails() {
  return (
    <>
      <Navbar></Navbar>
      <JobCard></JobCard>
      <Slider></Slider>
      <Footer></Footer>

    </>
  );
}
export default showDetails;
