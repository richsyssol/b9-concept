import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ab92, ab91, ab93, b992, video3 } from "../../assets";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesSection from "./ServicesSection";
import FeatureSection from "./FeatureSection";
import Accordion from "./Accordion";
import DepartmentSection from "./DepartmentSection";
import NewsletterSection from "./NewsletterSection";
import ReliableServices from "./ReliableServices";
import ClientCarousel from "./ClientCarousel";
import Appointment from "./Appointment";
import PopupModal from "../Model/PopupModel";

const heroContent = [
  {
    src: ab91,
    title: "Innovating a Sustainable Future",
    description:
      "Creating eco-friendly solutions for wastewater management and sustainable infrastructure.",
  },
  {
    src: b992,
    title: "Revolutionizing Engineering & Environment",
    description:
      "Leading the way in green industry innovations and environmental sustainability.",
  },
  {
    src: ab93,
    title: "Committed to Green Energy Solutions",
    description:
      "Advancing renewable energy and resource efficiency for a cleaner world.",
  },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { src, title, description } = heroContent[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
    );
  };

  return (
    <div className="relative shadow-2xl w-full h-[560px] md:h-[700px]  flex items-center justify-center text-white overflow-hidden rounded-bl-[40%] md:rounded-bl-[20%] rounded-tr-[40%] md:rounded-tr-[20%]">
      {/* Background Image with Overlay */}
      <motion.div
        key={src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      {/* Left Arrow Button */}
      <button
        onClick={prevImage}
        className="hidden md:flex absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextImage}
        className="hidden md:flex absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* Text Content with Transitions */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
};
export const MedicalRecordsBanner = () => {
  return (
    <div className=" ">
      <div className="bg-gradient-to-r from-[#205781] to-[#4F959D] rounded-lg p-6 flex justify-between items-center gap-8">
        <div className="text-white text-lg font-semibold">
          “We use cutting-edge root cause analysis energy scanning techniques
          and holistic approach for detection and resolution of existing
          emotional and physiological health problems at the root level before
          they get serious.”
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium shadow">
            Find Your Solution Today
          </button>
        </div>

        <img
          src="https://fhlazwebsap01.blob.core.windows.net/drupal-data/inline-images/report.png"
          alt="Medical Reports"
          className="h-39 w-250"
        />
      </div>

      {/* <VideoSection /> */}
    </div>
  );
};

function Homepage() {
  return (
    <div>
      <HeroSection />
      {/* <MedicalRecordsBanner /> */}
      <PopupModal />
      {/* <Appointment /> */}
      <ServicesSection />
      <DepartmentSection />
      <NewsletterSection />
      <ReliableServices />
      <ClientCarousel />

      {/* <FeatureSection /> */}
      <Accordion />
    </div>
  );
}

export default Homepage;
