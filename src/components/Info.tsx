interface InfoProps {
  content: string;
}

export const Info = ({ content }: InfoProps) => {
  return (
    <div className="bg-card p-4">
      <p>{content}</p>
    </div>
  );
};
