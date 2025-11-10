"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import type { Range } from "../../lib/newcomers";

const RANGES: Range[] = ["today", "week", "month"];

export default function RangeSwitcher() {
  const router = useRouter();
  const sp = useSearchParams();
  const [pending, start] = useTransition();

  const active = (sp.get("range") as Range) ?? "today";

  const setRange = (r: Range) => {
    start(() => {
      const params = new URLSearchParams(sp.toString());
      params.set("range", r);
      router.push(`/mainpage/newcomers?${params.toString()}`);
    });
  };

  return (
    <div className="flex gap-2 items-center ml-auto">
      {RANGES.map(r => (
        <button
          key={r}
          onClick={() => setRange(r)}
          disabled={pending}
          className={`text-xs uppercase tracking-wider px-3 py-1 rounded border transition
            ${active === r
              ? "border-[var(--foreground)] text-[var(--foreground)]"
              : "border-[var(--foreground)]/30 text-[var(--foreground)]/70 hover:border-[var(--foreground)]/60 hover:text-[var(--foreground)]"}`}
        >
          {r}
        </button>
      ))}
    </div>
  );
}
