import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopCompanies = () => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(
          "https://jobedinwebsite-production.up.railway.app/api/get_companies/"
        );
        setCompany(response.data.comapnies);
        console.log(response.data.comapnies);

        localStorage.setItem("comapnies", response.data.comapnies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCompany();
  }, []);

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Top companies</h2>
        <a href="/view-all" className="text-blue-500">
          View all
        </a>
      </div>

      {/* Slick carousel */}
      <Slider {...settings}>
        {company.map((company, index) => (
          <div key={index}>
            <div className="border p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src={`http://res.cloudinary.com/djahxpuyx/${company.image}`}
                alt={company.company_name}
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 mb-4 object-cover"
              />
              <h3 className="font-bold text-sm sm:text-md text-center">
                {company.company_name}
              </h3>
              <div className="flex items-center mt-2 space-x-1">
                <span className="text-yellow-400 text-lg">★</span>
                <span>{company.rating}</span>
                <span className="text-gray-500">{company.reviews} reviews</span>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 text-center">
                {company.company_address}
              </p>
              <a href="/view-jobs" className="text-blue-500 mt-2">
                View jobs
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopCompanies;
