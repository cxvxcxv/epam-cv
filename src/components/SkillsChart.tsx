import { SKILL_RANKS } from '@/constants/skills.constants';
import type { Skill } from '@/types/skill.types';
import type { ComponentPropsWithoutRef } from 'react';

interface SkillsChartProps extends ComponentPropsWithoutRef<'div'> {
  skills?: Skill[];
}

export const SkillsChart = ({
  skills,
  className,
  ...props
}: SkillsChartProps) => {
  return (
    <div {...props}>
      <div className="mb-4 flex flex-col gap-2">
        {skills?.map(skill => (
          <div
            key={skill.id}
            className="bg-primary flex items-center rounded-sm p-1 font-medium text-white transition-all"
            style={{ width: `${skill.range}%` }}
          >
            <span className="pl-2 text-base tracking-wide">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="relative pt-2">
        <div className="bg-dimmed absolute top-0 right-0 left-0 h-px" />

        <div className="text-dimmed flex justify-between text-xs font-normal sm:text-sm">
          {SKILL_RANKS.map(rank => (
            <div key={rank} className="flex flex-col items-center gap-1">
              <div className="bg-dimmed h-2 w-px" />
              <span>{rank}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
