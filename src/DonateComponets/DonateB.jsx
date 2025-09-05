import React, { useState, useEffect } from "react";
import axios from "axios";

function DonateB() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cause, setCause] = useState("");

  const [mobileProvider, setMobileProvider] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isEmailEditable, setIsEmailEditable] = useState(true);

  const presetAmounts = [1000, 5000, 10000, 20000];
  const causes = ["Education", "Food Drive", "Medical Outreach", "Clean Water", "Holiday Charity"];

  // Prefill email and name
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("userName");
    if (storedEmail) setEmail(storedEmail);
    if (storedName) setName(storedName);
    if (storedEmail) setIsEmailEditable(false);

    // If redirected back from Paystack with reference
    const urlParams = new URLSearchParams(window.location.search);
    const reference = urlParams.get("reference");
    if (reference) {
      verifyPaystackDonation(reference);
    }
  }, []);

  const verifyPaystackDonation = async (reference) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/donations/paystack/verify/${reference}`);
      setMessage("Donation successful! Thank you 💛");
      setError("");
      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Donation verification failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!name || !email || !amount || !paymentMethod || !cause) {
      setError("Please fill in all required fields, including cause.");
      return;
    }

    // -----------------------------
    // Card Payment → Paystack
    // -----------------------------
    if (paymentMethod === "card") {
      try {
        const res = await axios.post("http://localhost:5000/api/donations/paystack", {
          name,
          email,
          amount,
          cause,
          callback_url: window.location.href, // redirect back to this page
        });

        // Redirect to Paystack payment page
        window.location.href = res.data.authorization_url;
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Paystack initialization failed");
      }
      return;
    }

    // -----------------------------
    // Other payment methods → Pending
    // -----------------------------
    try {
      const data = {
        name,
        email,
        amount,
        cause,
        paymentMethod,
        bankDetails:
          paymentMethod === "bank"
            ? { accountName: "Charity Foundation", bank: "Example Bank", accountNumber: "1234567890" }
            : undefined,
        paypalEmail: paymentMethod === "paypal" ? paypalEmail : undefined,
        mobileMoney:
          paymentMethod === "mobile"
            ? { provider: mobileProvider, number: mobileNumber }
            : undefined,
        status: "Pending", // mark as pending until verified
      };

      const res = await axios.post("http://localhost:5000/api/donations", data);

      setMessage("Donation submitted! Awaiting confirmation 💛");

      // Reset form
      setAmount("");
      setPaymentMethod("");
      setCause("");
      if (!localStorage.getItem("userName")) setName("");
      if (!localStorage.getItem("userEmail")) setEmail("");
      setMobileProvider("");
      setMobileNumber("");
      setPaypalEmail("");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Donation failed. Try again.");
    }
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-16">
      <form
        className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-800">
          Make a Donation
        </h2>

        {message && <p className="text-green-600 font-medium text-center">{message}</p>}
        {error && <p className="text-red-600 font-medium text-center">{error}</p>}

        {/* Cause */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Select Cause</label>
          <select
            value={cause}
            onChange={(e) => setCause(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          >
            <option value="">-- Select a Cause --</option>
            {causes.map((c, idx) => (
              <option key={idx} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Donation Amount</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {presetAmounts.map((amt) => (
              <button
                type="button"
                key={amt}
                onClick={() => setAmount(amt)}
                className={`py-2 px-4 rounded-lg border font-semibold transition ${
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              disabled={!isEmailEditable && !!localStorage.getItem("userEmail")}
            />
            {!isEmailEditable && localStorage.getItem("userEmail") && (
              <button
                type="button"
                onClick={() => setIsEmailEditable(true)}
                className="absolute right-2 top-2 text-sm text-blue-600 underline"
              >
                Edit
              </button>
            )}
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
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
          <p className="text-sm text-gray-500">
            Card payments are handled securely via Paystack. You will enter your card details on Paystack's page after clicking "Donate Now".
          </p>
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
            value={paypalEmail}
            onChange={(e) => setPaypalEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        )}

        {paymentMethod === "mobile" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Mobile Money Provider"
              value={mobileProvider}
              onChange={(e) => setMobileProvider(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="text"
              placeholder="Mobile Money Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-yellow-400 text-white py-3 rounded-xl font-semibold hover:bg-yellow-500 transition shadow-md"
        >
          Donate Now
        </button>
      </form>
    </div>
  );
}

export default DonateB;
