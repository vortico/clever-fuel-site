interface Metric {
  name: string;
  value: string;
}

const metrics: Metric[] = [
  { name: "Years", value: "5" },
  { name: "Budget", value: "2 M€" },
  { name: "PhD students", value: "4" },
  { name: "Postdocs", value: "3" },
  { name: "Local academics", value: "3" },
  { name: "International collaborators", value: "5" },
];

export default function Section() {
  return (
    <>
      <h2>CLEVER FUEL in Numbers</h2>
      <div className="mt-4 grid grid-cols-2 place-items-center gap-6 md:grid-cols-3">
        {metrics.map(({ value, name }, i) => (
          <div
            key={i}
            className="bg-accent-500 shadow-accent-500 flex h-32 w-32 flex-col items-center justify-center rounded-full p-2 text-center shadow-md select-none"
          >
            <div className="text-primary-50 font-mono text-2xl font-semibold">
              {value}
            </div>
            <div className="text-primary-50 text-sm">{name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
