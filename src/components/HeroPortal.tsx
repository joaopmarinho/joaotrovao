import { motion } from "framer-motion";
import joaoImg from "@/assets/joao-trovao.png";

interface HeroPortalProps {
  title: string;
  subtitle: string;
}

export default function HeroPortal({ title, subtitle }: HeroPortalProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden gradient-bg" aria-label="Introdução">
      <div className="lightning-overlay absolute inset-0 bg-primary/5" aria-hidden="true" />
      <div className="cloud-layer absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" aria-hidden="true" />

      <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 pt-20 text-center">
        <motion.h1
          className="glow-text font-display text-5xl font-black tracking-widest text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="font-display text-sm tracking-[0.3em] text-muted-foreground sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>

        {/* Descrição */}
        <motion.p
          className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Techno, electro e trance encontram pop, brasilidades e latinidades. Open format com foco em energizar a pista e enquadrar a melhor experiência para cada festa.
        </motion.p>

        {/* Photo */}
        <motion.div
          className="relative mx-auto mt-4 w-64 sm:w-80 md:w-96"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="electric-pulse overflow-hidden rounded-2xl border-2 border-primary/30">
            <img
              src={joaoImg}
              alt="João Trovão — DJ com fones de ouvido em frente a uma mesa de mixagem, cercado por relâmpagos roxos"
              className="h-auto w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-3xl" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
