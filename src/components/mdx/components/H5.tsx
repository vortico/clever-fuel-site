import { type ComponentProps } from 'react'

import HeaderLink from './HeaderLink'

export default function H5({ id, children, ...props }: ComponentProps<'h5'>) {
  return (
    <h5
      {...props}
      id={id}
      className="group text-primary-700 mt-8 mb-2 -ml-8 flex items-center pl-8 text-base font-semibold whitespace-pre-wrap"
    >
      <HeaderLink href={`#${id}`} />
      {children}
    </h5>
  )
}
