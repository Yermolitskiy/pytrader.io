"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const p = (scrollTop || 0) / Math.max(1, scrollHeight - clientHeight);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const thumbH = 10;
  const top = `calc(${(progress * 100).toFixed(2)}% - ${thumbH / 2}px)`;

  return (
    <div aria-hidden className="hidden sm:block fixed left-3 top-1/2 -translate-y-1/2 z-50 h-[60vh] w-10 pointer-events-none">
      {/* label */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full -rotate-90 origin-left text-[10px] uppercase tracking-[0.25em] text-terminal/80 opacity-80">
        Page Scroll
      </div>
      {/* track */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/25" />
      <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_12px,rgba(255,255,255,.18)_12px,rgba(255,255,255,.18)_13px)]" />
      {/* thumb */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4" style={{ top }}>
        <div className="h-[10px] w-4 rounded-sm bg-terminal" style={{ boxShadow: "0 0 10px var(--terminal)" }} />
      </div>
    </div>
  );
}