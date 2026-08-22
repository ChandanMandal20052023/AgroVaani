import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Boxes, Factory, Handshake, Sprout, Store, Truck, Wheat } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { icon: Sprout, title: "Farm Details", detail: "Green Valley Farm · Organic Wheat · Plot A12" },
  { icon: Wheat, title: "Harvest & Collection", detail: "1,200 kg collected · Moisture 11.4%" },
  { icon: Factory, title: "Processing Plant", detail: "EcoMill Corp · Grade A milling" },
  { icon: Truck, title: "Logistics Update", detail: "ColdChain Trans · 4°C maintained" },
  { icon: Boxes, title: "Distribution Center", detail: "North Hub · 48 pallets scanned" },
  { icon: Store, title: "Retail", detail: "FreshMart · Shelf batch 22B" },
  {
    icon: Handshake,
    title: "Verified Consumer Handover",
    detail: "QR scanned · Journey confirmed",
  },
];

export function SupplyChain() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".chain-card", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.09,
      });
    },
    { scope: root },
  );

  return (
    <section id="chain" ref={root} className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive">Supply chain</p>
        <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight text-soil">
          Blockchain as a Living Supply Chain
        </h2>
        <p className="mt-4 max-w-xl text-soil/65">
          Seven verified stages, each written once and readable forever. Hover a stage to reveal its
          recorded detail.
        </p>

        <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-amethyst/40 to-transparent lg:block"
          />
          {stages.map((s, i) => (
            <li
              key={s.title}
              className="chain-card group relative rounded-[26px] border border-white/70 bg-white/55 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:border-amethyst/40 hover:shadow-[0_20px_45px_-25px_rgba(139,92,246,0.75)]"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-olive/12 text-olive transition group-hover:bg-amethyst/15 group-hover:text-amethyst">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-display text-sm text-soil/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-soil">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soil/60 opacity-70 transition group-hover:opacity-100">
                {s.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
