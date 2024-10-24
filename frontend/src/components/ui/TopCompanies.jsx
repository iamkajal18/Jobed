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
        color: "#1e40af", // Arrow color
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
        color: "#1e40af", // Arrow color
        cursor: "pointer",
      }}
    >
      <span>←</span>
    </div>
  );
};

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
  

  return (
    <div className="max-w-6xl mx-auto my-4 text-center">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold ">
          {" "}
          <span className="text-red-600">Top  </span>  Companies
        </h2>
        <Link to="/view-all" className="text-blue-500">
          View all
        </Link>
      </div>
      <Slider {...settings}>
        {company.map((company, index) => (
          <div key={index} className="p-2">
            <div className="border p-3 rounded-lg shadow-lg flex flex-col items-center max-w-xs mx-auto">
              <img
                src={`http://res.cloudinary.com/djahxpuyx/${company.image}`}
                alt={company.company_name}
                className="h-14 w-14 mb-4"
              />
              <h3 className="font-bold text-lg text-center">{company.company_name}</h3>
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
              <Link to="/view-jobs" className="text-blue-500 mt-4">
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
