

import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { HowItWorks } from "../components/landing/HowItWorks";
import { CTA } from "../components/landing/CTA";
import { Footer } from "../components/landing/Footer";
 import { Button } from "@repo/ui";

export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}






//----------------just for debugging the button component ui...------------------

// <main className="flex justify-center items-center h-56 border-2">
      


//       <Button size="hero" variant="accent" icon={ArrowRight}>
//             Start a board
//       </Button>


//     </main>