import React from "react";
import { Card, Row, Col, Button, Upload } from "antd";
import { UploadOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Irrigation Canal Construction in Nashik",
      description:
        "Successfully installed 3.014 km RCC pipelines to improve The project enhanced irrigation efficiency and reduced water wastage for local farmers.",
      image:
        "https://fse.jegtheme.com/nursera/wp-content/themes/nursera/assets/img/value.jpg",
      // video: gallery1,
    },
    {
      title: "RCC Pipeline Installation for Water Management",
      description:
        "Implemented high-efficiency water supply networks for industrial clients, ensuring reliable and sustainable water distribution systems.",
      image:
        "https://fse.jegtheme.com/nursera/wp-content/themes/nursera/assets/img/gallery-3.webp", // Store the image path as a string
      // video: gallery2,
    },
    {
      title: "Government Collaboration for Rural Infrastructure",
      description:
        "Partnering with state authorities to develop sustainable drainage systems, improving local infrastructure for better flood control.",
      image:
        "https://community.thriveglobal.com/wp-content/uploads/2019/08/doctor-patient.jpg", // Store the image path as a string
      // video: gallery3,
    },
    {
      title: "Smart City Project - Urban Drainage System",
      description:
        "Developed an advanced drainage network to support rapid urbanization, incorporating eco-friendly materials and technology.",
      image:
        "https://ais-akamai.rtl.de/masters/1961456/undefinedx0/prof-dr-stefanie-tritt-chefarztin-radiologie.jpg", // Store the image path as a string
      // video: gallery4,
    },
  ];

  const testimonials = [
    {
      quote:
        "Suviam Infra has been a reliable partner in our irrigation projects. Theie of exceptional quality, and their team ensures timely project execution.",
      author: "Government Project Engineer",
    },
    {
      quote:
        "As a private contractor, I trust Suviam Infra for all my infrastructure needs. Their commitment to quality and sustainability is unmatched.",
      author: "Infrastructure Developer",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto p-8 mt-25 "
      style={{ backgroundColor: "#1f657214" }}
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-palanquin text-center text-lg m-2 md:text-4xl font-bold"
      >
        Patients Share Their Incredible Recovery Stories
      </motion.h1>
      <p className="text-md md:text-lg text-center text-gray-600">
        Inspiring Journeys of Recovery and Success
      </p>
      <p className="text-center text-md font-extralight md:text-lg text-gray-700 max-w-2xl mx-auto mt-2">
        Hear from our patients as they share their incredible stories of
        resilience, healing, and transformation. Their experiences inspire hope
        and highlight the impact of our dedicated care.
      </p>

      {/* Projects Section */}
      <h2 className="text-xl font-semibold mt-10 text-center text-blue-600">
        Our Patient’s Stories
      </h2>
      <Row gutter={[24, 24]} className="mt-6 font-palanquin">
        {projects.map((project, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                bordered={false}
                className="shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 p-3"
                cover={
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                }
              >
                <h3 className="font-palanquin font-bold text-gray-700 text-lg">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-extralight">
                  {project.description}
                </p>
                {/* <Button
                  type="primary"
                  href={project.video}
                  target="_blank"
                  className="mt-2"
                >
                  + Read More
                </Button> */}
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      {/* Core Services */}

      {/* Testimonials */}
      {/* <h2 className="text-3xl font-semibold mt-10 text-center text-blue-600">
        Testimonials
      </h2> */}
      {/* <Row gutter={[24, 24]} className="mt-6">
        {testimonials.map((testimonial, index) => (
          <Col xs={24} sm={12} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="shadow-lg rounded-lg border-l-4 border-blue-500 p-4">
                <p className="italic text-gray-700">"{testimonial.quote}"</p>
                <p className="font-bold mt-2 text-blue-700">
                  - {testimonial.author}
                </p>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row> */}
      <MedicalRecordsBanner />
    </motion.div>
  );
};

const MedicalRecordsBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-15"
    >
      <div className="bg-gradient-to-r  from-[#205781] to-[#4F959D] py-9 rounded-lg p-6 flex justify-between items-center">
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

export default ProjectsSection;
