import React from "react";

function About() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pr-4">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-5xl md:text-6xl xl:text-7xl font-bold mb-4  text-gray-900">
            Stray Rescue & Feeding
            <p className="hidden lg:inline-block"></p>
          </h1>
          <p className="mb-8 leading-relaxed">
          Our organization is committed to supporting stray pets in need. With compassion and dedication, we strive to improve the lives of these vulnerable creatures and provide them with hope for a brighter future.
          </p>
        
        </div>
      </div>
    </section>
  );
}

export default About;
