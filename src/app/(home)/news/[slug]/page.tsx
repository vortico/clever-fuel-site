import { type Metadata } from 'next'

import { getNewsDocument, listNewsDocuments, type NewsDocument } from '@/lib/mdx/news'

import { Body, Header, Menu } from './_components'

interface Props {
  params: Promise<{ slug: string }>
}

async function getDocument({ slug }: { slug: string }): Promise<NewsDocument> {
  return await getNewsDocument(slug)
}

export async function generateStaticParams() {
  return Object.keys(await listNewsDocuments()).map((slug) => ({ slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const document = await getDocument({ slug })

  return {
    title: document.frontmatter.title,
    description: document.frontmatter.description,
    alternates: {
      canonical: `/blog/${slug}/`,
    },
  }
}

export default async function Blog(props: Props) {
  const { slug } = await props.params

  const document = await getDocument({ slug })

  return (
    <>
      <header className="px-4 pb-8 sm:px-6 sm:pb-16 sm:text-center md:px-8">
        <Header document={document} />
      </header>
      <section className="mx-auto mb-20 w-screen max-w-5xl space-y-16 overflow-hidden sm:mb-32 md:mb-40">
        <article className="flex w-full flex-col items-start justify-start xl:flex-row">
          <div className="w-full flex-none px-4 sm:px-6 md:px-8 xl:max-w-72">
            <Menu document={document} />
          </div>
          <div className="prose w-full px-4 sm:px-6 md:px-8 xl:max-w-[calc(100%-18rem)]">
            <Body document={document} />
          </div>
        </article>
      </section>
    </>
  )
}
