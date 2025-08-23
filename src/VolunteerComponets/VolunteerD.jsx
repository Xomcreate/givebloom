import React, { useState } from 'react';

function VolunteerD() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate your backend API here
    console.log('Form submitted:', formData);
    alert('Thank you for signing up! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  return (
    <div className="w-full bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
          Volunteer / Partner Sign-Up
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Fill out the form below and join our community of volunteers and partners making a real difference.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            placeholder="Area of Interest"
            required
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message (optional)"
            rows="4"
            className="md:col-span-2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 bg-yellow-400 text-black font-bold py-4 px-6 rounded-lg hover:bg-yellow-500 transition text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerD;
