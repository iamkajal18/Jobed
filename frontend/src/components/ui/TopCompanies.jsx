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
      className="slick-arrow slick-next flex justify-center items-center w-4 h-5 bg-blue-500 rounded-full cursor-pointer text-blue-900 hover:bg-black"
      onClick={onClick}
      style={{ zIndex: 1 }}
    >
      <FaChevronRight size={16} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev flex justify-center items-center w-4 h-5 bg-blue-500 rounded-full cursor-pointer text-blue-900 hover:bg-black"
      onClick={onClick}
      style={{ zIndex: 1 }}
    >
      <FaChevronLeft size={16} />
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
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <BiLoaderCircle size={50} className="animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center my-8 text-red-500">{error}</div>;
  }

  return (
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
          <div key={index} className="mr-4 ml-4" >
            <div className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center max-w-40 mx-auto">
              <img
                src={`http://res.cloudinary.com/djahxpuyx/${company.image}`}
                alt={company.company_name}
                className="h-12 w-12 mb-3 rounded-full object-cover"
              />
              <h2 className=" font-semibold text-gray-700">{company.company_name}</h2>
              <div className="flex items-center mt-1">
              </div>
              <p className="mt-1 text-gray-500 text-xs text-center">{company.company_address}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopCompanies;
