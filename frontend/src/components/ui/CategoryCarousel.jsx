import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";

function CategoryCarousel() {
  const categories = [
    "Frontend Developer",
  "Backend Developer",
  "Data Scientist",
  "Mobile App Developer",
  "Full Stack Developer",
  "Robotics Engineer",
  "Graphic Designer",
  "Game Developer",
  "AI Engineer",
  "Cloud Engineer",
  "DevOps Engineer",
  "Cybersecurity Specialist",
  "UI/UX Designer",
  "Machine Learning Engineer",
  "Blockchain Developer",
  "AR/VR Developer",
  "Database Administrator",
  "System Architect",
  "Embedded Systems Engineer",
  "Network Engineer",
  "QA Engineer",
  "Technical Writer",
  "IT Support Specialist",
  "Product Manager"
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-8"> {/* Margin on top and center carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-lg" // Adjust max-width for responsiveness
      >
        <CarouselPrevious className="absolute left-0 z-10"> {/* Previous Arrow */}
          <button className="bg-gray-300 hover:bg-gray-400 p-2 rounded-full">
            ←
          </button>
        </CarouselPrevious>

        <CarouselContent className="flex space-x-4"> {/* Space between items */}
          {categories.map((category, index) => (
            <CarouselItem key={index} className=" sm:basis-1/12 md:basis-1/10 lg:basis-1/3 bg-slate-800 text-2xl">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 text-center">
                    <a href="#">{category}</a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="absolute right-0 z-10 mr-0"> {/* Next Arrow */}
          <button className="bg-gray-300 hover:bg-gray-400 p-2 rounded-full">
            →
          </button>
        </CarouselNext>
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
