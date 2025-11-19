export function HomeSection() {
  return (
    <section id="home" className="bg-black px-4 py-20 text-white sm:px-6 lg:px-12 lg:py-28">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60 sm:text-sm">
          NOMORE INC.
        </p>
        <h1 className="text-[clamp(32px,6vw,60px)] font-light leading-tight">
          <span className="block">テクノロジーで人々の記憶に残る</span>
          <span className="block">新しいストーリー体験を発明する</span>
        </h1>
        <p className="text-sm leading-relaxed text-white/80 sm:text-base">
          Inventing innovative and memorable storytelling experiences through technology.
        </p>
      </div>

      <div
        data-what-we-do-container="true"
        data-what-we-do-block="true"
        className="mx-auto mt-16 max-w-5xl rounded-3xl bg-white/5 px-6 py-10 text-center backdrop-blur-sm sm:px-10 lg:mt-20"
      >
        <h2 className="mb-6 text-[clamp(36px,10vw,72px)] leading-tight tracking-tight text-white">
          WHAT WE DO
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-white/90 sm:text-base sm:leading-loose">
          <p>toito.incは東京を拠点とする体験型エンターテイメント カンパニー。</p>
          <p>デジタルテクノロジーを駆使して没入・体験型コンテンツを開発し、</p>
          <p>それらを体験できる空間やイベントを世界中で展開していきます。</p>
        </div>
      </div>
    </section>
  );
}
