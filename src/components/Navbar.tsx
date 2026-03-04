import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/open-format", label: "Open Format" },
  { to: "/artist", label: "Artístico" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl" role="navigation" aria-label="Menu principal">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="font-display text-lg font-bold tracking-wider text-primary" aria-label="João Trovão — Página inicial">
          JT
        </Link>

        {/* Desktop */}
        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === l.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border/50 bg-background md:hidden"
          >
            <ul className="flex flex-col gap-2 px-4 py-4">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                      location.pathname === l.to ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
