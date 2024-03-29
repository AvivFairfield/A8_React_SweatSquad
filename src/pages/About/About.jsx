import React from "react";
import "./about.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export const About = () => {
  const navigate = useNavigate();

  const teamMembers = [
    { name: "Sandra", role: "Founder & CEO", image: "https://media.licdn.com/dms/image/C4D03AQG7E7BThWFzGA/profile-displayphoto-shrink_800_800/0/1560152521776?e=1714003200&v=beta&t=T7-cENelRHcdUtOu5Lg1lvEKjxjeuQ9iriQSdBvLJKY", description: "Sandra is the visionary behind our company, leading us towards a healthier future with unwavering dedication." },
    { name: "Yael", role: "Head Trainer", image: "https://media.licdn.com/dms/image/D4D03AQGQyMs1bcmXYA/profile-displayphoto-shrink_400_400/0/1674508304256?e=1714003200&v=beta&t=hKvfm6xAZfRVjJGEhfdoQfa6TriS0TtFdAebSDwtP5o", description: "Yael, with her expert knowledge and passion, shapes our training programs to ensure they meet everyone's needs." },
    { name: "Rotem", role: "Fitness Specialist", image: "https://media.licdn.com/dms/image/C5603AQHvNNOk5tOP7w/profile-displayphoto-shrink_800_800/0/1663769372146?e=1714003200&v=beta&t=ii-oSecvllR4En5RO2hhfEL-ybRlffa1CGFmhrpvGyI", description: "Rotem's innovative fitness plans are integral to our holistic approach to wellness and fitness." },
    { name: "Aviv", role: "Customer Success Manager", image: "https://i.ibb.co/bgYyYVD/586-EE5-B2-EDE1-4-D25-B90-F-9200-B02-DCC7-F.jpg", description: "Aviv's commitment to our community ensures everyone's journey with us is smooth and fulfilling." }
  ];

  return (
    <div className="text-center grid place-items-center p-3">
      <h1 className="text-3xl text-center py-4 text-white">Meet Our Team</h1>

      <div className="grid md:grid-cols-2 gap-4 max-w-6xl">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-neutral-600 p-4 rounded-3xl text-white overflow-hidden shadow-lg">
            <img src={member.image} alt={member.name} className="w-40 h-40 object-cover rounded-full mx-auto" />
            <h3 className="text-xl mt-2">{member.name}</h3>
            <p className="text-sm text-neutral-300">{member.role}</p>
            <p className="mt-2">{member.description}</p>
          </div>
        ))}
      </div>

      <Button className="mt-8 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </div>
  );
};
