import { useEffect, useState, useRef } from "react";

const Heading = ({articles}) => {
  const [imageheads, setimageheads] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);
  
  
  useEffect(() => {
    const urls = [];
    for (let i = 1; i <= 4; i++) {
      const url = `https://picsum.photos/1216/600?random=${i}`;
      urls.push(url);
    }
    setimageheads(urls);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === imageheads.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? imageheads.length - 1 : prev - 1));
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPos(e.pageX - currentTranslate);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grabbing';
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentPosition = e.pageX;
    const currentTranslateTemp = currentPosition - startPos;
    setCurrentTranslate(currentTranslateTemp);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }

    const threshold = 100; // minimum distance for swipe
    const drag = currentTranslate - prevTranslate;

    if (drag < -threshold) {
      goToNextSlide();
    } else if (drag > threshold) {
      goToPrevSlide();
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) {
        handleDragEnd();
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, [isDragging]);

  if (imageheads.length === 0) return null;

  return (
    <div className="max-w-[1216px] mx-auto relative">
      {/* Slider Container */}
      <div 
        ref={sliderRef}
        className="relative h-[600px] rounded-lg overflow-hidden cursor-grab select-none"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {/* Current Slide */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
          style={{ 
            backgroundImage: `url(${imageheads[currentSlide]})`,
            transform: `translateX(${currentTranslate}px)`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8">
            <div className="text-white">
              <h2 className="w-[530px] font-serif text-4xl font-bold mb-4">
                Richird Norton photorealistic rendering as real photos
              </h2>
              <div className="flex items-center text-sm space-x-4 opacity-90">
                <span>Photography</span>
                <span>•</span>
                <span>September 25, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full w-10 h-10 flex items-center justify-center text-white text-2xl transition-colors"
      >
        ‹
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full w-10 h-10 flex items-center justify-center text-white text-2xl transition-colors"
      >
        ›
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {imageheads.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Heading;