import { defaultContent } from "@/content/siteContent";
import HeroPortal from "@/components/HeroPortal";
import Section from "@/components/Section";
import CardGrid from "@/components/CardGrid";
import SetCard from "@/components/SetCard";
import VenueCard from "@/components/VenueCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Instagram, Headphones, FileText, Mail } from "lucide-react";

const content = defaultContent;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroPortal title={content.home.heroTitle} subtitle={content.home.heroSubtitle} />

        <Section title="Sets em Destaque" id="sets">
          <CardGrid>
            {content.home.featuredSets.map((set) => (
              <SetCard key={set.id} set={set} />
            ))}
          </CardGrid>
        </Section>

        <Section title="Locais & Eventos" id="venues" className="gradient-bg">
          <CardGrid>
            {content.home.venues.map((v) => (
              <VenueCard key={v.id} venue={v} />
            ))}
          </CardGrid>
        </Section>

        <Section title="Contato" id="contato">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: content.profile.instagramUrl, label: "Instagram", icon: Instagram },
              { href: content.profile.soundcloudUrl, label: "Ouvir Sets", icon: Headphones },
              { href: content.profile.presskitUrl, label: "Presskit", icon: FileText },
              { href: content.profile.emailUrl, label: "Email", icon: Mail },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-border flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={label}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </Section>
      </main>

      <Footer profile={content.profile} />
    </div>
  );
};

export default Index;
