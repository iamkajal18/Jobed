import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import new chevron icons
import { BiLoaderCircle } from "react-icons/bi"; // Loader icon

// Custom next arrow component with modern chevron design
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next flex justify-center items-center w-8 h-8 bg-blue-500 rounded-full cursor-pointer text-white"
      onClick={onClick}
      style={{ zIndex: 1 }}
    >
      <FaChevronRight size={10} />
    </div>
  );
};

// Custom previous arrow component with modern chevron design
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev flex justify-center items-center w-8 h-8 bg-blue-500 rounded-full cursor-pointer text-white"
      onClick={onClick}
      style={{ zIndex: 1 }}
    >
      <FaChevronLeft size={10} />
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
        setCompanies(response.data.comapnies); // Fix Typo in 
        localStorage.setItem("companies", JSON.stringify(response.data.comapnies)); // Typo in the API response
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
              <img
                src={`http://res.cloudinary.com/djahxpuyx/${company.image}`}
                alt={company.company_name}
                className="h-16 w-16 mb-4 rounded-full object-cover"
              />
              <h3 className="text-lg font-bold text-gray-700">{company.company_name}</h3>
              <div className="flex items-center">
        
              </div>
              <p className="mt-2 text-gray-500 text-sm text-center">{company.company_address}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopCompanies;
