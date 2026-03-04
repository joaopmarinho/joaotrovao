import { SiteContent } from "@/content/siteContent";

export default function Footer({ profile }: { profile: SiteContent["profile"] }) {
  return (
    <footer className="border-t border-border/50 py-10" role="contentinfo">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center">
        <p className="font-display text-sm font-bold tracking-widest text-primary">{profile.name}</p>
        <p className="text-xs text-muted-foreground">{profile.city}</p>
        <div className="flex gap-4">
          <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">Instagram</a>
          <a href={profile.soundcloudUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary" aria-label="SoundCloud">SoundCloud</a>
          <a href={profile.presskitUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary" aria-label="Presskit">Presskit</a>
        </div>
        <p className="text-xs text-muted-foreground/60">© {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
