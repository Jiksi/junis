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
        <main className="overflow-hidden *:*:h-dvh *:*:py-14">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={section}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
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
