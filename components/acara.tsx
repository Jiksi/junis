import Image from "next/image";
import Navigation from "./navigation";
import Flower from "./flower";

export default function Acara() {
  return (
    <section
      id="acara"
      className="bg-secondary text-primary flex h-full min-h-svh flex-col items-center justify-between py-14 text-center"
    >
      <Flower />
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
        <a
          href="https://www.google.com/maps/place/Hotel+Royal+Suite/@-1.254371,116.9002063,17z/data=!3m1!4b1!4m9!3m8!1s0x2df1442d1b88ad03:0x869ddea7875ad533!5m2!4m1!1i2!8m2!3d-1.254371!4d116.9002063!16s%2Fg%2F11c5_2p5fj!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-primary font-heading hover:bg-primary/80 text-secondary flex items-center justify-between gap-2 rounded-md p-2 text-sm tracking-wide">
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
        </a>
        <a
          href="https://calendar.google.com/calendar/u/0/r/eventedit?&dates=20260704T100000/20260704T150000&ctz=Asia/Makassar&text=Wedding+of+Inung+%26+Akmal&location=Royal+Suite+Hotel+Balikpapan,+Jl.+Syarifuddin+Yoes,+Sepinggan,+Kecamatan+Balikpapan+Selatan,+Kota+Balikpapan,+Kalimantan+Timur+76115,+Indonesia&crm=AVAILABLE&trp=false&pli=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-primary font-heading hover:bg-primary/80 text-secondary flex items-center justify-between gap-2 rounded-md p-2 text-sm tracking-wide">
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
        </a>
      </div>
      <Navigation navy />
    </section>
  );
}
