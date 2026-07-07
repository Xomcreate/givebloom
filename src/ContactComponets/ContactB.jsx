import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactB() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        setSuccessMessage(result.message || "¡Mensaje enviado! Your message has been sent successfully.");
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
      loading && setLoading(false);
    }
  };

  return (
    <div id="contact-form" className="w-full bg-slate-50 py-20 px-6 md:px-12 lg:px-20">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Left Layer: Header & Contact Form */}
        <motion.div
          className="w-full lg:w-3/5 flex flex-col gap-8 justify-between"
          variants={itemVariants}
        >
          <div className="text-center md:text-left space-y-3">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">
              Contacto / Support Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight leading-tight">
              Let's Connect! 💬
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl">
              Have a question about our operations, want to coordinate humanitarian support, or share an idea? Fill out the form, and our team will get back to you swiftly.
            </p>
          </div>

          <div className="bg-white shadow-xl shadow-slate-100 p-6 md:p-10 rounded-2xl border border-slate-100 w-full">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-1.5 text-left">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g., Carlos"
                  className="border border-slate-200 bg-slate-50 p-3.5 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800 placeholder-slate-400"
                  required
                  disabled={loading}
                />
              </div>

              <div className="flex flex-col space-y-1.5 text-left">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g., Rodriguez"
                  className="border border-slate-200 bg-slate-50 p-3.5 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800 placeholder-slate-400"
                  required
                  disabled={loading}
                />
              </div>

              <div className="flex flex-col space-y-1.5 text-left">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="border border-slate-200 bg-slate-50 p-3.5 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800 placeholder-slate-400"
                  required
                  disabled={loading}
                />
              </div>

              <div className="flex flex-col space-y-1.5 text-left">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g., +58 412..."
                  className="border border-slate-200 bg-slate-50 p-3.5 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800 placeholder-slate-400"
                  required
                  disabled={loading}
                />
              </div>

              <div className="col-span-1 md:col-span-2 flex flex-col space-y-1.5 text-left">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={4}
                  className="border border-slate-200 bg-slate-50 p-3.5 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800 placeholder-slate-400 resize-none"
                  required
                  disabled={loading}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="col-span-1 md:col-span-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-extrabold py-4 rounded-xl shadow-md shadow-yellow-400/10 transition-all transform active:scale-[0.99] mt-2 text-md tracking-wide uppercase"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>

              {successMessage && (
                <div className="col-span-1 md:col-span-2 bg-emerald-50 text-emerald-700 p-3 rounded-xl border border-emerald-100 font-semibold text-sm mt-2 text-center">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="col-span-1 md:col-span-2 bg-rose-50 text-rose-700 p-3 rounded-xl border border-rose-100 font-semibold text-sm mt-2 text-center">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </motion.div>

        {/* Right Layer: Interactive Google Map focusing on Venezuela */}
        <motion.div
          className="w-full lg:w-2/5 rounded-2xl overflow-hidden shadow-xl border border-slate-100 min-h-[450px] lg:min-h-full flex"
          variants={itemVariants}
        >
          <iframe
            title="Venezuela Mission Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4013444.604719293!2d-69.4589252328213!3d7.142323214539563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c28539e72642d05%3A0x7a8eb9c0612efc40!2sVenezuela!5e0!3m2!1sen!2sve!4v1710000000000!5m2!1sen!2sve"
            width="100%"
            height="100%"
            className="border-0 w-full h-full min-h-[450px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ContactB;