import type { EducationState } from '@/store/education/slice';
import type { Education } from '@/types/timeline.types';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface TimelineProps {
  data?: Education[];
  loading: EducationState['loading'];
  error: FetchBaseQueryError | SerializedError | undefined;
}

export const Timeline = ({ data, loading, error }: TimelineProps) => {
  if (loading === 'pending' || loading === 'idle')
    return (
      <div className="flex justify-center">
        <FontAwesomeIcon
          className="text-primary animate-spin"
          icon={faSyncAlt}
        />
      </div>
    );

  if (error)
    return (
      <p className="text-danger text-center text-sm">
        Something went wrong: please review your internet connection!
      </p>
    );
  return (
    <div className="h-[30vh] max-h-[80vh] overflow-y-auto py-6">
      <div className="relative flex flex-col gap-8">
        <div className="bg-primary absolute top-0 bottom-0 left-12 w-1" />

        {data?.map(item => (
          <div key={item.title} className="relative flex items-start pl-24">
            <div className="absolute top-3 left-0 z-10 flex w-24 justify-center">
              <span className="bg-background py-1 font-medium tracking-wide">
                {item.date}
              </span>
            </div>

            <div className="bg-card relative flex-1 p-6">
              <div className="border-r-card absolute top-5 -left-3 h-0 w-0 border-t-8 border-r-12 border-b-8 border-t-transparent border-b-transparent" />

              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
