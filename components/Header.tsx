"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/content";

export default function Header() {
  const { t, lang, setLang, langs } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#now", label: t.nav.now },
    { href: "#projects", label: t.nav.projects },
    { href: "#wins", label: t.nav.wins },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5">
        <a href="#top" className="font-mono text-base font-bold tracking-tight">
          tr.
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <LangSwitch lang={lang} setLang={setLang} langs={langs} />
        </nav>

        {/* mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <LangSwitch lang={lang} setLang={setLang} langs={langs} />
          <button
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-px w-5 bg-foreground transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`overflow-hidden border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-64 border-b" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-content flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function LangSwitch({
  lang,
  setLang,
  langs,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  langs: Lang[];
}) {
  return (
    <div className="flex items-center gap-1 font-mono text-sm">
      {langs.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          <button
            onClick={() => setLang(l)}
            className={`transition-colors ${
              lang === l
                ? "text-accent"
                : "text-muted hover:text-foreground"
            }`}
          >
            {l}
          </button>
          {i < langs.length - 1 && <span className="text-muted">/</span>}
        </span>
      ))}
    </div>
  );
}
