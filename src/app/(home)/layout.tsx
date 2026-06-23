import { type ReactNode } from 'react'

import { Footer, Header } from './_components'
import NavBar from './_components/NavBar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div id="scroll-container" className="flex h-dvh w-full flex-col items-stretch justify-stretch overflow-auto">
      <div className="border-primary-700/25 h-32 flex-none border-b">
        <div className="mx-auto flex h-full w-full max-w-5xl items-stretch justify-stretch px-4 md:px-6 lg:px-8">
          <Header />
        </div>
      </div>
      <NavBar />
      <div className="mt-14 flex flex-1 flex-col items-stretch justify-stretch">
        <main className="bg-primary-50 flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
