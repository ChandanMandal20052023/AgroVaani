import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/agriflow/Header";
import { Hero } from "@/components/agriflow/Hero";
import { SupplyChain } from "@/components/agriflow/SupplyChain";
import { JourneyMap } from "@/components/agriflow/JourneyMap";
import { Timeline } from "@/components/agriflow/Timeline";
import { Impact } from "@/components/agriflow/Impact";
import { Footer } from "@/components/agriflow/Footer";

const title = "AgroVaani — From Farm to You. Every Step Verified.";
const description =
  "AgroVaani is an agricultural blockchain traceability platform: trace product origin, verify every supply-chain step, and trust what you buy.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-sage">
      <Header />
      <main>
        <Hero />
        <SupplyChain />
        <JourneyMap />
        <Timeline />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}
