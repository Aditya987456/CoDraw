import Image, { type ImageProps } from "next/image";
import { Logo } from "@repo/ui";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};


export default function Home() {
  return (
    
    <main className="min-h-screen flex items-center justify-center bg-yellow-600">
      <h1 className="text-5xl font-bold text-white">
        CoDraw 
      </h1>
      <Logo/>
    </main>
  );
}
