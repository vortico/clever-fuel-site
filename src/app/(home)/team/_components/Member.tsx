export interface MemberProps {
  title: string
  country: string
  description: string
}

export default function Member({ title, country, description }: MemberProps) {
  return (
    <div>
      <h2 className="text-lg sm:text-xl lg:text-2xl">{title}</h2>
      <p className="text-accent-500 mt-1 text-sm font-semibold">{country}</p>
      <p className="mt-4">{description}</p>
    </div>
  )
}
