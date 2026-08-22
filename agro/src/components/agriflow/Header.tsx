import { useState } from "react";
import { Boxes, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Track Product", href: "#track" },
  { label: "Blockchain Journey", href: "#journey" },
  { label: "Supply Chain", href: "#chain" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-5 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="hex-clip grid size-9 place-items-center bg-forest text-gold">
            <Boxes className="size-4" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-forest">
            AgroVaani
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-forest/75 transition-colors hover:text-forest"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-forest/25 text-forest"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="mx-auto mt-3 max-w-7xl rounded-3xl bg-forest p-3 lg:hidden"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-bone/85 hover:bg-bone/10"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
