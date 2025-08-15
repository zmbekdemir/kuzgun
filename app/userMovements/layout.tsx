// app/components/AuthLayout.tsx

import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-screen overflow-hidden font-serif">
      {/* Left Side - Image with inline SVG */}

      <div className="relative w-full md:w-1/2 h-64 md:h-screen group overflow-hidden">
        <div className="relative w-full h-full">
          {/* Raven base image */}
          <img
            src="/raven.png"
            alt="Raven"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Raven eye-flame overlay on hover */}
          <img
            src="/raven-alev.png"
            alt="Raven Eye Flame"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>




      {/* Right Side - Auth Panel */}
      <div className="relative w-full md:w-1/2 bg-custom-brown text-white px-4 sm:px-6 md:px-16 py-10 flex flex-col justify-center min-h-screen md:h-screen overflow-y-auto">
        {/* Logo + Tagline */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h1 className="font-spectral text-[16px] md:text-[28px] text-custom-gold tracking-wide mb-0 leading-none">
            KUZGUN
          </h1>
          <p className="font-spectral text-[8px] md:text-xs uppercase tracking-[0.05em] text-white/80 mt-0.5">
            Where stories awaken
          </p>
        </div>
        {/* Page-specific content */}
        <div className="w-full max-w-md mx-auto my-auto">{children}</div>
      </div>
    </div>
  );
}
