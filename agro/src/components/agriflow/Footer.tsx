import { Boxes, Github, Linkedin, Twitter } from "lucide-react";

const links = ["Home", "Track Product", "Supply Chain", "Blockchain", "About", "Contact"];

export function Footer() {
  return (
    <footer className="border-t border-soil/10 bg-forest px-4 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-xl bg-olive text-white">
                <Boxes className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-semibold text-soil">AgroVaani</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-soil/60">
              Transparent agriculture powered by trusted technology.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l}
                href="#home"
                className="text-sm text-soil/65 transition-colors hover:text-terracotta"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-soil/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-soil/50">
            © 2026 AgroVaani. Building trust from farm to consumer.
          </p>
          <div className="flex gap-2">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#home"
                aria-label="Social link"
                className="grid size-9 place-items-center rounded-full border border-soil/15 text-soil/60 transition hover:border-terracotta hover:text-terracotta"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
