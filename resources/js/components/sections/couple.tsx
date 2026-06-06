import Flower from '../flower';
import Navigation from '../navigation';

interface CoupleProps {
    v2?: boolean;
}

export default function Couple({ v2 = false }: CoupleProps) {
    return v2 ? (
        <section className="flex h-full flex-col items-center justify-between bg-peach text-navy">
            <Flower />
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-4 pt-4">
                    <div className="pb-6">
                        <img
                            src="/svg/wanita.svg"
                            alt="Noor Hijriyati Shofiana Al Rasyid"
                            className="h-14"
                            loading="eager"
                        />
                    </div>
                    <p className="-translate-y-4 text-center font-belleza text-xs">
                        Putri dari Bapak Ir. Jamal Al Rasyid, MM
                        <br />
                        dan Ibu dr. Syafa&rsquo;ah H. Maksum, M.Kes
                    </p>
                </div>
                <span className="font-gelasio text-6xl">&</span>
                <div className="flex flex-col items-center justify-center px-4 pt-4">
                    <div className="pb-6">
                        <img
                            src="/svg/pria.svg"
                            alt="An Nahl Akmal Hakim"
                            className="h-14"
                            loading="eager"
                        />
                    </div>
                    <p className="-translate-y-4 text-center font-belleza text-xs">
                        Putra dari Bapak Fahrianoor Rullah Hakim, ST
                        <br />
                        dan Ibu Amalia Feritawati, S.Pd
                    </p>
                </div>
            </div>
            <Navigation navy />
        </section>
    ) : (
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
