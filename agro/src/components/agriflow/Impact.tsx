import { Droplets, Leaf, QrCode, Sprout } from "lucide-react";

const stats = [
  { value: "12,450+", label: "Products traced" },
  { value: "2,850+", label: "Verified farmers" },
  { value: "98.7%", label: "Supply chain visibility" },
  { value: "100%", label: "Tamper-resistant records" },
];

const impact = [
  { icon: Droplets, value: "12,450 L", label: "Water saved" },
  { icon: Leaf, value: "245 kg", label: "CO₂ reduced" },
  { icon: Sprout, value: "1,280+", label: "Sustainable farms" },
];

export function Impact() {
  return (
    <section id="about" className="paper-grain px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-[26px] border border-white/70 bg-white/55 p-7 backdrop-blur-md"
            >
              <p className="font-display text-4xl font-semibold text-soil">{s.value}</p>
              <p className="mt-2 text-sm text-soil/60">{s.label}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-24 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight text-soil">
          Traceability That Builds a Better Future
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {impact.map((i) => (
            <div
              key={i.label}
              className="rounded-[26px] border border-olive/20 bg-olive/8 p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(107,122,82,0.9)]"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-white/70 text-olive">
                <i.icon className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-6 font-display text-3xl font-semibold text-soil">{i.value}</p>
              <p className="mt-1 text-sm text-soil/60">{i.label}</p>
            </div>
          ))}
        </div>

        <div className="glass mt-24 grid items-center gap-10 rounded-[32px] p-8 sm:p-12 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.75rem)] font-semibold leading-tight text-soil">
              Know Your Food. Trust Its Journey.
            </h2>
            <p className="mt-4 max-w-lg text-soil/65">
              Scan a product QR code and instantly discover its origin, journey, certifications, and
              verified supply-chain history.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#track"
                className="rounded-full bg-active px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-105"
              >
                Verify a Product →
              </a>
              <a
                href="#journey"
                className="rounded-full border border-soil/20 px-7 py-3.5 text-sm font-semibold text-soil transition hover:bg-white/60"
              >
                See a Demo
              </a>
            </div>
          </div>
          <div className="verify-pulse grid size-40 place-items-center rounded-[28px] border border-white/70 bg-white/70 text-soil">
            <QrCode className="size-20" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
