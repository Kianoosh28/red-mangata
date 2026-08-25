"use client";

import { useMemo, useState } from "react";
import type { Project, WorkFilter } from "@/content/projects";
import ProjectGrid from "./ProjectGrid";
import { cn } from "@/lib/utils";

type FilterOption = WorkFilter | "All";

const filterOptions: FilterOption[] = [
  "All",
  "Characters",
  "Environments",
  "Creatures",
  "Concept Art",
  "Visual Development",
];

type WorkExplorerProps = {
  projects: Project[];
};

export default function WorkExplorer({ projects }: WorkExplorerProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [projects, activeFilter]);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter work by category"
        className="flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-8"
      >
        {filterOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setActiveFilter(option)}
            aria-pressed={activeFilter === option}
            className={cn(
              "text-label min-h-11 px-1 transition-colors",
              activeFilter === option
                ? "text-accent"
                : "text-text-muted hover:text-text"
            )}
          >
            {option === "All" ? "ALL" : option.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mt-14">
        <ProjectGrid projects={filteredProjects} />
      </div>
    </div>
  );
}
