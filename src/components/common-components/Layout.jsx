// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "@components/common-components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* This renders whatever child route is active */}
      <main className="pt-24"> 
        <Outlet />
      </main>
    </>
  );
}
