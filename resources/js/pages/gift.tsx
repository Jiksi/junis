import { Link } from '@inertiajs/react';
import Flower from '@/components/flower';

export default function Gift() {
    return (
        <main className="relative overflow-hidden bg-[oklch(91.26%_0.037_225.01)] text-navy *:h-dvh *:py-14">
            <section className="mx-auto flex h-full w-sm flex-col items-center justify-between px-4">
                <Link href="/">
                    <Flower />
                </Link>
                <div className="flex h-full flex-col items-center justify-between py-10">
                    <h2 className="text-center font-gelasio text-2xl/7">
                        Welcome to
                        <br />
                        our wedding registry!
                    </h2>
                    <div className="space-y-2 text-center font-belleza text-sm text-balance">
                        <p>
                            Halo semuanya, terima kasih sudah berkenan mampir ke
                            link ini dengan niat baik memberi hadiah kepada
                            kami!🫶
                        </p>
                        <p>
                            Teman-teman boleh mengintip daftar yang sudah
                            tertera di bawah, ya! Karena daftar ini sudah dibuat
                            untuk membantu teman-teman yang berbaik hati ingin
                            berbagi kepada kami dan telah kami sesuaikan dengan
                            kebutuhan kami.
                        </p>
                        <p>
                            Kalau teman-teman ingin memberi di luar barang dari
                            list yang sudah ada, boleh hubungi kami terlebih
                            dahulu, ya!
                        </p>
                        <p>
                            Yang paling penting, kami butuh doa dan restu dari
                            teman-teman semua. Terima kasih banyak, semuanya🫶
                        </p>
                        <p>
                            Sincerely,
                            <br />
                            Inung & Akmal
                        </p>
                    </div>
                    <a
                        href="https://www.myregistry.com/giftlist/inungakmal"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="flex items-center gap-2 rounded-md bg-navy px-4 py-2 font-belleza text-xs text-peach focus:ring-2 focus:ring-offset-2 focus:outline-none">
                            <img
                                src="/svg/gift.svg"
                                alt="Gift"
                                className="size-4"
                                loading="eager"
                            />
                            Open Gift List
                        </button>
                    </a>
                </div>
            </section>
        </main>
    );
}
