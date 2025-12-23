'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { infoItems } from "@/data/info-items";
import { ImageWithFallback } from "./figma/image-with-fallback";

export function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const animationClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-6";
  const getStyle = (delay: number) => ({
    transitionDelay: `${delay}ms`
  });

  const categories = [
    "All",
    ...Array.from(new Set(infoItems.map((item) => item.category)))
  ];

  const filteredNews =
    selectedCategory === "All"
      ? infoItems
      : infoItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      ref={sectionRef}
      id="info"
      className="relative bg-white py-16 px-4 sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`${animationClass} space-y-4 transition-all duration-700 ease-out`}
          style={getStyle(0)}
        >
          <p className="text-[clamp(48px,10vw,104px)] leading-none tracking-tight text-[#d10000]">
            INFO
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-12 lg:flex-row">
          <div
            className={`${animationClass} lg:w-1/4 transition-all duration-700 ease-out`}
            style={getStyle(150)}
          >
            <p className="text-xs uppercase tracking-[0.5em] text-gray-400">
              Category
            </p>
            <div className="mt-6 space-y-5">
              {categories.map((category) => {
                const isActive = category === selectedCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center gap-4 text-base ${
                      isActive
                        ? "text-[#d10000]"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                        isActive ? "border-[#d10000]" : "border-gray-300"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isActive ? "bg-[#d10000]" : "bg-transparent"
                        }`}
                      />
                    </span>
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`${animationClass} flex-1 transition-all duration-700 ease-out`}
            style={getStyle(200)}
          >
            <div className="md:hidden">
              {filteredNews.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/info/${item.slug}`}
                  className={`${animationClass} block border-b border-gray-200 py-8 transition-all duration-700 ease-out first:pt-0 last:border-b-0 last:pb-0`}
                  style={getStyle(250 + index * 80)}
                  aria-label={`${item.title} の詳細を見る`}
                >
                  <article className="flex items-stretch gap-6">
                    <div className="flex min-w-0 flex-1 flex-col gap-3">
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="text-sm font-semibold tracking-wide text-gray-900">
                          {item.date}
                        </span>
                        <span className="rounded-md bg-gray-900 px-3 py-1 text-[11px] tracking-wide text-white">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium leading-relaxed text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-2xl bg-gray-100 sm:w-32">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="hidden gap-12 md:grid md:grid-cols-2">
              {filteredNews.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/info/${item.slug}`}
                  className={`${animationClass} flex h-full min-h-[520px] flex-col rounded-[32px] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60 md:min-h-[560px]`}
                  style={getStyle(250 + index * 80)}
                  aria-label={`${item.title} の詳細を見る`}
                >
                  <article className="flex h-full flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-gray-100">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-6 flex flex-1 flex-col space-y-3 px-1">
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="font-semibold tracking-wide">
                          {item.date}
                        </span>
                        <span className="rounded-full bg-gray-900 px-3 py-1 text-xs uppercase tracking-wide text-white">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-medium leading-snug text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-auto text-sm leading-relaxed text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div
              className={`${animationClass} mt-12 flex items-center gap-4 text-sm tracking-[0.4em] text-gray-400 transition-all duration-700 ease-out`}
              style={getStyle(400)}
            >
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`px-3 py-1 font-light ${
                    page === 1 ? "text-[#d10000]" : "hover:text-gray-600"
                  }`}
                  aria-current={page === 1 ? "page" : undefined}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                className="px-3 py-1 text-lg hover:text-gray-600"
                aria-label="Next page"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
