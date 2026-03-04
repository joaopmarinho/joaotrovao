import { Instagram, Headphones, Mail } from "lucide-react";
import { defaultContent } from "@/content/siteContent";

const profile = defaultContent.profile;

const socials = [
  { href: profile.instagramUrl, icon: Instagram, label: "Instagram" },
  { href: profile.soundcloudUrl, icon: Headphones, label: "SoundCloud" },
  { href: profile.emailUrl, icon: Mail, label: "Email" },
];

export default function TopBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-xl" role="navigation" aria-label="Links rápidos">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <a href="#" className="font-display text-sm font-bold tracking-wider text-primary" aria-label="João Trovão — Topo">
          JT
        </a>
        <div className="flex items-center gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
