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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Patient Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from those who've experienced healing through our therapy
            programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium">
                    {testimonial.avatar}
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
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
