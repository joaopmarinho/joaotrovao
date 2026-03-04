import { defaultContent } from "@/content/siteContent";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import CardGrid, { CardItem } from "@/components/CardGrid";
import VenueCard from "@/components/VenueCard";
import TagList from "@/components/TagList";
import { Instagram, Mail, FileText } from "lucide-react";

const c = defaultContent.openFormat;
const profile = defaultContent.profile;

export default function OpenFormat() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="gradient-bg flex min-h-[60vh] flex-col items-center justify-center px-4 pt-24 text-center">
          <motion.h1
            className="glow-text mb-4 font-display text-4xl font-black tracking-widest text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {c.heroTitle}
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {c.heroText}
          </motion.p>
        </section>

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

        <Section title="Locais" id="locais">
          <CardGrid>
            {c.venues.map((v) => (
              <VenueCard key={v.id} venue={v} />
            ))}
          </CardGrid>
        </Section>

        <Section title="Eventos Privados" id="privados" className="gradient-bg">
          <CardItem>
            <p className="text-foreground">{c.privateEvents}</p>
          </CardItem>
        </Section>

        <Section title="Produção & Técnica" id="producao">
          <CardItem>
            <p className="text-foreground">{c.production}</p>
          </CardItem>
        </Section>

        <Section title="Booking" id="booking" className="gradient-bg">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: profile.instagramUrl, label: "Instagram", icon: Instagram },
              { href: profile.emailUrl, label: "Email", icon: Mail },
              { href: profile.presskitUrl, label: "Presskit", icon: FileText },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-border flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </Section>
      </main>
      <Footer profile={profile} />
    </div>
  );
}
