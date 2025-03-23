
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import Banheiro1 from "../assets/carousel/Banheiro1.jpg"

interface GalleryProps {
  loaded: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ loaded }) => {
  const isMobile = useIsMobile();
  
  // Sample architectural photography projects
  const projects = [
    {
      id: 1,
      title: 'Modern Bathroom',
      image: "/assets/carousel/Banheiro1.jpg",
      
    },
    {
      id: 2,
      title: 'Modern Kitchen',
      image: '/assets/carousel/Banheiro2.jpg',
    },
    {
      id: 3,
      title: 'Contemporary Dining',
      image: '/assets/carousel/Banheiro3.jpg',
    },
    {
      id: 4,
      title: 'Luxury Living Room',
      image: '/assets/carousel/Banheiro4.jpg',
    },
    {
      id: 5,
      title: 'Minimalist Office',
      image: '/assets/carousel/Cozinha1.jpg',
    },
    {
      id: 6,
      title: 'Urban Apartment',
      image: '/assets/carousel/Cozinha2.jpg',
    },
    {
      id: 7,
      title: 'Modern Exterior',
      image: '/assets/carousel/Cozinha3.jpg',
    },
    {
      id: 8,
      title: 'Glass Facade',
      image: '/assets/carousel/Cozinha4.jpg',
    },
    {
      id: 9,
      title: 'Urban Interior',
      image: '/assets/carousel/Cozinha5.jpg',
    },
    {
      id: 10,
      title: 'Minimalist Kitchen',
      image: '/assets/carousel/Fachada.jpg',
    },
    {
      id: 11,
      title: 'Commercial Space',
      image: '/assets/carousel/Quarto1.jpg',
    },
    {
      id: 12,
      title: 'Architectural Detail',
      image: '/assets/carousel/Quarto2.jpg',
    },
    {
      id: 13,
      title: 'Hotel Design',
      image: '/assets/carousel/Quarto3.jpg',
    },
    {
      id: 14,
      title: 'Lighting Design',
      image: '/assets/carousel/Quarto4.jpg',
    },
    {
      id: 15,
      title: 'Materials Study',
      image: '/assets/carousel/Sala1.jpg',
    },
    {
      id: 16,
      title: 'Residential Project',
      image: '/assets/carousel/Sala2.jpg',
    },
    {
      id: 16,
      title: 'Residential Project',
      image: '/assets/carousel/Sala3.jpg',
    },
    {
      id: 16,
      title: 'Residential Project',
      image: '/assets/carousel/Sala4.jpg',
    },
    {
      id: 16,
      title: 'Residential Project',
      image: '/assets/carousel/Sala5.jpg',
    },
    {
      id: 16,
      title: 'Residential Project',
      image: '/assets/carousel/Sala6.jpg',
    },
    {
      id: 16,
      title: 'Residential Project',
      image: '/assets/carousel/Sala7.jpg',
    },
    {
      id: 16,
      title: 'Residential Project',
      image: '/assets/carousel/Sala8.jpg',
    },
    {
      id: 16,
      title: 'Residential Project',
      image: '/assets/carousel/VarandaGourmet.jpg',
    },
  ];

  // Animation variants for the gallery
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="py-12 md:py-32 px-6 md:px-12 overflow-hidden"
      initial="hidden"
      animate={loaded ? "show" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-screen-2xl mx-auto">
        <Carousel
          opts={{
            align: "center",
            loop: false,
            dragFree: true
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {projects.map((project, index) => (
              <CarouselItem 
                key={project.id} 
                className={cn(
                  "pl-4 md:pl-6 transition-all duration-300",
                  "basis-full md:basis-3/4 lg:basis-1/2"
                )}
              >
                <div className="carousel-card relative overflow-hidden rounded-sm">
                  <AspectRatio ratio={4/3} className="bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700"
                      loading="lazy"
                    />
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-sm md:text-base font-light tracking-wider">{project.title}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2 lg:left-8 bg-white/30 hover:bg-white/50 backdrop-blur-sm border-none shadow-md" />
            <CarouselNext className="right-2 lg:right-8 bg-white/30 hover:bg-white/50 backdrop-blur-sm border-none shadow-md" />
          </div>
        </Carousel>
      </div>
    </motion.section>
  );
};

export default Gallery;
