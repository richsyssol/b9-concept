import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const faqData = [
  {
    question: "What is B9Concept?",
    answer:
      "F9 Concept INFRA PRIVATE LIMITED is a leading manufacturer of Reinforced Cement Concrete (RCC) pipes and a construction company specializing in irrigation projects. Established in 2023, the company is dedicated to delivering high-quality products and services.",
  },
  {
    question: "What products does F9 Concept offer?",
    answer:
      "We offer a comprehensive range of RCC pipes, including plain and socket type pipes, reinforced pipes for high-pressure applications (NP3 and NP4 classes), and custom-designed precast cement articles.",
  },
  {
    question: "What industries does F9 Concept serve?",
    answer:
      "We serve government agencies, construction firms, and civil engineering contractors, primarily across the North Maharashtra region.",
  },
  {
    question: "What makes F9 Concept unique in the market?",
    answer:
      "F9 Concept is one of the few private limited companies that manufactures RCC pipes and consumes them in-house for construction projects. This provides a competitive advantage in project efficiency and cost management.",
  },
];

const variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const AccordionItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-gray-700 w-full text-xs md:text-lg overflow-hidden rounded-lg"
      whileHover={{ scale: 1.02 }}
    >
      <button
        className="w-full flex justify-between items-center text-left p-4 bg-gray-600 text-white font-medium hover:bg-gray-800 transition-all duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </motion.span>
      </button>
      <motion.div
        className="overflow-hidden bg-gray-100 text-black"
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        exit="closed"
        variants={variants}
      >
        <div className="p-3">{faq.answer}</div>
      </motion.div>
    </motion.div>
  );
};

export const Accordion = () => {
  return (
    <section className="py-10  bg-gradient-to-r from-[#d8e2e5] via-[#9cced7] to-[#4fa4aa]">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-center text-[#205781] text-xl md:text-4xl font-bold p-6">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} faq={faq} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Accordion;
