import Link from 'next/link'

import { type NewsDocument } from '@/lib/mdx/news'

export default function DocumentPreview({ document }: { document: NewsDocument }) {
  const dateFormatter = Intl.DateTimeFormat(['en'], {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  })

  return (
    <article className="relative flex max-w-3xl flex-col space-y-4 lg:ml-auto xl:w-3xl xl:max-w-none">
      <div>
        <h3 className="text-primary-700 text-xl font-bold tracking-tight">
          <Link href={`/news/${document.metadata.slug}/`}>{document.frontmatter.title}</Link>
        </h3>
        <div className="dark:text-primary-400 text-sm leading-7 italic lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap">
          <time dateTime={document.metadata.date.toString()}>
            {dateFormatter.format(new Date(document.metadata.date))}
          </time>
        </div>
      </div>
      <p>{document.frontmatter.description}</p>
      <div className="text-primary-400 text-sm font-light italic">
        <Link href={`/news/${document.metadata.slug}`}>Read More</Link>
      </div>
    </article>
  )
}
