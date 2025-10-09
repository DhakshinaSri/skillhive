// src/pages/Home.jsx
import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold text-[#65B5A3] mb-6 font-montserrat">
          Welcome to SkillHive
        </h1>
        <p className="text-lg text-gray-600 mb-8 font-poppins">
          Empower your learning journey with interactive lessons, engaging
          activities, and expert guidance — all in one place.
        </p>
        <button className="bg-[#65B5A3] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#4ea692] transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
