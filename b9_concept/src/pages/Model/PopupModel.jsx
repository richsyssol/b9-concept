import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Login from "../Login/Login";

const PopupModal = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setShowModal(false);

  const handleAppointmentClick = () => {
    navigate("/login"); // ✅ Make sure this matches your route in App.js
  };

  return (
    <div className="p-6 text-center">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
          <div className="bg-gradient-to-r from-blue-300 via-gray-200 to-blue-300 p-6 rounded-lg shadow-xl w-120 relative">
            {/* Close Icon */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-black hover:text-blue-900"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div style={{ flex: 2 }}>
              <img
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                alt="Login Illustration"
                style={{ width: "100%", height: "200px" }}
              />
            </div>
            <br />
            <h2 className="text-xl font-bold mb-4 text-blue-950">
              We’re Here for You – Appointment Now{" "}
            </h2>
            <p className="mb-4 text-black">
              Therapy, in a nutshell, is a way to address mental health concerns
              or emotional challenges through a structured process of talking
              with a trained therapist.
            </p>

            <button
              className="mt-4 bg-blue-900 hover:bg-blue-600 text-white px-6 py-2 rounded transition duration-300"
              onClick={handleAppointmentClick}
            >
              Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;
