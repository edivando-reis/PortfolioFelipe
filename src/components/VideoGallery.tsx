import React from 'react';
import { motion } from 'framer-motion';
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const videoData = [
  { id: '1', videoId: 'VsufR8DOKmQ?si=oSLEfXCCJG9hdU11', title: 'Shogun Sessions - Sustance', description: 'A big set of sustance, deep and dark Drum n bass  ' },
  { id: '2', videoId: 'uD4izuDMUQA', title: 'TIMELAPSE OF THE FUTURE', description: 'A journey through cosmic evolution'},
  { id: '3', videoId: '9bZkp7q19f0', title: 'Ativar o Windows', description: 'Lorem Ipsum' },
  { id: '4', videoId: 'BiP0FpY88E4?si=85qt39IPQ6U_O9mw', title: 'Electric Callboy - ELEVATOR OPERATOR', description: 'You heard about a man The lift controller' }
];

interface VideoGalleryProps {
  loaded: boolean;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ loaded }) => {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center p-4"
      initial="hidden"
      animate={loaded ? "show" : "hidden"}
      data-testid="video-gallery"
    >
      <ScrollArea className="w-full max-w-6xl h-[85vh]">
        <div className="grid gap-8 p-2">
          {videoData.map((video, index) => (
            <motion.div 
              key={video.id}
              className="group relative w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow bg-white dark:bg-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-stretch">
                {/* Container do Vídeo Ampliado */}
                <div className="md:w-3/4 lg:w-4/5">
                  <AspectRatio ratio={16/9}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </AspectRatio>
                </div>

                {/* Conteúdo abaixo em mobile/tablet e ao lado em desktop */}
                <div className="flex-1 p-6 space-y-4 dark:text-gray-100 md:flex md:flex-col md:justify-center">
                  <div className="md:flex md:items-start md:justify-between">
                    <h3 className="text-2xl font-bold tracking-tight mb-2 md:mb-0 md:mr-4">
                      {video.title}
                    </h3>
                   
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {video.description}
                  </p>

                  {/* Badge responsivo */}
                  <div className="mt-4 md:absolute md:bottom-6 md:right-6">
                    <span className="inline-block bg-black/80 text-white px-3 py-1.5 rounded-full text-sm">
                      #{video.id.padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </motion.div>
  );
};

export default VideoGallery;