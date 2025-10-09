import { Link } from "react-router-dom";
import heroImage from "@assets/DialogBox.png";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 py-0 bg-white">
      {/* Left side - Heading */}
      <div className="md:w-[25%] text-center md:text-left">
        <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold pb-6 leading-tight">
          About Us
        </h1>
      </div>

      {/* Middle - Paragraph */}
      <div className="md:w-[45%] text-center md:text-left space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          International Society for Healthcare & AI Innovators (ISHAI) is a global non-profit
          dedicated to connecting academia, industry, and research. We empower students, professionals,
          and institutions through skill development, innovation platforms, global collaborations,
          and career pathways in Healthcare and Artificial Intelligence...{" "}
          <Link
            to="/about"
            className="font-bold text-[#E4983A] hover:text-[#E4983A70] transition duration-150"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Right side - Image */}
      <div className="md:w-[30%] flex justify-center">
        <img
          src={heroImage}
          alt="AI Innovator"
          className="w-64 md:w-80 h-auto object-contain"
        />
      </div>
    </section>
  );
}
