import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useNavigation } from "@/lib/navigation-context";
import Flower from "./flower";

export default function Welcome() {
  const to = useSearchParams().get("to");
  const { setActiveSection } = useNavigation();

  return (
    <section
      id="welcome"
      className="bg-primary text-secondary flex h-full min-h-svh flex-col items-center justify-between py-14"
    >
      <Flower />
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
      <div>
        <p className="font-heading text-center text-sm">Kepada yth</p>
        <p className="font-heading text-center text-2xl">
          {to || "Tamu Undangan"}
        </p>
      </div>
      <button
        className="font-heading text-accent cursor-pointer text-base"
        onClick={() => setActiveSection("intro")}
      >
        Buka Undangan
      </button>
    </section>
  );
}
