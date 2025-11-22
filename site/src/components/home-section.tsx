'use client';

import { AnimatedSection } from "./animated-section";

const headingLines = [
  "テクノロジーで人々の記憶に残る",
  "新しいストーリー体験を発明する"
];

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden px-4 pb-16 pt-24 text-white sm:px-6 lg:px-12 lg:pb-20 lg:pt-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" aria-hidden />

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-16">
          <AnimatedSection
            animation="slideLeft"
            className="relative ml-0 flex w-full max-w-3xl flex-col gap-4 text-left"
          >
            <div className="flex flex-col gap-3 text-[clamp(20px,6vw,42px)] font-light leading-relaxed">
              {headingLines.map((line, index) => (
                <AnimatedSection
                  key={line}
                  animation="slideLeft"
                delay={index * 180}
                className="block"
              >
                <span className="block">{line}</span>
              </AnimatedSection>
            ))}
          </div>

            <AnimatedSection
              animation="slideLeft"
              delay={headingLines.length * 180 + 240}
            >
              <p className="text-[13px] leading-relaxed text-white/80 sm:text-base">
                Inventing innovative and memorable storytelling experiences through technology.
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection
            animation="slideRight"
            delay={260}
            data-what-we-do-container="true"
            data-what-we-do-block="true"
            className="mx-auto max-w-5xl rounded-3xl bg-black/40 px-6 py-10 text-center backdrop-blur-sm sm:px-10"
          >
            <div data-what-we-do-section>
              <h2 className="mb-6 text-[clamp(30px,8vw,64px)] leading-tight tracking-tight text-white">
                WHAT WE DO
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-white/90 sm:text-base sm:leading-loose">
                <p>toito.incは東京を拠点とする体験型エンターテイメント カンパニー。</p>
                <p>デジタルテクノロジーを駆使して没入・体験型コンテンツを開発し、</p>
                <p>それらを体験できる空間やイベントを世界中で展開していきます。</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
