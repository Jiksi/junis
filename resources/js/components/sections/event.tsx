import Flower from '../flower';
import Navigation from '../navigation';

export default function Event() {
    return (
        <section className="flex h-full flex-col items-center justify-between bg-peach text-center text-navy">
            <Flower />
            <h2 className="w-sm pt-5 text-center font-gelasio text-3xl">
                Sabtu, 4 Juli 2026
            </h2>
            <div className="flex flex-col gap-2">
                <div className="w-xs border-t border-navy"></div>
                <div className="text-center font-belleza text-xl">
                    <p>Akad Nikah</p>
                    <p>08.00 - 09.00</p>
                </div>
                <div className="w-xs border-t border-navy"></div>
                <div className="text-center font-belleza text-xl">
                    <p>Resepsi Pernikahan</p>
                    <p>10.00 - 15.00</p>
                </div>
                <div className="w-xs border-t border-navy"></div>
            </div>
            <div>
                <p className="font-belleza text-sm">Berlokasi di</p>
                <div className="font-gelasio text-xl">
                    <p>Ballroom Derawan</p>
                    <p>Royal Suite Hotel</p>
                </div>
                <p className="font-belleza text-sm">
                    Jl. Syarifuddin Yoes No. 125, Balikpapan
                </p>
            </div>
            <div className="flex items-center justify-between gap-4 pb-5">
                <a
                    href="https://www.google.com/maps/place/Hotel+Royal+Suite/@-1.254371,116.9002063,17z/data=!3m1!4b1!4m9!3m8!1s0x2df1442d1b88ad03:0x869ddea7875ad533!5m2!4m1!1i2!8m2!3d-1.254371!4d116.9002063!16s%2Fg%2F11c5_2p5fj!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="flex items-center justify-between gap-2 rounded-md bg-navy p-2 font-belleza text-xs tracking-wide text-peach hover:bg-navy/80">
                        <img
                            src="/svg/maps.svg"
                            alt="Google Maps"
                            className="size-4"
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
                    <button className="flex items-center justify-between gap-2 rounded-md bg-navy p-2 font-belleza text-xs tracking-wide text-peach hover:bg-navy/80">
                        <img
                            src="/svg/calendar.svg"
                            alt="Add to Calendar"
                            className="size-4"
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
