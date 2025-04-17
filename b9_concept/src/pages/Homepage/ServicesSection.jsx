import React from "react";

const services = [
  {
    image:
      "https://www.thewhistlingkettle.com/cdn/shop/articles/teas-for-reducing-anxiety-1-1679690454722.jpg?v=1692110834&width=1600",
    title: "Stress, Anxiety, and Depression",
  },
  {
    image:
      "https://posm.org/wp-content/uploads/2024/08/POSM-Aug-28-1484x835.png ",
    title: "Chronic Pain",
  },
  {
    image:
      "https://navacenter.com/wp-content/uploads/2021/03/Hormone-Imbalance-in-Men-Header-e1616429678520.jpg",
    title: "Hormonal Imbalance",
  },
  {
    image:
      "https://images.moneycontrol.com/static-mcnews/2024/07/20240719060027_Untitled-design-13.jpg?impolicy=website&width=770&height=431",
    title: "Gut/Digestive Issues",
  },
  {
    image:
      "https://www.thewhistlingkettle.com/cdn/shop/articles/teas-for-reducing-anxiety-1-1679690454722.jpg?v=1692110834&width=1600",
    title: "Stress, Anxiety, and Depression",
  },
  {
    image:
      "https://posm.org/wp-content/uploads/2024/08/POSM-Aug-28-1484x835.png ",
    title: "Chronic Pain",
  },
  {
    image:
      "https://navacenter.com/wp-content/uploads/2021/03/Hormone-Imbalance-in-Men-Header-e1616429678520.jpg",
    title: "Hormonal Imbalance",
  },
  {
    image:
      "https://images.moneycontrol.com/static-mcnews/2024/07/20240719060027_Untitled-design-13.jpg?impolicy=website&width=770&height=431",
    title: "Gut/Digestive Issues",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="text-center mb-16">
        <h1 className="text-gray-900 font-semibold text-4xl mb-2">
          We Offer Specialized
        </h1>
        <h1 className="text-4xl  text-black">
          Quick, Natural and Permanent Solutions
        </h1>
      </div>

      {/* Grid Layout - 2 rows of 4 columns */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 text-center hover:bg-gray-100 transition duration-300  "
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover "
              />
              <h3 className="text-xl text-gray-800 font-semibold mt-4">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
