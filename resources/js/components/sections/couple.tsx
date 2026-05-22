import Flower from '../flower';
import Navigation from '../navigation';

export default function Couple() {
    return (
        <section className="flex h-full flex-col items-center justify-between bg-peach text-navy">
            <Flower />
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col items-center justify-center">
                    <p className="pb-2 font-gelasio text-xl">
                        dr. Noor Hijriyati Shofiana Al Rasyid
                    </p>
                    <p className="text-center font-belleza text-xs">
                        Putri dari Bapak Ir. Jamal Al Rasyid, MM
                        <br />
                        dan Ibu dr. Syafa&rsquo;ah H. Maksum, M.Kes
                    </p>
                </div>
                <span className="font-belleza text-8xl">&</span>
                <div className="flex flex-col items-center justify-center">
                    <p className="pb-2 font-gelasio text-xl">
                        An Nahl Akmal Hakim, MSM
                    </p>
                    <p className="text-center font-belleza text-xs">
                        Putra dari Bapak Fahrianoor Rullah Hakim, ST
                        <br />
                        dan Ibu Amalia Feritawati, S.Pd
                    </p>
                </div>
            </div>
            <Navigation navy />
        </section>
    );
}
