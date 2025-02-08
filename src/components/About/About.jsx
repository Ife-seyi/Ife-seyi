// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaHandshake,
  FaWhatsapp,
} from "react-icons/fa";
import about from "../../assets/about.jpeg";
import vee from "../../assets/people/vee.jpeg";
import black from "../../assets/people/blackman.jpeg";
import woman from "../../assets/people/blackwoman.jpeg";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <div
        className="relative h-60 md:h-80 bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url(${about})`,
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center p-6">
          <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
          <p className="text-sm md:text-lg mt-2">
            Discover who we are and what we stand for.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="container mx-auto py-16 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
          Who We Are
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mt-4">
          We are a passionate team dedicated to delivering the best products and
          services. Our commitment to excellence and customer satisfaction
          drives everything we do.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto py-10 px-6 md:px-16 grid md:grid-cols-2 gap-10">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To provide high-quality products and services that enrich lives and
            create value for our customers.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To be a leader in our industry, known for innovation, customer
            satisfaction, and a strong commitment to ethical business practices.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto py-10 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="flex items-center space-x-4">
            <FaCheckCircle className="text-primary text-3xl" />
            <p className="text-gray-600 dark:text-gray-300">
              High-Quality Products
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaUsers className="text-primary text-3xl" />
            <p className="text-gray-600 dark:text-gray-300">
              Customer-Centric Approach
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaHandshake className="text-primary text-3xl" />
            <p className="text-gray-600 dark:text-gray-300">
              Trusted by Thousands
            </p>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="container mx-auto py-10 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <img src={vee} alt="Team Member" className="rounded-full mx-auto" />
            <h3 className="text-lg font-semibold mt-4">Victoria Archibong</h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img
              src={black}
              alt="Team Member"
              className="rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">John Doe</h3>
            <p className="text-gray-500">Chief Operations Officer</p>
          </div>
          <div className="text-center">
            <img
              src={woman}
              alt="Team Member"
              className="rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">Jane Smith</h3>
            <p className="text-gray-500">Head of Marketing</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-10 text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Want to Work With Us?
        </h2>
        <p className="mt-2 text-gray-200">
          We’re always open to collaborations and new opportunities.
        </p>
        <button
          className="flex items-center gap-2 mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
          onClick={() => window.open("https://wa.me/2348083454892", "_blank")}
        >
          <FaWhatsapp className="text-xl" />
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
