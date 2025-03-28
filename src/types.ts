export interface GalleryProps {
    loaded: boolean;
  }
  
  export interface Project {
    id: number;
    title: string;
    image: string;
  }
  
  export const projectsData: Project[] = [
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
      id: 17,
      title: 'Residential Project',
      image: '/assets/carousel/Sala3.jpg',
    },
    {
      id: 18,
      title: 'Residential Project',
      image: '/assets/carousel/Sala4.jpg',
    },
    {
      id: 19,
      title: 'Residential Project',
      image: '/assets/carousel/Sala5.jpg',
    },
    {
      id: 20,
      title: 'Residential Project',
      image: '/assets/carousel/Sala6.jpg',
    },
    {
      id: 21,
      title: 'Residential Project',
      image: '/assets/carousel/Sala7.jpg',
    },
    {
      id: 22,
      title: 'Residential Project',
      image: '/assets/carousel/Sala8.jpg',
    },
    {
      id: 23,
      title: 'Residential Project',
      image: '/assets/carousel/VarandaGourmet.jpg',
    },
  ];

  
  export type GalleryMode = 'photos' | 'videos';

  export interface GalleryProps {
    loaded: boolean;
  }