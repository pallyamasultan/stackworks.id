import React from "react";
import { TeamMember } from "@/data/team";
import { User } from "lucide-react";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all">
      <div>
        {/* Avatar Graphic */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-blue-600 text-white font-bold text-base shadow-sm">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 leading-tight">
              {member.name}
            </h4>
            <span className="text-xs font-medium text-indigo-600">
              {member.role}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {member.bio}
        </p>
      </div>

      <div className="border-t border-slate-100 pt-3">
        <div className="flex flex-wrap gap-1">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
