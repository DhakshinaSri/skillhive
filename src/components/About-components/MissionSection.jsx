// MissionSection.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MissionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect — smooth scroll movement
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={ref}
      id="mission"
      className="min-h-screen bg-gradient-to-b from-white via-[#f5fffb] to-[#e9f9f4] text-gray-800 flex flex-col items-center justify-center py-24 px-6 md:px-24 overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#62b7a3] to-[#8adac3]"
      >
        Our Mission
      </motion.h2>

      {/* Mission Content */}
      <div className="relative w-full max-w-5xl flex flex-col">
        {/* 1️⃣ Empowering Professionals */}
        <motion.div
          style={{ y: y1 }}
          className="bg-white/80 backdrop-blur-lg shadow-md rounded-3xl p-10 border border-[#ccefe4] hover:shadow-lg transition-all duration-300 mb-10"
        >
          <h3 className="text-3xl font-semibold text-[#2f7c6a] mb-4 text-center md:text-left">
            Empowering Professionals
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 text-center md:text-left">
            At Skill Hive, our mission is to nurture and empower aspiring professionals by providing access to high-quality training, hands-on industry exposure, and real-world internship opportunities that foster confidence, competence, and creativity.
          </p>
        </motion.div>

        {/* 2️⃣ Inclusive & Impactful Growth */}
        <motion.div
          style={{ y: y2 }}
          className="bg-gradient-to-br from-[#f4fffc] to-white shadow-md rounded-3xl p-10 border border-[#d6f3eb] hover:shadow-lg transition-all duration-300 mb-20"
        >
          <h3 className="text-2xl font-semibold text-[#2f7c6a] mb-4 text-center md:text-left">
            Inclusive & Impactful Growth
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 text-center md:text-left">
            As a non-profit initiative powered by ISHAI, we are committed to making professional growth affordable, inclusive, and impactful. Our goal is to bridge the gap between academia and industry by supporting both students and organizations — helping learners gain employable skills while assisting industries in building a future-ready, skilled workforce.
          </p>
        </motion.div>

        {/* 3️⃣ Learning Without Barriers */}
        <motion.div
          style={{ y: y3 }}
          className="bg-white/80 backdrop-blur-lg shadow-md rounded-3xl p-10 border border-[#ccefe4] hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-[#2f7c6a] mb-4 text-center md:text-left">
            Learning Without Barriers
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 text-center md:text-left">
            Through continuous learning programs, mentorship from industry leaders, and collaborative projects, Skill Hive aims to create equal opportunities for every individual to learn, grow, and thrive — regardless of background or financial constraints.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
