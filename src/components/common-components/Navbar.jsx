import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@assets/logoishai.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menus = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Internship", path: "/internship" },
    { name: "Hr", path: "/hr" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-25 items-center">
          {/* Logo Image */}
          <div className="cursor-pointer">
            <Link to="/">
              <img
                src={logo}
                alt="Company Logo"
                className="h-20 md:h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-[72px]">
            {menus.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-[20px] font-montserrat font-medium pb-1 transition ${
                    isActive
                      ? "border-b-[4px] border-[#E4983A] text-[#E4983A]"
                      : "text-black hover:text-[#d67d10]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="bg-black text-white p-2 px-4 rounded-md">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu  */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 z-50">
          {/* Close button inside overlay */}
          <button
            className="absolute top-6 right-4 text-white  bg-black p-2 px-4 rounded-md"
            onClick={() => setIsOpen(false)}
            >
            <X size={32} />
          </button>

          {menus.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`text-[24px] font-montserrat font-medium pb-1 ${
                  isActive
                    ? "border-b-[4px] border-[#E4983A] text-black"
                    : "text-black hover:text-[#d67d10]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
