import React, { useState } from "react";

function VerifyCode({ email, setStep }) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async () => {
    setMessage(""); setError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Invalid code");
      setMessage(data.message);
      setTimeout(() => setStep(3), 1000); // go to ResetPassword
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-black text-center mb-3">Verify Code</h2>
        {error && <p className="text-red-700 text-center">{error}</p>}
        {message && <p className="text-green-800 text-center">{message}</p>}
        <input
          type="number"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code"
          className="w-full px-4 py-3 rounded-xl focus:outline-none border border-black mb-4"
        />
        <button onClick={handleVerify} className="w-full py-3 bg-yellow-400 text-black rounded-xl font-bold">
          Verify Code
        </button>
      </div>
    </div>
  );
}

export default VerifyCode;
