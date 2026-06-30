import type { FeedbackDatum } from '@/types/feedback.types';
import { Info } from './Info';

interface FeedbackProps {
  data: FeedbackDatum[];
}

export const Feedback = ({ data }: FeedbackProps) => {
  return (
    <div>
      {data.map(f => (
        <div key={data.indexOf(f)} className="flex flex-col gap-4">
          <Info content={f.content} />
          <div className="flex items-center gap-4">
            <img
              src={f.avatar}
              alt="Author's avatar"
              className="h-12 w-12 rounded-full"
            />
            <i>
              {f.author},&nbsp;
              <a
                href={f.link.startsWith('http') ? f.link : `https://${f.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                {f.link}
              </a>
            </i>
          </div>
        </div>
      ))}
    </div>
  );
};
