import { type ComponentProps } from 'react'

import HeaderLink from './HeaderLink'

export default function H4({ id, children, ...props }: ComponentProps<'h4'>) {
  return (
    <h4
      {...props}
      id={id}
      className="group text-primary-700 mt-8 mb-2 -ml-8 flex items-center pl-8 text-lg font-semibold whitespace-pre-wrap"
    >
      <HeaderLink href={`#${id}`} />
      {children}
    </h4>
  )
}
