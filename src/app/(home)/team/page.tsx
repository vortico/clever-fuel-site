import Member from "./_components/Member";

interface Member {
  title: string;
  country: string;
  description: string;
}

const members: Member[] = [];

export default async function Page() {
  return (
    <>
      <header className="px-4 pb-8 sm:px-6 sm:pb-16 sm:text-center md:px-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h1>Team</h1>
          <p className="mt-4">
            CLEVER-FUEL is an esteemed, high-risk, high-gain research project
            funded by a prestigious ERC Consolidator Grant from the European
            Research Council. This type of grant typically funds a single
            Principal Investigator and their team based at one host institution,
            reflecting the innovative nature of the research proposal.
          </p>
        </div>
      </header>
      <section className="mb-20 space-y-20 pt-20 sm:mb-32 sm:space-y-32 sm:pt-32 md:mb-40 md:space-y-40 md:pt-40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <ul className="space-y-16">
            {members.map(({ title, country, description }, i) => (
              <li key={i}>
                <Member
                  title={title}
                  country={country}
                  description={description}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
