import Button from "@components/common-components/Button";
import InternshipList from "@components/home-components/InternshipList";

export default function ProgramSection() {
  return (
    <section className="w-full items-center justify-between px-6 md:px-20 lg:px-32 py-0 pt-15 pb-15 bg-white">
      {/* Left side - Heading */}
      <div className=" text-center md:text-left">
        <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-[#E4983A] leading-tight text-left pb-6">
          Programs & Opportunities
        </h2>
        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-left pb-6">
          Empowering You with  
          <span className="text-[#E4983A]"> Real-World Experience</span> and Industry-Ready Skills
        </h2>
        <p className="text-gray-600 text-base md:text-lg lg:w-2/3 text-justify pb-6">
            At Skill Hive, we provide structured programs that bridge the gap between academic learning and professional expertise. Our initiatives are designed to give students, recent graduates, and job seekers hands-on experience, mentorship, and certifications in high-demand sectors like Healthcare, Artificial Intelligence, IT, Life Sciences, and allied industries.
        </p>
        <Button text="Apply Now" to="/internship"/>
      </div>
        <InternshipList />
    </section>
  );
}
