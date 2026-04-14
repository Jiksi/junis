import Image from "next/image";
import Navigation from "./navigation";

export default function Intro() {
  return (
    <section
      id="intro"
      className="text-secondary bg-primary flex h-full min-h-svh flex-col items-center justify-between py-14"
    >
      <Image
        src="/svg/sunflower.svg"
        alt="Flower"
        className="h-24 w-fit"
        width={100}
        height={100}
        loading="eager"
      />
      <h2 className="font-heading w-3/4 text-center text-xl leading-8 text-balance">
        Tanpa mengurangi rasa hormat, kami bermaksud mengundang
        Bapak/Ibu/Saudara/i pada acara pernikahan kami
      </h2>
      <Navigation />
    </section>
  );
}
