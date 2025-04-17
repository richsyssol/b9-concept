import { useState } from "react";

export default function TherapyPlatform() {
  const [activeTab, setActiveTab] = useState("methods");
  const [selectedMethod, setSelectedMethod] = useState(null);

  const TherapyMethods = [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      description:
        "A structured, goal-oriented psychotherapy that addresses negative thought patterns to change unwanted behavior patterns.",
      icon: "🧠",
      benefits: [
        "Effective for anxiety/depression",
        "Short-term focused",
        "Skill-building approach",
      ],
    },
    {
      name: "EMDR",
      description:
        "Eye Movement Desensitization and Reprocessing therapy helps process traumatic memories through bilateral stimulation.",
      icon: "👀",
      benefits: [
        "Trauma treatment",
        "Memory processing",
        "Somatic integration",
      ],
    },
    {
      name: "Somatic Therapy",
      description:
        "Focuses on bodily sensations to release trauma stored in the body and regulate the nervous system.",
      icon: "💆",
      benefits: [
        "Body awareness",
        "Trauma release",
        "Nervous system regulation",
      ],
    },
    {
      name: "Mindfulness-Based",
      description:
        "Incorporates meditation practices to develop present-moment awareness and reduce reactivity.",
      icon: "🧘",
      benefits: ["Stress reduction", "Emotional regulation", "Present-focused"],
    },
  ];

  const techFeatures = [
    {
      name: "Telehealth Integration",
      description:
        "Secure video sessions with screen sharing and virtual whiteboard capabilities.",
    },
    {
      name: "AI Progress Analytics",
      description:
        "Machine learning tracks treatment progress and suggests protocol adjustments.",
    },
    {
      name: "Digital Journaling",
      description:
        "Client journal with sentiment analysis and pattern detection.",
    },
    {
      name: "VR Exposure Therapy",
      description:
        "Virtual reality environments for controlled exposure scenarios.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <header className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-2">
          Evidence-Based Therapy Platform
        </h1>
        <p className="text-lg text-indigo-700">
          Combining proven therapeutic methods with modern technology for
          optimal outcomes
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="flex border-b border-indigo-200 mb-8">
          <button
            onClick={() => setActiveTab("methods")}
            className={`px-6 py-3 font-medium ${
              activeTab === "methods"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-indigo-400 hover:text-indigo-600"
            }`}
          >
            Therapeutic Methods
          </button>
          <button
            onClick={() => setActiveTab("technology")}
            className={`px-6 py-3 font-medium ${
              activeTab === "technology"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-indigo-400 hover:text-indigo-600"
            }`}
          >
            Technology Integration
          </button>
        </div>

        {activeTab === "methods" && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {TherapyMethods.map((method) => (
              <div
                key={method.name}
                onClick={() =>
                  setSelectedMethod(
                    selectedMethod?.name === method.name ? null : method
                  )
                }
                className={`bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedMethod?.name === method.name
                    ? "ring-2 ring-indigo-500 scale-105"
                    : "hover:shadow-lg"
                }`}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                    {method.name}
                  </h3>
                  <p className="text-indigo-600 mb-4">{method.description}</p>

                  {selectedMethod?.name === method.name && (
                    <div className="mt-4 pt-4 border-t border-indigo-100">
                      <h4 className="font-medium text-indigo-800 mb-2">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {method.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-indigo-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "technology" && (
          <div className="grid gap-6 md:grid-cols-2">
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <svg
                        className="h-6 w-6 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-800">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="text-indigo-600 pl-14">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-1 p-8 md:p-12 bg-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-4">Integrated Approach</h2>
              <p className="mb-6 opacity-90">
                Our platform uniquely combines evidence-based therapeutic
                methods with cutting-edge technology to deliver personalized,
                measurable results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-300 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Custom treatment plans combining multiple evidence-based
                    approaches
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-300 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Data-driven progress tracking with AI-powered insights
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-300 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Seamless integration between in-person and telehealth
                    sessions
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:flex-1 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                Get Started
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-indigo-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-indigo-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-indigo-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-indigo-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-indigo-700"
                  >
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    className="mt-1 block w-full rounded-md border-indigo-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option>Therapy Services</option>
                    <option>Provider Training</option>
                    <option>Clinical Partnerships</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Learn More
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
