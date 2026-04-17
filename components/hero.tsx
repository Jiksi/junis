import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="/svg/inung-akmal.svg"
      alt="Hero"
      className="h-44 w-fit"
      width={308}
      height={188}
      loading="eager"
    />
  );
}
