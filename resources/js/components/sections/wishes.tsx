import { useForm } from '@inertiajs/react';
import { formatRelativeTime } from '@/lib/utils';
import type { Wish } from '@/types';
import Flower from '../flower';
import Navigation from '../navigation';

interface WishesProps {
    wishes: Wish[];
}

export default function Wishes({ wishes }: WishesProps) {
    const to = new URLSearchParams(window.location.search).get('to');

    const { data, setData, post, processing, reset, errors } = useForm({
        name: to || '',
        message: '',
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        post('/wishes', {
            onSuccess: () => reset('message'),
        });
    };

    return (
        <section className="flex h-full flex-col items-center justify-between bg-navy text-peach">
            <Flower />
            <div className="flex w-full flex-1 flex-col items-center gap-4 overflow-hidden py-10">
                <h2 className="text-center font-belleza text-xl leading-8 text-balance">
                    Greetings & Wishes
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="flex w-full flex-col items-center gap-2 px-4"
                >
                    <div className="w-full max-w-xs">
                        <input
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Nama"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full rounded-md bg-white p-2 font-belleza text-xs text-navy placeholder:font-belleza placeholder:text-xs placeholder:text-navy/20 focus:ring-2 focus:ring-peach focus:ring-offset-2 focus:outline-none"
                        />
                        {errors.name && (
                            <p className="mt-1 font-belleza text-[10px] text-red-400">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div className="w-full max-w-xs">
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Ucapan..."
                            value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                            className="h-20 w-full resize-none rounded-md bg-white p-2 font-belleza text-xs text-navy placeholder:font-belleza placeholder:text-xs placeholder:text-navy/20 focus:ring-2 focus:ring-peach focus:ring-offset-2 focus:outline-none"
                        />
                        {errors.message && (
                            <p className="mt-1 font-belleza text-[10px] text-red-400">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="rounded-md bg-peach px-4 py-2 font-belleza text-sm text-navy hover:bg-peach/80 focus:ring-2 focus:ring-peach focus:ring-offset-2 focus:outline-none disabled:opacity-50"
                    >
                        {processing ? 'Mengirim...' : 'Kirim Ucapan'}
                    </button>
                </form>

                <div className="scrollbar-hide flex w-full max-w-xs flex-1 flex-col gap-3 overflow-y-auto">
                    {wishes.map((wish) => (
                        <div
                            key={wish.id}
                            className="rounded-lg bg-white/5 p-3 backdrop-blur-sm"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <h3 className="font-belleza text-sm font-bold text-peach">
                                    {wish.name}
                                </h3>
                                <span className="font-belleza text-[10px] text-peach/60 italic">
                                    {formatRelativeTime(wish.created_at)}
                                </span>
                            </div>
                            <p className="mt-1 font-belleza text-xs leading-relaxed text-peach/90">
                                {wish.message}
                            </p>
                        </div>
                    ))}
                    {wishes.length === 0 && (
                        <p className="text-center font-belleza text-xs text-peach/60 italic">
                            Belum ada ucapan. Jadilah yang pertama!
                        </p>
                    )}
                </div>
            </div>
            <Navigation />
        </section>
    );
}
