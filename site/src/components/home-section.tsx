'use client';

import { useEffect, useRef } from "react";
import topVideo from "../../image/toito_top.mp4";
import { AnimatedSection } from "./animated-section";

export function HomeSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      videoRef.current?.play().catch(() => {
        // Autoplay might be blocked; ignore quietly
      });
    }, 1300);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] flex-col overflow-hidden px-4 pb-8 pt-16 text-white sm:min-h-screen sm:px-6 lg:px-12 lg:pb-16 lg:pt-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" aria-hidden />

      <div className="relative z-10 flex flex-1 items-center justify-center">
        <AnimatedSection
          animation="fadeUp"
          delay={120}
          className="relative w-full max-w-5xl overflow-hidden rounded-[32px]"
        >
          <div className="aspect-[16/9]">
            <video
              ref={videoRef}
              src={topVideo}
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </AnimatedSection>
      </div>
    </section>
  );
}
