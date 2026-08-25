import PlaceholderArt from "@/components/ui/PlaceholderArt";
import type { TeamMember as TeamMemberType } from "@/content/team";

type TeamMemberProps = {
  member: TeamMemberType;
};

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[4/5]">
        <PlaceholderArt
          label={member.isPlaceholder ? "Portrait Pending" : member.role}
          className="h-full w-full"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-project-title">{member.name}</h3>
          <p className="text-label mt-1 text-accent">{member.role}</p>
        </div>

        {member.bio ? <p className="text-body text-text-muted">{member.bio}</p> : null}

        {member.responsibilities && member.responsibilities.length > 0 ? (
          <ul className="mt-1 flex flex-col gap-1.5">
            {member.responsibilities.map((item) => (
              <li key={item} className="text-body text-text-muted">
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {member.disciplines && member.disciplines.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {member.disciplines.map((discipline) => (
              <span key={discipline} className="text-label border border-border px-3 py-1 text-text-muted">
                {discipline}
              </span>
            ))}
          </div>
        ) : null}

        {member.isPlaceholder ? (
          <p className="text-body text-text-muted/60">Profile details to be added.</p>
        ) : null}
      </div>
    </div>
  );
}
