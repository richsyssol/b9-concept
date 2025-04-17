import React from "react";

const HealthTherapyFeatures = () => {
  const features = [
    {
      title: "Personalized Therapy Plans",
      description:
        "Customized therapy plans tailored to individual needs and preferences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2s-2 .896-2 2s.896 2 2 2zM2 12c0 5.523 4.478 10 10 10s10-4.477 10-10s-4.478-10-10-10S2 6.477 2 12zm10 4c-1.104 0-2 .896-2 2v2h4v-2c0-1.104-.896-2-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Holistic Healing Approaches",
      description: "Integrating mind, body, and spirit for complete wellness.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v18m9-9H3"
          />
        </svg>
      ),
    },
    {
      title: "Certified Therapists",
      description: "Professionals with extensive training and certifications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l-4-4m0 0l4-4m-4 4h8"
          />
        </svg>
      ),
    },
    {
      title: "Mental Health Support",
      description:
        "Access to therapy for emotional, mental, and psychological well-being.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 20.627 0 14 5.373 2 12 2zm0 18a6 6 0 100-12 6 6 0 000 12z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Health Therapy YouTube Video */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/xgDYEWihpXU?si=Q2rIkuuJXAmfP0AA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Column - Health Therapy Features List */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Holistic Health Therapy Solutions
            </h2>
            <p className="text-gray-600 mb-8">
              Our therapy services are designed to support your physical,
              mental, and emotional well-being. Explore the key features below.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional Button */}
            {/* 
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
              Start Your Therapy Journey
            </button> 
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthTherapyFeatures;
