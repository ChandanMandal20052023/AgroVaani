import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BadgeCheck, Factory, Sprout, Truck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const blocks = [
  {
    id: "001",
    title: "Farm Details",
    icon: Sprout,
    lines: ["Green Valley Farm", "Organic Wheat", "12 Aug 2026"],
    hash: "0x5a835c4f...9d21",
  },
  {
    id: "002",
    title: "Processing",
    icon: Factory,
    lines: ["EcoMill Corp", "Quality Grade A", "14 Aug 2026"],
    hash: "0x7c1ab903...4f88",
  },
  {
    id: "003",
    title: "Logistics",
    icon: Truck,
    lines: ["ColdChain Trans", "Temp: 4°C maintained", "16 Aug 2026"],
    hash: "0x9de40a12...b7c3",
  },
];

export function Timeline() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("002");

  useGSAP(
    () => {
      gsap.from(".hex-block", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.18,
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-soil px-4 py-24 text-cream">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/50">
          Blockchain timeline
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight">
          Built on Transparent Technology
        </h2>
        <p className="mt-4 max-w-xl text-cream/65">
          Every verified event becomes part of a permanent digital record, checkable from origin to
          destination.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blocks.map((b) => {
            const isActive = b.id === active;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setActive(b.id)}
                aria-pressed={isActive}
                className={`hex-block rounded-[26px] border p-6 text-left transition duration-300 ${
                  isActive
                    ? "border-amethyst/60 bg-white/10 shadow-[0_25px_60px_-25px_rgba(139,92,246,0.9)]"
                    : "border-white/12 bg-white/5 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`hex-clip grid size-12 place-items-center ${
                      isActive ? "bg-active text-white" : "bg-cream/10 text-cream/80"
                    }`}
                  >
                    <b.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-cream/45">Block #{b.id}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{b.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-cream/60">
                  {b.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BFE8D4]">
                    <BadgeCheck className="size-4" /> Verified
                  </span>
                  <span className="font-mono text-[11px] text-cream/40">{b.hash}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
