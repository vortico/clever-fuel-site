import Image from "next/image";

import Card from "./_components/Card";
import type { GroupMember } from "./_components/types";

const publications: string[] = [
  "P. Boldrin, E. Ruiz-Trejo, J. Mermelstein, J.M. Bermudez, T.R. Reina, N. Brandon, “Strategies for carbon and sulfur tolerant solid oxide fuel cell materials, incorporating lessons from heterogeneous catalysis”, Chemical Reviews 2016, 116 (22) 13633–13684.",
  "E. le Sache, T.R. Reina, “Analysis of Dry Reforming as direct route for gas phase CO₂ conversion. The past, the present and future of catalytic DRM technologies”, Progress in Energy and Combustion Science (2022) 89, 100970.",
  "E. Le Saché, L. Pastor-Perez, D. Watson, A. Sepúlveda-Escribano, T.R. Reina, “Ni stabilised on inorganic complex structures: superior catalysts for chemical CO₂ recycling via dry reforming of methane”, Applied Catalysis B 236 (2018) 458–465.",
  "T. Stroud, T.J. Smith, E. Le Saché, J.L. Santos, M.A. Centeno, H. Arellano-Garcia, J.A. Odriozola, T.R. Reina, “Chemical CO₂ recycling via dry and bi-reforming of methane using Ni-Sn/Al₂O₃ and NiSn/CeO₂-Al₂O₃ catalysts”, Applied Catalysis B: Environmental 224 (2018) 125–135.",
  "A. Cardoso, T.R. Reina, I. Suelves, J.L. Pinilla, M. Millan, K. Hellgardt, “Effect of carbon-based materials and CeO₂ on Ni catalysts for Kraft lignin liquefaction in supercritical water”, Green Chemistry (2018) 20(18) 4308–4318.",
  "Q. Zhang, L. Pastor-Perez, W. Jin, S. Gu, T.R. Reina, “Understanding the promoter effect of Cu and Cs over highly effective β-Mo₂C catalysts for the reverse water-gas shift reaction”, Applied Catalysis B: Environmental 244 (2019) 889–898.",
  "T.R. Reina, M. Gonzalez, V. Lopez, M. Martinez, A. Zitolo, S. Ivanova, M. Centeno, W. Xu, J.A. Rodriguez, J.A. Odriozola, “Au and Pt Remain Unoxidized on a CeO₂-Based Catalyst during the Water−Gas Shift Reaction”, Journal of the American Chemical Society, 2022, 144(1), 446–453.",
  "F. Baena, L. Pastor-Perez, D. Sebastia-Saez, T.R. Reina, “Analysis of the potential for biogas upgrading to syngas via catalytic reforming in the United Kingdom”, Renewable and Sustainable Energy Reviews (2021) 144, 110939.",
  "T.R. Reina, J.A. Odriozola, “Heterogeneous Catalysis for Energy Applications”, Royal Society of Chemistry – 2020, ISBN: 978-1-78801-718-3.",
  "R. Ye, J. Ding, T.R. Reina, M. Duyar, H. Li, W. Luo, M. Fan, G. Feng, J. Sun, J. Liu, “Design of catalysts for selective CO₂ hydrogenation”, Nature Synthesis 4 (2025) 288–302.",
];

const group: GroupMember[] = [
  {
    name: "Juan Luis Martín Espejo",
    description:
      "Design of advanced catalysts and new strategies for biogas reforming",
    year: 2025,
  },
  {
    name: "Loukia-Pantzechroula Merkouri",
    description:
      "Switchable Dual-Function Materials: a new generation of CO₂ capture-conversion",
    year: 2024,
    image: "/images/team/loukia-merkouri.jpg",
  },
  {
    name: "Qi Zhang",
    description:
      "Design of transition metal carbide (TMCs) and transition metal phosphide (TMPs) catalysts for gas phase CO₂ conversion",
    year: 2022,
    image: "/images/team/qi-zhang.jpg",
  },
  {
    name: "Liuqingqing Yang",
    description:
      "CO₂ conversion via reverse water-gas shift using multicomponent catalysts",
    year: 2021,
    image: "/images/team/liuqingqing-yang.jpg",
  },
  {
    name: "Jin Wei",
    description:
      "Advanced catalysts for a low-carbon future: exploring new routes for biomass valorisation",
    year: 2021,
    image: "/images/team/jin-wei.jpg",
  },
  {
    name: "Cameron Alexander Hurd Price",
    description:
      "The development of novel Yolk@Shell catalysts for the thermochemical conversion of CO₂",
    year: 2021,
    image: "/images/team/cameron-hurd-price.jpg",
  },
  {
    name: "Elham Ketabchi",
    description:
      "Towards sustainable industries: synthesis of alternative fuels and chemicals from fermentation products and integration of refineries and petrochemicals",
    year: 2020,
    image: "/images/team/elham-ketabchi.jpg",
  },
  {
    name: "Estelle C. Le Saché",
    description:
      "Emissions to liquid fuels: development of advanced heterogeneous catalysts for CO₂ valorisation",
    year: 2019,
    image: "/images/team/estelle-le-sache.jpg",
  },
  {
    name: "Utsab Guharoy",
    description:
      "First-principles based mechanistic understanding of CO₂ utilisation reactions over advanced heterogeneous catalysts",
    year: 2018,
    image: "/images/team/utsab-guharoy.jpg",
  },
];

