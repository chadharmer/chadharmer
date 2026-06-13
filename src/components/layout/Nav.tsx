"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-line bg-base/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
          {/* Wordmark */}
          <Link
            href="/#top"
            className="group flex items-center gap-2.5"
            aria-label="Chad Harmer — home"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md border border-line-strong bg-elevated font-mono text-[13px] font-medium text-fg transition-colors group-hover:border-accent/50">
              C
            </span>
            <span className="text-sm font-medium tracking-tight text-fg">
              {site.name}
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="ml-2 rounded-full border border-line-strong bg-elevated px-4 py-2 text-sm font-medium text-fg transition-all hover:border-accent/50 hover:bg-elevated/80"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line-strong bg-elevated text-fg md:hidden"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={cn(
                  "h-px w-4 bg-current transition-transform",
                  open && "translate-y-[3px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-4 bg-current transition-transform",
                  open && "-translate-y-[3px] -rotate-45"
                )}
              />
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        {open ? (
          <div className="border-t border-line bg-base/95 backdrop-blur-xl md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-4 sm:px-8">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-sm text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full border border-line-strong bg-elevated px-4 py-2.5 text-center text-sm font-medium text-fg"
              >
                Get in touch
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
