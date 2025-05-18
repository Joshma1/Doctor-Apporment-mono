"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PatientRegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle patient registration logic here
    setSuccess(true);
    setEmail("");
    setPassword("");
    // Redirect to login after 2 seconds
    setTimeout(() => {
      router.push("/patient/login");
    }, 2000);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Patient Registration</h1>
      {success && (
        <div className="mb-4 text-green-700 font-semibold">
          Successfully registered as patient! Redirecting to login...
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-medium">Password</label>
          <input
            id="password"
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          disabled={success}
        >
          Register as Patient
        </button>
      </form>
    </main>
  );
}