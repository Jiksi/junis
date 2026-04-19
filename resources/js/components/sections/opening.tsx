import { motion } from 'motion/react';
import { useNavigation } from '@/contexts/navigation-context';
import Flower from '../flower';
import Hero from '../hero';

export default function Opening() {
    const { setSection } = useNavigation();
    const to = new URLSearchParams(window.location.search).get('to');

    return (
        <section className="flex h-full flex-col items-center justify-between bg-navy text-peach">
            <motion.div
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                <Flower />
            </motion.div>
            <motion.h2
                className="text-center font-belleza text-xl tracking-widest text-sky uppercase"
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                The Wedding of
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                <Hero />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                <p className="text-center font-belleza text-lg">Kepada yth</p>
                <p className="text-center font-belleza text-3xl">
                    {to || 'Tamu Undangan'}
                </p>
            </motion.div>
            <motion.button
                onClick={() => setSection('intro')}
                className="cursor-pointer font-belleza text-xl text-sky"
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                Buka Undangan
            </motion.button>
        </section>
    );
}
