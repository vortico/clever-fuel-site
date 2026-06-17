import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-full w-full items-center justify-between gap-4">
      <Link href="/">
        <Image
          width={614}
          height={212}
          src="/images/home/CleverFuel.png"
          alt="CLEVER FUEL Lab"
          className="h-12 w-auto md:h-14"
        />
      </Link>
      <Link href="https://erc.europa.eu/">
        <Image
          width={232}
          height={100}
          src="/images/home/ERC.png"
          alt="Funded by the European Union – European Research Council"
        />
      </Link>
    </header>
  );
}
