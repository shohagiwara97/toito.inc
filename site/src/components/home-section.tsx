'use client';

import { useEffect, useRef, useState } from "react";

const headingLines = [
  "テクノロジーで人々の記憶に残る",
  "新しいストーリー体験を発明する"
];

function useInViewAnimation<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export function HomeSection() {
  const [blockVisible, setBlockVisible] = useState(false);
  const [lineVisibilities, setLineVisibilities] = useState(
    () => headingLines.map(() => false)
  );
  const [taglineVisible, setTaglineVisible] = useState(false);
  const { ref: infoRef, isVisible: infoVisible } = useInViewAnimation<HTMLDivElement>(0.25);

  useEffect(() => {
    const timers: Array<ReturnType<typeof setTimeout>> = [];

    timers.push(setTimeout(() => setBlockVisible(true), 40));

    headingLines.forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setLineVisibilities((previous) => {
            if (previous[index]) return previous;
            const next = [...previous];
            next[index] = true;
            return next;
          });
        }, 200 + index * 160)
      );
    });

    timers.push(
      setTimeout(
        () => setTaglineVisible(true),
        200 + headingLines.length * 160 + 200
      )
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const getAnimationStyle = (delay: number) => ({
    transitionDelay: `${delay}ms`
  });

  const heroBlockClass = blockVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-14";
  const infoBlockClass = infoVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12";
  const getLineClass = (index: number) =>
    lineVisibilities[index] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10";
  const taglineClass = taglineVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8";

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
              className={`${getLineClass(index)} block transition-all duration-700 ease-out`}
              style={getAnimationStyle(index * 120)}
            >
              {line}
            </span>
          ))}
        </div>
        <p
          className={`${taglineClass} text-[13px] leading-relaxed text-white/80 transition-all duration-700 ease-out sm:text-base`}
          style={getAnimationStyle(headingLines.length * 120 + 100)}
        >
          Inventing innovative and memorable storytelling experiences through technology.
        </p>
      </div>

      <div
        ref={infoRef}
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
