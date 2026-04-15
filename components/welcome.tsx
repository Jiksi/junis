import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useNavigation } from "@/lib/navigation-context";
import Flower from "./flower";
import { motion } from "motion/react";

export default function Welcome() {
  const to = useSearchParams().get("to");
  const { setActiveSection } = useNavigation();

  return (
    <section
      id="welcome"
      className="bg-primary text-secondary flex h-full min-h-svh flex-col items-center justify-between py-14"
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Flower />
      </motion.div>
      <motion.h2
        className="font-heading text-accent text-center tracking-widest uppercase"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        The Wedding of
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/svg/inung-akmal.svg"
          alt="Hero"
          className="h-44 w-fit"
          width={200}
          height={300}
          loading="eager"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <p className="font-heading text-center text-sm">Kepada yth</p>
        <p className="font-heading text-center text-2xl">
          {to || "Tamu Undangan"}
        </p>
      </motion.div>
      <motion.button
        className="font-heading text-accent cursor-pointer text-base"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        onClick={() => setActiveSection("intro")}
      >
        Buka Undangan
      </motion.button>
    </section>
  );
}
