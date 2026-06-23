import Image from "next/image";
import Link from "next/link";

import { VorticoIcon } from "@/components/icons";

function UpperFooter() {
  return (
    <div className="bg-primary-800 py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 md:px-6 lg:px-8">
        <div>
          <h6 className="text-primary-100 text-sm font-semibold">CLEVER FUEL Lab</h6>
          <ul className="text-primary-400 mt-4 space-y-2 text-sm">
            <li>c/ Américo Vespucio 49</li>
            <li>41092 Sevilla, Spain</li>
            <li>ICMS, University of Seville–CSIC</li>
          </ul>
        </div>
        <div className="flex flex-col items-end gap-6">
          <Link href="https://www.us.es/">
            <Image
              src="/images/home/us-logo.svg"
              alt="University of Seville"
              width={180}
              height={75}
              className="w-32 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link href="https://www.csic.es/">
            <Image
              src="/images/home/csic-logo.png"
              alt="CSIC"
              width={1280}
              height={315}
              className="w-32 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

function LowerFooter() {
  return (
    <div className="bg-primary-800 border-primary-700 border-t py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 md:px-6 lg:px-8">
        <Link
          href="https://vortico.tech"
          className="inline-flex items-center gap-1 no-underline"
        >
          <span className="text-primary-400 text-sm">Made by</span>
          <span className="h-4 w-4">
            <VorticoIcon />
          </span>
          <span className="text-sm font-medium text-[#008080]">Vortico</span>
        </Link>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <UpperFooter />
      <LowerFooter />
    </footer>
  );
}
