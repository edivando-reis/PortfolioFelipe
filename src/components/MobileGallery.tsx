import React, { useRef } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { projectsData } from "../types";

const MobileGallery: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="w-full h-full px-4">
      <div 
        ref={carouselRef}
        className="grid grid-cols-1 gap-4 mobile-gallery-grid"
        style={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}
      >
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="carousel-card relative overflow-hidden rounded-sm"
          >
            <AspectRatio ratio={4/3} className="bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable="false"
              />
            </AspectRatio>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-sm font-light tracking-wider">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileGallery;
