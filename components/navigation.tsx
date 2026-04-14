import { useNavigation } from "@/lib/navigation-context";
import Image from "next/image";

const navigationItems = [
  { name: "Mempelai", sectionId: "mempelai" },
  { name: "Acara", sectionId: "acara" },
  { name: "Ucapan", sectionId: "ucapan" },
  { name: "Kado", sectionId: "gift" },
];

export default function Navigation({ navy = false }: { navy?: boolean }) {
  const { activeSection, setActiveSection } = useNavigation();

  return (
    <div className="flex items-center justify-between gap-10">
      {navigationItems.map((item, index) => (
        <button
          key={index}
          className={`flex flex-col items-center justify-center gap-3 hover:cursor-pointer ${activeSection === item.sectionId ? "opacity-100" : "opacity-50"}`}
          onClick={() => setActiveSection(item.sectionId)}
        >
          <Image
            src={navy ? "/svg/icon-navy.svg" : "/svg/icon-white.svg"}
            alt="Icon Mempelai"
            className="size-6"
            width={100}
            height={100}
            loading="eager"
          />
          <span className="font-heading text-xs">{item.name}</span>
        </button>
      ))}
    </div>
  );
}
