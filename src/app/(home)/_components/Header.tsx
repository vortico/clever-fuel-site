import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-full w-full items-center justify-between">
      <div className="text-2xl select-none md:text-3xl">Clever Fuel</div>
      <Link href="https://european-union.europa.eu/">
        <Image
          height={100}
          width={100}
          src="/images/home/FundedByEUVertical.png"
          alt="Funded by the European Union"
        />
      </Link>
    </header>
  );
}
