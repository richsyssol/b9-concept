import React from "react";

export default function ReliableServices() {
  return (
    <div className="bg-gray-100 py-20 px-4">
      {/* Section Title */}
      <div className="text-center mb-15">
        <h1 className="text-gray-900 text-4xl mb-2 ">We Are</h1>
        <h1 className="text-4xl font-semibold text-black">
          Offering Reliable Services
        </h1>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl h-130 mx-auto grid md:grid-cols-2 gap-9">
        {/* Family Health Solutions */}
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://labartisan.net/demo/mukti/assets/images/service/01.jpg"
            alt="Family Health"
            className="w-1/2 object-cover"
          />
          <div className="p-6 w-1/2">
            <h3 className="text-xl font-bold text-gray-800">
              Family Health Solutions
            </h3>
            <p className="text-sm justify-center text-gray-600 mt-2">
              Procid ariam manu produe rather convic guvat mantan this conven
              multishpath testin motiv.Procid ariam manu produe rather convic
              guvat mantan this conven multishpath testin motiv.Procid ariam
            </p>
            {/* <button className="mt-4 bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700">
              Read More
            </button> */}
          </div>
        </div>

        {/* Eye Care Solutions */}
        <div className="flex bg-[#0f4e53] text-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://labartisan.net/demo/mukti/assets/images/service/03.jpg"
            alt="Eye Care"
            className="w-1/2 object-cover opacity-70"
          />
          <div className="p-6 w-1/2">
            <h3 className="text-xl font-bold">Eye Care Solutions</h3>
            <p className="text-sm mt-2">
              Calbor lowen than andin the Quatit bewith than onod the any value
              cardin.Procid ariam manu produe rather convic guvat mantan this
              conven multishpath testin motiv.Procid ariam manu produe rather
            </p>

            {/* <button className="mt-4 bg-white text-blue-600 px-4 py-2 text-sm rounded-md hover:bg-gray-200">
              Read More
            </button> */}
          </div>
        </div>

        {/* Children's Health */}
        <div className="flex bg-[#0f4e53] text-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://labartisan.net/demo/mukti/assets/images/service/02.jpg"
            alt="Children's Health"
            className="w-1/2 object-cover opacity-70"
          />
          <div className="p-6 w-1/2">
            <h3 className="text-xl font-bold">Children's Health</h3>
            <p className="text-sm mt-2">
              Calbor lowen than andin the Quatit bewith than onod the any value
              cardin.Procid ariam manu produe rather convic guvat mantan this
              conven multishpath testin motiv.Procid ariam manu produe rather
            </p>
            {/* <button className="mt-4 bg-white text-blue-600 px-4 py-2 text-sm rounded-md hover:bg-gray-200">
              Read More
            </button> */}
          </div>
        </div>

        {/* Dental Surgery */}
        <div className="flex bg-white  shadow-md rounded-lg overflow-hidden">
          <img
            src="https://labartisan.net/demo/mukti/assets/images/service/04.jpg"
            alt="Dental Surgery"
            className="w-1/2 object-cover"
          />
          <div className="p-6 w-1/2">
            <h3 className="text-xl font-bold text-gray-800">Dental Surgery</h3>
            <p className="text-sm text-gray-600 mt-2">
              Procid ariam manu produe rather convic guvat mantan this conven
              multishpath testin motiv.Procid ariam manu produe rather convic
              guvat mantan this conven multishpath testin motiv.Procid ariam
              testin motiv.
            </p>
            {/* <button className="mt-4 bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700">
              Read More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
