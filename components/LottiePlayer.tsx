"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

type Props = {
  src: string; // e.g. "/lotties/loader.json"
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
};

export default function LottiePlayer({ src, loop = true, autoplay = true, className }: Props) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(src);
        const json = await res.json();
        setAnimationData(json);
      } catch (e) {
        console.error("Failed to load Lottie JSON:", e);
      }
    }
    load();
  }, [src]);

  if (!animationData) return null;

  return <Lottie animationData={animationData} loop={loop} autoplay={autoplay} className={className} />;
}
