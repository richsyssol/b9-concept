import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "After my knee surgery, the physical therapy program helped me walk without pain again. The therapists were incredibly knowledgeable and supportive throughout my recovery journey.",
      author: "Michael Johnson",
      role: "Physical Therapy Patient",
      avatar: "MJ",
      rating: 5,
    },
    {
      quote:
        "As a veteran dealing with PTSD, the counseling services gave me tools to manage my anxiety and rebuild relationships with my family. This program saved my life.",
      author: "Sarah Williams",
      role: "Mental Health Client",
      avatar: "SW",
      rating: 5,
    },
    {
      quote:
        "The speech therapy transformed my son's ability to communicate. After just 3 months, he's making sentences we never thought possible. We're so grateful for their pediatric specialists.",
      author: "David and Lisa Chen",
      role: "Parents of Therapy Patient",
      avatar: "DC",
      rating: 4,
    },
    {
      quote:
        "Our nursing home residents have shown remarkable improvement since incorporating the occupational therapy program. Their quality of life has significantly increased.",
      author: "Nurse Rebecca Taylor",
      role: "Senior Care Facility",
      avatar: "RT",
      rating: 5,
    },
  ];

  return (
    <section className="py-16  bg-white ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4"> Our Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <blockquote className="text-lg text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                {/* <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium">
                    {testimonial.avatar}
                  </div>
                </div> */}
                <div>
                  {/* <p className="font-medium text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
