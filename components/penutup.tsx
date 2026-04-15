import Image from "next/image";
import Flower from "./flower";
import { motion } from "motion/react";

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
      <Image
        src="/svg/inung-akmal.svg"
        alt="Hero"
        className="h-44 w-fit"
        width={200}
        height={300}
        loading="eager"
      />
      <div className="relative">
        <Image
          src="/svg/spotify.svg"
          alt="Spotify"
          className="h-8 w-fit"
          width={210}
          height={32}
          loading="eager"
        />
        <Image
          src="/svg/listen.svg"
          alt="Spotify"
          className="absolute -right-10 bottom-10 h-7 w-fit"
          width={80}
          height={28}
          loading="eager"
        />
      </div>
      <p className="font-heading text-base">Junis, 2026</p>
    </section>
  );
}
