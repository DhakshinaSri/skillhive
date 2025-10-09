import Button from "@components/common-components/Button";
import heroImage from "@assets/HeroImg1.png"; // replace with your image

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-30 py-20 bg-white">
      {/* Left side - Text content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl  font-bold leading-tight">
          Empowering the {" "}
          <span className="text-[#E4983A]">Next Generation </span> of Innovators - Where {" "}
          <span className="text-[#E4983A]">Skill Meet Opportunity </span>
          
        </h2>

        <p className="text-gray-600 text-base md:text-lg max-w-lg text-justify">
          Skill Hive is an initiative by the International Society for Healthcare & AI Innovators (ISHAI), created to empower students, recent graduates, and job seekers with the right skills, exposure, and industry connections needed to excel in today’s competitive world.
        </p>

        <Button text="Read More" to="/about" />
      </div>

      {/* Right side - Image and decorations */}
      <div className="flex-1 flex justify-center mt-12 md:mt-0 relative">

          <img
            src={heroImage}
            alt="AI Innovator"
            className="w-full h-full object-cover"
          />
      </div>
    </section>
  );
}
