import Image from "next/image";
import Flower from "./flower";

export default function Penutup() {
  return (
    <section
      id="penutup"
      className="bg-primary text-secondary flex h-full min-h-svh flex-col items-center justify-between py-14"
    >
      <Flower />
      <h2 className="font-heading text-accent text-center tracking-widest uppercase">
        The Wedding of
      </h2>
      <div>
        <Image
          src="/svg/inung-akmal.svg"
          alt="Hero"
          className="h-44 w-fit"
          width={200}
          height={300}
          loading="eager"
        />
      </div>
      <p>Junis, 2026</p>
    </section>
  );
}
