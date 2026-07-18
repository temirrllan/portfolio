"use client";

import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border py-8">
      <div className="flex items-center justify-between font-mono text-xs text-muted">
        <span>{t.footer.copyright}</span>
        <span>{t.footer.madeWith}</span>
      </div>
    </footer>
  );
}
