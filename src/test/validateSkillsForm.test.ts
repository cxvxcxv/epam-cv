import type { Skill } from '@/types/skill.types';
import { validateSkillsForm } from '@/utils/validateSkillsForm';
import { describe, expect, test } from 'vitest';

describe('validateSkillsForm utility', () => {
  test('returns an empty errors object when valid values are provided', () => {
    const validValues: Omit<Skill, 'id'> = {
      name: 'TypeScript',
      range: 85,
    };

    const errors = validateSkillsForm(validValues);

    expect(errors).toEqual({});
  });

  test('returns a validation error when the name field is empty', () => {
    const invalidValues: Omit<Skill, 'id'> = {
      name: '',
      range: 50,
    };

    const errors = validateSkillsForm(invalidValues);

    expect(errors.name).toBe('Skill name is a required field');
  });

  test('returns a validation error when range value is less than 10', () => {
    const invalidValues: Omit<Skill, 'id'> = {
      name: 'React',
      range: 9,
    };

    const errors = validateSkillsForm(invalidValues);

    expect(errors.range).toBe(
      'Skill range must be greater than or equal to 10',
    );
  });

  test('passes validation when range value is exactly 10', () => {
    const boundaryValues: Omit<Skill, 'id'> = {
      name: 'CSS',
      range: 10,
    };

    const errors = validateSkillsForm(boundaryValues);

    expect(errors.range).toBeUndefined();
  });

  test('returns a validation error when range value is greater than 100', () => {
    const invalidValues: Omit<Skill, 'id'> = {
      name: 'Node.js',
      range: 101,
    };

    const errors = validateSkillsForm(invalidValues);

    expect(errors.range).toBe('Skill range must be less than or equal to 100');
  });

  test('passes validation when range value is exactly 100', () => {
    const boundaryValues: Omit<Skill, 'id'> = {
      name: 'HTML',
      range: 100,
    };

    const errors = validateSkillsForm(boundaryValues);

    expect(errors.range).toBeUndefined();
  });
});
