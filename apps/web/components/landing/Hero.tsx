import { HeroBoard } from "./HeroBoard";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-[1180px] items-center gap-14 px-6 py-12 pb-24 lg:grid-cols-2 lg:px-12">
      <HeroContent />
      <HeroBoard />
    </section>
  );
}