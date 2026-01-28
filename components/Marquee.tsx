import { Hamburger } from "lucide-react";

const Item = () => (
  <span className="flex items-center gap-8 text-white font-bold text-2xl">
    <Hamburger />
    <span>BURGER TIME</span>
    <Hamburger />
    <span>JUICY BURGERS</span>
    <Hamburger />
    <span>SMASH BURGERS</span>
    <Hamburger />
    <span>365 BURGER BAR</span>
    <Hamburger />
    <span>BURGER TIME</span>
    <Hamburger />
    <span>JUICY BURGERS</span>
    <Hamburger />
    <span>SMASH BURGERS</span>
    <Hamburger />
    <span>365 BURGER BAR</span>
  </span>
);

export const Marquee = () => {
  const content = (
    <div className="flex shrink-0 gap-8">
      {Array.from({ length: 2 }).map((_, i) => (
        <Item key={`item-${i}`} />
      ))}
    </div>
  );

  return (
    <div className="w-full overflow-hidden bg-[#121212] py-3 border-y-4 border-white flex">
      <div className="flex animate-marquee gap-8">
        {content}
        {content}
      </div>
    </div>
  );
};
