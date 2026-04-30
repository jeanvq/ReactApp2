"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me 📬</h1>

      {submitted ? (
        <div className="border border-green-500 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Message Sent! ✅</h2>
          <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="border border-gray-700 rounded-xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Your message..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold"
          >
            Send Message 🚀
          </button>
        </form>
      )}

      <div className="mt-8 border border-gray-700 rounded-xl p-6 text-center text-gray-400">
        <p>📧 alex.rivera@email.com</p>
        <p>💼 linkedin.com/in/alexrivera</p>
        <p>🐙 github.com/alexrivera</p>
      </div>
    </main>
  );
}