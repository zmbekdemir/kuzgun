"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiEdit3 } from "react-icons/fi";
import { FaUserFriends, FaComments, FaUserCircle } from "react-icons/fa";
import Image from "next/image";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const tabs = [
    { href: "/mainpage/newcomers", label: "NEWCOMERS" },
    { href: "/mainpage/today", label: "TODAY'S PICK FOR YOU" },
    { href: "/mainpage/search", label: "SEARCH" },
  ];

  const [darkMode, setDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMode = () => setDarkMode((prev) => !prev);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  // === Color Class Helpers
  const bgColor = darkMode ? "bg-custom-brown" : "bg-custom-beige";
  const textColor = darkMode ? "text-custom-gold" : "text-custom-orange";
  const borderColor = darkMode ? "border-custom-gold" : "border-custom-orange";
  const placeholderColor = darkMode
    ? "placeholder-custom-gold/60"
    : "placeholder-custom-orange/60";
  const inactiveText = darkMode
    ? "text-custom-gold/60 hover:text-custom-gold"
    : "text-custom-orange/60 hover:text-custom-orange";

  return (
    <div className={`min-h-screen px-6 py-4 font-spectral transition-colors duration-300 ${bgColor} ${textColor}`}>
      {/* Top Navbar */}
      <div className="flex justify-between items-center mb-6">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <div className={`border rounded p-1 ${borderColor}`}>
            <FiMenu className="w-5 h-5 cursor-pointer" onClick={toggleSidebar} />
          </div>
          <button className={`px-3 py-1 rounded text-sm flex items-center gap-1 border ${borderColor}`}>
            EDITORIAL STUDIO <span>→</span>
          </button>
          <button className={`px-3 py-1 rounded text-sm flex items-center gap-1 border ${borderColor}`}>
            WRITING STUDIO <span>→</span>
          </button>
          <FiEdit3 className="w-5 h-5 ml-3" />
          <input
            type="text"
            className={`px-3 py-1 border-0 border-b bg-transparent text-sm focus:outline-none focus:ring-0 ${borderColor} ${placeholderColor}`}
            placeholder="Search..."
            value=""
            onChange={() => {}}
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          <FaUserFriends className="w-5 h-5" />
          <div className="relative">
            <FaComments className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </div>
          <span className="text-sm">zmbekdemir</span>
          <FaUserCircle className="w-6 h-6" />
        </div>
      </div>

      {/* Tabs */}
      <div className={`w-full flex justify-center mb-6 border-b ${borderColor}/20`}>
        <div className="flex gap-12 text-lg font-semibold text-center">
          {tabs.map((tab) => {
            const isActiveTab = isActive(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`transition-all max-w-[12rem] h-16 flex items-center justify-center text-center break-words ${
                  isActiveTab
                    ? `${textColor} text-2xl font-bold underline underline-offset-8`
                    : `${inactiveText} text-base`
                }`}
              >
                <span className="leading-snug">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Page Content */}
      <main>{children}</main>

      {/* Mode Toggle Button */}
      <button
        onClick={toggleMode}
        className={`fixed bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition hover:scale-105
          ${darkMode ? "bg-custom-gold" : "bg-custom-orange"}`}
        aria-label="Toggle Theme"
      >
        <Image src="/icon.png" alt="Toggle Theme" width={20} height={20} />
      </button>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out shadow-xl
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          ${darkMode ? "bg-custom-gold text-black" : "bg-custom-beige text-custom-orange"}`}
      >
        {/* Header */}
        <div className="p-6">
          <h1 className="text-3xl font-extrabold tracking-widest">KUZGUN</h1>
          <p className="text-xs uppercase tracking-[0.2em] mt-1">Where stories awaken</p>
          <hr className="mt-3 border-black/20" />
        </div>

        {/* Nav */}
        <nav className="flex flex-col p-6 gap-6 uppercase text-[13px] font-semibold tracking-wide">
          {[
            "COMMUNITY",
            "READING LIST",
            "DASHBOARDS",
            "DISCOVER",
            "MESSAGES",
            "CONTESTS",
            "CALENDAR / AGENDA",
            "SETTINGS",
            "HELP / SUPPORT",
          ].map((item, idx) => (
            <Link
              key={idx}
              href="#"
              onClick={toggleSidebar}
              className="hover:tracking-widest transition-all hover:scale-[1.02] hover:opacity-90 text-center"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Footer Circle Icon */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <button className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition hover:scale-105
            ${darkMode ? "bg-black text-white" : "bg-custom-orange text-white"}`}>
            N
          </button>
        </div>
      </div>

    </div>
  );
}
