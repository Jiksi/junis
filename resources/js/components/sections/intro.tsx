import Flower from '../flower';
import Navigation from '../navigation';

export default function Intro() {
    return (
        <section className="flex h-full flex-col items-center justify-between bg-navy text-peach">
            <Flower />
            <h2 className="w-sm text-center font-belleza text-xl leading-8 text-balance">
                Tanpa mengurangi rasa hormat, kami bermaksud mengundang
                Bapak/Ibu/Saudara/i pada acara pernikahan kami
            </h2>
            <Navigation />
        </section>
    );
}
