import React from "react";

function Privacy() {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1350&q=80")` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-6 md:px-12 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            Learn how we collect, use, and protect your personal information while supporting our mission.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-10">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Information We Collect</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We collect information that you voluntarily provide to us when you register, donate, volunteer, or interact with our website. This may include your name, email address, phone number, payment details, and any other information you choose to share.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Your information helps us improve our services, communicate with you about donations, campaigns, and events, and ensure your experience on our platform is seamless and secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Cookies & Tracking</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and deliver relevant content. You can manage cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Rights</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            You have the right to access, correct, or request deletion of your personal information. To exercise your rights, please contact us via our Contact page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Data Security</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. While no system is completely secure, we continuously work to enhance our protection methods.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            If you have questions about this Privacy Policy or your personal data, feel free to reach out via our Contact page. We’re committed to protecting your privacy and transparency in all our operations.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
