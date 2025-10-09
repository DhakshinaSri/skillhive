// src/pages/About.jsx
import React from "react";
import AboutSplitScreen from "../components/About-components/AboutSplitScreen.jsx";
import MissionSection from "../components/About-components/MissionSection";
import VisionSection from "../components/About-components/VisionSection";
import GoalsSection from "../components/About-components/GoalsSection";
// (Optional) If you have a Lottie file:
import heroAnimation from "../assets/hero-animation.json"; // or comment out if you don’t have one

export default function About() {
  const paragraphs = [
    "Skill Hive is an initiative by the International Society for Healthcare & AI Innovators (ISHAI), created to empower students, recent graduates, and job seekers with the right skills, exposure, and industry connections needed to excel in today’s competitive world",
    "Skill Hive serves as a comprehensive one-stop platform where learners and aspiring professionals can connect directly with industry leaders, multinational companies, and domain experts across diverse sectors such as healthcare, artificial intelligence, information technology, life sciences, and allied industries.",
    "Through structured internship programs, practical training sessions, and guided mentorship, Skill Hive bridges the gap between academic education and real-world experience — preparing individuals to confidently step into professional roles and contribute meaningfully to innovation and growth.",
    "As an initiative run and powered by ISHAI, Skill Hive operates as a non-profit platform, ensuring that opportunities remain accessible and inclusive. Our affordable subscription plansprovide members with multiple benefits, including training certifications, placement support, industry networking, and participation in international projects and events — all aimed at nurturing future-ready professionals."
  ]

  return (
    <div className="w-full">
      <AboutSplitScreen
        paragraphs={paragraphs}
        lottieData={heroAnimation}  
        autoAdvance={true}
        advanceInterval={7000}
      />
      <MissionSection />
      <VisionSection />
      <GoalsSection />
    </div>
  );
}
