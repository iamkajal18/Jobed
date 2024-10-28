import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
<<<<<<< HEAD
      className="slick-arrow slick-next flex justify-center items-center w-8 h-8 bg-blue-500 rounded-full cursor-pointer text-white"
      onClick={onClick}
      style={{ zIndex: 1 }}
    >
      <FaChevronRight size={10} />
=======
      className="slick-arrow slick-next flex justify-center items-center w-6 h-5 bg-blue-500 rounded-full cursor-pointer text-blue-900 hover:bg-black"
      onClick={onClick}
      style={{ zIndex: 1 }}
    >
      <FaChevronRight size={16} />
>>>>>>> 6a86682f68edb627757cd667cd4989e14c53624a
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
<<<<<<< HEAD
      className="slick-arrow slick-prev flex justify-center items-center w-8 h-8 bg-blue-500 rounded-full cursor-pointer text-white"
      onClick={onClick}
      style={{ zIndex: 1 }}
    >
      <FaChevronLeft size={10} />
=======
      className="slick-arrow slick-prev flex justify-center items-center w-6 h-5 bg-blue-500 rounded-full cursor-pointer text-blue-900 hover:bg-black"
      onClick={onClick}
      style={{ zIndex: 1 }}
    >
      <FaChevronLeft size={16} />
>>>>>>> 6a86682f68edb627757cd667cd4989e14c53624a
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
        setCompanies(response.data.comapnies);
        localStorage.setItem("companies", JSON.stringify(response.data.comapnies));
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
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <BiLoaderCircle size={50} className="animate-spin text-gray-500" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center my-8 text-red-500">{error}</div>;
  }

  return (
<<<<<<< HEAD
    <div className="max-w-6xl mx-10 text-center">
  <div className="flex justify-between items-center">
    <h2 className="font-bold text-center flex-auto">
      <span className="text-red-600">Top</span> Companies
    </h2>
    <Link to="/viewcompanies" className="text-blue-500">
      View all
    </Link>
  </div>
      <Slider {...settings}>
        {companies.map((company, index) => (
          <div key={index} className="p-2">
            <div className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center max-w-40 mx-auto">
=======
    <div className="max-w-4xl mx-auto my-4 text-center">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-center flex-auto">
          <span className="text-red-600">Top</span> Companies
        </h2>
        <Link to="/viewcompanies" className="text-blue-500 text-sm">
          View all
        </Link>
      </div>
      <Slider {...settings}>
        {companies.map((company, index) => (
          <div key={index} className="p-2">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center max-w-xs mx-auto">
>>>>>>> 6a86682f68edb627757cd667cd4989e14c53624a
              <img
                src={`http://res.cloudinary.com/djahxpuyx/${company.image}`}
                alt={company.company_name}
                className="h-12 w-12 mb-3 rounded-full object-cover"
              />
<<<<<<< HEAD
              <h3 className="text-lg font-bold text-gray-700">{company.company_name}</h3>
              <div className="flex items-center">
        
              </div>
              <p className="mt-2 text-gray-500 text-sm text-center">{company.company_address}</p>
=======
              <h3 className="text-md font-semibold text-gray-700">{company.company_name}</h3>
              <div className="flex items-center mt-1">
                <span className="text-yellow-400 text-base">★</span>
                <span className="ml-1 text-sm font-medium">{company.rating}</span>
                <span className="ml-2 text-gray-500 text-xs">
                  ({company.reviews} reviews)
                </span>
              </div>
              <p className="mt-1 text-gray-500 text-xs text-center">{company.company_address}</p>
              <Link
                to="/view-jobs"
                className="mt-3 text-blue-600 text-xs hover:text-blue-800 hover:underline"
              >
                View jobs
              </Link>
>>>>>>> 6a86682f68edb627757cd667cd4989e14c53624a
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopCompanies;
