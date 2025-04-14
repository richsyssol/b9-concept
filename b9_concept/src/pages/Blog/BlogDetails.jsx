import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card, Input, Button } from "antd";

const BlogPage = () => {
  const [search, setSearch] = useState("");

  const recentPosts = [
    {
      title:
        "Hon. Supreme Court Judgment on availability of ITC on Plant & /or Machinery",
      date: "2024-10-30 07:11:05",
    },
  ];

  return (
    <motion.div
      style={{ backgroundColor: "#1f657214" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-35 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {/* Main Content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:col-span-2"
      >
        <Card className="shadow-lg rounded-lg p-4">
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            src="https://static.wixstatic.com/media/f09aad_3b606269b7fb4c6a8dd18228826659ce~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f09aad_3b606269b7fb4c6a8dd18228826659ce~mv2.jpg"
            alt="Construction site"
            className="w-full h-104 py-5 object-cover rounded-md"
          />
          <h2 className="text-xl font-bold mt-4">
            Hon. Supreme Court Judgment on availability of ITC on Plant & /or
            Machinery
          </h2>
          <p className="mt-2 text-gray-700">
            There always have been controversies regarding the applicability of
            Innovating Infrastructure, Strengthening Tomorrow. With over a
            decade of expertise, we specialize in RCC pipe manufacturing and
            large-scale infrastructure projects.
          </p>
        </Card>
      </motion.div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="shadow-lg rounded-lg mt-6 p-4">
          <h3 className="bg-blue-900 text-white text-lg font-semibold py-2 px-4 rounded-t-lg">
            RECENT BLOG
          </h3>
          <ul className="mt-2">
            {recentPosts.map((post, index) => (
              <motion.li
                key={index}
                className="border-b py-2"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-blue-700 font-medium">{post.title}</p>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <div className="mr-2 text-yellow-500" />-{post.date}
                </div>
              </motion.li>
            ))}
          </ul>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default BlogPage;
