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

type SlideOptions = {
  delay?: number;
  distance?: number;
  duration?: number;
};

const createSlideStyle = (visible: boolean, options: SlideOptions = {}) => {
  const { delay = 0, distance = -40, duration = 700 } = options;
  return {
    opacity: visible ? 1 : 0,
    transform: `translateX(${visible ? 0 : distance}px)`,
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`
  } as const;
};

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

  const heroBlockStyle = createSlideStyle(blockVisible, {
    delay: 0,
    distance: -64,
    duration: 850
  });
  const getLineStyle = (index: number) =>
    createSlideStyle(lineVisibilities[index], {
      delay: 220 + index * 160,
      distance: -48,
      duration: 750
    });
  const taglineStyle = createSlideStyle(taglineVisible, {
    delay: 220 + headingLines.length * 160 + 200,
    distance: -32,
    duration: 700
  });
  const infoBlockStyle = createSlideStyle(infoVisible, {
    delay: 150,
    distance: 56,
    duration: 900
  });

  return (
    <section
      id="home"
      className="relative flex min-h-[110vh] flex-col overflow-hidden px-4 pb-16 pt-24 text-white sm:px-6 lg:px-12 lg:pb-20 lg:pt-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" aria-hidden />
      <div className="flex flex-1 flex-col justify-start gap-16">
        <div
          className="relative ml-0 flex w-full max-w-3xl flex-col gap-3 text-left"
          style={heroBlockStyle}
        >
          <div className="flex flex-col gap-2 text-[clamp(20px,6vw,42px)] font-light leading-relaxed">
            {headingLines.map((line, index) => (
              <span
                key={line}
                className="block"
                style={getLineStyle(index)}
              >
                {line}
              </span>
            ))}
          </div>
          <p
            className="text-[13px] leading-relaxed text-white/80 sm:text-base"
            style={taglineStyle}
          >
            Inventing innovative and memorable storytelling experiences through technology.
          </p>
        </div>

        <div
          ref={infoRef}
          data-what-we-do-container="true"
          data-what-we-do-block="true"
          className="mx-auto max-w-5xl rounded-3xl bg-black/40 px-6 py-10 text-center backdrop-blur-sm sm:px-10"
          style={infoBlockStyle}
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
      </div>

      <div className="mt-12 flex justify-center">
        <div className="scroll-indicator rounded-full border border-white/40 px-6 py-2 text-xs tracking-[0.4em] text-white/80 sm:text-sm">
          SCROLL DOWN ↓↓
        </div>
      </div>
    </section>
  );
}
