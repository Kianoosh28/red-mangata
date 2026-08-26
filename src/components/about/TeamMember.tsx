import PlaceholderArt from "@/components/ui/PlaceholderArt";
import type { TeamMember as TeamMemberType } from "@/content/team";

type TeamMemberProps = {
  member: TeamMemberType;
};

export default function TeamMember({ member }: TeamMemberProps) {
  const [firstName, ...rest] = member.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[4/5]">
        <PlaceholderArt label={member.name} className="h-full w-full" />
      </div>

      {/* Two lines (first name / last name) on desktop, matching the copy the taller names already wrapped to; a single inline line on mobile. */}
      <h3 className="text-project-title">
        <span className="sm:block">{firstName}</span>{" "}
        <span className="sm:block">{lastName}</span>
      </h3>
    </div>
  );
}
