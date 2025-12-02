import Link from "next/link";

import { VorticoIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="flex h-full flex-col items-center justify-center">
      <div className="text-primary-200 text-2xl md:text-3xl">Clever Fuel</div>
      <div className="inline-flex items-center justify-start gap-1">
        <span className="text-primary-200">Made by </span>
        <Link
          href="https://vortico.tech"
          className="inline-flex items-center justify-start"
        >
          <span className="h-6 w-6">
            <VorticoIcon />
          </span>
          <span className="text-[#008080]">Vortico</span>
        </Link>
      </div>
    </footer>
  );
}
