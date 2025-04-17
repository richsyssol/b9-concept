import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import Aboutus from "./Aboutus";

const VisionMission = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mb-8 font-bold text-[#205781] py-5">
        Our Vision & Mission
      </h1>

      <div className="flex flex-col md:flex-row justify-center  gap-10">
        <VisionMissionCard
          icon={Eye}
          title="Our Vision"
          text="To be the most trusted and innovative laboratory network, ensuring quality and To be the most trusted and innovative laboratory network, ensuring quality and reliability in testing and research.To be the most trusted and innovative laboratory network, ensuring quality and reliability in testing and research.To be the most trusted and innovative laboratory network, ensuring quality and reliability in testing and research.reliability in testing and research."
        />
        <VisionMissionCard
          icon={Target}
          title="Our Mission"
          text="We strive to deliver precise and high-quality testing To be the most trusted and innovative laboratory network, ensuring quality and reliability in testing and research.To be the most trusted and innovative laboratory network, ensuring quality and reliability in testing and research.To be the most trusted and innovative laboratory network, ensuring quality and reliability in testing and research. services through advanced technology and expert professionals."
        />
      </div>
    </div>
  );
};

const VisionMissionCard = ({ icon: Icon, title, text }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 flex flex-col items-center text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Icon className=" text-[#205781] w-10 h-10 mb-3" />
    <h2 className="text-2xl font-bold  text-[#205781]">{title}</h2>
    <p className="text-gray-700 mt-2">{text}</p>
  </motion.div>
);

export default VisionMission;
