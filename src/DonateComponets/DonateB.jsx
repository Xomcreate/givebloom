import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "https://g-bloombk-production.up.railway.app/api/donations";

// Fill these in with your real details
const BANK_DETAILS = {
  bankName: "Lead",
  accountName: "Destiny Daniel Dibie / GiveBloom Ltd",
  accountNumber: "212462102098",
  wireRoutingNumber: "101019644",
  achRoutingNumber: "101019644",
};

const CRYPTO_WALLETS = [
  { coin: "USDT/TRX (TRC20)", address: "TQMd62NvqYdaMM9zqENRKYHp57AoSdXNWa" },
  { coin: "BTC", address: "bc1qfe324z0cg9mr7y03k7spx0qfcfdsghuskd9sck" },
  { coin: "BNB", address: "0xF47De8B072e5ED777b10DD5df1b7996597f975b9" },
];

function DonateB() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cause, setCause] = useState("");
  const [transactionRef, setTransactionRef] = useState("");
  const [receipt, setReceipt] = useState(null);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(true);

  const presetAmounts = [10, 25, 50, 100];
  const causes = ["Education", "Food Drive", "Medical Outreach", "Clean Water", "Holiday Charity"];

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("userName");
    if (storedEmail) setEmail(storedEmail);
    if (storedName) setName(storedName);
    if (storedEmail) setIsEmailEditable(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!name || !email || !amount || !paymentMethod || !cause) {
      setError("Please fill in all required fields, including cause.");
      return;
    }
    if (!receipt) {
      setError("Please upload proof of payment (screenshot or receipt).");
      return;
    }

    try {
      setSubmitting(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("amount", amount);
      formData.append("cause", cause);
      formData.append("paymentMethod", paymentMethod);
      formData.append("transactionRef", transactionRef);
      formData.append("receipt", receipt);

      await axios.post(API_BASE, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Donation submitted! Awaiting admin confirmation 💛");

      setAmount("");
      setPaymentMethod("");
      setCause("");
      setTransactionRef("");
      setReceipt(null);
      if (!localStorage.getItem("userName")) setName("");
      if (!localStorage.getItem("userEmail")) setEmail("");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Donation failed. Try again.");
    } finally {
      setSubmitting(false);
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
                ${amt.toLocaleString()}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Or enter custom amount ($)"
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
            <option value="bank_transfer">Bank Transfer</option>
            <option value="crypto">Crypto</option>
            <option value="card">Card (via your bank app)</option>
          </select>
        </div>

        {/* Bank Transfer instructions */}
        {paymentMethod === "bank_transfer" && (
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 text-sm text-gray-700 space-y-1">
            <p className="font-semibold">Transfer to:</p>
            <p>Bank: {BANK_DETAILS.bankName}</p>
            <p>Account Name: {BANK_DETAILS.accountName}</p>
            <p>Account Number: {BANK_DETAILS.accountNumber}</p>
            <p>Wire Routing Number: {BANK_DETAILS.wireRoutingNumber}</p>
            <p>ACH Routing Number: {BANK_DETAILS.achRoutingNumber}</p>
            <p className="text-xs text-gray-500 mt-2">
              After transferring, upload your receipt/screenshot below.
            </p>
          </div>
        )}

        {/* Card instructions */}
        {paymentMethod === "card" && (
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 text-sm text-gray-700 space-y-1">
            <p className="font-semibold">Transfer to:</p>
            <p>Bank: {BANK_DETAILS.bankName}</p>
            <p>Account Name: {BANK_DETAILS.accountName}</p>
            <p>Account Number: {BANK_DETAILS.accountNumber}</p>
            <p>Wire Routing Number: {BANK_DETAILS.wireRoutingNumber}</p>
            <p>ACH Routing Number: {BANK_DETAILS.achRoutingNumber}</p>
            <p className="text-xs text-gray-500 mt-2">
              Use your card via your bank's app or USSD to send to this account, then upload proof below.
            </p>
          </div>
        )}

        {/* Crypto instructions */}
        {paymentMethod === "crypto" && (
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 text-sm text-gray-700 space-y-2">
            <p className="font-semibold">Send to one of these wallets:</p>
            {CRYPTO_WALLETS.map((w, idx) => (
              <p key={idx} className="break-all">
                <span className="font-medium">{w.coin}:</span> {w.address}
              </p>
            ))}
            <p className="text-xs text-gray-500 mt-2">
              After sending, upload a screenshot of the transaction below.
            </p>
          </div>
        )}

        {/* Transaction ref + Receipt upload, shown once a method is chosen */}
        {paymentMethod && (
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Transaction reference / hash (optional)"
              value={transactionRef}
              onChange={(e) => setTransactionRef(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Upload Proof of Payment
              </label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => setReceipt(e.target.files[0])}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-yellow-400 text-white py-3 rounded-xl font-semibold hover:bg-yellow-500 transition shadow-md disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit Donation"}
        </button>
      </form>
    </div>
  );
}

export default DonateB;