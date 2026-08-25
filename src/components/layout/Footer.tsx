import Link from "next/link";
import { navLinks, siteConfig, socialLinks } from "@/content/site";
import Container from "@/components/ui/Container";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg">
      <Container className="flex flex-col gap-12 py-16 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-5">
          <Logo variant="vertical" className="h-48 sm:h-56" />
          <p className="text-label text-text-muted">Game Art & Visual Development</p>
        </div>

        <div className="flex flex-wrap gap-12">
          <nav className="flex flex-col gap-3">
            <span className="text-label text-text-muted">Site</span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body text-text transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-label text-text-muted">Contact</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-body text-text transition-colors hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-label text-text-muted">Elsewhere</span>
            {socialLinks.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-body text-text transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ) : (
                <span key={link.label} className="text-body text-text-muted/50">
                  {link.label}
                </span>
              )
            )}
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-4 border-t border-border py-6 text-label text-text-muted md:flex-row md:justify-between">
        <span>© {year} Red Mångata</span>
        <Link href="/privacy" className="transition-colors hover:text-text">
          Privacy
        </Link>
      </Container>
    </footer>
  );
}
