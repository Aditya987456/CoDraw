import {
  Users,
  Sparkles,
  Clock3,
  Pencil,
} from "lucide-react";

import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: Users,
    title: "Draw together, not over each other",
    body: "See everyone's cursor and selection live, so nobody erases what a teammate's still mid-sketch on.",
  },
  {
    icon: Sparkles,
    title: "Real-time, not refresh-time",
    body: "Every stroke streams to the whole room the instant it's drawn — no reload, no lag between you and them.",
  },
  {
    icon: Clock3,
    title: "Rooms that remember",
    body: "Close the tab, come back next week — reopen a room and the board loads exactly as you left it.",
  },
  {
    icon: Pencil,
    title: "Just enough tools",
    body: "Pen, shapes, text, eraser. Everything you need to think out loud, nothing you need to learn first.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-[1180px] px-6 pb-24 pt-2 lg:px-12"
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </section>
  );
}