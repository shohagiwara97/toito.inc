import { AnimatedSection } from './animated-section';

const aboutDetails = [
  {
    label: "商号",
    value: ["株式会社toito"]
  },
  {
    label: "住所",
    value: ["東京都渋谷区神宮前6-29-4　原宿komiyaビル"]
  },
  {
    label: "代表者",
    value: ["稲生晋之"]
  },
  {
    label: "事業内容",
    value: [
      "IPコンテンツの創出、企画、制作",
      "IPビジネスの新規事業プロデュース",
      "イベントの制作、運営、コンサルティング",
      "その他、新規事業企画、コンサルティング"
    ]
  }
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center px-4 py-20 sm:px-6 md:py-32"
    >
      <div className="container relative z-10 mx-auto max-w-6xl">
        <AnimatedSection animation="fadeUp">
          <div className="space-y-4">
            <h2 className="text-[clamp(48px,10vw,104px)] leading-none tracking-tight text-white">
              ABOUT US
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={300}>
          <div className="mt-12 rounded-[32px] bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-10 lg:hidden">
            <dl className="divide-y divide-white/10 text-white/90">
              {aboutDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-col gap-3 py-6 first:pt-0 last:pb-0 md:grid md:grid-cols-[140px_1fr] md:gap-10"
                >
                  <dt className="text-xs uppercase tracking-[0.4em] text-white/60 sm:text-sm">
                    {detail.label}
                  </dt>
                  <dd className="space-y-1 text-sm leading-relaxed sm:text-base">
                    {detail.value.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hidden lg:block">
            <div className="max-w-3xl">
              <table className="w-full text-white">
                <tbody>
                  {aboutDetails.map((detail, index) => {
                    const isLast = index === aboutDetails.length - 1;
                    return (
                      <tr
                        key={detail.label}
                        className={isLast ? "" : "border-b border-white/30"}
                      >
                        <td className="whitespace-nowrap py-6 pr-8 align-top text-gray-300">
                          {detail.label}
                        </td>
                        <td className="py-6">
                          {detail.value.map((line, lineIndex) => (
                            <span key={line}>
                              {line}
                              {lineIndex < detail.value.length - 1 && <br />}
                            </span>
                          ))}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
