import React, { useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCloud,
  FaLock,
  FaRobot,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaVrCardboard,
  FaChartLine,
  FaNetworkWired,
  FaGamepad,
  FaPalette,
  FaBrain,
  FaLaptopCode,
  FaServer,
  FaKeyboard,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaPenFancy,
  FaFlask,
  FaChartBar,
  FaMicroscope,
  FaUserMd,
} from "react-icons/fa";

import Thumbnail from "@components/common-components/Thumbnail";

export default function InternshipList() {
  const scrollRef = useRef(null);

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  const domains = [
    { title: "Machine Learning", icon: <FaRobot />, color: "#E4983A" },
    { title: "Deep Learning", icon: <FaBrain />, color: "#E4983A" },
    { title: "Data Science & Analytics", icon: <FaChartLine />, color: "#E4983A" },
    { title: "Full Stack Development", icon: <FaCode />, color: "#E4983A" },
    { title: "Software Development", icon: <FaLaptopCode />, color: "#E4983A" },
    { title: "Web & App Development", icon: <FaMobileAlt />, color: "#E4983A" },
    { title: "Cybersecurity", icon: <FaLock />, color: "#F59E0B" },
    { title: "Data Engineering", icon: <FaDatabase />, color: "#F59E0B" },
    { title: "UI/UX Design", icon: <FaPalette />, color: "#F59E0B" },
    { title: "Database Management", icon: <FaServer />, color: "#F59E0B" },
    { title: "Medical Coding", icon: <FaKeyboard />, color: "#F59E0B" },
    { title: "Medical Billing", icon: <FaFileInvoiceDollar />, color: "#10B981" },
    { title: "Accounts Receivable (AR)", icon: <FaMoneyBillWave />, color: "#10B981" },
    { title: "Revenue Cycle Management (RCM)", icon: <FaExchangeAlt />, color: "#10B981" },
    { title: "Medical Scribing", icon: <FaPenFancy />, color: "#10B981" },
    { title: "Clinical Research", icon: <FaFlask />, color: "#10B981" },
    { title: "Healthcare Analytics", icon: <FaChartBar />, color: "#10B981" },
    { title: "AI in Healthcare", icon: <FaMicroscope />, color: "#10B981" },
    { title: "Patient Care Coordination", icon: <FaUserMd />, color: "#10B981" },
  ];

  return (
    <div className="w-full flex items-center justify-center mt-20 space-x-6">
      {/* Left Arrow - hidden on small screens */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex bg-white shadow-md hover:bg-gray-100 rounded-full p-3 z-10"
      >
        <FaChevronLeft className="text-gray-700 text-lg" />
      </button>

      {/* Scrollable Thumbnails - scrollable on all screens */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-15 px-4 scrollbar-hide scroll-smooth"
        style={{ scrollBehavior: "smooth", maxWidth: "85%" }}
      >
        {domains.map((domain, index) => (
          <Thumbnail
            key={index}
            icon={domain.icon}
            title={domain.title}
            bgColor={domain.color}
            textColor="#FFFFFF"
          />
        ))}
      </div>

      {/* Right Arrow - hidden on small screens */}
      <button
        onClick={scrollRight}
        className="hidden md:flex bg-white shadow-md hover:bg-gray-100 rounded-full p-3 z-10"
      >
        <FaChevronRight className="text-gray-700 text-lg" />
      </button>
    </div>
  );
}
