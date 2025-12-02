import { type NewsDocument } from '@/lib/mdx/news'

interface HeaderProps {
  document: NewsDocument
}

export default function Header({ document }: HeaderProps) {
  return (
    <>
      <h1>{document.frontmatter.title}</h1>
      <p className="mt-4">{document.frontmatter.description}</p>
    </>
  )
}
