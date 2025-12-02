import { promises as fs } from 'fs'
import path from 'path'

import { globby } from 'globby'
import { compileMDX } from 'next-mdx-remote/rsc'

import type { Document, DocumentType, Frontmatter, Metadata } from './types'

const CONTENT_PATH = 'content'

function getType(fullPath: string): DocumentType {
  const [, type] = fullPath.split('/')
  return type as DocumentType
}

function getFilePath(fullPath: string): string {
  const [, , ...rest] = fullPath.split('/')
  return rest.join('/')
}

function getSlug(fullPath: string): string {
  return getFilePath(fullPath)
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/(?<=^|\/)((\d{4}(-\d{1,2}){1,2})|\d+)-/g, '')
    .replace(/\.mdx/g, '')
}

export async function getDefaultMetadata(fullPath: string): Promise<Metadata> {
  return {
    type: getType(fullPath),
    path: getFilePath(fullPath),
    slug: getSlug(fullPath),
  }
}

async function buildDocument<M extends Metadata, F extends Frontmatter>(
  fullPath: string,
  getMetadata: (fullPath: string, frontmatter: F) => Promise<M>,
): Promise<Document<M, F>> {
  const source = await fs.readFile(fullPath, 'utf-8')

  const { frontmatter } = await compileMDX<F>({ source, options: { parseFrontmatter: true } })

  return { source, frontmatter, metadata: await getMetadata(fullPath, frontmatter) }
}

export async function listDocuments(type: DocumentType): Promise<{ [key: string]: string }> {
  return (await globby([path.join(CONTENT_PATH, type, '**/*.mdx')])).reduce(
    (documents: { [key: string]: string }, filePath: string) => ({
      ...documents,
      [getSlug(filePath)]: filePath,
    }),
    {},
  )
}

export async function getDocument<M extends Metadata, F extends Frontmatter>(
  type: DocumentType,
  slug: string,
  getMetadata: (fullPath: string, frontmatter: F) => Promise<M>,
): Promise<Document<M, F>> {
  const documents = await listDocuments(type)
  const fullPath = documents[slug]

  return buildDocument<M, F>(fullPath, getMetadata)
}

export async function getDocuments<M extends Metadata, F extends Frontmatter>(
  type: DocumentType,
  getMetadata: (fullPath: string, frontmatter: F) => Promise<M>,
): Promise<Document<M, F>[]> {
  const documents = await listDocuments(type)

  return await Promise.all(
    Object.values(documents).map(async (fullPath) => await buildDocument<M, F>(fullPath, getMetadata)),
  )
}
