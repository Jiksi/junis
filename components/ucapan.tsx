import Navigation from "./navigation";
import Flower from "./flower";
import { useSearchParams } from "next/navigation";

export default function Ucapan() {
  const to = useSearchParams().get("to");

  return (
    <section
      id="ucapan"
      className="text-secondary bg-primary flex h-full min-h-svh flex-col items-center justify-between py-14"
    >
      <Flower />
      <div className="flex h-full flex-col items-center gap-4 py-4">
        <h2 className="font-heading w-3/4 text-center text-xl leading-8 text-balance">
          Greetings & Wishes
        </h2>
        <div className="flex flex-col items-center gap-2">
          <input
            name="nama"
            id="nama"
            type="text"
            placeholder="Nama"
            defaultValue={to || ""}
            className="font-heading placeholder:font-heading text-primary placeholder:text-primary/20 bg-secondary focus:ring-secondary w-xs rounded-md border-2 p-2 text-xs placeholder:text-xs focus:ring-2 focus:ring-offset-2 focus:outline-none"
          />
          <textarea
            name="ucapan"
            id="ucapan"
            placeholder="Ucapan..."
            className="font-heading placeholder:font-heading text-primary placeholder:text-primary/20 bg-secondary focus:ring-secondary h-20 w-xs rounded-md border-2 p-2 text-xs placeholder:text-xs focus:ring-2 focus:ring-offset-2 focus:outline-none"
          ></textarea>
        </div>
        <button className="bg-secondary text-primary hover:bg-secondary/80 focus:ring-secondary font-heading rounded-md border-2 px-4 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none">
          Kirim Ucapan
        </button>
      </div>
      <Navigation />
    </section>
  );
}
