import Flower from '../flower';
import Hero from '../hero';

export default function Closing() {
    return (
        <section
            id="penutup"
            className="flex h-full flex-col items-center justify-between bg-navy text-peach"
        >
            <Flower />
            <h2 className="max-w-xs text-center font-belleza text-base leading-5 tracking-wide text-balance text-peach">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
                Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do&rsquo;a
                restu bagi kedua mempelai.
            </h2>
            <Hero />
            <div className="relative">
                <a
                    href="https://open.spotify.com/playlist/0O69HPyn69q881btD9K6Kx?si=yeSi2rHsQCOVugw5yVqosw&pi=fd6u44fHTr2sb&nd=1&dlsi=2ffa21d5f9084e11"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/svg/spotify.svg"
                        alt="Spotify"
                        className="h-8 w-fit"
                        loading="eager"
                    />
                </a>
                <a
                    href="https://open.spotify.com/playlist/0O69HPyn69q881btD9K6Kx?si=yeSi2rHsQCOVugw5yVqosw&pi=fd6u44fHTr2sb&nd=1&dlsi=2ffa21d5f9084e11"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/svg/listen.svg"
                        alt="Spotify"
                        className="absolute -right-10 bottom-10 h-7 w-fit"
                        loading="eager"
                    />
                </a>
            </div>
            <p className="font-belleza text-base">Junis. 2026</p>
        </section>
    );
}
