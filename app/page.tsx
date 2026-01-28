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
import { WorkTimeSection } from "@/components/sections/WorkTimeSection";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <HomeSection />
        <Marquee />
        <WorkTimeSection />
        <h1 className="text-center text-8xl/12 font-bold mb-8">MENU</h1>
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
