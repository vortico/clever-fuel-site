import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <header>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h1>Advanced CataLysts for H₂-free hydrodeoxygenation</h1>
          <p className="mt-4">
            A rEVolutionary approach Enabling pRactical biomass upgrading to
            bioFUEL
          </p>
          <p className="mt-8">
            CLEVER-FUEL proposes a groundbreaking and revolutionary approach for
            low-carbon fuels production, establishing a direct and highly
            efficient &quot;waste to biofuels&quot; conversion strategy.
          </p>
          <p className="mt-4">
            The project is focused on overcoming the primary bottleneck in
            current biomass upgrading technologies: the reliance on expensive,
            high-pressure hydrogen (H₂) for the crucial hydrodeoxygenation (HDO)
            process. Our innovative solution paves the way for the sustainable
            and commercial deployment of advanced biofuels.
          </p>
        </div>
      </header>
      <section className="mb-20 space-y-20 pt-20 sm:mb-32 sm:space-y-32 sm:pt-32 md:mb-40 md:space-y-40 md:pt-40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h2>Our Objective</h2>
          <p className="mt-4">Unlocking H₂-Free Biofuel Production</p>
          <div className="mt-8 space-y-2">
            <p>
              The overriding goal of CLEVER-FUEL is to create a new, safe, and
              cost-effective conversion pathway by utilizing the cheapest and
              safest possible hydrogen source: water.
            </p>
            <p>
              The project will achieve this through a five-year program focused
              on creating new chemistry and reaction engineering concepts:
            </p>
            <ul className="list-inside list-disc">
              <li className="list-item">
                H₂-Free HDO: Developing a completely novel route to produce
                deoxygenated hydrocarbons—essential compounds in the biofuel and
                biochemical industries—without the need for an external,
                high-pressure hydrogen supply.
              </li>
              <li>
                Multifunctional Catalysts: Designing advanced multifunctional
                catalysts capable of performing water reduction and
                hydrodeoxygenation simultaneously within a single reactor under
                mild conditions.
              </li>
              <li>
                Process Intensification: Combining these unique catalysts with
                advanced operando characterisation techniques and implementing
                novel reactor concepts based on microchannel catalytic systems
                to facilitate optimal process intensification.
              </li>
            </ul>
            <p>
              CLEVER-FUEL represents a forward-thinking concept in catalysis and
              reaction engineering, conceived to open new horizons in bioenergy
              research, unlocking the full potential of biofuels in the pursuit
              of a low-carbon future.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="border-primary-700/25 mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 border-t px-4 py-12 sm:gap-6 sm:px-6 md:flex-row md:gap-8 md:px-8">
          <p className="text-lg md:text-xl">Funded by the European Union</p>
          <Link href="https://european-union.europa.eu/">
            <Image
              height={200}
              width={400}
              src="/images/home/FundedByEUHorizontal.png"
              alt="Funded by the European Union"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
