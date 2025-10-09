import React from "react";
import { motion } from "framer-motion";

export default function VisionSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <section
      id="vision"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-mint-50 to-white text-gray-800 px-6 md:px-24 py-24"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #e8f8f4, #ffffff)",
      }}
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-[#62b7a3] to-[#7ddac0] bg-clip-text text-transparent"
      >
        Our Vision
      </motion.h2>

      {/* Vision Cards */}
      <div className="flex flex-col md:flex-row gap-12 max-w-6xl w-full">
        {/* Card 1 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          className="flex-1 bg-white p-10 rounded-3xl shadow-md border border-teal-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-[#62b7a3] mb-4 text-center md:text-left">
            Global Recognition and Impact
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 text-center md:text-left">
            Our vision is to become a globally recognized, non-profit platform
            that connects talent with opportunity — transforming students,
            graduates, and job seekers into skilled professionals and innovators
            who drive progress across healthcare, technology, AI, and allied
            domains.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          className="flex-1 bg-gradient-to-b from-[#e6f7f2] to-white p-10 rounded-3xl shadow-md border border-teal-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-[#62b7a3] mb-4 text-center md:text-left">
            Bridging Education and Industry
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 text-center md:text-left">
            We aspire to strengthen the ecosystem of skill development by acting
            as a bridge between education, industry, and innovation, ensuring
            that every learner is equipped with the competencies required by the
            modern workforce.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.6}
          className="flex-1 bg-white p-10 rounded-3xl shadow-md border border-teal-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-[#62b7a3] mb-4 text-center md:text-left">
            Inclusive and Future-Ready Workforce
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 text-center md:text-left">
            Skill Hive envisions a world where knowledge and opportunity are
            accessible to all, where students are supported, industries are
            enriched, and society benefits from a more capable, collaborative,
            and future-oriented workforce.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
