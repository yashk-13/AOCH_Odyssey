import React from "react";
// import {  Fastfood, School, MedicalServices, Healing, Spa } from "@mui/icons-material";

export const Services = () => {
  // Define an array of objects containing titles and descriptions
  const servicesData = [
    {
      title: "Boarding",
      description: "Temporary home for rescued animals where they receive love, care, and attention while they await their forever families.",
      
    },
    {
      title: "Feeding",
      description: "We maintain a steady supply of food and ensures that every animal in our care receives the sustenance they deserve.",
      
    },
    {
      title: "Training",
      description: "We believe in the power of education and positive reinforcement to empower our stray animals and set them up for success in their new lives.",
     
    },
    {
      title: "Vaccination",
      description: "We prioritize the health of every animal under our care. We take proactive measures to safeguard the health of stray animals and prevent the spread of diseases.",
      
    },
    {
      title: "Treatment",
      description: "We are committed to providing the highest level of compassionate care for every stray animal that comes into our rescue by providing them proper treatment.",
    
    },
    {
      title: "Grooming",
      description: "We believe that every animal deserves to look and feel their best, regardless of their past circumstances.",
    
    },
  ];

  return (
    <div>
      <h1 className="text-4xl text-cyan-500 font-bold text-center">Services</h1>
      <div className="grid grid-cols-3 gap-3 py-10 px-4">
        {servicesData.map((service, index) => (
          <div key={index} className="border-gray-200">
            {/* <img src={service.icon} alt={service.title} className="w-fit"/> */}
            <h2 className="font-bold text-md text-black text-center">{service.title}</h2>
            <p className="text-gray-800 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
