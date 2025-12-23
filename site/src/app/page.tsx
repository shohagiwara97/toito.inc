import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Header } from "@/components/header";
import { HomeSection } from "@/components/home-section";
import { NewsSection } from "@/components/news-section";
import { ServiceSection } from "@/components/service-section";

export default function Page() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage:
          "url('/xr_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <Header />
      <main className="flex flex-col gap-0">
        <HomeSection />
        <NewsSection />
        <ServiceSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
