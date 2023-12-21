import Encryption from "@/components/main/Encryption";
import General from "@/components/main/General";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Schedule from "@/components/main/Schedule";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Projects />
        <Schedule />
        <Encryption />

        <General />
      </div>
    </main>
  );
}
