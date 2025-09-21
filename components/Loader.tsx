"use client";
import { useEffect, useState } from "react";
import LottiePlayer from "@/components/LottiePlayer";
import { LOTTIES } from "@/lib/lotties";

export default function LoaderOverlay() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1200); // brief loader on first paint
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-white dark:bg-[#0b1220]">
      <div className="w-36 h-36">
        <LottiePlayer src={LOTTIES.loader} />
      </div>
      <span className="absolute bottom-10 text-sm text-gray-500 dark:text-gray-400">Loading TejoVik…</span>
    </div>
  );
}
