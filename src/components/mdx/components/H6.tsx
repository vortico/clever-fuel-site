import { type ComponentProps } from 'react'

import HeaderLink from './HeaderLink'

export default function H6({ id, children, ...props }: ComponentProps<'h6'>) {
  return (
    <h6
      {...props}
      id={id}
      className="group text-primary-700 mt-8 mb-2 -ml-8 flex items-center pl-8 text-sm font-semibold whitespace-pre-wrap"
    >
      <HeaderLink href={`#${id}`} />
      {children}
    </h6>
  )
}
