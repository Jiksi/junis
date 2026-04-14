"use client";

import { motion } from "motion/react";
import { NavigationProvider, useNavigation } from "@/lib/navigation-context";

import Acara from "@/components/acara";
import Gift from "@/components/gift";
import Intro from "@/components/intro";
import Mempelai from "@/components/mempelai";
import Penutup from "@/components/penutup";
import Ucapan from "@/components/ucapan";
import Welcome from "@/components/welcome";

const sections = [
  { id: "welcome", Component: Welcome },
  { id: "intro", Component: Intro },
  { id: "mempelai", Component: Mempelai },
  { id: "acara", Component: Acara },
  { id: "ucapan", Component: Ucapan },
  { id: "gift", Component: Gift },
  { id: "penutup", Component: Penutup },
];

function HomeContent() {
  const { activeSection } = useNavigation();
  const currentIndex = sections.findIndex((s) => s.id === activeSection);

  return (
    <main className="relative container mx-auto h-dvh max-w-md overflow-hidden">
      {sections.map((section, index) => {
        const { Component } = section;
        const isRevealed = index < currentIndex;
        const zIndex = sections.length - index;

        return (
          <motion.div
            key={section.id}
            className="absolute inset-0 h-full w-full"
            style={{ zIndex }}
            initial={false}
            animate={{ y: isRevealed ? "-100%" : "0%" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <Component />
          </motion.div>
        );
      })}
    </main>
  );
}

export default function Home() {
  return (
    <NavigationProvider>
      <HomeContent />
    </NavigationProvider>
  );
}
