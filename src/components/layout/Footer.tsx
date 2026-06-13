import { Container } from "@/components/ui/Container";
import { nav, site } from "@/lib/content";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-line py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-md border border-line-strong bg-elevated font-mono text-[13px] font-medium text-fg">
              C
            </span>
            <span className="text-sm font-medium tracking-tight text-fg">
              {site.name}
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              Email
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {year} {site.name}. {site.role}.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
            Built with intent.
          </p>
        </div>
      </Container>
    </footer>
  );
}
