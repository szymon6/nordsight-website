import { FeatureSection } from "@/components/sections/feature";
import { HeaderSection } from "@/components/sections/header";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeaderSection />
      <FeatureSection />
    </main>
  );
}
