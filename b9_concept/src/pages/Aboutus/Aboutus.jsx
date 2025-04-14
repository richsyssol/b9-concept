import React from "react";
import { color, motion } from "framer-motion";
import { ab91, ab92, ab93 } from "../../assets";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Card } from "antd";
import "leaflet/dist/leaflet.css";
import MeetTheTeam from "./MeetTheTeam";
import VisionMission from "./VisionMssion";
import OurLocations from "./OurLocations";
// import Services from "./Services";

const LabTestingCenter = () => {
  return (
    <div
      className="flex flex-col items-center px-6 md:px-20 py-8"
      style={{ backgroundColor: "#1f657214" }}
    >
      <AboutCompany />
      {/* <StatsSection /> */}
      {/* <Services /> */}
      <OurLocations />
      <VisionMission />

      <MeetTheTeam />
    </div>
  );
};

const AboutCompany = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col py-11 md:flex-row items-center"
    >
      <motion.div
        className="relative md:w-1/2"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={ab91}
          alt="Lab Testing"
          className="rounded-lg shadow-lg w-full"
        />
        <motion.div
          className="absolute top-5 left-5 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src={ab92}
            alt="Scientist"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="md:w-2/3 md:pl-12 text-center md:text-left mt-8 md:mt-0"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#205781] mt-29">
          The Largest Network Of Laboratories for Testing Services.
        </h2>
        <p className="text-gray-600 py-5">
          We provide world-class testing services with advanced technology and
          expertise, ensuring quality, safety, and reliability for our clients
          worldwide. We provide world-class testing services with advanced
          technology and expertise, ensuring quality, safety, and reliability
          for our clients worldwide. We provide world-class testing services
          with advanced technology and expertise, ensuring quality, safety, and
          reliability for our clients worldwide. We provide world-class testing
          services with advanced technology and expertise, ensuring quality,
          safety, and reliability for our clients worldwide. We provide
          world-class testing services with advanced technology and expertise,
          ensuring quality, safety, and reliability for our clients worldwide.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start mt-6 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card hoverable className="shadow-md rounded-lg">
              <ServiceIcon image={ab93} title="Blood Bank & Chemistry Center" />
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card hoverable className="shadow-md rounded-lg">
              <ServiceIcon
                image={ab93}
                title="Chemical Research & Testing Center"
              />
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServiceIcon = ({ image, title }) => (
  <div className="flex items-center space-x-3">
    <img src={image} alt={title} className="w-20 h-20" />
    <span className="font-semibold text-gray-800">{title}</span>
  </div>
);

export default LabTestingCenter;
