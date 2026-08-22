import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { QrCode } from "lucide-react";

const stats = ["BATCH-2026-0001", "8 ROLE-VERIFIED ACTORS", "HYPERLEDGER FABRIC", "FARM → SHELF"];

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-stagger", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      });
      gsap.to(".seal-spin", { rotate: 360, duration: 26, repeat: -1, ease: "none" });
    },
    { scope: root },
  );

  return (
    <section id="home" ref={root} className="bg-sage px-4 pb-10 pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] bg-forest px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
          {/* circular seal */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-8 top-10 hidden size-32 md:block lg:right-16"
          >
            <svg viewBox="0 0 100 100" className="seal-spin absolute inset-0 size-full">
              <defs>
                <path
                  id="sealArc"
                  d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
              </defs>
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="rgb(244 239 226 / 0.35)"
                strokeWidth="0.6"
              />
              <text
                fill="rgb(244 239 226 / 0.8)"
                fontSize="7"
                letterSpacing="2.4"
                fontFamily="var(--font-mono)"
              >
                <textPath href="#sealArc" startOffset="0%">
                  FARM TO TABLE • ON-CHAIN VERIFIED •
                </textPath>
              </text>
            </svg>
            <span className="hex-clip absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center bg-gold text-forest">
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
            <span className="hero-stagger flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-gold">
              <span className="size-1.5 rounded-full bg-gold" />
              Blockchain-verified supply chain
            </span>

            <h1 className="hero-stagger mt-6 font-sans font-black uppercase text-[clamp(2.8rem,7.5vw,7.6rem)] leading-[0.88] tracking-[-0.05em] text-bone md:whitespace-nowrap">
              Every batch, <span className="text-gold">verified</span>
            </h1>

            <p className="hero-stagger mt-6 max-w-xl text-center text-base sm:text-lg leading-relaxed text-bone/75">
              Track every agricultural batch from farmer to consumer with a transparent,
              blockchain-verified supply chain. Every handoff and quality check stays traceable.
            </p>

            <div className="hero-stagger mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#track"
                className="rounded-full bg-gold px-9 py-4 text-sm font-bold text-forest transition hover:brightness-105"
              >
                Get Started
              </a>
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-full border border-bone/35 px-7 py-4 text-sm font-bold text-bone transition hover:bg-bone/10"
              >
                <QrCode className="size-5" aria-hidden="true" />
                Scan QR
              </button>
            </div>
          </div>

          {/* Agricultural hero images visual strip */}
          <div className="hero-images hero-stagger mt-12 sm:mt-16 flex flex-col items-center justify-center gap-4 sm:gap-6 md:flex-row md:items-center">
            <img
              src="/Fp1.jpg"
              alt="Agricultural harvesting in field"
              className="h-52 sm:h-64 md:h-64 lg:h-72 w-full md:w-1/3 object-cover rounded-2xl"
            />
            <img
              src="/Fp2.jpg"
              alt="Farmer inspecting rich agricultural soil"
              className="h-64 sm:h-76 md:h-80 lg:h-90 w-full md:w-1/3 object-cover rounded-2xl"
            />
            <img
              src="/Fm2.jpg"
              alt="Modern farming and crop monitoring"
              className="h-52 sm:h-64 md:h-64 lg:h-72 w-full md:w-1/3 object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="hero-stagger mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-2 font-mono text-xs tracking-[0.12em] text-forest/70">
          {stats.map((s, i) => (
            <span key={s} className="flex items-center gap-8">
              {i > 0 && <span className="hidden h-4 w-px bg-forest/25 sm:block" />}
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
