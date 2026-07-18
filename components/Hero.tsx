"use client";

import { useLang } from "@/lib/i18n";
import { SOCIALS } from "@/lib/content";
import { SOCIAL_ICONS } from "./Icons";
import { StatusDot } from "./ui";
import Mark from "./Mark";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="pb-8 pt-8">
      {/* availability badge */}
      <div className="flex items-center gap-2 font-mono text-sm text-muted">
        <StatusDot pulse />
        <span>{t.hero.available}</span>
      </div>

      {/* greeting */}
      <p className="mt-8 font-mono text-sm text-muted">
        {t.hero.greeting}{" "}
        <span className="font-bold text-foreground">{t.hero.handle}</span>
      </p>

      {/* logo wordmark */}
      <div className="mt-4 flex items-end gap-4">
        <div className="text-foreground">
          <Mark size={104} />
        </div>
        <div className="pb-2">
          <div className="font-mono text-4xl font-medium tracking-tight sm:text-5xl">
            {t.hero.logoText}
          </div>
          <div className="mt-1 text-right font-mono text-xs text-muted">
            {t.hero.subtitle}
          </div>
        </div>
      </div>

      {/* tagline */}
      <h1 className="mt-8 text-3xl font-medium text-muted">{t.hero.tagline}</h1>

      {/* socials */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {SOCIALS.map((s) => {
          const Icon = SOCIAL_ICONS[s.type];
          return (
            <a
              key={s.type}
              href={s.href}
              target={s.type === "email" ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={s.type}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-foreground hover:text-foreground"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </section>
  );
}
