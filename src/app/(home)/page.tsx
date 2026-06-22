import Image from "next/image";
import Link from "next/link";

import { Hero } from "./_components/sections";

export default async function Page() {
  return (
    <>
      <header>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <Hero />
        </div>
      </header>
      <section id="funded-by-eu">
        <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-12 sm:px-6 md:px-8">
          <Link href="https://erc.europa.eu/">
            <Image
              width={464}
              height={200}
              src="/images/home/ERC.png"
              alt="Funded by the European Union – European Research Council"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
