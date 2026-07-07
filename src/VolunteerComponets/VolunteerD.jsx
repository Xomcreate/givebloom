import React, { useState } from "react";
import axios from "axios";

function VolunteerD() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Volunteer",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    try {
      // ✅ Updated URL to Render deployment
      await axios.post("https://g-bloombk.onrender.com/api/volunteers", formData);
      setStatusMessage("✅ ¡Gracias! Thank you for signing up! We will contact you soon.");
      setFormData({ name: "", email: "", phone: "", interest: "Volunteer", message: "" });
    } catch (err) {
      setStatusMessage("❌ Error submitting form: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div id="volunteerd" className="w-full bg-slate-50 py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Venezuela Flag Tricolor Top Accent Strip */}
      <div className="absolute top-0 left-0 w-full h-2 flex">
        <div className="w-1/3 h-full bg-yellow-400"></div>
        <div className="w-1/3 h-full bg-blue-600"></div>
        <div className="w-1/3 h-full bg-red-600"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">
          Unidos por Venezuela 🇻🇪
        </span>
        
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
          Join the Movement for Venezuela
        </h2>
        
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
          Whether you are local or abroad, collaborate with us to support Venezuelan communities, foster development, and drive sustainable change.
        </p>

        {statusMessage && (
          <div
            className={`p-4 rounded-lg text-sm font-semibold transition-all ${
              statusMessage.startsWith("✅")
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-rose-50 text-rose-700 border border-rose-200"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 text-left"
        >
          <div className="flex flex-col space-y-2">
            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Ana Mendoza"
              required
              className="p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
              className="p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+58 ..."
              required
              className="p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">How do you want to help?</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
            >
              <option value="Volunteer">Become a Volunteer</option>
              <option value="Partner">Become an Initiative Partner</option>
            </select>
          </div>

          <div className="md:col-span-2 flex flex-col space-y-2">
            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how you would like to contribute or share your connection to the cause..."
              rows="4"
              className="p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-extrabold py-4 px-6 rounded-xl transition duration-200 transform active:scale-[0.99] shadow-md shadow-yellow-400/20 text-lg text-center"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerD;