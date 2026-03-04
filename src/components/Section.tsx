import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Section({ title, children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`} aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="container mx-auto px-4">
        <motion.h2
          id={id ? `${id}-heading` : undefined}
          className="mb-10 font-display text-2xl font-bold tracking-wide text-foreground md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          style={{ transformPerspective: 1000 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
