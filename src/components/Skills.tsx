import { useGetSkillsQuery } from '@/store/apiSlice';
import { faEdit, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button } from './Button';
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
    <div>
      <Button icon={faEdit} onClick={() => setIsEditOpen(!isEditOpen)}>
        {isEditOpen ? 'Close edit' : 'Open edit'}
      </Button>
      {isEditOpen && <SkillsForm />}
    </div>
  );
};
