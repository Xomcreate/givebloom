import React, { useState } from "react";

function DonateB() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const presetAmounts = [1000, 5000, 10000, 20000]; // Example: Naira

  return (
    <div
      id="donateForm" // <-- This makes anchor href="#donateForm" work
      className="w-full bg-gray-50 py-16 px-6 md:px-16"
    >
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-800">
          Make a Donation
        </h2>
        <p className="text-center text-gray-600">
          Your generosity fuels education, healthcare, food, and shelter for those in need.
        </p>

        {/* Donation Amount */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Donation Amount
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {presetAmounts.map((amt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setAmount(amt)}
                className={`py-2 px-4 rounded-lg border font-semibold transition
                  ${
                    Number(amount) === amt
                      ? "bg-yellow-400 text-white border-yellow-400"
                      : "bg-gray-100 hover:bg-yellow-50 border-gray-300 text-gray-700"
                  }`}
              >
                ₦{amt.toLocaleString()}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Or enter custom amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        {/* Donor Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Payment Method
          </label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          >
            <option value="">-- Select Method --</option>
            <option value="card">Credit/Debit Card</option>
            <option value="bank">Bank Transfer</option>
            <option value="paypal">PayPal</option>
            <option value="mobile">Mobile Money</option>
          </select>
        </div>

        {/* Conditional Fields */}
        {paymentMethod === "card" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Expiry (MM/YY)"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
          </div>
        )}

        {paymentMethod === "bank" && (
          <div className="space-y-3 text-gray-700">
            <p className="font-medium">Transfer to:</p>
            <p>Account Name: <span className="font-semibold">Charity Foundation</span></p>
            <p>Bank: Example Bank</p>
            <p>Account Number: 1234567890</p>
          </div>
        )}

        {paymentMethod === "paypal" && (
          <input
            type="email"
            placeholder="PayPal Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        )}

        {paymentMethod === "mobile" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Mobile Money Provider (e.g., MTN, Airtel)"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="text"
              placeholder="Mobile Money Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
        )}

        {/* Donate Now Button (anchor scroll link) */}
        <a
          href="#donateForm"
          className="w-full inline-block bg-yellow-400 text-white py-3 rounded-xl font-semibold hover:bg-yellow-500 transition shadow-md text-center"
        >
          Donate Now
        </a>
      </div>
    </div>
  );
}

export default DonateB;
