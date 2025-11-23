"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/mainpage"); // ✅ simulate login redirect
  };

  return (
    <>
      {/* Welcome Title */}
      <div className="flex justify-center mb-6 md:mb-12">
        <h2
          className="font-spectral text-[48px] md:text-[72px] lg:text-[96px] text-transparent flex items-center justify-center leading-none"
          style={{
            WebkitTextStroke: "1px #736A5F",
            color: "white",
          }}
        >
          WELC
          <img
            src="/icon.png"
            alt="Raven as O"
            className="inline-block w-[40px] md:w-[60px] lg:w-[72px] aspect-square object-contain mx-1"
          />
          ME
        </h2>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-8 text-left w-full max-w-sm mx-auto">
        {/* Username Input */}
        <div>
          <label className="font-spectral block text-sm font-medium mb-1 tracking-widest">
            USERNAME
          </label>
          <input
            type="text"
            name="username"
            placeholder="jone.doe"
            className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/50 focus:outline-none focus:border-yellow-500 transition"
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="font-spectral block text-sm font-medium mb-1 tracking-widest">
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/50 focus:outline-none focus:border-yellow-500 transition"
          />
          <div className="text-right mt-2 text-xs text-white/70">
            <a href="#" className="font-spectral hover:underline">
              FORGOT YOUR PASSWORD?
            </a>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="font-spectral w-full py-2 border border-custom-gold text-custom-gold/50 uppercase tracking-wide hover:bg-white/10 transition"
        >
          LOG IN
        </button>

        {/* Link to Signup */}
        <p className="font-spectral text-xs text-white/70 text-center break-words whitespace-normal">
          IF YOU DON’T HAVE AN ACCOUNT,{" "}
          <Link href="/userMovements/signup" className="underline text-custom-gold/50">
            SIGN IN.
          </Link>
        </p>
      </form>
    </>
  );
}
