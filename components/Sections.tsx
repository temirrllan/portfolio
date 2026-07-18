"use client";

import { useLang } from "@/lib/i18n";
import { Section, Tag, StatusDot, Row } from "./ui";
import { ArrowRightIcon } from "./Icons";

export default function Sections() {
  const { t } = useLang();

  return (
    <>
      {/* ABOUT */}
      <Section id="about" heading={t.about.heading}>
        <div className="space-y-4 text-muted">
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* CURRENTLY IN PROGRESS */}
      <Section id="now" heading={t.inProgress.heading}>
        <div className="grid gap-5 sm:grid-cols-2">
          {t.inProgress.items.map((item, i) => (
            <article
              key={i}
              className="flex flex-col rounded-xl border border-border p-6 transition-colors hover:border-foreground/30"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2 font-mono text-xs text-muted">
                  <StatusDot pulse />
                  {item.status}
                </span>
                {item.badge && (
                  <span className="rounded-full border border-accent/40 px-2.5 py-1 font-mono text-xs text-accent">
                    {item.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-1 font-mono text-sm text-muted">{item.subtitle}</p>
              <p className="mt-4 leading-relaxed text-muted">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag, ti) => (
                  <Tag key={ti}>{tag}</Tag>
                ))}
              </div>
              {item.cta && (
                <a
                  href="#contact"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-background"
                >
                  {item.cta}
                  <ArrowRightIcon width={14} height={14} />
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" heading={t.projects.heading}>
        <div>
          {t.projects.items.map((p, i) => (
            <div
              key={i}
              className="group border-t border-border py-6 first:border-t-0 first:pt-0"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-medium transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <span className="shrink-0 font-mono text-sm text-muted">
                  {p.year}
                </span>
              </div>
              <p className="mt-2 leading-relaxed text-muted">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((tag, ti) => (
                  <Tag key={ti}>{tag}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TELEGRAM BOTS */}
      <Section heading={t.bots.heading}>
        <div>
          {t.bots.items.map((b, i) => (
            <div
              key={i}
              className="border-t border-border py-4 first:border-t-0 first:pt-0"
            >
              <div className="font-mono text-foreground">{b.handle}</div>
              <p className="mt-1 text-muted">{b.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WINS */}
      <Section id="wins" heading={t.wins.heading}>
        <div>
          {t.wins.items.map((w, i) => (
            <div
              key={i}
              className="flex items-start justify-between gap-4 border-t border-border py-5 first:border-t-0 first:pt-0"
            >
              <div>
                <div className="text-foreground">{w.title}</div>
                <div className="mt-1 font-mono text-sm text-accent">{w.place}</div>
              </div>
              <div className="shrink-0 font-mono text-sm text-muted">{w.year}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section heading={t.experience.heading}>
        <div>
          {t.experience.items.map((e, i) => (
            <Row key={i} title={e.title} meta={e.meta} />
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section heading={t.education.heading}>
        <div>
          {t.education.items.map((e, i) => (
            <Row key={i} title={e.title} subtitle={e.subtitle} meta={e.meta} />
          ))}
        </div>
      </Section>

      {/* LANGUAGES */}
      <Section heading={t.languages.heading}>
        <div>
          {t.languages.items.map((l, i) => (
            <Row key={i} title={l.name} meta={l.level} />
          ))}
        </div>
      </Section>

      {/* STACK */}
      <Section heading={t.stack.heading}>
        <div className="flex flex-wrap gap-2">
          {t.stack.items.map((s, si) => (
            <Tag key={si}>{s}</Tag>
          ))}
        </div>
      </Section>

      {/* MEDIA */}
      <Section heading={t.media.heading}>
        <div className="grid gap-5 sm:grid-cols-2">
          {t.media.items.map((m, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-xl border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden bg-border">
                {m.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.image}
                    alt={m.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <MediaPlaceholder index={i} />
                )}
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-mono text-sm text-foreground">{m.title}</h3>
                  <span className="shrink-0 font-mono text-sm text-muted">
                    {m.year}
                  </span>
                </div>
                <p className="mt-2 leading-relaxed text-muted">{m.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" heading={t.contact.heading}>
        <p className="text-muted">{t.contact.intro}</p>
        <div className="mt-6">
          {t.contact.items.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 border-t border-border py-4 transition-colors hover:text-foreground"
            >
              <span className="font-mono text-sm text-muted">{c.label}</span>
              <span className="flex items-center gap-2 font-mono text-sm text-foreground">
                {c.value}
                <ArrowRightIcon
                  width={14}
                  height={14}
                  className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
                />
              </span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}

const GRADIENTS = [
  "from-[#231a2a] to-[#150f1a]",
  "from-[#1c1d2e] to-[#10111c]",
  "from-[#2a1a28] to-[#190f18]",
  "from-[#1a1e2a] to-[#0f1219]",
];

function MediaPlaceholder({ index }: { index: number }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${
        GRADIENTS[index % GRADIENTS.length]
      }`}
    >
      <span className="font-mono text-xs text-muted">image</span>
    </div>
  );
}
