import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { projectsData } from "../types";

const DesktopGallery: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Carousel
        opts={{
          align: "center",
          loop: false,
          dragFree: true,
          containScroll: "trimSnaps",
        }}
        className="w-full max-h-[calc(100vh-180px)]"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {projectsData.map((project) => (
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
                    draggable="false"
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
  );
};

export default DesktopGallery;