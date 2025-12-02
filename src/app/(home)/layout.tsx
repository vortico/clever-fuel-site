import { type ReactNode } from 'react'

import { Footer, Header, Menu } from './_components'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-dvh w-full flex-col items-stretch justify-stretch overflow-auto">
      <div className="border-primary-700/25 h-32 flex-none border-b">
        <div className="mx-auto flex h-full w-full max-w-5xl items-stretch justify-stretch px-4 md:px-6 lg:px-8">
          <Header />
        </div>
      </div>
      <div className="border-primary-700/25 bg-primary-100 sticky top-0 z-10 h-12 flex-none border-b">
        <div className="mx-auto h-full w-full max-w-5xl px-4 md:px-6 lg:px-8">
          <Menu />
        </div>
      </div>
      <div className="mt-12 flex flex-1 flex-col items-stretch justify-stretch">
        <main className="bg-primary-50 flex-1">{children}</main>
        <div className="bg-primary-800 h-30 flex-none">
          <div className="mx-auto h-full w-full max-w-5xl px-4 md:px-6 lg:px-8">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
