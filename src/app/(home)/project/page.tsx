import { type Metadata } from "next";

import { Metrics, Objective, Progress } from "./_components";

export const metadata: Metadata = {
  title: "Project",
  description:
    "The ERC-funded CLEVER-FUEL project develops advanced catalysts for H₂-free hydrodeoxygenation, using water as the hydrogen source to produce biofuels.",
  alternates: {
    canonical: "/project/",
  },
};

export default async function Page() {
  return (
    <>
      <header className="px-4 pb-8 sm:px-6 sm:pb-16 sm:text-center md:px-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h1>Project</h1>
          <p className="mt-4">
            The transition to low-carbon fuels is critical for a sustainable
            future. Current biomass-to-biofuel technologies mainly rely on
            high-pressure hydrogen — an expensive resource that is difficult to
            handle. The ERC-funded CLEVER-FUEL project develops a novel process to
            produce deoxygenated hydrocarbons using water as the hydrogen source,
            simplifying the process, reducing costs and boosting safety.
          </p>
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
    </>
  );
}
