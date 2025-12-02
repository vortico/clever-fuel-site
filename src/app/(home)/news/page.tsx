import { type Metadata } from 'next'

import { getNewsDocuments } from '@/lib/mdx/news'

import { DocumentPreview } from './_components'

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'News and events related to the project',
  alternates: {
    canonical: '/news/',
  },
}

export default async function Page() {
  const documents = await getNewsDocuments()

  return (
    <>
      <header className="px-4 pb-8 sm:px-6 sm:pb-16 sm:text-center md:px-8">
        <h1>News & Events</h1>
        <p className="mt-4">All the latest news about the project directly from the team.</p>
      </header>
      <section className="mx-auto mb-20 max-w-5xl space-y-16 px-4 sm:mb-32 sm:px-6 md:mb-40 md:px-8">
        {documents.reverse().map((document, i) => (
          <DocumentPreview key={i} document={document} />
        ))}
      </section>
    </>
  )
}
