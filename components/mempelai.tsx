import Navigation from "./navigation";
import Flower from "./flower";
import Image from "next/image";

export default function Mempelai() {
  return (
    <section
      id="mempelai"
      className="bg-secondary text-primary flex h-full min-h-svh flex-col items-center justify-between py-14"
    >
      <Flower />
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-sm pt-4">
          <div className="pb-6">
            <Image
              src="/svg/wanita.svg"
              alt="Noor Hijriyati Shofiana Al Rasyid"
              className="h-14 w-fit"
              width={348}
              height={52}
              loading="eager"
            />
          </div>
          <p className="font-heading -translate-y-4 text-center text-xs">
            Putri dari Bapak Ir. Jamal Al Rasyid, MM
            <br />
            dan Ibu dr. Syafa&rsquo;ah H. Maksum, M.Kes
          </p>
        </div>
        <span className="font-heading text-6xl">&</span>
        <div className="w-sm pt-4">
          <div className="flex w-full items-center justify-center pb-6">
            <Image
              src="/svg/pria.svg"
              alt="An Nahl Akmal Hakim"
              className="h-14 w-fit"
              width={348}
              height={52}
              loading="eager"
            />
          </div>
          <p className="font-heading -translate-y-4 text-center text-xs">
            Putra dari Bapak Fahrianoor Rullah Hakim
            <br />
            dan Ibu Amalia Feritawati
          </p>
        </div>
      </div>
      <Navigation navy />
    </section>
  );
}
