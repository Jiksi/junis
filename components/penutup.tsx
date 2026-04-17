import Image from "next/image";
import Flower from "./flower";
import Hero from "./hero";

export default function Penutup() {
  return (
    <section
      id="penutup"
      className="bg-primary text-secondary flex h-full min-h-svh flex-col items-center justify-between py-14"
    >
      <Flower />
      <h2 className="font-heading text-secondary text-center text-base leading-5 tracking-wide text-balance">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do&rsquo;a restu
        bagi kedua mempelai.
      </h2>
      <Hero />
      <div className="relative">
        <a
          href="https://open.spotify.com/playlist/0O69HPyn69q881btD9K6Kx?si=yeSi2rHsQCOVugw5yVqosw&pi=fd6u44fHTr2sb&nd=1&dlsi=2ffa21d5f9084e11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/svg/spotify.svg"
            alt="Spotify"
            className="h-8 w-fit"
            width={210}
            height={32}
            loading="eager"
          />
        </a>
        <a
          href="https://open.spotify.com/playlist/0O69HPyn69q881btD9K6Kx?si=yeSi2rHsQCOVugw5yVqosw&pi=fd6u44fHTr2sb&nd=1&dlsi=2ffa21d5f9084e11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/svg/listen.svg"
            alt="Spotify"
            className="absolute -right-10 bottom-10 h-7 w-fit"
            width={80}
            height={28}
            loading="eager"
          />
        </a>
      </div>
      <p className="font-heading text-base">Junis. 2026</p>
    </section>
  );
}
