import Image from "next/image";

import type { GroupMember } from "./types";

export interface CardProps {
  member: GroupMember;
}

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Card({ member }: CardProps) {
  return (
    <div className="border-primary-200 bg-primary-50 flex h-full flex-col overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-md">
      <div className="bg-primary-100 relative aspect-square w-full overflow-hidden">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div className="text-primary-400 flex h-full w-full items-center justify-center text-4xl font-semibold select-none">
            {initials(member.name)}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <span className="text-accent-500 shrink-0 text-sm font-semibold">
            {member.year}
          </span>
        </div>
        <p className="mt-3 text-sm">{member.description}</p>
      </div>
    </div>
  );
}
