import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

export default function CardGrid({ children, columns = 3 }: CardGridProps) {
  const colClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <motion.div
      className={`grid gap-6 ${colClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function CardItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`rounded-lg border border-border bg-card p-6 card-hover ${className}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
