import Image from "next/image";
import Navigation from "./navigation";
import { useNavigation } from "@/lib/navigation-context";
import Flower from "./flower";

export default function Gift() {
  const { setActiveSection } = useNavigation();
  return (
    <section
      id="gift"
      className="bg-secondary text-primary flex h-full min-h-svh flex-col items-center justify-between py-14"
    >
      <Flower />
      <div className="flex h-full flex-col items-center gap-4 py-4">
        <h2 className="font-heading w-xs text-center text-base leading-5 text-balance">
          Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
          jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado
          secara cashless.
        </h2>
        <button className="bg-primary text-secondary font-heading flex items-center gap-2 rounded-md border-2 px-4 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none">
          <Image
            src="/svg/gift.svg"
            alt="Gift"
            className="size-5"
            width={24}
            height={24}
          />
          Kirim Kado
        </button>
      </div>
      <Navigation navy />
      <button
        className="absolute bottom-5 size-5 w-fit animate-bounce"
        onClick={() => setActiveSection("penutup")}
      >
        <Image
          src="/svg/chevron-down.svg"
          alt="Flower"
          width={24}
          height={24}
          loading="eager"
        />
      </button>
    </section>
  );
}
