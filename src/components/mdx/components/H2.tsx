import { type ComponentProps } from 'react'

import HeaderLink from './HeaderLink'

export default function H2({ id, children, ...props }: ComponentProps<'h2'>) {
  return (
    <h2
      {...props}
      id={id}
      className="group text-primary-700 mt-10 mb-4 -ml-8 flex items-center pl-8 text-2xl font-bold tracking-tight whitespace-pre-wrap"
    >
      <HeaderLink href={`#${id}`} />
      {children}
    </h2>
  )
}
