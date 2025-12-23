'use client';

import topVideo from "../../image/toito_top.mp4";
import { AnimatedSection } from "./animated-section";

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden px-4 pb-12 pt-24 text-white sm:px-6 lg:px-12 lg:pb-16 lg:pt-32"
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
              src={topVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </AnimatedSection>
      </div>
    </section>
  );
}
