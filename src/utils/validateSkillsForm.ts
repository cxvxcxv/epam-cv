import type { Skill } from '@/types/skill.types';

export const validateSkillsForm = (values: Skill) => {
  const errors: Partial<Record<keyof Skill, string>> = {};
  if (!values.name) errors.name = 'Skill name is a required field';

  if (values.range < 10)
    errors.range = 'Skill range must be greater than or equal to 10';
  else if (values.range > 100)
    errors.range = 'Skill range must be less than or equal to 100';
  return errors;
};
