import { AnimatePresence, motion } from 'motion/react';

import Closing from '@/components/sections/closing';
import Couple from '@/components/sections/couple';
import Event from '@/components/sections/event';
import Gift from '@/components/sections/gift';
import Intro from '@/components/sections/intro';
import Opening from '@/components/sections/opening';
import Wishes from '@/components/sections/wishes';

import {
    NavigationProvider,
    useNavigation,
} from '@/contexts/navigation-context';

import type { Section } from '@/types';

function HomeContent() {
    const { section } = useNavigation();

    const content: Record<Section, React.ReactNode> = {
        opening: <Opening />,
        intro: <Intro />,
        couple: <Couple />,
        event: <Event />,
        wishes: <Wishes />,
        gift: <Gift />,
        closing: <Closing />,
    };

    return (
        <main className="relative overflow-hidden *:*:h-dvh *:*:py-14">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={section}
                    exit={{ y: '-100%', zIndex: 10 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="relative h-full w-full"
                >
                    {content[section]}
                </motion.div>
            </AnimatePresence>
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