export default async function Page() {
  return (
    <>
      <header className="px-4 pb-8 sm:px-6 sm:pb-16 sm:text-center md:px-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h1>Team</h1>
          <p className="mt-4">
            CLEVER-FUEL is a high-risk, high-gain research project funded by a
            prestigious grant from the European Research Council and hosted at
            the Materials Science Institute (University of Seville–CSIC), within
            SURFCAT. Detailed profiles of our PhD students and researchers are
            coming soon.
          </p>
        </div>
      </header>
      <section className="mb-8 space-y-8 pt-8 sm:mb-10 sm:space-y-10 sm:pt-10 md:mb-12 md:space-y-12 md:pt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h2>Tomás Ramírez Reina, FRSC</h2>
          <p className="text-accent-500 mt-1 text-sm font-semibold">
            Principal Investigator
          </p>
          <div className="mt-4 flex flex-col gap-6 sm:flex-row">
            <Image
              src="/images/team/tomas-ramirez-reina.jpg"
              alt="Tomás Ramírez Reina, FRSC"
              width={300}
              height={300}
              className="h-48 w-48 shrink-0 self-center rounded-lg object-cover shadow-sm sm:self-start"
            />
            <div className="space-y-2">
              <p>
                Tomás Ramírez Reina, FRSC is a full professor of Inorganic
                Chemistry at the University of Seville and the coordinator of
                the Catalysis Unit at the Materials Sciences Institute (ICMS),
                University of Seville–CSIC. He holds several international
                appointments such as visiting professor (2019, 2024, 2026) at
                HUST University (China), visiting scientist (2020) at the Dalian
                Institute of Chemical Physics (China) and visiting professor
                (2022–present) in the School of Chemistry &amp; Chemical
                Engineering at the University of Surrey (UK), where he founded
                the Catalysis-Engineering Unit and worked as Group Leader for
                several years. Tomás holds a PhD in Chemistry with a background
                in heterogeneous catalysis, reaction engineering and material
                sciences.
              </p>
              <p>
                His research in catalysis has been recognised by the
                international community with multiple awards, including the
                EFCATS student award (2013), the Spanish Society of Catalysis
                best PhD award (2014), the extraordinary PhD award by the
                University of Seville (2014), Young Scientist of the Year 2017
                (Seville city council), the Royal Academy of Sciences of Seville
                Science award (2018), the Chinese Academy of Sciences President
                award (2020), the FISOCat junior award (2022), the
                Losada-Villasante award (2022) for his research in circular
                economy, and the SUSCHEM Innova award (2025). He has also been
                finalist of the prestigious IChemE awards in 2016 and 2017 in
                the category of Young Academic Researcher. He has co-authored
                over 230 peer-reviewed publications in highly reputed journals
                (including Nature family, Chemical Reviews, PECS, Applied
                Catalysis B, JACS, Angewandte Chemie, etc.), more than 100
                conference contributions (22 invited lectures/keynotes), 6 book
                chapters, has licensed 7 patents (2 transferred to industry) and
                is the editor of 3 textbooks for RSC, Wiley and Elsevier.
              </p>
              <p>
                Prof. Reina has supervised 30+ MSc/MEng and 17 PhD projects (6
                ongoing), and is presently mentoring several postdoctoral
                researchers and junior academics. He has participated as PI/Co-I
                on multiple projects in the area of energy, materials and
                sustainable chemical technologies sponsored by institutions such
                as ERC, EU-H2020, EU-Horizon Europe, the Spanish Ministry of
                Science, AEI, EPSRC, Royal Society, British Council and the
                Chinese Academy of Sciences. He was elected Fellow of the Royal
                Society of Chemistry in 2021 and since 2022 is included in the
                Stanford list of the world&apos;s top-2% most influential
                scientists in his field.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8 space-y-8 pt-8 sm:mb-10 sm:space-y-10 sm:pt-10 md:mb-12 md:space-y-12 md:pt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h2>Selected Publications</h2>
          <ol className="mt-4 list-outside list-decimal space-y-2 pl-5">
            {publications.map((publication, i) => (
              <li key={i}>{publication}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="mb-8 space-y-8 pt-8 sm:mb-10 sm:space-y-10 sm:pt-10 md:mb-12 md:space-y-12 md:pt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h2>Group Overview</h2>
          <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.map((member, i) => (
              <li key={i} className="h-full">
                <Card member={member} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
