"use client";

import cn from "@/app/utils/className";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  if (immediate) {
    return (
      <motion.div
        className={cn(
          "[@media(scripting:none)]:!transform-none [@media(scripting:none)]:!opacity-100",
          className,
        )}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay, ease }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(
        "[@media(scripting:none)]:!transform-none [@media(scripting:none)]:!opacity-100",
        className,
      )}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.45, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
