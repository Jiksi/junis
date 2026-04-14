import Image from "next/image";

export default function Penutup() {
  return (
    <section
      id="penutup"
      className="bg-primary text-secondary flex h-full min-h-svh flex-col items-center justify-between py-14"
    >
      <Image
        src="/svg/sunflower.svg"
        alt="Flower"
        className="h-24 w-fit"
        width={100}
        height={100}
        loading="eager"
      />
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
