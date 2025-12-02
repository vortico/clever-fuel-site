import { type ComponentProps } from 'react'

import HeaderLink from './HeaderLink'

export default function H1({ id, children, ...props }: ComponentProps<'h1'>) {
  return (
    <h1
      {...props}
      id={id}
      className="group text-primary-700 mt-10 mb-4 -ml-8 flex items-center pl-8 text-3xl font-bold tracking-tight whitespace-pre-wrap"
    >
      <HeaderLink href={`#${id}`} />
      {children}
    </h1>
  )
}
