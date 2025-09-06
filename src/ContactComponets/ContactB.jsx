import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactB() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("https://g-bloombk.onrender.com/api/contact", {
        method: "POST",
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccessMessage(result.message || "Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setErrorMessage(result.message || "Failed to send message.");
      }
    } catch (err) {
      console.error("Frontend fetch error:", err);
      setErrorMessage("Unable to reach server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-form" className="w-full bg-gray-50 py-16 px-4 md:px-12">
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
          <div className="w-full md:w-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2 leading-tight">
              Let's Connect! 💬
            </h2>
            <p className="text-yellow-500 font-semibold text-lg md:text-xl mb-4">
              We’d love to hear from you.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Got a question, feedback, or idea? Fill out the form below, and
              our team will get back to you quickly.
            </p>
          </div>

          <div className="bg-white shadow-xl p-8 rounded-xl w-full max-w-lg flex-1">
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name*"
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
                required
                disabled={loading}
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name*"
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
                required
                disabled={loading}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
                required
                disabled={loading}
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
                required
                disabled={loading}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message*"
                rows={4}
                className="col-span-1 md:col-span-2 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
                required
                disabled={loading}
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="col-span-1 md:col-span-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {successMessage && (
                <p className="col-span-1 md:col-span-2 text-green-600 font-semibold mt-2">
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p className="col-span-1 md:col-span-2 text-red-600 font-semibold mt-2">
                  {errorMessage}
                </p>
              )}
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
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ContactB;
