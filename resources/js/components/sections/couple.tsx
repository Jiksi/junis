import Flower from '../flower';
import Navigation from '../navigation';

export default function Couple() {
    return (
        <section className="flex h-full flex-col items-center justify-between bg-peach text-navy">
            <Flower />
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-sm pt-4">
                    <div className="pb-6">
                        <img
                            src="/svg/wanita.svg"
                            alt="Noor Hijriyati Shofiana Al Rasyid"
                            className="h-14 w-fit"
                            loading="eager"
                        />
                    </div>
                    <p className="-translate-y-4 text-center font-gelasio text-xs">
                        Putri dari Bapak Ir. Jamal Al Rasyid, MM
                        <br />
                        dan Ibu dr. Syafa&rsquo;ah H. Maksum, M.Kes
                    </p>
                </div>
                <span className="font-gelasio text-6xl">&</span>
                <div className="w-sm pt-4">
                    <div className="flex w-full items-center justify-center pb-6">
                        <img
                            src="/svg/pria.svg"
                            alt="An Nahl Akmal Hakim"
                            className="h-14 w-fit"
                            loading="eager"
                        />
                    </div>
                    <p className="-translate-y-4 text-center font-gelasio text-xs">
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
