import React from "react";
import Header from "./Header";
import About from "./About";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <section className="">
          <div className="bg-neutral-50 px-6 py-4 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
            <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                    Its hard to be hungry <br />
                    <span className="text-primary">and homeless</span>
                  </h1>
                </div>
                <div className="mb-12 lg:mb-0">
                  <img
                    src="https://images.unsplash.com/photo-1516745109736-d436f15ef05b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <About />
      <Services />
    </>
  );
};

export default Home;
