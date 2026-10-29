import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  SunSmileyDoodle,
  PaperPlaneDoodle,
  CrownDoodle,
} from './PlayfulDoodles';

/**
 * Barra de progresso de rolagem no topo + elementos ilustrados suaves que se movem com parallax ao rolar a página
 */
export function ScrollInteractiveBackdrop() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  // Movimentos contínuos suaves ligados ao scroll
  const planeY = useTransform(scrollYProgress, [0, 1], [60, -280]);
  const planeX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 35, -15]);
  const planeRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 12, -5]);

  const sunRotate = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const sunY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  const crownY = useTransform(scrollYProgress, [0, 1], [120, -220]);
  const crownRotate = useTransform(scrollYProgress, [0, 1], [-12, 18]);

  return (
    <>
      {/* Barra de Progresso de Leitura no Topo da Janela */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-reinado-celeste via-reinado-sol to-reinado-tangerina origin-left z-50"
      />

      {/* Elementos Decorativos com Parallax Suave no Fundo (Apenas Telas Grandes) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden xl:block">
        <motion.div
          style={{ y: planeY, x: planeX, rotate: planeRotate }}
          className="absolute top-[38%] left-6 opacity-35"
        >
          <PaperPlaneDoodle className="w-11 h-11" />
        </motion.div>

        <motion.div
          style={{ y: sunY, rotate: sunRotate }}
          className="absolute top-[62%] right-7 opacity-35"
        >
          <SunSmileyDoodle className="w-12 h-12" />
        </motion.div>

        <motion.div
          style={{ y: crownY, rotate: crownRotate }}
          className="absolute top-[82%] left-10 opacity-25"
        >
          <CrownDoodle className="w-8 h-8" />
        </motion.div>
      </div>
    </>
  );
}

/**
 * Container que revela elementos com movimento elástico suave quando entram ou saem do campo de visão ao rolar
 */
export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.55,
  className = '',
  once = false,
}) {
  const offsets = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { x: -36, y: 0 },
    right: { x: 36, y: 0 },
    scale: { x: 0, y: 20, scale: 0.94 },
  };

  const initialOffset = offsets[direction] || offsets.up;

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialOffset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once, amount: 0.18, margin: '-30px 0px -30px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Wrapper com efeito Parallax Vertical controlado diretamente pela posição de rolagem da seção
 */
export function ParallaxFloat({
  children,
  offset = 35,
  rotateRange = [0, 0],
  className = '',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const rawRotate = useTransform(scrollYProgress, [0, 1], rotateRange);

  const y = useSpring(rawY, { stiffness: 90, damping: 24 });
  const rotate = useSpring(rawRotate, { stiffness: 90, damping: 24 });

  return (
    <motion.div ref={ref} style={{ y, rotate }} className={className}>
      {children}
    </motion.div>
  );
}

