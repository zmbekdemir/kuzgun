// app/writing/WritingStudioLayout.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "@/app/theme/ThemeProvider";
import {
  Menu as MenuIcon,
  Edit3,
  Save,
  Download,
  Book,
  Users,
  Map,
  Clock,
  MessagesSquare,
  Settings,
  UserCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

type Tab = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function WritingStudioLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const tabs: Tab[] = [
    { href: "/writing/books", label: "YOUR BOOKS", icon: Book },
    { href: "/writing/characters", label: "CHARACTERS", icon: Users },
    { href: "/writing/worldbuilding", label: "WORLD BUILDING", icon: Map },
    { href: "/writing/timeline", label: "TIMELINE", icon: Clock },
    { href: "/writing/collaboration", label: "COLLABORATION", icon: MessagesSquare },
    { href: "/writing/tools", label: "TOOLS", icon: Settings },
  ];

  const { isDark, toggleTheme } = useTheme();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [wordCount] = useState(47832);
  const [dailyGoal] = useState(1000);
  const [todayWords] = useState(342);

  const toggleSidebar = () => setIsSidebarOpen((p) => !p);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  const textColor = isDark ? "text-custom-gold" : "text-custom-orange";
  const borderColor = isDark ? "border-custom-gold" : "border-custom-orange";
  const placeholderColor = isDark ? "placeholder-custom-gold/60" : "placeholder-custom-orange/60";
  const inactiveText = isDark ? "text-custom-gold/60 hover:text-custom-gold" : "text-custom-orange/60 hover:text-custom-orange";
  const bgColor = isDark ? "bg-custom-brown" : "bg-custom-beige";

  return (
    <div className={`min-h-dvh px-6 py-4 font-spectral transition-colors duration-300 ${bgColor} ${textColor}`}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className={`border rounded p-1 ${borderColor}`}>
            <MenuIcon className="w-5 h-5 cursor-pointer" onClick={toggleSidebar} />
          </div>

          <Link href="/mainpage" className={`px-3 py-1 rounded text-sm flex items-center gap-1 border ${borderColor} hover:bg-white/10 transition`}>
            MAIN PAGE <span>→</span>
          </Link>
          <Link href="/editorial" className={`px-3 py-1 rounded text-sm flex items-center gap-1 border ${borderColor} hover:bg-white/10 transition`}>
            EDITORIAL STUDIO <span>→</span>
          </Link>

          <div className="flex items-center gap-2 ml-4">
            <button className={`p-2 rounded hover:bg-white/10 transition ${borderColor}`} title="Save">
              <Save className="w-4 h-4" />
            </button>
            <button className={`p-2 rounded hover:bg-white/10 transition ${borderColor}`} title="Export">
              <Download className="w-4 h-4" />
            </button>
          </div>

          <Edit3 className="w-5 h-5 ml-3" />
          <input
            type="text"
            className={`px-3 py-1 border-0 border-b bg-transparent text-sm focus:outline-none focus:ring-0 ${borderColor} ${placeholderColor}`}
            placeholder="Search in project..."
            value=""
            onChange={() => {}}
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-sm">
            <div className="text-center">
              <p className="text-xs opacity-60">TOTAL WORDS</p>
              <p className="font-bold">{wordCount.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-xs opacity-60">TODAY</p>
              <p className="font-bold">{todayWords}/{dailyGoal}</p>
            </div>
            <div className="w-16 h-2 bg-white/20 rounded-full">
              <div className="h-full bg-current rounded-full transition-all duration-300" style={{ width: `${Math.min((todayWords / dailyGoal) * 100, 100)}%` }} />
            </div>
          </div>

          <Users className="w-5 h-5" />
          <div className="relative">
            <MessagesSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </div>
          <span className="text-sm">zmbekdemir</span>
          <UserCircle className="w-6 h-6" />
        </div>
      </div>

      <div className={`w-full flex justify-center mb-6 border-b ${borderColor}/20 overflow-x-auto`}>
        <div className="flex gap-8 text-lg font-semibold text-center min-w-max px-4">
          {tabs.map((tab) => {
            const isActiveTab = isActive(tab.href);
            const IconComponent = tab.icon;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`transition-all h-16 flex items-center justify-center text-center gap-2 whitespace-nowrap ${
                  isActiveTab
                    ? `${textColor} text-xl font-bold underline underline-offset-8`
                    : `${inactiveText} text-base`
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="leading-snug">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <main>{children}</main>

      <button
        onClick={toggleTheme}
        className={`fixed bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition hover:scale-105
        ${isDark ? "bg-[#A49D96]" : "bg-[#9E7946]"} text-white`}
        aria-label="Toggle Theme"
      >
        <Image src="/icon.png" alt="Toggle Theme" width={20} height={20} />
      </button>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
          onClick={toggleSidebar}
        />
      )}


      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out shadow-xl
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          bg-[var(--background)] text-[var(--foreground)]`}
      >
        <div className="p-6">
          <h1 className="text-3xl font-extrabold tracking-widest">KUZGUN</h1>
          <p className="text-xs uppercase tracking-[0.2em] mt-1">Writing Studio</p>
          <hr className={`mt-3 ${isDark ? "border-black/20" : "border-custom-orange/30"}`} />
        </div>

        <nav className="flex flex-col p-6 gap-6 uppercase text-[13px] font-semibold tracking-wide">
          {[
            "MY PROJECTS",
            "WRITING GOALS",
            "RESEARCH NOTES",
            "INSPIRATION BOARD",
            "WRITING PROMPTS",
            "BACKUP & SYNC",
            "WRITING STATISTICS",
            "EXPORT OPTIONS",
            "SETTINGS",
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
      </div>
    </div>
  );
}
