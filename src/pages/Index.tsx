import { defaultContent } from "@/content/siteContent";
import HeroPortal from "@/components/HeroPortal";
import Section from "@/components/Section";
import CardGrid, { CardItem } from "@/components/CardGrid";
import SetCard from "@/components/SetCard";
import VenueCard from "@/components/VenueCard";
import TagList from "@/components/TagList";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { Instagram, Headphones, FileText, Mail } from "lucide-react";

const content = defaultContent;
const c = content.openFormat;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />

      <main>
        <HeroPortal title={content.home.heroTitle} subtitle={content.home.heroSubtitle} />

        {/* Estilos Musicais */}
        <Section title="Estilos Musicais" id="estilos">
          <CardGrid columns={3}>
            {c.styles.map((s) => (
              <CardItem key={s.title}>
                <h3 className="mb-2 font-display text-sm font-bold tracking-wide text-primary">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </CardItem>
            ))}
          </CardGrid>
        </Section>

        {/* Experiência em Festas */}
        <Section title="Experiência em Festas" id="experiencia" className="gradient-bg">
          <CardGrid columns={2}>
            {c.experiences.map((e) => (
              <CardItem key={e.id}>
                <h3 className="mb-1 font-display text-sm font-bold tracking-wide text-foreground">{e.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{e.description}</p>
                <TagList tags={e.tags} />
              </CardItem>
            ))}
          </CardGrid>
        </Section>

        {/* Sets em Destaque */}
        <Section title="Sets em Destaque" id="sets">
          <CardGrid>
            {content.home.featuredSets.map((set) => (
              <SetCard key={set.id} set={set} />
            ))}
          </CardGrid>
        </Section>

        {/* Locais & Eventos */}
        <Section title="Locais & Eventos" id="venues" className="gradient-bg">
          <CardGrid>
            {content.home.venues.map((v) => (
              <VenueCard key={v.id} venue={v} />
            ))}
          </CardGrid>
        </Section>

        {/* Eventos Privados */}
        <Section title="Eventos Privados" id="privados">
          <CardItem>
            <p className="text-foreground">{c.privateEvents}</p>
          </CardItem>
        </Section>

        {/* Produção & Técnica */}
        <Section title="Produção & Técnica" id="producao" className="gradient-bg">
          <CardItem>
            <p className="text-foreground">{c.production}</p>
          </CardItem>
        </Section>

        {/* Contato / Booking */}
        <Section title="Booking" id="contato">
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
