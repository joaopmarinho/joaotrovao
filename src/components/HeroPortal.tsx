import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { motion } from "framer-motion";
import joaoImg from "@/assets/joao-trovao.png";
import { LightningStorm } from "./canvas/LightningStorm";
import { TiltImage } from "./canvas/TiltImage";

interface HeroPortalProps {
  title: string;
  subtitle: string;
}

export default function HeroPortal({ title, subtitle }: HeroPortalProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden gradient-bg" aria-label="Introdução">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <LightningStorm count={1500} />
          </Suspense>
        </Canvas>
      </div>

      <div className="lightning-overlay absolute inset-0 bg-primary/5 pointer-events-none" aria-hidden="true" />
      <div className="cloud-layer absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 pt-20 text-center">
        <motion.h1
          className="glow-text font-display text-5xl font-black tracking-widest text-foreground sm:text-7xl md:text-8xl lg:text-9xl pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="font-display text-sm tracking-[0.3em] text-muted-foreground sm:text-base pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>

        {/* Avatar / Pixel Art Image */}
        <motion.div
          className="relative mx-auto mt-8 w-full max-w-4xl"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        >
          {/* Very faint background glow to faintly separate from pure black */}
          <div className="absolute inset-x-10 inset-y-1/4 -z-10 rounded-full bg-primary/5 blur-[100px] pointer-events-none" aria-hidden="true" />

          <img
            src={joaoImg}
            alt="João Trovão — Pixel Art Theme"
            className="relative z-10 w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
            style={{ imageRendering: 'pixelated' }}
            loading="eager"
          />
        </motion.div>

        {/* Descrição */}
        <motion.div
          className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg pointer-events-none space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <p>
            Bem-vindxs ao meu universo.<br />
            Aqui compartilho experiências que atravessam minha trajetória como DJ, entre momentos passados e vivências que seguem pulsando no presente.
          </p>
          <p>
            Tudo o que apresento é fruto de entrega, técnica, pesquisa e estudo — mas também de algo ainda mais íntimo: um pedaço da minha alma em cada sonoridade, muito do que sou em cada escolha.
          </p>
          <p>
            Entre constância, sensibilidade e construção musical, busco transformar som em presença, experiência e memória. O meu melhor está justamente nisso: oferecer com verdade tudo aquilo que posso criar e sentir.
          </p>
          <p>
            Para mim, a música é harmonia e impacto; é percussão da alma, beleza em meio ao caos. É um tecido delicado, intenso e vivo, que nas mãos certas pode tocar, romper, reconstruir e transformar.
          </p>
          <p>
            Me permita ser ouvido.<br />
            Me permita ser sentido.<br />
            Me permita ser um momento seu.
          </p>
        </motion.div>


      </div>
    </section>
  );
}
