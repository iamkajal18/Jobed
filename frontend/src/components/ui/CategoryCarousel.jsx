import React from "react";
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
    "Game Developer"
  ];
  console.log(categories)
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {categories.map((category, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
           
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                 <a href ="#">{category}</a>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CategoryCarousel;
