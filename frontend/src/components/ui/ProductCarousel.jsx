import React, { useState, useEffect } from 'react';

// Sample product data with actual image URLs
const sampleProducts = [
  {
    id: 1,
    title: "Wipro",
    image: "https://etstatic.tnn.in/thumb/msid-105414113,width-1280,height-720,resizemode-75/105414113.jpg"
  },
  {
    id: 2,
    title: "Google",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd"
  },
  {
    id: 3,
    title: "TCS",
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-04/19/full/1681892675-9443.jpg?im=FitAndFill=(826,465)"
  },
  {
    id: 4,
    title: "Amazon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSC6-sXappjcHAXkgQ1avjOMOROLXbuSCDZg&s"
  },
  {
    id: 5,
    title: "Accenture",
    image: "https://media.glassdoor.com/lst2x/96/1b/4c/b6/accenture-ddc2a.jpg"
  }
]

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const itemsToShow = 3;

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === sampleProducts.length - itemsToShow ? 0 : prevIndex + 1
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const visibleProducts = sampleProducts.slice(currentIndex, currentIndex + itemsToShow);

  if (visibleProducts.length < itemsToShow) {
    visibleProducts.push(...sampleProducts.slice(0, itemsToShow - visibleProducts.length));
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-2">
      <div className="relative">
        <h2 className="text-2xl font-bold mb-4"><span className= "text-red-600">Top</span> Company</h2>
        <div className="flex gap-4 overflow-hidden">
          {visibleProducts.map((product) => (
            <div 
              key={product.id} 
              className="flex-none w-1/3 transition-all duration-500"
            >
              <div className="border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="mt-2 text-center text-sm">{product.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          
          <button
            onClick={() => setCurrentIndex((prev) => 
              prev === 0 ? sampleProducts.length - itemsToShow : prev - 1
            )}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Previous
          </button>
          
          <button
            onClick={() => setCurrentIndex((prev) => 
              prev === sampleProducts.length - itemsToShow ? 0 : prev + 1
            )}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;