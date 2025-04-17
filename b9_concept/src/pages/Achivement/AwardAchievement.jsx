import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AwardAchievement = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const achievements = [
    {
      image:
        "https://marketplace.canva.com/EAFZZ3AL_U4/1/0/1600w/canva-gold-and-black-modern-certficate-6m5GloWAMI4.jpg",
      name: "Award1",
    },
    {
      image:
        "https://i.pinimg.com/736x/7e/62/e6/7e62e60d1da2fbed13085189aa60649a.jpg",
      name: "Award2",
    },
    {
      image:
        "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/bianca-and-sidecar-award-certificate-template-w9imzr391b566b.webp",
      name: "Award3",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/3/405624216/DJ/ZQ/MX/201577244/210mm-printed-award-certificate.png   ",
      name: "Award4",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  // Animation variants
  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="text-center py-8 mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Our Awards & Achievements
      </h2>
      <div className="flex flex-wrap justify-around gap-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="flex-1 min-w-[200px] max-w-[250px] cursor-pointer"
            whileHover="hover"
            whileTap="tap"
            variants={imageVariants}
          >
            <img
              src={achievement.image}
              alt={`${achievement.name} Award`}
              className="w-full h-auto rounded-lg shadow-md"
              onClick={() => handleImageClick(achievement.image)}
            />
            <p className="mt-2 text-lg text-gray-600">{achievement.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal with animations */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
          >
            <motion.div
              className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                &times;
              </motion.button>
              <div className="p-8">
                <motion.img
                  src={selectedImage}
                  alt="Enlarged Award"
                  className="w-full h-auto max-h-[70vh] object-contain"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="mt-4 text-xl font-semibold text-gray-800">
                    Award Details
                  </p>
                  <p className="text-gray-600">
                    Additional information about this award can go here.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AwardAchievement;
