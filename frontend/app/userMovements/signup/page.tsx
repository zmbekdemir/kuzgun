"use client";

import Link from "next/link";

export default function SignInPage() {
  return (
    <>
      {/* Title */}
      <div className="flex justify-center mb-4 md:mb-6">
        <h2
          className="font-spectral text-[32px] md:text-[48px] lg:text-[64px] text-center text-transparent"
          style={{
            WebkitTextStroke: "1px #EABD53",
            color: "white",
          }}
        >
          SIGN UP
        </h2>
      </div>

      {/* Compact Form */}
      <form className="w-full max-w-sm mx-auto space-y-4 text-left text-xs sm:text-sm">
        <div>
          <label className="font-spectral block mb-1 tracking-widest">NAME</label>
          <input
            type="text"
            placeholder="Jane"
            className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/50 py-0.5 focus:outline-none focus:border-yellow-500 transition"
          />
        </div>

        <div>
          <label className="font-spectral block mb-1 tracking-widest">SURNAME</label>
          <input
            type="text"
            placeholder="Doe"
            className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/50 py-0.5 focus:outline-none focus:border-yellow-500 transition"
          />
        </div>

        <div>
          <label className="font-spectral block mb-1 tracking-widest">E-MAIL</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/50 py-0.5 focus:outline-none focus:border-yellow-500 transition"
          />
        </div>

        <div>
          <label className="font-spectral block mb-1 tracking-widest">PASSWORD</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/50 py-0.5 focus:outline-none focus:border-yellow-500 transition"
          />
        </div>

        <div>
          <label className="font-spectral block mb-1 tracking-widest">REPEAT PASSWORD</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/50 py-0.5 focus:outline-none focus:border-yellow-500 transition"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="font-spectral w-full py-1.5 border border-custom-gold text-custom-gold/50 uppercase tracking-wide hover:bg-white/10 transition text-sm"
        >
          CREATE ACCOUNT
        </button>

        {/* Link */}
        <p className="font-spectral text-xs text-white/70 text-center break-words whitespace-normal">
          ALREADY HAVE AN ACCOUNT?{" "}
          <Link href="/userMovements/login" className="underline text-custom-gold/50">
            LOG IN.
          </Link>
        </p>
      </form>
    </>
  );
}
