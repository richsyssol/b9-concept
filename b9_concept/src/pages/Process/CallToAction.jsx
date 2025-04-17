import React from "react";

const CallToAction = () => {
  return (
    <div
      className="relative h-82 mb-10   bg-cover bg-center flex items-center justify-center"
      //   style={{
      //     backgroundImage:
      //       "url('https://www.shutterstock.com/image-photo/doctor-utilizing-advanced-digital-tablet-600nw-2481904799.jpg')",
      //   }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-100  bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <p className="text-lg tracking-wide uppercase mb-4">
          Call Now to Book an Appointment
        </p>
        <p className="text-1xl md:text-3xl font-bold mb-6">
          Get expert care, timely advice, and personalized treatment—your
          well-being starts with one click.
        </p>
        <a href="tel:+911234567890">
          <button className="bg-white text-black font-bold py-3 px-8 rounded shadow-lg transition duration-300 hover:bg-gray-600 hover:text-white">
            CALL TO ACTION
          </button>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
