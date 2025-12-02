export type DocumentType = 'news'

export interface Frontmatter {
  title: string
}

export interface Metadata {
  type: DocumentType
  path: string
  slug: string
}

export interface Document<M extends Metadata = Metadata, F extends Frontmatter = Frontmatter> {
  source: string
  metadata: M
  frontmatter: F
}
