import Image from "next/image";
import Link from "next/link";

import { Hero, Metrics, Objective, Progress } from "./_components/sections";

export default async function Page() {
  return (
    <>
      <header>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <Hero />
        </div>
      </header>
      <section
        id="our-objective"
        className="mb-8 space-y-8 pt-8 sm:mb-10 sm:space-y-10 sm:pt-10 md:mb-12 md:space-y-12 md:pt-12"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <Objective />
        </div>
      </section>
      <section
        id="project-progress"
        className="mb-8 space-y-8 pt-8 sm:mb-10 sm:space-y-10 sm:pt-10 md:mb-12 md:space-y-12 md:pt-12"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <Progress />
        </div>
      </section>
      <section
        id="clever-fuel-in-numbers"
        className="mb-8 space-y-8 pt-8 sm:mb-10 sm:space-y-10 sm:pt-10 md:mb-12 md:space-y-12 md:pt-12"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <Metrics />
        </div>
      </section>
      <section id="funded-by-eu">
        <div className="border-primary-700/25 mx-auto flex max-w-5xl items-center justify-center border-t px-4 py-12 sm:px-6 md:px-8">
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
