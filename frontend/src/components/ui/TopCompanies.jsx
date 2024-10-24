import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

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

  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Top companies</h2>
        <a href="/view-all" className="text-blue-500">
          View all
        </a>
      </div>

      {/* Swiper carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {company.map((company, index) => (
          <SwiperSlide key={index}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopCompanies;
