import { FeatureSection } from "@/components/sections/feature";
import { HeaderSection } from "@/components/sections/header";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeaderSection />
      <div className="relative z-10 w-full bg-white text-foreground">
        <FeatureSection />
      </div>
    </main>
  );
}
