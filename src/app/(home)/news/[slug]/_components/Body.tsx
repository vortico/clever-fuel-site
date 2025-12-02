import { MDXContent } from '@/components/mdx'
import { type NewsDocument } from '@/lib/mdx/news'

export default function Body({ document }: { document: NewsDocument }) {
  return <MDXContent document={document} components={{ nav: () => <></> }} />
}
