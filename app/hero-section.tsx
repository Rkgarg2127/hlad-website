"use client"

import { useState } from "react"
import Image from "next/image"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

//dummy data.
const slides = [
  {
    id: 1,
    image: '/images/hero-section/hero-section-bg-1.jpg',
    title: 'Explore',
    description: 'There is a big world',
    bttnTxt: 'Bttn Text 1',
    bttnLink: '#',
  },
  {
    id:2,
    image: '/images/hero-section/hero-section-bg-2.jpg',
    title: 'Slide 2 Title',
    description: 'Description for slide 2',
    bttnTxt: 'Bttn Text 2',
    bttnLink: '#',
  },
  {
    id:3,
    image: '/images/hero-section/hero-section-bg-3.jpg',
    title: 'Slide 3 Title',
    description: 'Description for slide 3',
    bttnTxt: 'Bttn Text 3',
    bttnLink: '#',
  },
  {
    id:4,
    image: '/images/hero-section/hero-section-bg-4.jpg',
    title: 'Slide 4 Title',
    description: 'Description for slide 4',
    bttnTxt: 'Bttn Text 4',
    bttnLink: '#',
  }
]

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="relative w-full h-[45vh] md:h-[60vh] lg:h-[90vh] flex items-center bg-gray-500 overflow-hidden">

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        initialSlide={0}
        keyboard={{ enabled: true }}
        speed={800}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative z-10 w-full  h-full"
        style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" } as React.CSSProperties}
      >
        {slides.map((slide, index) => (

          <SwiperSlide key={slide.id} className="relative h-full">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 backdrop-blur-sm overflow-hidden will-change-transform pointer-events-none">
              <Image
                className="w-full h-full object-cover absolute top-0 left-0"
                src={slide.image}
                alt={slide.title}
                fill
                priority
                style={{
                  objectFit: "cover",
                  transform: "translateZ(0)", // Parallax improvement
                }}
              />
            </div>


            {/* Foreground Content */}
            <InnerHeroSection slide={slide} isActive={activeIndex === index} />
          </SwiperSlide>

        ))}

      </Swiper>


      <div className="absolute right-20 bottom-8 md:right-28 md:bottom-10 lg:right-36 lg:bottom-12 ">
        <button
          className="custom-prev absolute z-10 -translate-y-1/2 -translate-x-full w-10 h-10 
             border-2 border-white text-white rounded-sm font-medium shadow-lg 
             flex items-center justify-center overflow-hidden 
             bg-transparent group transition-all duration-300 hover:w-16"
          aria-label="Previous Slide"
        >
          <span className="relative flex items-center justify-start w-full h-full px-2">
            {/* Arrow Icon */}
            <FaChevronLeft
              size={20}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />

            {/* Sliding Tail (animated line from right) */}
            <span
              className="absolute right-2 top-1/2 -translate-y-1/2 h-[3px] w-8 bg-white 
                 opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 
                 transition-all duration-300 ease-in-out"
            ></span>
          </span>
        </button>

        <button
          className="custom-next absolute -right-1 z-10 -translate-y-1/2 translate-x-full w-10 h-10 
             border-2 border-white text-white rounded-sm font-medium shadow-lg 
             flex items-center justify-center overflow-hidden 
             bg-transparent group transition-all duration-300 hover:w-16"
          aria-label="Next Slide"
        >
          <span className="relative flex items-center justify-end w-full h-full px-2">

            {/* Sliding Tail (animated line from right) */}
            <span
              className="absolute left-2 top-1/2 -translate-y-1/2 h-[3px] w-10 bg-white 
                 opacity-0 -translate-x-4 group-hover:-translate-x-0 group-hover:opacity-100 
                 transition-all duration-300 ease-in-out"
            ></span>
            {/* Arrow Icon */}
            <FaChevronRight
              size={20}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </button>
      </div>

      
      {/* <button
        className="custom-prev absolute left-4 top-1/2 z-50 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-jordy-blue/40 to-white/40 text-space-cadet hover:from-space-cadet/40 hover:to-jordy-blue/40 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform "
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={22} />
      </button>
      <button
        className="custom-next absolute right-4 top-1/2 z-50 -translate-y-1/2 w-10 h-10 rounded-lg font-medium shadow-lg flex items-center justify-center bg-gradient-to-r from-white/60 to-jordy-blue/60 text-space-cadet hover:from-space-cadet/60 hover:to-jordy-blue/60 hover:text-white transition-all duration-300  hover:shadow-xl transform"
        aria-label="Next Slide"
      >
        <FaChevronRight size={22} />
      </button> */}



    </section>
  )
}



type Slide = {
  id: number,
  image: string,
  title: string,
  description: string,
  bttnTxt: string,
  bttnLink: string,
};

type Props = {
  slide: Slide;
  isActive: boolean;
};

function InnerHeroSection({ slide, isActive }: Props) {
  const { title, description, bttnTxt, bttnLink } = slide;

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.section
          key={slide.id}
          className="h-full flex items-center justify-start relative bg-cover bg-center bg-no-repeat"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-[1]" />

          <motion.div
            className="mx-16 w-full lg:max-w-[80%] relative z-10 py-4 md:px-6"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl mb-2 font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 1.7, delay: 0.7 }}
            >
              {title}
            </motion.h1>
            <motion.h2
              className="text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8 lg:mb-12 text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 1.7,delay: 0.9 }}
            >
              {description}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 1.7, delay: 1.1 }}
            >
              <Button
                size="sm"
                className="w-fit px-8 py-4 border-2 bg-transparent text-white  transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:bg-white hover:text-black hover:scale-115 transform"
                asChild
              >
                <a
                  href={bttnLink}
                  // onClick={(e) => {
                  //   e.preventDefault()
                  //   document.getElementById("divisions")?.scrollIntoView({ behavior: "smooth" })
                  // }}
                >
                  {bttnTxt}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

