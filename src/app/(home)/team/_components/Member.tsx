import type { Member } from "./types";

export interface MemberProps {
  member: Member;
}

export default function Member({ member }: MemberProps) {
  return (
    <div>
      <h2 className="text-lg sm:text-xl lg:text-2xl">{member.name}</h2>
      <p className="text-accent-500 mt-1 text-sm font-semibold">{member.role}</p>
      <div className="mt-4 space-y-2">{member.description}</div>
    </div>
  );
}
