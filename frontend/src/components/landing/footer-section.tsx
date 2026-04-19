"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import { useTranslation } from "@/components/language-provider";

export function FooterSection() {
  const { strings } = useTranslation();

  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">Optimus Translate</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                {strings.footer.brandTagline}
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {strings.footer.social.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            <div>
              <h3 className="text-sm font-medium mb-6">
                {strings.footer.sectionTitles.product}
              </h3>
              <ul className="space-y-4">
                {strings.footer.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-6">
                {strings.footer.sectionTitles.developers}
              </h3>
              <ul className="space-y-4">
                {strings.footer.developers.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-6">
                {strings.footer.sectionTitles.company}
              </h3>
              <ul className="space-y-4">
                {strings.footer.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                    >
                      {link.name}
                      {"badge" in link && link.badge ? (
                        <span className="text-xs px-2 py-0.5 bg-foreground text-background rounded-full">
                          {link.badge}
                        </span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-6">
                {strings.footer.sectionTitles.legal}
              </h3>
              <ul className="space-y-4">
                {strings.footer.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{strings.footer.copyRight}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              {strings.footer.systemStatus}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
