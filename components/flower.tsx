import { useNavigation } from "@/lib/navigation-context";
import Image from "next/image";

export default function Flower() {
  const { setActiveSection } = useNavigation();

  return (
    <button onClick={() => setActiveSection("welcome")}>
      <Image
        src="/svg/sunflower.svg"
        alt="Flower"
        className="h-20 w-fit"
        width={100}
        height={100}
        loading="eager"
      />
    </button>
  );
}
