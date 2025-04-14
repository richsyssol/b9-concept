import React, { useState } from "react";
import { Card, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";

function Blog() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const blogData = [
    {
      id: "16-reasons-rcc-pipes",
      link: "https://hub.countymaterials.com/news/16-reasons-to-choose-reinforced-concrete-pipes-for-storm-water-management",
      imageUrl:
        "https://static.wixstatic.com/media/f09aad_3b606269b7fb4c6a8dd18228826659ce~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f09aad_3b606269b7fb4c6a8dd18228826659ce~mv2.jpg",
      title: "How RCC Pipes are Revolutionizing Water Management",
      category: "Infrastructure",
      date: "5 Sep",
      author: "Admin",
      content:
        "RCC pipes are transforming water management by providing durability, strength, and cost-effectiveness for large-scale projects.",
    },
    {
      id: "future-infra-india",
      link: "https://www.investindia.gov.in/team-india-blogs/infrastructure-development-india",
      imageUrl:
        "https://static.wixstatic.com/media/f09aad_3b606269b7fb4c6a8dd18228826659ce~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f09aad_3b606269b7fb4c6a8dd18228826659ce~mv2.jpg",
      title: "The Future of Infrastructure Development in India",
      category: "Development",
      date: "5 Sep",
      author: "Admin",
      content:
        "With rapid urbanization, India's infrastructure sector is evolving with smart cities, sustainable construction, and modern RCC technologies.",
    },
    {
      id: "quality-rcc-pipes",
      link: "https://hub.countymaterials.com/news/16-reasons-to-choose-reinforced-concrete-pipes-for-storm-water-management",
      imageUrl:
        "https://static.wixstatic.com/media/f09aad_3b606269b7fb4c6a8dd18228826659ce~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f09aad_3b606269b7fb4c6a8dd18228826659ce~mv2.jpg",
      title:
        "Why Quality Matters: Choosing the Best RCC Pipes for Your Project",
      category: "Construction",
      date: "5 Sep",
      author: "Admin",
      content:
        "Selecting high-quality RCC pipes ensures long-term performance, safety, and compliance with industry standards.",
    },
  ];

  const itemsPerPage = 3;
  const paginatedData = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <motion.div
      style={{ backgroundColor: "#1f657214" }}
      className="mt-26 sm:p-10 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-extrabold text-gray-600 py-7 text-center">
        Latest Blog Updates
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedData.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card
              hoverable
              cover={
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  alt={blog.title}
                  src={blog.imageUrl}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              }
              className="shadow-lg rounded-lg flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {blog.date} | {blog.category} | By {blog.author}
                </p>
              </div>
              <br />
              <a
                href={`/blog/${blog.id}`}
                rel="noopener noreferrer"
                className="mt-4 bg-gradient-to-r from-blue-300 to-blue-500 
              !text-white py-2 px-4 w-full rounded-md font-semibold 
              hover:from-purple-500 hover:to-blue-500 
              transition-all text-center block"
              >
                Read More
              </a>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center py-9">
        <Pagination
          current={currentPage}
          total={blogData.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>

      <MedicalRecordsBanner />
    </motion.div>
  );
}

const MedicalRecordsBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-gradient-to-r from-[#205781] to-[#4F959D] py-6 rounded-lg p-6 flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          "Stay updated with the latest news, insights, and exclusive offers!
          Subscribe to our newsletter and get valuable updates delivered
          straight to your inbox."
          <br />
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium shadow">
            Newsletter Signup
          </button>
        </div>
        <img
          src="https://fhlazwebsap01.blob.core.windows.net/drupal-data/inline-images/report.png"
          alt="Medical Reports"
          className="h-26 w-40"
        />
      </div>
    </motion.div>
  );
};

export default Blog;
