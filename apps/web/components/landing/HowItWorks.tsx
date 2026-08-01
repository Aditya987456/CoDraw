import { COLORS } from "@repo/common/constants";
import { StepCard } from "./StepCard";

const steps = [
  {
    title: "Create an account",
    description:
      "Sign up with an email and password. Takes about ten seconds.",
  },
  {
    title: "Start or join a room",
    description:
      "Spin up a fresh board, or drop into one with a room code.",
  },
  {
    title: "Draw together",
    description:
      "Sketch, write, and shape ideas — everyone in the room sees it live.",
  },
  {
    title: "Pick up where you left off",
    description:
      "Reopen the room any time. Every stroke is still exactly there.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-[1180px] px-6 pb-24 pt-2 lg:px-12"
    >
      <h2 className="mb-9 font-space text-[28px] font-semibold">
        How a room comes together
      </h2>

      <div className="relative grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        {/* Connecting Line (Desktop Only) */}
        <div
          className="absolute left-[12%] right-[12%] top-[13px] hidden h-px xl:block"
          style={{
            backgroundColor: COLORS.border,
          }}
        />

        {steps.map((step, index) => (
          <StepCard
            key={step.title}
            step={index + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}