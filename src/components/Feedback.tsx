import type { FeedbackDatum } from '@/types/feedback.types';

interface FeedbackProps {
  data: FeedbackDatum[];
}

export const Feedback = ({ data }: FeedbackProps) => {
  return (
    <div className="p-8">
      {data.map(f => (
        <div key={data.indexOf(f)} className="flex flex-col gap-4">
          <div className="bg-card p-4">
            <p>{f.content}</p>
          </div>
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
