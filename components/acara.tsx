import Image from "next/image";
import Navigation from "./navigation";

export default function Acara() {
  return (
    <section
      id="acara"
      className="bg-secondary text-primary flex h-full min-h-svh flex-col items-center justify-between py-14 text-center"
    >
      <Image
        src="/svg/sunflower.svg"
        alt="Flower"
        className="h-24 w-fit"
        width={100}
        height={100}
        loading="eager"
      />
      <h2 className="font-body w-3/4 text-center text-3xl">
        Sabtu, 4 Juli 2026
      </h2>
      <div className="border-primary w-xs border-t"></div>
      <div className="font-heading text-center text-xl">
        <p>Akad Nikah</p>
        <p>08.00 - 09.00</p>
      </div>
      <div className="border-primary w-xs border-t"></div>
      <div className="font-heading text-center text-xl">
        <p>Resepsi Pernikahan</p>
        <p>10.00 - 15.00</p>
      </div>
      <div className="border-primary w-xs border-t"></div>
      <div>
        <p className="font-heading text-sm">Berlokasi di</p>
        <div className="font-body text-2xl">
          <p>Ballroom Derawan</p>
          <p>Royal Suite Hotel</p>
        </div>
        <p className="font-heading text-sm">
          Jl. Syarifuddin Yoes No. 125, Balikpapan
        </p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button className="bg-primary font-heading text-secondary flex items-center justify-between gap-2 rounded-md p-2 text-sm tracking-wide">
          <Image
            src="/svg/maps.svg"
            alt="Google Maps"
            className="size-5"
            width={24}
            height={24}
            loading="eager"
          />
          Google Maps
        </button>
        <button className="bg-primary font-heading text-secondary flex items-center justify-between gap-2 rounded-md p-2 text-sm tracking-wide">
          <Image
            src="/svg/calendar.svg"
            alt="Add to Calendar"
            className="size-5"
            width={24}
            height={24}
            loading="eager"
          />
          Add to Calendar
        </button>
      </div>
      <Navigation navy />
    </section>
  );
}
