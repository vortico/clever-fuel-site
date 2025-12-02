import Link from 'next/link'

interface Item {
  title: string
  href: string
}

const items: Item[] = [
  {
    title: 'Project',
    href: '/',
  },
  {
    title: 'Team',
    href: '/team/',
  },
  {
    title: 'News & Events',
    href: '/news/',
  },
]

export default function Menu() {
  return (
    <nav className="h-full w-full">
      <ul className="flex h-full items-center justify-start gap-8">
        {items.map(({ title, href }, i) => (
          <li key={i} className="h-full w-full">
            <Link href={href}>
              <div className="hover:border-accent-500/25 flex h-full w-full items-center justify-center border-b-4 border-transparent transition-colors">
                {title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
