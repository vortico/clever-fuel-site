import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the CLEVER FUEL Lab team",
  alternates: {
    canonical: "/contact/",
  },
};

export default async function Page() {
  return (
    <>
      <header className="px-4 pb-8 sm:px-6 sm:pb-16 sm:text-center md:px-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h1>Contact</h1>
          <p className="mt-4">Get in touch with the CLEVER FUEL Lab team.</p>
        </div>
      </header>
      <section className="mb-8 space-y-8 pt-8 sm:mb-10 sm:space-y-10 sm:pt-10 md:mb-12 md:space-y-12 md:pt-12">
        <div className="mx-auto max-w-5xl space-y-2 px-4 sm:px-6 md:px-8">
          <p className="font-semibold">CLEVER FUEL Lab — SURFCAT</p>
          <p>Instituto de Ciencia de Materiales de Sevilla (ICMS)</p>
          <p>University of Seville – CSIC, Seville, Spain</p>
          {/* TODO: add the lab contact email */}
        </div>
      </section>
    </>
  );
}
