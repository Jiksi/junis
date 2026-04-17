import { Section } from "@/lib/definitions";
import { useNavigation } from "@/lib/navigation-context";
import Image from "next/image";

const navigationItems = [
  { name: "Mempelai", sectionId: "mempelai" },
  { name: "Acara", sectionId: "acara" },
  { name: "Ucapan", sectionId: "ucapan" },
  { name: "Kado", sectionId: "gift" },
];

const navSectionIds = navigationItems.map((item) => item.sectionId);

export default function Navigation({ navy = false }: { navy?: boolean }) {
  const { activeSection, setActiveSection } = useNavigation();

  const isNavActive = navSectionIds.includes(activeSection);

  return (
    <div className="flex w-xs items-center justify-between">
      {navigationItems.map((item, index) => (
        <button
          key={index}
          className={`flex flex-col items-center justify-center gap-3 hover:cursor-pointer ${
            isNavActive && activeSection !== item.sectionId
              ? "opacity-50"
              : "opacity-100"
          }`}
          onClick={() => setActiveSection(item.sectionId as Section)}
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
