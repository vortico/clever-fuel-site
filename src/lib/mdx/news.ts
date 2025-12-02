import { promises as fs } from 'fs'

import readingTime, { type IReadTimeResults } from 'reading-time'

import { getDefaultMetadata, getDocument, getDocuments, listDocuments } from './mdx'
import type { Document, Frontmatter, Metadata } from './types'

interface Author {
  name: string
  url?: string
}

interface NewsMetadata extends Metadata {
  date: Date
  titleSlug: string
  readingTime: IReadTimeResults
}

interface NewsFrontmatter extends Frontmatter {
  description: string
  authors: Author[]
  tags: string[]
  wip?: boolean
}

export type NewsDocument = Document<NewsMetadata, NewsFrontmatter>

export async function getNewsMetadata(fullPath: string, frontmatter: NewsFrontmatter): Promise<NewsMetadata> {
  return {
    ...(await getDefaultMetadata(fullPath)),
    titleSlug: frontmatter.title.toLowerCase().replace(/ /g, '-').replace(/\./g, ''),
    date: new Date(fullPath.match(/^content\/news\/(\d{4}-\d{2}-\d{2}).*/)?.[1] || ''),
    readingTime: readingTime(await fs.readFile(fullPath, 'utf-8')),
  }
}

export async function listNewsDocuments(): Promise<{ [key: string]: string }> {
  return await listDocuments('news')
}

export async function getNewsDocument(slug: string): Promise<NewsDocument> {
  return await getDocument('news', slug, getNewsMetadata)
}

export async function getNewsDocuments(): Promise<NewsDocument[]> {
  return await getDocuments('news', getNewsMetadata)
}
