import { defaultContent } from "@/content/siteContent";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import CardGrid, { CardItem } from "@/components/CardGrid";
import SetCard from "@/components/SetCard";
import { Image } from "lucide-react";

const c = defaultContent.artist;
const profile = defaultContent.profile;

export default function Artist() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="gradient-bg flex min-h-[60vh] flex-col items-center justify-center px-4 pt-24 text-center">
          <motion.h1
            className="glow-text mb-4 font-display text-3xl font-black tracking-widest text-foreground sm:text-5xl"
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

        {/* Ritual */}
        <Section title="Ritual do Trovão" id="ritual">
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-px bg-primary/30 md:left-1/2" aria-hidden="true" />
            <div className="space-y-12">
              {c.ritual.map((stage, i) => (
                <motion.div
                  key={stage.id}
                  className={`relative flex flex-col gap-2 pl-12 md:w-1/2 ${i % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12 md:pl-0 md:text-right"}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className={`absolute top-1 h-3 w-3 rounded-full bg-primary electric-pulse ${i % 2 === 0 ? "left-[10px] md:left-[-6px]" : "left-[10px] md:right-[-6px] md:left-auto"}`} aria-hidden="true" />
                  <h3 className="font-display text-sm font-bold tracking-wider text-primary">{stage.name}</h3>
                  <p className="text-sm text-muted-foreground">{stage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Sets Eletrônicos" id="sets-eletronicos" className="gradient-bg">
          <CardGrid columns={2}>
            {c.sets.map((set) => (
              <SetCard key={set.id} set={set} />
            ))}
          </CardGrid>
        </Section>

        <Section title="Visual" id="galeria">
          <CardGrid columns={4}>
            {c.gallery.map((g) => (
              <CardItem key={g.id}>
                <div className="mb-3 flex h-40 items-center justify-center rounded-md bg-muted">
                  {g.imageUrl ? (
                    <img src={g.imageUrl} alt={g.caption} className="h-full w-full rounded-md object-cover" loading="lazy" />
                  ) : (
                    <Image className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{g.caption}</p>
              </CardItem>
            ))}
          </CardGrid>
        </Section>
      </main>
      <Footer profile={profile} />
    </div>
  );
}
