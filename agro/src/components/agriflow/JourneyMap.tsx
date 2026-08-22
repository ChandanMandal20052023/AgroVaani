import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BadgeCheck, Clock, MapPin, Thermometer, User } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  location: string;
  date: string;
  handler: string;
  temp: string;
  hash: string;
};

const nodes: Node[] = [
  {
    id: "farm",
    label: "Farm",
    x: 120,
    y: 250,
    location: "Green Valley Farm, Nashik",
    date: "12 Aug 2026 · 06:20",
    handler: "Robert Johnson",
    temp: "Ambient 24°C",
    hash: "0x5a835c4f...9d21",
  },
  {
    id: "processing",
    label: "Processing",
    x: 330,
    y: 140,
    location: "EcoMill Corp, Pune",
    date: "14 Aug 2026 · 11:05",
    handler: "Meera Kulkarni",
    temp: "18°C controlled",
    hash: "0x7c1ab903...4f88",
  },
  {
    id: "warehouse",
    label: "Warehouse",
    x: 560,
    y: 230,
    location: "North Hub, Surat",
    date: "16 Aug 2026 · 09:40",
    handler: "ColdChain Trans",
    temp: "4°C maintained",
    hash: "0x9de40a12...b7c3",
  },
  {
    id: "retail",
    label: "Retail",
    x: 780,
    y: 120,
    location: "FreshMart, Mumbai",
    date: "18 Aug 2026 · 08:15",
    handler: "Store #221",
    temp: "6°C shelf",
    hash: "0x2fb77e51...0a4e",
  },
];

const routeD = "M120 250 C 220 250, 240 140, 330 140 S 470 230, 560 230 S 700 120, 780 120";

export function JourneyMap() {
  const root = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [active, setActive] = useState<Node>(nodes[1]!);

  useGSAP(
    () => {
      const path = pathRef.current;
      if (!path) return;
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      gsap.from(".map-pin", {
        scale: 0,
        opacity: 0,
        transformOrigin: "center",
        duration: 0.5,
        stagger: 0.25,
        delay: 0.3,
        ease: "back.out(2)",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    },
    { scope: root },
  );

  return (
    <section id="journey" ref={root} className="paper-grain px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
            Journey map
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight text-soil">
            One Product. One Transparent Journey.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/50 p-2 backdrop-blur-md">
            <svg
              viewBox="0 0 900 380"
              className="h-auto w-full"
              role="img"
              aria-label="Product route from farm to retail"
            >
              <g stroke="#6B7A52" strokeOpacity="0.35" fill="#6B7A52" fillOpacity="0.07">
                <path d="M60 300 C 160 240, 240 320, 340 280 S 520 320, 640 260 S 820 300, 870 250 L 870 360 L 60 360 Z" />
                <path d="M90 120 C 200 70, 300 160, 420 100 S 640 60, 760 110" fill="none" />
              </g>
              <g stroke="#C85A32" strokeOpacity="0.3" fill="none">
                <path d="M40 200 C 200 170, 380 220, 560 170 S 840 200, 880 160" />
              </g>

              <path
                ref={pathRef}
                d={routeD}
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {nodes.map((n) => {
                const isActive = n.id === active.id;
                return (
                  <g
                    key={n.id}
                    className="map-pin cursor-pointer"
                    onMouseEnter={() => setActive(n)}
                    onClick={() => setActive(n)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${n.label} details`}
                    onFocus={() => setActive(n)}
                  >
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={isActive ? 20 : 14}
                      fill={isActive ? "#F97316" : "#FFFFFF"}
                      stroke={isActive ? "#F97316" : "#8B5CF6"}
                      strokeOpacity={isActive ? 0.35 : 0.6}
                      strokeWidth={isActive ? 10 : 3}
                    />
                    <MapPinGlyph x={n.x} y={n.y} active={isActive} />
                    <text
                      x={n.x}
                      y={n.y + 42}
                      textAnchor="middle"
                      className="font-sans"
                      fontSize="15"
                      fill="#2C251E"
                      fillOpacity="0.7"
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <aside className="glass h-fit rounded-[28px] p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-soil">{active.label}</h3>
              <span className="verify-pulse inline-flex items-center gap-1.5 rounded-full bg-olive/12 px-3 py-1 text-xs font-semibold text-olive">
                <BadgeCheck className="size-4" /> Verified
              </span>
            </div>
            <dl className="mt-6 space-y-4 text-sm">
              <Row icon={MapPin} label="Location" value={active.location} />
              <Row icon={Clock} label="Date & time" value={active.date} />
              <Row icon={User} label="Handler" value={active.handler} />
              <Row icon={Thermometer} label="Storage" value={active.temp} />
            </dl>
            <div className="mt-6 rounded-2xl bg-soil/5 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-soil/45">
                Transaction hash
              </p>
              <p className="mt-1 font-mono text-sm text-amethyst">{active.hash}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function MapPinGlyph({ x, y, active }: { x: number; y: number; active: boolean }) {
  return <circle cx={x} cy={y} r={5} fill={active ? "#FFFFFF" : "#8B5CF6"} />;
}

function Row({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-olive" aria-hidden="true" />
      <div>
        <dt className="text-[11px] uppercase tracking-[0.16em] text-soil/45">{label}</dt>
        <dd className="text-soil/80">{value}</dd>
      </div>
    </div>
  );
}
