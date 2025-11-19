'use client';

import { useEffect, useState } from "react";

const headingLines = [
  "テクノロジーで人々の記憶に残る",
  "新しいストーリー体験を発明する"
];

export function HomeSection() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    const heroTimer = setTimeout(() => setHeroVisible(true), 50);
    const infoTimer = setTimeout(() => setInfoVisible(true), 350);

    return () => {
      clearTimeout(heroTimer);
      clearTimeout(infoTimer);
    };
  }, []);

  const getAnimationStyle = (delay: number) => ({
    transitionDelay: `${delay}ms`
  });

  const heroLineClass = heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";
  const heroBlockClass = heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  const infoBlockClass = infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-24 text-white sm:px-6 lg:px-12 lg:pb-20 lg:pt-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" aria-hidden />
      <div
        className={`${heroBlockClass} relative ml-0 flex w-full max-w-3xl flex-col gap-3 text-left transition-all duration-800 ease-out`}
      >
        <div className="flex flex-col gap-2 text-[clamp(20px,6vw,42px)] font-light leading-relaxed">
          {headingLines.map((line, index) => (
            <span
              key={line}
              className={`${heroLineClass} block transition-all duration-700 ease-out`}
              style={getAnimationStyle(index * 150)}
            >
              {line}
            </span>
          ))}
        </div>
        <p
          className={`${heroLineClass} text-[13px] leading-relaxed text-white/80 transition-all duration-700 ease-out sm:text-base`}
          style={getAnimationStyle(headingLines.length * 150)}
        >
          Inventing innovative and memorable storytelling experiences through technology.
        </p>
      </div>

      <div
        data-what-we-do-container="true"
        data-what-we-do-block="true"
        className={`${infoBlockClass} mx-auto mt-16 max-w-5xl rounded-3xl bg-black/40 px-6 py-10 text-center backdrop-blur-sm transition-all duration-800 ease-out sm:px-10 lg:mt-20`}
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
      </div>
    </section>
  );
}
