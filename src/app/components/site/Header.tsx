import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, waLink } from "@/config/siteConfig";
import { Logo } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20">
        <a href="#inicio" className="flex items-center gap-2" aria-label="WM Fit Academia - início">
          <Logo className="h-10 w-10 md:h-12 md:w-12" />
          <span className="font-display text-xl">WM Fit</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-gold ${active === l.id ? "text-gold" : "text-foreground/80"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold hidden !px-4 !py-2.5 sm:inline-flex">
            Aula experimental
          </a>
          <button className="p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border px-4 pb-6 lg:hidden" aria-label="Menu mobile">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className={`block border-b border-border py-4 font-display text-2xl ${active === l.id ? "text-gold" : ""}`}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}