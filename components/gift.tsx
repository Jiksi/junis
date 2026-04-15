import Image from "next/image";
import Navigation from "./navigation";
import { useNavigation } from "@/lib/navigation-context";
import Flower from "./flower";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Gift() {
  const { setActiveSection } = useNavigation();
  const [visible, setVisible] = useState(false);

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
        <button
          className="bg-primary text-secondary font-heading flex items-center gap-2 rounded-md border-2 px-4 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
          onClick={() => setVisible(!visible)}
        >
          <Image
            src="/svg/gift.svg"
            alt="Gift"
            className="size-5"
            width={24}
            height={24}
            loading="eager"
          />
          Kirim Kado
        </button>
        <AnimatePresence initial={false}>
          {visible ? (
            <motion.div
              initial={{ opacity: 0, scaleY: 0, originY: 0 }}
              animate={{
                opacity: 1,
                scaleY: 1,
                originY: 0,
              }}
              exit={{ opacity: 0, scaleY: 0, originY: 0 }}
              key="box"
              className="border-primary text-primary font-heading relative w-sm rounded-md border bg-white p-4 text-xs"
            >
              <Image
                src="/svg/mandiri.svg"
                alt="Mandiri"
                className="h-5"
                width={68}
                height={20}
                loading="eager"
              />
              <div className="flex items-center justify-between py-2">
                <div>
                  <h2>12345678901213 a.n</h2>
                  <h2>Noor Hijriyati Shofiana</h2>
                </div>
                <button className="bg-primary text-secondary font-heading flex items-center gap-2 rounded-md border-2 px-3 py-1 text-xs focus:ring-2 focus:ring-offset-2 focus:outline-none">
                  <Image
                    src="/svg/copy.svg"
                    alt="Copy"
                    className="size-4"
                    width={24}
                    height={24}
                    loading="eager"
                  />
                  Copy
                </button>
              </div>
              <div className="border-primary w-full border-t"></div>
              <div className="flex items-center justify-between pt-2">
                <h2>Wedding Gifts List</h2>
                <a
                  href="https://api.whatsapp.com/send/?phone=6281253228441&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-primary text-secondary font-heading flex items-center gap-2 rounded-md border-2 px-3 py-1 text-xs focus:ring-2 focus:ring-offset-2 focus:outline-none">
                    <Image
                      src="/svg/gift.svg"
                      alt="Gift"
                      className="size-4"
                      width={24}
                      height={24}
                      loading="eager"
                    />
                    Contact Us
                  </button>
                </a>
              </div>
              <button
                className="bg-primary text-secondary absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full"
                onClick={() => setVisible(false)}
              >
                X
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
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
