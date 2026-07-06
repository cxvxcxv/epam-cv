import type { ExpertiseDatum } from '@/types/expertise.types';
import { render, screen } from '@testing-library/react';
import { Expertise } from '../components/Expertise';

const mockExpertiseData: ExpertiseDatum[] = [
  {
    date: '2026',
    info: {
      company: 'company 1',
      job: 'job 1',
      description: 'desc 1',
    },
  },
  {
    date: '2024',
    info: {
      company: 'company 2',
      job: 'job 2',
      description: 'desc 2',
    },
  },
];

describe('expertise component', () => {
  test('renders all mock data with correct structures', () => {
    render(<Expertise data={mockExpertiseData} />);

    expect(screen.getByText('company 1')).toBeInTheDocument();
    expect(screen.getByText('2026')).toBeInTheDocument();
    expect(screen.getByText('job 1')).toBeInTheDocument();
    expect(screen.getByText('desc 1')).toBeInTheDocument();

    expect(screen.getByText('company 2')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('job 2')).toBeInTheDocument();
    expect(screen.getByText('desc 2')).toBeInTheDocument();
  });

  test('applies the appropriate css layout classes for the grid', () => {
    const { container } = render(<Expertise data={mockExpertiseData} />);

    const mainWrapper = container.firstChild;
    expect(mainWrapper).toHaveClass('flex', 'flex-col', 'gap-8');

    const itemRows = container.getElementsByClassName('grid');
    expect(itemRows).toHaveLength(2);
    expect(itemRows[0]).toHaveClass('grid-cols-[1fr_3fr]', 'gap-8');
  });
});
