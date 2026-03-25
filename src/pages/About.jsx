// About.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";

export const About = () => {
  return (
    <>
    <section className="min-h-screen bg-black text-white flex items-center px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text Content */}
        <div>
          <p className="text-gray-400 mb-2">Welcome, Shaheer Technical</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
            Why Choose Us?
          </h1>

          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              <span className="font-semibold text-white">Expertise:</span> Our
              team consists of experienced IT professionals who are passionate
              about staying up-to-date with the latest industry trends.
            </p>

            <p>
              <span className="font-semibold text-white">Customization:</span>{" "}
              We understand that every business is unique. That's why we create
              solutions tailored to your specific needs and goals.
            </p>

            <p>
              <span className="font-semibold text-white">
                Customer-Centric Approach:
              </span>{" "}
              We prioritize your satisfaction and provide top-notch support to
              address your IT concerns.
            </p>

            <p>
              <span className="font-semibold text-white">Affordability:</span> We
              offer competitive pricing without compromising on the quality of
              our services.
            </p>

            <p>
              <span className="font-semibold text-white">Reliability:</span> Count
              on us to be there when you need us. We're committed to ensuring
              your IT environment is reliable and available 24/7.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <NavLink
              to="/contact"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
            >
              Connect Now
            </NavLink>
            <NavLink
              to="/services"
              className="px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-800 transition"
            >
              Learn More
            </NavLink>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex items-center justify-center">
          <img
            src="/images/home.png"
            alt="why choose us"
            className="max-w-md w-full h-auto"
          />
        </div>
      </div>
      
    </section>
    <div className="flex items-center justify-center">
      <Analytics />
      </div>
      </>
  
  );
};
