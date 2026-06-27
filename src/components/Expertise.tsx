import type { ExpertiseDatum } from '@/types/expertise.types';

interface ExpertiseProps {
  data: ExpertiseDatum[];
}

export const Expertise = ({ data }: ExpertiseProps) => {
  return (
    <div className="flex flex-col gap-8 p-8">
      {data.map(e => (
        <div key={data.indexOf(e)} className="grid grid-cols-[1fr_3fr] gap-8">
          <div>
            <p className="font-bold">{e.info.company}</p>
            <p className="text-dimmed">{e.date}</p>
          </div>
          <div>
            <p className="font-bold">{e.info.job}</p>
            <p>{e.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
