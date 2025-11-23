// app/mainpage/today/RefreshButton.tsx
"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();
  const [pending, start] = useTransition();

  return (
    <button
      onClick={() => start(() => router.refresh())}
      disabled={pending}
      className="ml-auto mb-4 border border-[var(--foreground)]/50 px-3 py-1 rounded text-sm hover:bg-white/10 transition disabled:opacity-50"
      title="Refresh recommendations"
    >
      {pending ? "Refreshing…" : "Refresh"}
    </button>
  );
}
