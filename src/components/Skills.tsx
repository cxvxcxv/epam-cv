import { useGetSkillsQuery } from '@/store/apiSlice';
import { faEdit, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button } from './Button';
import { SkillsChart } from './SkillsChart';
import { SkillsForm } from './SkillsForm';

export const Skills = () => {
  const { data: skills, isLoading, error } = useGetSkillsQuery();
  const [isEditOpen, setIsEditOpen] = useState(false);

  if (isLoading)
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
    <div className="flex flex-col gap-4">
      <Button
        icon={faEdit}
        onClick={() => setIsEditOpen(!isEditOpen)}
        className="w-fit self-end"
      >
        {isEditOpen ? 'Close edit' : 'Open edit'}
      </Button>
      {isEditOpen && <SkillsForm />}
      <SkillsChart skills={skills} />
    </div>
  );
};
