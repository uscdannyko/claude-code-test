"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const LEAN_STACK = [
  {
    step: 1,
    tool: "Logic Pro",
    detail: "Record vocals → Flex Pitch tuning → Vocal Doubler thickening",
    icon: "🎙️",
  },
  {
    step: 2,
    tool: "Bounce Stem",
    detail: "File → Bounce → PCM · Export as WAV or AIFF",
    icon: "📤",
  },
  {
    step: 3,
    tool: "Cryo Mix",
    detail: "Upload vocal stem + beat stereo file · Chat-based mix tweaks",
    icon: "🎚️",
  },
  {
    step: 4,
    tool: "LANDR",
    detail: "One-click AI mastering · Download release-ready track",
    icon: "✨",
  },
];

const UPGRADED_STACK = [
  {
    step: 1,
    tool: "Logic Pro",
    detail: "Record vocals → Flex Pitch → Vocal Doubler",
    icon: "🎙️",
  },
  {
    step: 2,
    tool: "SoundID VoiceAI",
    detail: "Generate up to 8 vocal layers from a single take · AU/VST3 plugin",
    icon: "🎤",
  },
  {
    step: 3,
    tool: "Bounce Stem",
    detail: "Export thickened vocal stem as WAV/AIFF",
    icon: "📤",
  },
  {
    step: 4,
    tool: "Cryo Mix",
    detail: "Mix layered vocals over stereo beat · Dial in with chat prompts",
    icon: "🎚️",
  },
  {
    step: 5,
    tool: "LANDR / Ozone",
    detail: "LANDR for speed · iZotope Ozone inside Logic for more control",
    icon: "✨",
  },
];

const NOTES = [
  "SoundID VoiceAI layers your vocal — it does NOT generate beats or instrumentals",
  "Cryo Mix is purpose-built for the rapper vocal + stereo beat use case",
  "RoEx Automix requires individual stems — skip it for pre-made beat workflows",
];

function StackCard({
  steps,
  title,
  badge,
  delay,
}: {
  steps: typeof LEAN_STACK;
  title: string;
  badge: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 flex-1 min-w-[280px] max-w-[420px]"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xs font-semibold tracking-widest uppercase bg-black/70 dark:bg-white/10 text-white px-3 py-1 rounded-full">
          {badge}
        </span>
        <h2 className="font-bold text-lg text-slate-900 dark:text-white">{title}</h2>
      </div>
      <ol className="flex flex-col gap-3">
        {steps.map((s) => (
          <li key={s.step} className="flex items-start gap-3">
            <span className="text-xl mt-0.5">{s.icon}</span>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white text-sm">{s.tool}</p>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground className="min-h-screen h-auto py-16 px-4">
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-2">
            Actually you are a rapper bruh
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            AI-Assisted Rap
            <br />
            Production Workflow
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl mx-auto">
            Logic Pro · pre-made beats · chat-based mixing · one-click mastering
          </p>
        </motion.div>

        {/* Stack cards */}
        <div className="flex flex-wrap justify-center gap-6 w-full">
          <StackCard
            steps={LEAN_STACK}
            title="Lean Stack"
            badge="Start here"
            delay={0.2}
          />
          <StackCard
            steps={UPGRADED_STACK}
            title="Upgraded Stack"
            badge="Power mode"
            delay={0.35}
          />
        </div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 w-full max-w-2xl"
        >
          <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-3 uppercase tracking-widest">
            Key Clarifications
          </h3>
          <ul className="flex flex-col gap-2">
            {NOTES.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <span className="mt-0.5 text-slate-400">–</span>
                {note}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
