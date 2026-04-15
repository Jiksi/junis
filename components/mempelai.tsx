import Navigation from "./navigation";
import Flower from "./flower";

export default function Mempelai() {
  return (
    <section
      id="mempelai"
      className="bg-secondary text-primary flex h-full min-h-svh flex-col items-center justify-between py-14"
    >
      <Flower />
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-sm pt-4">
          <h2 className="font-body text-center text-xl leading-8 tracking-widest text-balance uppercase">
            Noor Hijriyati Shofiana
          </h2>
          <h2 className="font-code -translate-y-4 text-center text-4xl tracking-wider">
            H Rasyid
          </h2>
          <p className="font-heading -translate-y-4 text-center text-xs">
            Putri dari Bapak Ir. Jamal Al Rasyid, MM
            <br />
            dan Ibu dr. Syafa&rsquo;ah H. Maksum, M.Kes
          </p>
        </div>
        <span className="font-heading text-6xl">&</span>
        <div className="w-3/4 pt-4">
          <h2 className="font-body text-center text-xl leading-8 tracking-widest text-balance uppercase">
            An Nahl Akmal
          </h2>
          <h2 className="font-code -translate-y-4 text-center text-4xl tracking-wider">
            Hakim
          </h2>
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
