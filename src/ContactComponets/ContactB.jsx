import React from "react";
import { motion } from "framer-motion";

function ContactB() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-4 md:px-12">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left: Form */}
        <motion.div
          className="w-full md:flex-1 flex flex-col gap-6 items-center md:items-start text-center md:text-left"
          variants={itemVariants}
        >
          {/* Heading */}
          <div className="w-full md:w-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-2 leading-tight">
              Let's Connect! 💬
            </h2>
            <p className="text-yellow-500 font-semibold text-lg md:text-xl mb-4">
              We’d love to hear from you.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Got a question, feedback, or idea? Fill out the form below, and our team will get back to you quickly. Your voice matters to us!
            </p>
          </div>

          {/* Form */}
          <div className="bg-white shadow-xl p-8 rounded-xl w-full max-w-lg flex-1">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              <input
                type="text"
                placeholder="First Name*"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              <input
                type="email"
                placeholder="Email Address*"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              <input
                type="text"
                placeholder="Phone Number*"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />

              {/* Textarea full width */}
              <textarea
                placeholder="Your Message*"
                rows={4}
                className="col-span-1 md:col-span-2 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              ></textarea>

              {/* Button full width */}
              <button
                type="submit"
                className="col-span-1 md:col-span-2 H text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 hover:scale-105 transition transform"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        {/* Right: Map */}
        <motion.div
          className="w-full md:flex-1 rounded-xl overflow-hidden shadow-xl min-h-[400px] md:min-h-[500px]"
          variants={itemVariants}
        >
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2298955128134!2d3.377123314773069!3d6.511547924356631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f3b0c4b5e23%3A0xa0e9e556a44a9c77!2s50%20Abeje%20St%2C%20Off%20Itiri%20Bus%20Stop%2C%20Apapa%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1692500000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            className="border-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ContactB;
