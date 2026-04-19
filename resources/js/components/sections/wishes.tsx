import Flower from '../flower';
import Navigation from '../navigation';

export default function Wishes() {
    const to = new URLSearchParams(window.location.search).get('to');

    return (
        <section className="flex h-full flex-col items-center justify-between bg-navy text-peach">
            <Flower />
            <div className="flex h-full flex-col items-center gap-4 py-10">
                <h2 className="w-3/4 text-center font-belleza text-xl leading-8 text-balance">
                    Greetings & Wishes
                </h2>
                <div className="flex flex-col items-center gap-2">
                    <input
                        name="nama"
                        id="nama"
                        type="text"
                        placeholder="Nama"
                        defaultValue={to || ''}
                        className="w-xs rounded-md bg-white p-2 font-belleza text-xs text-navy placeholder:font-belleza placeholder:text-xs placeholder:text-navy/20 focus:ring-2 focus:ring-peach focus:ring-offset-2 focus:outline-none"
                    />
                    <textarea
                        name="ucapan"
                        id="ucapan"
                        placeholder="Ucapan..."
                        className="h-20 w-xs rounded-md bg-white p-2 font-belleza text-xs text-navy placeholder:font-belleza placeholder:text-xs placeholder:text-navy/20 focus:ring-2 focus:ring-peach focus:ring-offset-2 focus:outline-none"
                    />
                </div>
                <button className="rounded-md bg-peach px-4 py-2 font-belleza text-sm text-navy hover:bg-peach/80 focus:ring-2 focus:ring-peach focus:ring-offset-2 focus:outline-none">
                    Kirim Ucapan
                </button>
            </div>
            <Navigation />
        </section>
    );
}
