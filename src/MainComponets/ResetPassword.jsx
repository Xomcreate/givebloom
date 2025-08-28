import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword({ email }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Regex for strong password
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~`-]).{8,}$/;

  const handleReset = async () => {
    setError("");
    setMessage("");

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      return setError("Passwords do not match");
    }

    // Check password strength
    if (!strongPasswordRegex.test(newPassword)) {
      return setError(
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
      );
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error resetting password");

      setMessage(data.message);

      // Redirect to login after 2 seconds
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-black text-center mb-3">Reset Password</h2>
        {error && <p className="text-red-700 text-center mb-2">{error}</p>}
        {message && <p className="text-green-800 text-center mb-2">{message}</p>}

        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          className="w-full px-4 py-3 rounded-xl focus:outline-none border border-black mb-4"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-full px-4 py-3 rounded-xl focus:outline-none border border-black mb-4"
        />
        <button
          onClick={handleReset}
          className="w-full py-3 bg-yellow-400 text-black rounded-xl font-bold"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
