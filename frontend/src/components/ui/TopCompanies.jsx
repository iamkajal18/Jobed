import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Custom arrow component for the next button
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        width: "30px",
        height: "30px",
        zIndex: 1,
        color: "#1e40af",
        cursor: "pointer",
      }}
    >
      <span>→</span>
    </div>
  );
};

// Custom arrow component for the previous button
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        width: "30px",
        height: "30px",
        zIndex: 1,
        color: "#1e40af",
        cursor: "pointer",
      }}
    >
      <span>←</span>
    </div>
  );
};

const TopCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(
          "https://jobedinwebsite-production.up.railway.app/api/get_companies/"
        );
        setCompanies(response.data.companies); // Fixed typo from 'comapnies'
        localStorage.setItem("companies", JSON.stringify(response.data.companies)); // Fixed typo in localStorage
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to load companies. Please try again later.");
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div className="text-center my-8">Loading companies...</div>;
  }

  if (error) {
    return <div className="text-center my-8 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto my-4 text-center">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          <span className="text-red-600">Top</span> Companies
        </h2>
        <Link to="/viewcompanies" className="text-blue-500 hover:text-blue-700 transition duration-300">
          View all
        </Link>
      </div>
      <Slider {...settings}>
        {companies.map((company, index) => (
          <div key={index} className="p-2">
            <div
              className="border p-4 rounded-lg shadow-lg flex flex-col items-center max-w-xs mx-auto hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              <img
                src={`http://res.cloudinary.com/djahxpuyx/${company.image}`}
                alt={company.company_name}
                className="h-16 w-16 mb-4 object-cover rounded-full"
              />
              <h3 className="font-bold text-lg text-center">{company.company_name}</h3>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="ml-1">{company.rating}</span>
                <span className="ml-2 text-gray-500">
                  {company.reviews} reviews
                </span>
              </div>
              <p className="mt-1 text-gray-500">{company.company_address}</p>
              <Link
                to="/view-jobs"
                className="text-blue-500 mt-4 hover:text-blue-700 transition duration-300"
              >
                View jobs
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopCompanies;
