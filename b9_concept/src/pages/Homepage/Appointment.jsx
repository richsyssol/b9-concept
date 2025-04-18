import React, { useState } from "react";
import axiosInstance from "../../services/api";
import { Card, Divider, Row, Col } from "antd";
import {
  User,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Stethoscope,
  CheckCircle2,
  XCircle,
  Clock,
  Activity,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    contact: "",
    email: "",
    dob: "",
    doctor: "",
    status: "pending",
    created_by: 1,
  });
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post("/appoint/create", formData);
      console.log(response.data);
      if (response.data.success) {
        setShowSuccessPopup(true);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          city: "",
          contact: "",
          email: "",
          dob: "",
          doctor: "",
          status: "pending",
          created_by: 1,
        });
        // Auto-hide after 3 seconds
        setTimeout(() => setShowSuccessPopup(false), 3000);
      } else {
        throw new Error(response.data.error || "Failed to create appointment");
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
      message.error({
        content: (
          <span>
            <XCircle style={{ color: "#ff4d4f", marginRight: 8 }} />
            {error.response?.data?.error || error.message}
          </span>
        ),
        duration: 4.5,
        style: {
          marginTop: "50px",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 relative">
      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-8 left-1/2 transform -translate-x-1/2 z-[9999]"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white p-6 rounded-xl shadow-2xl border border-green-200 max-w-md"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="bg-green-100 p-3 rounded-full mb-4">
                  <CheckCircle2 className="text-green-500 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Appointment Booked Successfully!
                </h3>
                <p className="text-gray-600 text-center">
                  Your appointment has been confirmed. We've sent the details to
                  your email.
                </p>
                <button
                  onClick={() => {
                    navigate("/home");
                    setShowSuccessPopup(false);
                  }}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Book Your Medical Appointment
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Schedule your visit with our expert healthcare professionals. We're
            committed to providing you with the best medical care in a
            comfortable environment.
          </p>
        </div>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            {/* Form Section */}
            <Card
              title={
                <span className="text-xl font-semibold text-blue-800">
                  Patient Information
                </span>
              }
              bordered={false}
              className="shadow-lg"
            >
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <Row gutter={24}>
                    <Col xs={24} md={12}>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          First Name *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                            <User size={18} />
                          </span>
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            onChange={handleChange}
                            value={formData.firstName}
                          />
                        </div>
                      </div>
                    </Col>

                    <Col xs={24} md={12}>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Last Name *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                            <User size={18} />
                          </span>
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            onChange={handleChange}
                            value={formData.lastName}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={24}>
                    <Col xs={24} md={12}>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Contact Number *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                            <Phone size={18} />
                          </span>
                          <input
                            type="tel"
                            name="contact"
                            pattern="[0-9]{10,15}"
                            placeholder="Contact Number"
                            required
                            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            onChange={handleChange}
                            value={formData.contact}
                          />
                        </div>
                      </div>
                    </Col>

                    <Col xs={24} md={12}>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Email *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                            <Mail size={18} />
                          </span>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            onChange={handleChange}
                            value={formData.email}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={24}>
                    <Col xs={24} md={12}>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          City *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                            <MapPin size={18} />
                          </span>
                          <input
                            type="text"
                            name="city"
                            placeholder="City"
                            required
                            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            onChange={handleChange}
                            value={formData.city}
                          />
                        </div>
                      </div>
                    </Col>

                    <Col xs={24} md={12}>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Date of Birth *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                            <Calendar size={18} />
                          </span>
                          <input
                            type="date"
                            name="dob"
                            required
                            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            onChange={handleChange}
                            value={formData.dob}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Select Doctor *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <Stethoscope size={18} />
                      </span>
                      <select
                        name="doctor"
                        required
                        className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                        onChange={handleChange}
                        value={formData.doctor}
                      >
                        <option value="">Select a doctor</option>
                        <option value="Dr. Smith - Cardiologist">
                          Dr. Smith - Cardiologist
                        </option>
                        <option value="Dr. Jones - Neurologist">
                          Dr. Jones - Neurologist
                        </option>
                        <option value="Dr. Williams - Pediatrician">
                          Dr. Williams - Pediatrician
                        </option>
                        <option value="Dr. Brown - Orthopedic">
                          Dr. Brown - Orthopedic
                        </option>
                        <option value="Dr. Taylor - Dermatologist">
                          Dr. Taylor - Dermatologist
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <motion.button
                      type="submit"
                      className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg flex items-center"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="inline-block mr-2"
                        >
                          ⏳
                        </motion.span>
                      ) : (
                        "Book Appointment"
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            {/* Information Section */}
            <Card
              title={
                <span className="text-xl font-semibold text-blue-800">
                  Why Choose Us?
                </span>
              }
              bordered={false}
              className="shadow-lg h-full"
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Stethoscope className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Doctors</h3>
                    <p className="text-gray-600">
                      Our specialists have 10+ years of experience in their
                      fields.
                    </p>
                  </div>
                </div>

                <Divider className="my-2" />

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Activity className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Advanced Equipment
                    </h3>
                    <p className="text-gray-600">
                      State-of-the-art technology for accurate diagnosis and
                      treatment.
                    </p>
                  </div>
                </div>

                <Divider className="my-2" />

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Clock className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">24/7 Availability</h3>
                    <p className="text-gray-600">
                      Emergency services available round the clock.
                    </p>
                  </div>
                </div>

                <Divider className="my-2" />

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="font-bold text-blue-800 text-lg mb-3">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Call our emergency hotline for urgent medical needs:
                  </p>
                  <div className="flex items-center">
                    <AlertCircle className="text-red-500 w-5 h-5 mr-2" />
                    <span className="text-red-600 font-bold text-xl">
                      +1 (555) 123-4567
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Testimonials Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">
            What Our Patients Say
          </h2>
          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} md={8}>
              <motion.div whileHover={{ y: -5 }}>
                <Card className="h-full">
                  <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
                  <p className="italic text-gray-600 mb-4">
                    "The doctors here are truly exceptional. I received
                    excellent care during my treatment."
                  </p>
                  <p className="font-semibold">- Sarah Johnson</p>
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} md={8}>
              <motion.div whileHover={{ y: -5 }}>
                <Card className="h-full">
                  <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
                  <p className="italic text-gray-600 mb-4">
                    "The facility is clean and modern, and the staff is very
                    professional and caring."
                  </p>
                  <p className="font-semibold">- Michael Chen</p>
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} md={8}>
              <motion.div whileHover={{ y: -5 }}>
                <Card className="h-full">
                  <div className="text-yellow-400 text-2xl mb-2">★★★★☆</div>
                  <p className="italic text-gray-600 mb-4">
                    "Quick service and minimal wait times. Very satisfied with
                    my experience."
                  </p>
                  <p className="font-semibold">- David Wilson</p>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
