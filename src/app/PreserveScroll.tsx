"use client";

import { useEffect } from "react";

/**
 * Preserves scroll position when navigating away from the home page
 * and restores it when returning.
 * Add data-preserve-scroll="home" to links that should save position.
 */
export default function PreserveScroll({ keyName = "home-scroll" }: { keyName?: string }) {
  useEffect(() => {
    // Restore previously saved scroll position (if any)
    const saved = typeof window !== "undefined" ? sessionStorage.getItem(keyName) : null;
    if (saved) {
      const y = Number(saved);
      if (!Number.isNaN(y)) {
        window.scrollTo({ top: y, behavior: "auto" });
      }
      sessionStorage.removeItem(keyName);
    }

    // Save scroll position before following marked links
    const onClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a[data-preserve-scroll="home"]') as HTMLAnchorElement | null;
      if (anchor) {
        try {
          sessionStorage.setItem(keyName, String(window.scrollY));
        } catch {}
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [keyName]);

  return null;
}


