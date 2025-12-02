import { type ComponentProps } from 'react'

import HeaderLink from './HeaderLink'

export default function H3({ id, children, ...props }: ComponentProps<'h3'>) {
  return (
    <h3
      {...props}
      id={id}
      className="group text-primary-700 mt-10 mb-3 -ml-8 flex items-center pl-8 text-xl font-bold tracking-tight whitespace-pre-wrap"
    >
      <HeaderLink href={`#${id}`} />
      {children}
    </h3>
  )
}
