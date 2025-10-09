import { motion } from "framer-motion";

const goals = [
  {
    title: "1. Bridge Academia and Industry",
    text: "To create a seamless connection between educational institutions and the professional world by linking students with real-time industry projects, expert mentors, and global companies. Skill Hive enables learners to experience the practical application of their academic knowledge, preparing them to meet real-world challenges with confidence and competence.",
  },
  {
    title: "2. Empower Career Growth",
    text: "To support students and job seekers in their career development journey through customized training programs, hands-on internships, and certification courses aligned with industry standards.",
  },
  {
    title: "3. Foster Innovation and Research",
    text: "To cultivate a culture of innovation, creativity, and interdisciplinary research, encouraging students to develop solutions that address real-world problems.",
  },
  {
    title: "4. Promote Global Exposure",
    text: "To offer international learning and networking opportunities through collaborations with global industries, universities, and innovation hubs.",
  },
  {
    title: "5. Build a Skilled Future Workforce",
    text: "To strengthen the industry ecosystem by providing organizations with well-trained, job-ready professionals.",
  },
];

const GoalsSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#f6fffb] to-[#e7f9f4] py-24 px-6 flex flex-col items-center">
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#62b7a3] to-[#7edec8] mb-20 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Goals
      </motion.h2>

      <div className="relative w-full max-w-4xl">
        {/* Connecting line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#62b7a3] via-[#9ce8d3] to-[#c7f7e7] rounded-full"></div>

        {/* Cards */}
        <div className="space-y-24 relative z-10">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className={`relative bg-white/80 backdrop-blur-xl shadow-md hover:shadow-xl rounded-3xl p-10 md:p-12 max-w-2xl mx-auto border border-[#d9f3ec] transition-all duration-500 ${
                index % 2 === 0
                  ? "md:ml-0 md:mr-auto"
                  : "md:ml-auto md:mr-0"
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#62b7a3] to-[#9ce8d3] border-4 border-white shadow-md"></div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#2f7c6a] mb-4 text-center">
                {goal.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                {goal.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
