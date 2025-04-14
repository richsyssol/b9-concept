import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center  justify-center lg-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-lg rounded-xl overflow-hidden h-180 max-w-9xl w-full">
        {/* Left Column - Login Form */}
        <div className="p-8 flex flex-col mt-35 justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Name*
              </label>
              <input
                type="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email*
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Password*
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
              Submit
            </button>
          </form>
        </div>

        {/* Right Column - Image */}
        <div className="hidden md:block">
          <img
            src="https://t4.ftcdn.net/jpg/04/80/58/93/360_F_480589361_HAS08cX2y9dzXdOeBkTJXeTlAXXBguWE.jpg"
            alt="Login Illustration"
            className="min-w-[1020px] w-[449px] h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
