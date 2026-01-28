import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Marquee } from "@/components/Marquee";

import { HomeSection } from "@/components/sections/HomeSection";
import { StartersSection } from "@/components/sections/products/StartersSection";
import { DessertsSection } from "@/components/sections/products/DessertsSection";
import { SpecialBurgersSection } from "@/components/sections/products/SpecialBurgersSection";
import { SidesSection } from "@/components/sections/products/SidesSection";
import { SmashBurgersSection } from "@/components/sections/products/SmashBurgersSection";
import { BreakfastSection } from "@/components/sections/products/BreakfastSection";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <HomeSection />
      <Marquee />
      <main>
        <SmashBurgersSection />
        <BreakfastSection />
        <StartersSection />
        <SpecialBurgersSection />
        <SidesSection />
        <DessertsSection />
      </main>
      <Footer />
    </div>
  );
}
