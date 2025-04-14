import React from "react";

import Aboutus from "./Aboutus";

const MeetTheTeam = () => {
  const leaders = [
    {
      name: "Priyanka Mukund Kale",
      position: "Marketing Head",
      description:
        "Driving innovative marketing strategies. Focused on brand engagement and outreach.",
      image: "https://suviaminfra.com/assets/user2-Dq5OlDsA.jpg",
    },
    {
      name: "Laltika Shankar Pawar",
      position: "Creative Director",
      description:
        "Leading the creative team with vision. Passionate about compelling storytelling.",
      image: "https://suviaminfra.com/assets/user2-Dq5OlDsA.jpg",
    },
    {
      name: "Ajinkya Prakash Patil",
      position: "Operations Manager",
      description:
        "Ensuring smooth operations. Strategizing for long-term growth and efficiency.",
      image: "https://suviaminfra.com/assets/user2-Dq5OlDsA.jpg",
    },
    {
      name: "Arjun Devendra Singh",
      position: "Technical Lead",
      description:
        "Overseeing technical advancements. Driving innovation in software development.",
      image: "https://suviaminfra.com/assets/user2-Dq5OlDsA.jpg",
    },
    {
      name: "Sneha Vinod Patil",
      position: "HR Manager",
      description:
        "Managing talent acquisition. Fostering a dynamic workplace culture.",
      image: "https://suviaminfra.com/assets/user2-Dq5OlDsA.jpg",
    },
  ];

  return (
    <section className="py-8 text-center ">
      <h1 className="text-4xl font-bold text-[#205781] py-10">Meet the Team</h1>

      <div className="container mx-auto flex flex-wrap justify-center gap-20 ">
        {leaders.map((leader, index) => (
          <TeamMember key={index} {...leader} />
        ))}
      </div>
    </section>
  );
};

const TeamMember = ({ image, name, position, description }) => (
  <div className="text-center flex flex-col items-center max-w-xs">
    <img
      src={image}
      alt={name}
      className="w-30 h-30 rounded-full object-cover shadow-lg border border-gray-200"
    />
    <p className="text-2xl font-semibold text-gray-900 mt-2">{name}</p>
    <p className="text-xl font-semibold text-gray-700">{position}</p>
    <p className="mt-2 text-lg text-gray-700  ">{description}</p>
  </div>
);

export default MeetTheTeam;
