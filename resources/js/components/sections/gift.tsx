import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useNavigation } from '@/contexts/navigation-context';
import Flower from '../flower';
import Navigation from '../navigation';

export default function Gift() {
    const { setSection } = useNavigation();
    const [visible, setVisible] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('12345678901213');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="flex h-full flex-col items-center justify-between bg-peach text-navy">
            <Flower />
            <div className="flex h-full flex-col items-center gap-4 py-10">
                <motion.h2
                    className="w-xs text-center font-belleza text-base leading-5 text-balance"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                    Doa Restu Anda merupakan karunia yang sangat berarti bagi
                    kami. Dan jika memberi adalah ungkapan tanda kasih Anda,
                    Anda dapat memberi kado secara cashless.
                </motion.h2>
                <button
                    className="flex items-center gap-2 rounded-md border-2 bg-navy px-4 py-2 font-belleza text-sm text-peach focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    onClick={() => setVisible(!visible)}
                >
                    <img
                        src="/svg/gift.svg"
                        alt="Gift"
                        className="size-5"
                        loading="eager"
                    />
                    Kirim Kado
                </button>
                <AnimatePresence initial={false}>
                    {visible ? (
                        <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{ opacity: 0, y: -5 }}
                            key="box"
                            className="relative w-xs rounded-md border border-navy bg-white p-4 font-belleza text-xs text-navy"
                        >
                            <img
                                src="/svg/mandiri.svg"
                                alt="Mandiri"
                                className="h-5"
                                loading="eager"
                            />
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <h2>12345678901213 a.n</h2>
                                    <h2>Noor Hijriyati Shofiana</h2>
                                </div>
                                <button
                                    className="flex min-w-20 items-center justify-center gap-2 rounded-md border-2 bg-navy px-3 py-1 font-belleza text-xs text-peach focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                    onClick={handleCopy}
                                >
                                    <AnimatePresence mode="wait">
                                        {copied ? (
                                            <motion.span
                                                key="copied"
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 5 }}
                                            >
                                                Copied!
                                            </motion.span>
                                        ) : (
                                            <motion.div
                                                key="copy"
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 5 }}
                                                className="flex items-center gap-2"
                                            >
                                                <img
                                                    src="/svg/copy.svg"
                                                    alt="Copy"
                                                    className="size-4"
                                                    loading="eager"
                                                />
                                                Copy
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                            <div className="w-full border-t border-navy"></div>
                            <div className="flex items-center justify-between pt-2">
                                <h2>Wedding Gifts List</h2>
                                <a
                                    href="https://api.whatsapp.com/send/?phone=6281253228441&text&type=phone_number&app_absent=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="flex items-center gap-2 rounded-md border-2 bg-navy px-3 py-1 font-belleza text-xs text-peach focus:ring-2 focus:ring-offset-2 focus:outline-none">
                                        <img
                                            src="/svg/gift.svg"
                                            alt="Gift"
                                            className="size-4"
                                            loading="eager"
                                        />
                                        Contact Us
                                    </button>
                                </a>
                            </div>
                            <button
                                className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-navy text-peach"
                                onClick={() => setVisible(false)}
                            >
                                X
                            </button>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
            <Navigation navy />
            <button
                className="absolute bottom-5 size-5 w-fit animate-bounce"
                onClick={() => setSection('closing')}
            >
                <img src="/svg/chevron-down.svg" alt="Down" loading="eager" />
            </button>
        </section>
    );
}
