import React from "react";

const team = [
  {
    name: "Rajiv Sharma",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", // Replace with actual image paths
    desc: "With 25+ years in architectural solutions, Rajiv founded Ishani Enterprises to bring European elegance to Indian homes through premium French doors and windows.",
  },
  {
    name: "Priya Malhotra",
    role: "Operations Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    desc: "Priya oversees our manufacturing excellence, ensuring each French door meets our exacting standards for quality and precision.",
  },
  {
    name: "Vikram Singh",
    role: "Technical Head",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    desc: "Vikram leads our R&D in innovative French door mechanisms and energy-efficient glazing solutions.",
  },
  {
    name: "Neha Kapoor",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    desc: "Neha’s expertise in French architectural aesthetics ensures our products blend timeless elegance with contemporary functionality.",
  },
];

const LeadershipTeam = () => {
  return (
    <section className=" mt-33 ">
      <div className="max-w-7xl py-10 mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-yellow-700 mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
