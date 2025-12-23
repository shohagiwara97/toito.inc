import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { infoItems } from "@/data/info-items";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return infoItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = infoItems.find((info) => info.slug === params.slug);
  if (!item) {
    return {
      title: "INFO | toito.inc"
    };
  }

  return {
    title: `${item.title} | INFO | toito.inc`,
    description: item.description,
    openGraph: {
      title: `${item.title} | INFO | toito.inc`,
      description: item.description,
      images: [
        {
          url: item.image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} | INFO | toito.inc`,
      description: item.description,
      images: [item.image]
    }
  };
}

export default function InfoDetailPage({ params }: Props) {
  const item = infoItems.find((info) => info.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b0d] to-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
        <header className="mb-12 space-y-4 lg:mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Info</p>
          <h1 className="text-[clamp(42px,6vw,72px)] font-semibold leading-tight tracking-tight">
            {item.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wide text-white">
              {item.category}
            </span>
            <span className="text-white/60">{item.date}</span>
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-white/80">{item.description}</p>
          <div className="flex flex-wrap gap-3 text-sm text-white/80">
            <Link href="/#info" className="underline underline-offset-4 hover:text-white">
              INFO一覧へ戻る
            </Link>
            <span className="text-white/50">/</span>
            <Link href="/#contact" className="underline underline-offset-4 hover:text-white">
              お問い合わせ
            </Link>
          </div>
        </header>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="relative aspect-[16/9] w-full bg-black/40">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1200px, 100vw"
              priority
            />
          </div>

          <div className="space-y-10 p-8 sm:p-10 lg:p-12">
            <p className="text-lg leading-relaxed text-white/80">{item.detail.lead}</p>

            <div className="grid gap-8">
              {item.detail.sections.map((section) => (
                <div
                  key={section.title}
                  className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
                >
                  <h2 className="text-xl font-semibold text-[#d10000]">{section.title}</h2>
                  {section.description ? (
                    <p className="leading-relaxed text-white/80">{section.description}</p>
                  ) : null}
                  {section.bullets ? (
                    <ul className="list-disc space-y-2 pl-5 text-white/80">
                      {section.bullets.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>

            {item.detail.highlights ? (
              <div className="rounded-2xl bg-[#d10000]/10 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#ffcccc]">Highlights</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/90">
                  {item.detail.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d10000]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
